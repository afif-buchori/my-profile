"use client";

import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";

export interface LogoItem {
    name: string;
    logo: StaticImageData | string;
}

interface LoopLogoProps {
    items: LogoItem[];
    speed?: number;
    className?: string;
}

export default function LoopLogo({ items, speed = 30, className }: LoopLogoProps) {
    return (
        <div className={cn("group relative overflow-hidden w-full", className)}>
            {/* Fade kiri */}
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-linear-to-r from-background to-transparent" />

            {/* Fade kanan */}
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-linear-to-l from-background to-transparent" />

            <div
                // className="flex w-max animate-marquee group-hover:[animation-play-state:paused]"
                className="flex w-max animate-marquee group-hover:paused"
                style={{
                    animationDuration: `${speed}s`,
                }}
            >
                {[...items, ...items].map((item, index) => (
                    <div key={`${item.name}-${index}`} className="mx-10 flex items-center justify-center opacity-70 transition hover:opacity-100">
                        <Image src={item.logo} alt={item.name} width={56} height={56} className="h-14 w-auto object-contain invert grayscale-100" />
                    </div>
                ))}
            </div>
        </div>
    );
}
