import HeroSection from "@/components/hero-section";
import { Icon } from "@/components/icon";
import AppLayout from "@/components/layout/app-layout";
import { IpersonData } from "@/types";
import Image from "next/image";
import React from "react";
import pp from "@/assets/photoProfile.webp";
import { Button } from "@/components/button";
import { colorIcons } from "@/lib/icons";
import GradientText from "@/components/text/gradient-text";
import dayjs from "dayjs";
import SpotlightCard from "@/components/spotlight-card";
import { cn } from "@/lib/utils";
import Projects from "./partials/projects";
import Link from "next/link";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000";
export default async function Home() {
    const resDataClass = await fetch(baseUrl + "/api", {
        cache: "no-store",
    });
    const personalData: IpersonData = await resDataClass.json();
    console.log(personalData);
    const { educations, experiences, personalInfo, projects, skills, socialMedia, aboutMe } = personalData;

    return (
        <AppLayout>
            <div className="z-1 mt-4 w-full flex flex-col-reverse sm:flex-row sm:gap-16 sm:px-6 px-0">
                <HeroSection personalInfo={personalInfo} />
                <div className="w-full sm:max-w-xs relative">
                    <Image src={pp} width={600} height={600} alt="photo-profile" className="w-[calc(100%+1rem)] object-contain sm:absolute -bottom-4 right-0" />
                    {/* <Icon icon="CodeXml" className="w-14 h-14 sm:w-20 sm:h-20 text-primary opacity-70 absolute top-4 left-4 sm:-left-12" strokeWidth={3} />
                    <Icon
                        icon="MonitorCog"
                        className="w-8 h-8 sm:w-16 sm:h-16 text-primary opacity-60 absolute top-2 sm:top-auto right-10 sm:bottom-4 sm:-left-6"
                    />
                    <Icon
                        icon="Wrench"
                        className="w-8 h-8 sm:w-16 sm:h-16 text-primary opacity-60 absolute top-20 right-8 sm:top-auto sm:bottom-1 sm:right-2"
                    /> */}
                </div>
            </div>
            <div className="mt-2 p-2 grid sm:grid-cols-2 gap-2">
                <div className="flex flex-col gap-2">
                    <SpotlightCard className="custom-spotlight-card flex flex-col gap-2 p-4" spotlightColor="rgba(236, 72, 153, 0.20)">
                        <div className="w-fit flex items-center gap-4">
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
                        <p className="text-justify">{aboutMe}</p>
                        <div className="flex opacity-50">
                            <span className="flex-1 h-0.5 bg-linear-to-l from-primary to-transparent" />
                            <span className="flex-1 h-0.5 bg-linear-to-r from-primary to-transparent" />
                        </div>
                        <div className="w-full flex flex-wrap justify-center gap-y-2 gap-x-8">
                            <label className="flex gap-2 items-center">
                                <Image src={colorIcons.cake} alt="logo-cake" width={28} height={28} />
                                <div className="flex flex-col">
                                    <p className="opacity-50 text-[10px] sm:text-xs">{personalInfo.birthCity}</p>
                                    <p className="-mt-1 text-xs sm:text-sm">{dayjs(personalInfo.birthDate).format("DD MMMM YYYY")}</p>
                                </div>
                            </label>
                            <label className="flex gap-2 items-center">
                                <Image src={colorIcons.gmail} alt="logo-gmail" width={28} height={28} />
                                <div className="flex flex-col">
                                    <p className="opacity-50 text-[10px] sm:text-xs">Email Address:</p>
                                    <a className="-mt-1 text-xs sm:text-sm" href={`mailto:${personalInfo.mail}`}>
                                        4fifbuchori@gmail.com
                                    </a>
                                </div>
                            </label>
                            <label className="flex gap-2 items-center">
                                <Image src={colorIcons.wa} alt="logo-whatsapp" width={28} height={28} />
                                <div className="flex flex-col">
                                    <p className="opacity-50 text-[10px] sm:text-xs">Phone / Whatsapp:</p>
                                    <Link
                                        className="-mt-1 text-xs sm:text-sm"
                                        href={`https://wa.me/62${personalInfo.phone}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {("0" + personalInfo.phone).replace(/(.{4})/g, "$1-").replace(/-$/, "")}
                                    </Link>
                                </div>
                            </label>

                            <div className="min-w-44 flex gap-4 justify-center items-center">
                                {socialMedia.map((item, idx) => (
                                    <Button key={idx} className="w-9 h-9 p-0" asChild>
                                        <Link href={item.urlLink} target="_blank" rel="noopener noreferrer">
                                            <Image src={colorIcons[item.ico]} alt="logo-cake" width={24} height={24} />
                                        </Link>
                                    </Button>
                                ))}
                            </div>
                        </div>
                    </SpotlightCard>

                    <SpotlightCard className="custom-spotlight-card flex flex-col p-4" spotlightColor="rgba(236, 72, 153, 0.20)">
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
                                <span className="-mt-4 w-3/5 h-0.5 bg-linear-to-r from-primary to-transparent rounded-full" />
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

                <div className="flex flex-col gap-2">
                    <SpotlightCard className="custom-spotlight-card flex flex-col p-4" spotlightColor="rgba(236, 72, 153, 0.20)">
                        <div className="w-fit flex items-center gap-4 mb-4">
                            <Icon icon="BriefcaseBusiness" strokeWidth={3} className="w-6 h-6" />
                            <GradientText
                                colors={["#db2777", "#FF9FFC", "#B497CF"]}
                                animationSpeed={4}
                                showBorder={false}
                                className="custom-class col-span-full text-2xl font-black uppercase"
                            >
                                Work Experience
                            </GradientText>
                        </div>
                        {experiences.map((item, idx) => (
                            <div key={idx} className={cn("flex flex-col pl-8 relative", experiences.length - 1 > idx ? "pb-2" : "")}>
                                <div className="flex flex-wrap gap-x-2 mb-1">
                                    <p className="font-bold">{item.company}</p>
                                    <span className="ml-8 italic opacity-50">
                                        {item.dateStart && dayjs(item.dateStart).format("MMMM YYYY")}
                                        {item.dateStart && item.dateEnd && " - "}
                                        {item.dateEnd && dayjs(item.dateEnd).format("MMMM YYYY")}
                                    </span>
                                </div>
                                {item.description
                                    .split("\n")
                                    .filter(Boolean)
                                    .map((desc, id) => (
                                        <div key={id} className="flex gap-2 ml-5 opacity-80">
                                            <Icon icon="Circle" className="fill-foreground w-2.5 h-2.5 mt-1 opacity-70" />
                                            <p className="flex-1 text-sm sm:text-base">{desc}</p>
                                        </div>
                                    ))}
                                {experiences.length - 1 > idx && <span className="w-1 h-full absolute top-1 left-2.5 bg-primary" />}
                                <Icon icon="Circle" strokeWidth={4} className="absolute top-1 left-1 text-primary fill-primary" />
                            </div>
                        ))}
                    </SpotlightCard>

                    <Projects />

                    <SpotlightCard className="custom-spotlight-card flex flex-col p-4" spotlightColor="rgba(236, 72, 153, 0.20)">
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
                        {educations.slice(0, 2).map((item, idx) => (
                            <div key={idx} className={cn("flex flex-col pl-8 relative", educations.slice(0, 2).length - 1 === idx ? "" : "pb-2")}>
                                <p className="font-bold">{item.name}</p>
                                <div className="flex items-center flex-wrap gap-x-4">
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
                                        educations.slice(0, 2).length - 1 === idx ? "bg-linear-to-b from-primary to-transparent" : "bg-primary",
                                    )}
                                />
                                <Icon icon="Circle" strokeWidth={4} className="absolute top-1 left-1 text-primary fill-primary" />
                            </div>
                        ))}
                    </SpotlightCard>
                </div>
            </div>
        </AppLayout>
    );
}
