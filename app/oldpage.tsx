import Footer from "@/components/footer";
import { IpersonData } from "@/types";
import pp from "@/assets/photoProfile.webp";
import Image from "next/image";
import { Icon } from "@/components/icon";
import dayjs from "dayjs";
import GradientText from "@/components/text/gradient-text";
import { colorIcons } from "@/lib/icons";
import { Button } from "@/components/button";
import { cn } from "@/lib/utils";
import HeroSection from "@/components/hero-section";
import SpotlightCard from "@/components/spotlight-card";
import BgDots from "@/components/bg-dots";
import BgLine from "@/components/bg-line";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000";
export default async function Home() {
    const resDataClass = await fetch(baseUrl + "/api", {
        cache: "no-store",
    });
    const personalData: IpersonData = await resDataClass.json();
    // console.log(personalData);
    const { educations, experiences, personalInfo, projects, skills, socialMedia, aboutMe } = personalData;

    return (
        <>
            {/* <HeadBar /> */}
            <div className="w-full flex flex-col items-center relative overflow-hidden mb-14 sm:mb-0">
                <div className="z-1 mt-4 sm:mt-10 w-full max-w-6xl mx-auto flex flex-col-reverse sm:flex-row sm:gap-16 sm:px-6 px-0 sm:mb-14">
                    <HeroSection personalInfo={personalInfo} />
                    <div className="w-full sm:max-w-xs relative">
                        <div className="w-full aspect-square sm:rounded-full overflow-hidden border-b-4 sm:border-4 border-primary/70">
                            <Image src={pp} width={600} height={600} alt="photo-profile" className="w-full object-contain" />
                        </div>
                        <Icon icon="CodeXml" className="w-14 h-14 sm:w-20 sm:h-20 text-primary opacity-70 absolute top-4 left-4 sm:-left-12" strokeWidth={3} />
                        <Icon
                            icon="MonitorCog"
                            className="w-8 h-8 sm:w-16 sm:h-16 text-primary opacity-60 absolute top-2 sm:top-auto right-10 sm:bottom-4 sm:-left-6"
                        />
                        <Icon
                            icon="Wrench"
                            className="w-8 h-8 sm:w-16 sm:h-16 text-primary opacity-60 absolute top-20 right-8 sm:top-auto sm:bottom-1 sm:right-2"
                        />
                    </div>
                </div>
                <BgDots />
                <BgLine />
            </div>

            {/* ADDON INFO */}
            <div className="w-full bg-linear-to-b from-primary/20 to-transparent flex justify-center items-center pt-10 mb-14">
                <div className="w-full max-w-6xl mx-auto px-4 flex flex-col gap-4">
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
                    <div className="w-full flex flex-wrap justify-center gap-y-2 gap-x-16">
                        <label className="flex gap-2 items-center">
                            <Image src={colorIcons.cake} alt="logo-cake" width={32} height={32} />
                            <div className="flex flex-col">
                                <p className="opacity-50 text-xs sm:text-sm">{personalInfo.birthCity}</p>
                                <p className="-mt-1">{dayjs(personalInfo.birthDate).format("DD MMMM YYYY")}</p>
                            </div>
                        </label>
                        <label className="flex gap-2 items-center">
                            <Image src={colorIcons.gmail} alt="logo-gmail" width={32} height={32} />
                            <div className="flex flex-col">
                                <p className="opacity-50 text-xs sm:text-sm">Email Address:</p>
                                <a className="-mt-1" href={`mailto:${personalInfo.mail}`}>
                                    4fifbuchori@gmail.com
                                </a>
                            </div>
                        </label>
                        <label className="flex gap-2 items-center">
                            <Image src={colorIcons.wa} alt="logo-whatsapp" width={32} height={32} />
                            <div className="flex flex-col">
                                <p className="opacity-50 text-xs sm:text-sm">Phone / Whatsapp:</p>
                                <a className="-mt-1" href={`https://wa.me/62${personalInfo.phone}`} target="_blank" rel="noopener noreferrer">
                                    {("0" + personalInfo.phone).replace(/(.{4})/g, "$1-").replace(/-$/, "")}
                                </a>
                            </div>
                        </label>
                    </div>
                    <div className="flex gap-4 justify-center items-center">
                        {socialMedia.map((item, idx) => (
                            <a key={idx} href={item.urlLink} target="_blank" rel="noopener noreferrer">
                                <Button className="w-9 h-9 p-0">
                                    <Image src={colorIcons[item.ico]} alt="logo-cake" width={24} height={24} />
                                </Button>
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <div className="w-full max-w-6xl mx-auto px-4 flex flex-col sm:flex-row gap-4 mb-4">
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

            {/* EXPERIENCE */}
            <div className="w-full max-w-6xl mx-auto px-4 flex flex-col gap-4 mb-8">
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
                        <div key={idx} className="flex flex-col pb-4 pl-8 relative">
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
            </div>

            {/* <MagicBento
                textAutoHide={true}
                enableStars
                enableSpotlight
                enableBorderGlow={true}
                enableTilt={false}
                enableMagnetism={false}
                clickEffect
                spotlightRadius={400}
                particleCount={12}
                glowColor="132, 0, 255"
                disableAnimations={false}
            /> */}

            <Footer />
        </>
    );
}
