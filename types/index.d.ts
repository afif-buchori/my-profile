export interface IpersonData {
    personalInfo: {
        firstName: string;
        lastName: string;
        phone: string;
        mail: string;
        jobInfo: string;
        birthDate: string;
        birthCity: string;
        Location: string;
    };
    socialMedia: {
        name: string;
        urlLink: string;
    }[];
    skills: {
        name: string;
        rating: number;
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
