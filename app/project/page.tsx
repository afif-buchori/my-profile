"use client";

import BorderGlow from "@/components/border-glow";
import AppLayout from "@/components/layout/app-layout";
import { dataProjects } from "@/lib/my-projects";
import Image from "next/image";
import React from "react";

import { Icon } from "@/components/icon";
import GradientText from "@/components/text/gradient-text";
import { Button } from "@/components/button";
import Link from "next/link";

export default function ProjectPage() {
    return (
        <AppLayout>
            <div className="mx-auto w-fit flex items-center gap-4 mt-4">
                <Icon icon="BriefcaseBusiness" strokeWidth={3} className="w-6 h-6" />
                <GradientText
                    colors={["#db2777", "#FF9FFC", "#B497CF"]}
                    animationSpeed={4}
                    showBorder={false}
                    className="custom-class col-span-full text-2xl font-black uppercase"
                >
                    Projects
                </GradientText>
            </div>
            <div className="flex flex-col gap-4 p-4">
                {dataProjects.map((item, idx) => (
                    <div key={idx} className="flex overflow-hidden">
                        <BorderGlow
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
                            <div className="p-px rounded-lg overflow-hidden flex flex-col md:flex-row">
                                <div className="w-full max-w-md">
                                    <Image
                                        src={item.image}
                                        alt={`image-project-${item.title}`}
                                        width={600}
                                        height={400}
                                        className="w-full h-full aspect-video object-cover object-top"
                                    />
                                </div>
                                <div className="flex-1 flex flex-col gap-1 p-4">
                                    <h2 className="sm:text-lg font-medium">{item.title}</h2>
                                    <p className="text-sm sm:text-base opacity-70">{item.description}</p>
                                    <div className="flex flex-wrap gap-y-1 gap-x-2">
                                        {item.tech.map((tch, it) => (
                                            <span key={it} className="px-2 border border-blue-400 text-blue-400 rounded-full text-[10px] sm:text-xs">
                                                {tch}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="mt-auto flex justify-end gap-4 pt-1">
                                        {!!item.github && (
                                            <Button variant={"outline"} asChild>
                                                <Link href={item.github} target="_blank" rel="noopener noreferrer">
                                                    Github Repo
                                                    <Icon icon="GitBranch" />
                                                </Link>
                                            </Button>
                                        )}
                                        <Button asChild>
                                            <Link href={item.urlLink} target="_blank" rel="noopener noreferrer">
                                                Visit Web
                                                <Icon icon="Globe" />
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </BorderGlow>
                    </div>
                ))}
            </div>
        </AppLayout>
    );
}
