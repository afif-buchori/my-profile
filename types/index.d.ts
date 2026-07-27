import { colorIcons } from "@/lib/icons";

export interface IpersonData {
    personalInfo: {
        firstName: string;
        lastName: string;
        phone: string;
        mail: string;
        jobInfo: string[];
        birthDate: string;
        birthCity: string;
        Location: string;
        bio: string[];
    };
    aboutMe: string;
    socialMedia: {
        ico: keyof typeof colorIcons;
        name: string;
        urlLink: string;
    }[];
    skills: {
        name: string;
        list: {
            ico: keyof typeof colorIcons;
            name: string;
            rating: number;
        }[];
    }[];
    educations: {
        name: string;
        major: string;
        dateStart: string;
        dateEnd: string;
    }[];
    experiences: {
        company: string;
        job: string[];
        description: string;
        dateStart: string;
        dateEnd: string;
    }[];
    projects: {
        name: string;
        urlLink: string;
        description: string;
    }[];
}
