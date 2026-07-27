"use client";
import { IpersonData } from "@/types";
import React, { useState } from "react";
import BlurText from "./text/blur-text";
import TrueFocus from "./text/true-focus";
import { Button } from "./button";
import { Icon } from "./icon";
import AnimatedText from "./text/animate-present";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";

type IPersonalInfo = IpersonData["personalInfo"];
const jobInfo = ["Frontend Developer", "IT Support", "Freelancer"];
export default function HeroSection({ personalInfo }: { personalInfo: IPersonalInfo }) {
    const [index, setIndex] = useState(0);

    return (
        <div className="flex flex-col flex-1 px-2 sm:px-0 bg-background sm:bg-transparent">
            <p className="text-primary">{"Hi, I'm"}</p>
            <BlurText
                text={personalInfo.firstName + " " + personalInfo.lastName}
                delay={1000}
                animateBy="words"
                direction="top"
                //   onAnimationComplete={handleAnimationComplete}
                className="text-2xl sm:text-6xl mb-8 max-w-md font-bold"
            />
            <div className="flex justify-start mb-6 px-2">
                <TrueFocus
                    sentence={personalInfo.jobInfo.join(" | ")}
                    manualMode={false}
                    blurAmount={5}
                    borderColor="#fda5d5"
                    // borderColor="#db2777"
                    animationDuration={0.5}
                    pauseBetweenAnimations={3}
                    onFocusChange={setIndex}
                />
            </div>
            <AnimatedText items={personalInfo.bio} currentIndex={index} />

            <div className="flex flex-wrap gap-4 mt-4">
                {/* <Button>
                    Lihat Proyek Saya
                    <Icon icon="MoveRight" />
                </Button> */}
                <DropdownMenu>
                    <DropdownMenuTrigger render={<Button variant={"outline"} className="border border-primary hover:border-primary/70" />}>
                        Hubungi Saya <Icon icon="PhoneCall" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem
                            onClick={() => {
                                window.open(`mailto:${personalInfo.mail}`, "_self");
                            }}
                        >
                            Email
                        </DropdownMenuItem>

                        <DropdownMenuItem
                            onClick={() => {
                                window.open(`https://wa.me/62${personalInfo.phone}`, "_blank");
                            }}
                        >
                            WhatsApp
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    );
}
