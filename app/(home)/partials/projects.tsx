import BorderGlow from "@/components/border-glow";
import { Button } from "@/components/button";
import { Icon } from "@/components/icon";
import SpotlightCard from "@/components/spotlight-card";
import GradientText from "@/components/text/gradient-text";
import { dataProjects } from "@/lib/my-projects";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
    return (
        <SpotlightCard className="custom-spotlight-card flex flex-col p-4" spotlightColor="rgba(236, 72, 153, 0.20)">
            <div className="flex justify-between">
                <div className="w-fit flex items-center gap-4 mb-4">
                    <Icon icon="Folders" strokeWidth={3} className="w-6 h-6" />
                    <GradientText
                        colors={["#db2777", "#FF9FFC", "#B497CF"]}
                        animationSpeed={4}
                        showBorder={false}
                        className="custom-class col-span-full text-2xl font-black uppercase"
                    >
                        Projects
                    </GradientText>
                </div>
                <Button variant={"ghost"} size={"sm"} asChild>
                    <Link href={"/project"}>
                        See More <Icon icon="MoveRight" />
                    </Link>
                </Button>
            </div>
            <div className="grid sm:grid-cols-2 gap-2">
                {dataProjects.slice(0, 4).map((item, idx) => (
                    <BorderGlow
                        key={idx}
                        edgeSensitivity={30}
                        glowColor="40 80 80"
                        backgroundColor="#120F17"
                        borderRadius={8}
                        glowRadius={40}
                        glowIntensity={1}
                        coneSpread={25}
                        animated={false}
                        colors={["#c084fc", "#f472b6", "#38bdf8"]}
                    >
                        <div className="p-[1px] rounded-lg overflow-hidden">
                            <Image
                                src={item.image}
                                alt={`image-project-${item.title}`}
                                width={380}
                                height={210}
                                className="w-full aspect-video object-cover object-top"
                            />
                            <div className="flex flex-col gap-1 p-1">
                                <h2 className="text-xs sm:text-sm">{item.title}</h2>
                                <div className="flex flex-wrap gap-y-1 gap-x-2">
                                    {item.tech.map((tch, it) => (
                                        <span key={it} className="px-2 border border-blue-400 text-blue-400 rounded-full text-[10px] sm:text-xs">
                                            {tch}
                                        </span>
                                    ))}
                                </div>
                                <p className="text-[10px] sm:text-xs opacity-70 line-clamp-2">{item.description}</p>
                            </div>
                        </div>
                    </BorderGlow>
                ))}
            </div>
        </SpotlightCard>
    );
}
