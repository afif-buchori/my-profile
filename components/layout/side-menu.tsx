"use client";
import Link from "next/link";
import { Button } from "../button";
import { Icon, icons } from "../icon";
import GradientText from "../text/gradient-text";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export default function SideMenu() {
    const pathname = usePathname();
    const paths = pathname.split("/").filter(Boolean);

    const menu: {
        ico: keyof typeof icons;
        title: string;
        urlLink: string;
    }[] = [
        {
            ico: "House",
            title: "Home",
            urlLink: "/",
        },
        {
            ico: "UserRound",
            title: "About",
            urlLink: "/about",
        },
        // {
        //     ico: "Sparkles",
        //     title: "Skills",
        //     urlLink: "/skill",
        // },
        // {
        //     ico: "BriefcaseBusiness",
        //     title: "Experience",
        //     urlLink: "/Experience",
        // },
        {
            ico: "Folders",
            title: "Projects",
            urlLink: "/project",
        },
    ];

    return (
        <>
            <div className="w-full max-w-52 h-full hidden lg:flex flex-col gap-1 py-4 px-2 lg:sticky top-0 left-0">
                <GradientText
                    colors={["#db2777", "#FF9FFC", "#B497CF"]}
                    animationSpeed={4}
                    showBorder={false}
                    className="custom-class col-span-full text-2xl font-black uppercase"
                >
                    Afif Buch Web
                </GradientText>
                <div className="flex items-center gap-1 text-xs text-primary opacity-50">
                    <span className="flex-1 h-0.5 bg-linear-to-l from-current to-transparent" />
                    <p>MENU</p>
                    <span className="flex-1 h-0.5 bg-linear-to-r from-current to-transparent" />
                </div>
                {menu.map((item, idx) => {
                    const isActive = pathname === item.urlLink;

                    return (
                        <Button
                            key={idx}
                            variant={"ghost"}
                            asChild
                            className={cn("justify-start hover:bg-primary/10", isActive ? "text-primary hover:text-primary" : "")}
                        >
                            <Link href={item.urlLink}>
                                <Icon icon={item.ico} />
                                {item.title}
                            </Link>
                        </Button>
                    );
                })}
            </div>
            <div
                className={cn(
                    "z-1 fixed bottom-3 left-1/2 -translate-x-1/2 w-fit flex lg:hidden gap-4",
                    "rounded-xl border-2 border-white/15 bg-linear-to-br from-white/10 via-white/5 to-transparent backdrop-blur-sm shadow-[0_8px_32px_rgba(0,0,0,.3)]",
                )}
            >
                {menu.map((item, idx) => {
                    const isActive = pathname === item.urlLink;

                    return (
                        <Button
                            key={idx}
                            variant={"ghost"}
                            asChild
                            className={cn("justify-start hover:bg-primary/10 rounded-full", isActive ? "text-primary hover:text-primary" : "")}
                        >
                            <Link href={item.urlLink}>
                                <Icon icon={item.ico} className="drop-shadow-[0_1px_3px_rgba(0,0,0,.8)]" />
                                <p className="drop-shadow-[0_1px_3px_rgba(0,0,0,.8)]">{item.title}</p>
                            </Link>
                        </Button>
                    );
                })}
            </div>
        </>
    );
}
