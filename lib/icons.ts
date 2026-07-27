import AWS from "@/assets/icon-dev/AWS.svg";
import Bootstrap from "@/assets/icon-dev/Bootstrap.svg";
import CSS3 from "@/assets/icon-dev/CSS3.svg";
import Docker from "@/assets/icon-dev/Docker.svg";
import GitHub from "@/assets/icon-dev/GitHub.svg";
import HTML5 from "@/assets/icon-dev/HTML5.svg";
import JavaScript from "@/assets/icon-dev/JavaScript.svg";
import Laravel from "@/assets/icon-dev/Laravel.svg";
import LinkedIn from "@/assets/icon-dev/LinkedIn.svg";
import Linux from "@/assets/icon-dev/Linux.svg";
import NextJS from "@/assets/icon-dev/Next.js.svg";
import NodeJS from "@/assets/icon-dev/Node.js.svg";
import PHP from "@/assets/icon-dev/PHP.svg";
// import PostgreSQL from "@/assets/icon-dev/PostgreSQL.svg";
import Python from "@/assets/icon-dev/Python.svg";
import React from "@/assets/icon-dev/React.svg";
import Redis from "@/assets/icon-dev/Redis.svg";
import Redux from "@/assets/icon-dev/Redux.svg";
import Tailwind from "@/assets/icon-dev/Tailwind CSS.svg";
import TypeScript from "@/assets/icon-dev/TypeScript.svg";
import Ubuntu from "@/assets/icon-dev/Ubuntu.svg";
import Vite from "@/assets/icon-dev/Vite.js.svg";

import Consultant from "@/assets/icon-support/consultant.png";
import CpuTower from "@/assets/icon-support/cpu-tower.png";
import Electronics from "@/assets/icon-support/electronics.png";
import Network from "@/assets/icon-support/network.png";
import Programmer from "@/assets/icon-support/programmer.png";
import Secure from "@/assets/icon-support/secure.png";
import Settings from "@/assets/icon-support/settings.png";
import Troubleshooting from "@/assets/icon-support/troubleshooting.png";

import WhatsApp from "@/assets/icon-general/whatsapp.png";
import BCake from "@/assets/icon-general/birthday-cake.png";
import GMail from "@/assets/icon-general/communication.png";

export const colorIcons = {
    aws: AWS,
    bootstrap: Bootstrap,
    css: CSS3,
    docker: Docker,
    github: GitHub,
    html: HTML5,
    js: JavaScript,
    ts: TypeScript,
    laravel: Laravel,
    linkedin: LinkedIn,
    linux: Linux,
    nextjs: NextJS,
    nodejs: NodeJS,
    php: PHP,
    // postgresql: PostgreSQL,
    python: Python,
    reactjs: React,
    redis: Redis,
    redux: Redux,
    tailwind: Tailwind,
    ubuntu: Ubuntu,
    vite: Vite,

    consultant: Consultant,
    pcAssembly: CpuTower,
    pcErrors: Electronics,
    nettError: Network,
    programmer: Programmer,
    pcUpgrade: Secure,
    softwareSettings: Settings,
    deviceRepair: Troubleshooting,

    wa: WhatsApp,
    cake: BCake,
    gmail: GMail,
} as const;
