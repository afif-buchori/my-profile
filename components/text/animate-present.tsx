"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

interface AnimatedTextProps {
    items: string[];

    /**
     * Jika diisi maka component menjadi controlled.
     * Jika undefined maka akan auto berganti.
     */
    currentIndex?: number;

    /**
     * Interval pergantian text (ms)
     */
    interval?: number;

    /**
     * Durasi animasi (detik)
     */
    duration?: number;

    className?: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ items, currentIndex, interval = 3000, duration = 0.4, className = "" }) => {
    const [internalIndex, setInternalIndex] = useState(0);

    const isControlled = currentIndex !== undefined;

    const activeIndex = isControlled ? currentIndex : internalIndex;

    useEffect(() => {
        if (isControlled) return;
        if (items.length <= 1) return;

        const timer = setInterval(() => {
            setInternalIndex((prev) => (prev + 1) % items.length);
        }, interval);

        return () => clearInterval(timer);
    }, [isControlled, interval, items.length]);

    if (!items.length) return null;

    return (
        <div className={`relative overflow-hidden ${className}`}>
            <AnimatePresence mode="wait">
                <motion.p
                    key={activeIndex}
                    initial={{
                        opacity: 0,
                        y: 20,
                        filter: "blur(10px)",
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)",
                    }}
                    exit={{
                        opacity: 0,
                        y: -20,
                        filter: "blur(10px)",
                    }}
                    transition={{
                        duration,
                        ease: "easeInOut",
                    }}
                    className="absolute inset-0"
                >
                    {items[activeIndex]}
                </motion.p>
            </AnimatePresence>

            {/* Placeholder supaya tinggi tidak berubah */}
            <p className="opacity-0 pointer-events-none">{items.reduce((a, b) => (a.length > b.length ? a : b), "")}</p>
        </div>
    );
};

export default AnimatedText;
