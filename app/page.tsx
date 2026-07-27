import Footer from "@/components/footer";
import HeadBar from "@/components/header";
import { IpersonData } from "@/types";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000";
export default async function Home() {
    const resDataClass = await fetch(baseUrl + "/api", {
        cache: "no-store",
    });
    const personalData: IpersonData = await resDataClass.json();
    console.log(personalData);
    const { educations, experiences, personalInfo, projects, skills, socialMedia } = personalData;

    return (
        <>
            <HeadBar />
            <div className="w-full max-w-6xl flex gap-4">
                <div className="flex flex-col">
                    <p>{"Hi, I'm"}</p>
                    <p>{personalInfo.firstName}</p>
                    <p>{personalInfo.lastName}</p>
                    <p>{personalInfo.jobInfo}</p>
                    <p>I Build modern and scalable web applications using Laravel Inertia React, TypeScript, and Tailwind CSS.</p>
                    <p>I Love turing ideas into real products.</p>
                </div>
            </div>
            <Footer />
        </>
    );
}
