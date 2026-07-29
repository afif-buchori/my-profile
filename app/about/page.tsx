import { Icon } from "@/components/icon";
import AppLayout from "@/components/layout/app-layout";
import GradientText from "@/components/text/gradient-text";
import { IpersonData } from "@/types";
import React from "react";
import pp from "@/assets/photoProfile.webp";
import Image from "next/image";
import dayjs from "dayjs";
import SpotlightCard from "@/components/spotlight-card";
import Link from "next/link";
import { Button } from "@/components/button";
import { colorIcons } from "@/lib/icons";
import { cn } from "@/lib/utils";

import reactLogo from "@/assets/icon-dev/React.svg";
import nextLogo from "@/assets/icon-dev/Next.js.svg";
import laravelLogo from "@/assets/icon-dev/Laravel.svg";
import tsLogo from "@/assets/icon-dev/TypeScript.svg";
import tailwindLogo from "@/assets/icon-dev/Tailwind CSS.svg";
import githubLogo from "@/assets/icon-dev/GitHub.svg";
import LoopLogo from "@/components/loop-logo";

export const techStack = [
    {
        name: "React",
        logo: reactLogo,
    },
    {
        name: "Next.js",
        logo: nextLogo,
    },
    {
        name: "Laravel",
        logo: laravelLogo,
    },
    {
        name: "TypeScript",
        logo: tsLogo,
    },
    {
        name: "Tailwind CSS",
        logo: tailwindLogo,
    },
    {
        name: "GitHub",
        logo: githubLogo,
    },
];

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000";
export default async function AboutPage() {
    const resDataClass = await fetch(baseUrl + "/api", {
        cache: "no-store",
    });
    const personalData: IpersonData = await resDataClass.json();
    // console.log(personalData);
    const { educations, personalInfo, skills, socialMedia, aboutMe } = personalData;

    return (
        <AppLayout>
            <div className="mx-auto w-fit flex items-center gap-4 mt-4">
                <Icon icon="UserRound" strokeWidth={3} className="w-6 h-6" />
                <GradientText
                    colors={["#db2777", "#FF9FFC", "#B497CF"]}
                    animationSpeed={4}
                    showBorder={false}
                    className="custom-class col-span-full text-2xl font-black uppercase"
                >
                    About Me
                </GradientText>
            </div>
            <div className="px-2 grid lg:grid-cols-2 gap-2 mt-4">
                <SpotlightCard
                    className="custom-spotlight-card flex flex-col-reverse md:flex-row gap-2 p-4 pb-0 min-h-85"
                    spotlightColor="rgba(236, 72, 153, 0.20)"
                >
                    <div className="flex-1 flex flex-col gap-2">
                        <div className="flex gap-2">
                            <p className="min-w-24 opacity-70">Name</p>
                            <p>:</p>
                            <p>
                                {personalInfo.firstName} {personalInfo.lastName}
                            </p>
                        </div>
                        <div className="flex gap-2">
                            <p className="min-w-24 opacity-70">Birth date</p>
                            <p>:</p>
                            <p>
                                {personalInfo.birthCity} | {dayjs(personalInfo.birthDate).format("DD MMMM YYYY")}
                            </p>
                        </div>
                        <div className="flex gap-2">
                            <p className="min-w-24 opacity-70">Phone</p>
                            <p>:</p>
                            <p>{personalInfo.phone}</p>
                        </div>
                        <div className="flex gap-2">
                            <p className="min-w-24 opacity-70">Mail</p>
                            <p>:</p>
                            <p>{personalInfo.mail}</p>
                        </div>
                        <div className="flex gap-2">
                            <p className="min-w-24 opacity-70">Location</p>
                            <p>:</p>
                            <p>{personalInfo.Location}</p>
                        </div>
                        <div className="min-w-44 flex gap-4 justify-center items-center xl:mt-auto mb-4 sm:mb-0 xl:mb-4">
                            {socialMedia.map((item, idx) => (
                                <Button key={idx} className="w-9 h-9 p-0" asChild>
                                    <Link href={item.urlLink} target="_blank" rel="noopener noreferrer">
                                        <Image src={colorIcons[item.ico]} alt="logo-cake" width={24} height={24} />
                                    </Link>
                                </Button>
                            ))}
                        </div>
                    </div>
                    <div className="w-full sm:max-w-xs flex justify-end">
                        <Image src={pp} width={600} height={600} alt="photo-profile" className="w-full max-w-xs object-contain sm:absolute bottom-0 right-5" />
                    </div>
                </SpotlightCard>
                <SpotlightCard className="custom-spotlight-card flex flex-col gap-2 p-4" spotlightColor="rgba(236, 72, 153, 0.20)">
                    <p className="font-bold text-lg sm:text-xl text-primary">{personalInfo.jobInfo.join(" | ")}</p>
                    <p className="text-justify">{aboutMe}</p>
                    {personalInfo.bio.map((item, idx) => (
                        <div key={idx} className="flex gap-2 opacity-50">
                            <Icon icon="Circle" strokeWidth={3} className="mt-1" />
                            <p className="flex-1">{item}</p>
                        </div>
                    ))}
                </SpotlightCard>
            </div>
            <div className="w-full px-2 pt-2 flex flex-col sm:flex-row gap-2 mb-2">
                {/* EDUCATION */}

                <SpotlightCard className="custom-spotlight-card w-full sm:max-w-sm flex flex-col p-4" spotlightColor="rgba(236, 72, 153, 0.20)">
                    <div className="w-fit flex items-center gap-4 mb-4">
                        <Icon icon="GraduationCap" strokeWidth={3} className="w-6 h-6" />
                        <GradientText
                            colors={["#db2777", "#FF9FFC", "#B497CF"]}
                            animationSpeed={4}
                            showBorder={false}
                            className="custom-class col-span-full text-2xl font-black uppercase"
                        >
                            Educations
                        </GradientText>
                    </div>
                    {educations.map((item, idx) => (
                        <div key={idx} className="flex flex-col pb-4 pl-8 relative">
                            <p className="font-bold">{item.name}</p>
                            <div className="flex flex-col mb-1">
                                <span className="italic opacity-50 text-xs sm:text-sm">
                                    {item.dateStart && dayjs(item.dateStart).format("MMMM YYYY")}
                                    {item.dateStart && item.dateEnd && " - "}
                                    {item.dateEnd && dayjs(item.dateEnd).format("MMMM YYYY")}
                                </span>
                                <p>{item.major}</p>
                            </div>
                            <span
                                className={cn(
                                    "w-1 h-full absolute top-1 left-2.5",
                                    educations.length - 1 === idx ? "bg-linear-to-b from-primary to-transparent" : "bg-primary",
                                )}
                            />
                            <Icon icon="Circle" strokeWidth={4} className="absolute top-1 left-1 text-primary fill-primary" />
                        </div>
                    ))}
                </SpotlightCard>
                {/* SKILLS */}

                <SpotlightCard className="custom-spotlight-card w-full flex-1 flex flex-col p-4" spotlightColor="rgba(236, 72, 153, 0.20)">
                    <div className="w-fit flex items-center gap-4">
                        <Icon icon="Sparkles" strokeWidth={3} className="w-6 h-6" />
                        <GradientText
                            colors={["#db2777", "#FF9FFC", "#B497CF"]}
                            animationSpeed={4}
                            showBorder={false}
                            className="custom-class col-span-full text-2xl font-black uppercase"
                        >
                            Skills
                        </GradientText>
                    </div>
                    {skills.map((item, idx) => (
                        <div key={idx} className="flex flex-col gap-4 mt-4">
                            <p className="font-bold pl-2">{item.name}</p>
                            <span className="-mt-4 w-3/5 h-1 bg-linear-to-r from-primary to-transparent rounded-full" />
                            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                                {item.list.map((skill, is) => (
                                    <div key={is} className="flex flex-col items-center gap-2 group">
                                        <div className="bg-white/70 p-3 rounded-4xl group-hover:bg-white transition-all duration-300">
                                            <Image src={colorIcons[skill.ico]} alt={`logo-${skill.ico}`} width={52} height={52} />
                                        </div>
                                        <p className="flex-1 text-xs sm:text-sm text-center">{skill.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </SpotlightCard>
            </div>

            <div className="w-full max-w-7xl mx-auto mb-2">
                <LoopLogo items={techStack} speed={25} />
            </div>
        </AppLayout>
    );
}
