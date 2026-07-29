import arrwWeb from "@/assets/image-projects/arrow.webp";
import partWeb from "@/assets/image-projects/partner-b2b.webp";
import portWeb from "@/assets/image-projects/portal.webp";
import tripWeb from "@/assets/image-projects/tripgo.webp";
import tondWeb from "@/assets/image-projects/tondest.webp";
import profWeb from "@/assets/image-projects/my-prof.webp";
import dimsWeb from "@/assets/image-projects/dimsum.webp";
import { StaticImageData } from "next/image";
export interface IProject {
    title: string;
    image: StaticImageData;
    description: string;
    urlLink: string;
    github?: string;
    tech: string[];
}

export const dataProjects: IProject[] = [
    {
        title: "Tripgo",
        image: tripWeb,
        description:
            "Platform Online Travel Agent (OTA) B2C yang ditujukan bagi wisatawan Indonesia yang ingin merencanakan perjalanan ke luar negeri. Platform ini menyediakan berbagai layanan seperti Open Trip, Tour Package, Ticket Activity, dan Car Rental. Saya berperan sebagai Front-End Developer dalam membangun antarmuka yang modern, responsif, serta mengintegrasikan berbagai layanan agar pengguna mendapatkan pengalaman pemesanan yang mudah dan nyaman.",
        urlLink: "https://tripgo.id",
        tech: ["Laravel", "Inertia", "React.js", "JavaScript"],
    },
    {
        title: "Tondest",
        image: tondWeb,
        description:
            "Platform Online Travel Agent (OTA) B2C yang menyasar wisatawan mancanegara yang berkunjung ke Indonesia. Layanan yang tersedia meliputi Airport Service, Tour Package, Activity, dan Car Rental. Saya bertanggung jawab mengembangkan antarmuka pengguna, mengintegrasikan API, serta memastikan performa dan pengalaman pengguna tetap optimal di berbagai perangkat.",
        urlLink: "https://tondest.com",
        tech: ["Laravel", "Inertia", "React.js", "JavaScript"],
    },
    {
        title: "System Internal Company",
        image: portWeb,
        description:
            "Aplikasi berbasis web yang dikembangkan untuk mendukung operasional perusahaan. Sistem ini menyediakan fitur manajemen data layanan dan produk (CRUD), pembuatan invoice, serta pengelolaan Email Blast untuk kebutuhan komunikasi dengan pelanggan. Saya mengembangkan dashboard dan berbagai modul agar proses administrasi menjadi lebih efisien dan mudah digunakan.",
        urlLink: "https://portal.elexart.com",
        tech: ["Laravel", "Inertia", "React.js", "JavaScript"],
    },
    {
        title: "Tondest Partner B2B",
        image: partWeb,
        description:
            "Platform OTA yang dirancang khusus untuk agen perjalanan dan mitra bisnis Tondest. Sistem ini memungkinkan partner melakukan pemesanan berbagai layanan perjalanan sekaligus memperoleh pembagian komisi dari setiap transaksi. Saya berkontribusi dalam pengembangan antarmuka dashboard, proses pemesanan, serta integrasi data untuk mendukung kebutuhan bisnis para mitra.",
        urlLink: "https://partner.tondest.com",
        tech: ["Laravel", "Inertia", "React.js", "TypeScript"],
    },
    {
        title: "Arrow System Regist Event",
        image: arrwWeb,
        description:
            "Sistem registrasi berbasis web yang dirancang untuk mendukung pelaksanaan berbagai acara atau event. Sistem ini memiliki fitur registrasi peserta, pemindaian QR Code untuk proses check-in dan check-out, pelaporan data peserta secara real-time, serta ekspor laporan ke berbagai format. Saya mengembangkan antarmuka aplikasi dengan fokus pada kecepatan, kemudahan penggunaan, dan akurasi selama proses registrasi di lokasi acara.",
        urlLink: "https://arrow-presence.on-forge.com",
        tech: ["Laravel", "Inertia", "React.js", "TypeScript"],
    },
    {
        title: "Portfolio Website",
        image: profWeb,
        description: "Website portfolio pribadi yang menampilkan pengalaman kerja, keterampilan, serta berbagai proyek yang pernah saya kerjakan.",
        urlLink: "https://my-profile-eight-sigma.vercel.app",
        tech: ["Next.js", "TypeScript", "Tailwind-CSS"],
        github: "https://github.com/afif-buchori/my-profile",
    },
    {
        title: "Diemsam",
        image: dimsWeb,
        description:
            "Website pemesanan dimsum online yang saya buat untuk UMKM istri. Berfokus pada fitur pemesanan yang terintegrasi discord webhook dan bot telegram.",
        urlLink: "https://my-diemsam.vercel.app",
        tech: ["Next.js", "TypeScript", "Tailwind-CSS", "Discord Webhook", "Bot Telegram"],
        github: "https://github.com/afif-buchori/my-diemsam",
    },
];
