import React, { ReactNode } from "react";
import SideMenu from "./side-menu";
import { cn } from "@/lib/utils";
import Footer from "../footer";
import BreadcrumbHeader from "./breadcrumbs-header";

interface AppLayoutProps {
    children: ReactNode;
    className?: string;
}

export default function AppLayout({ children, className = "" }: AppLayoutProps) {
    return (
        <div className="w-full h-full flex-1 flex flex-col-reverse lg:flex-row bg-slate-950/30 relative">
            <SideMenu />
            <div className="flex-1 flex flex-col p-2 gap-2 z-0">
                <div className={cn("flex-1 flex flex-col border border-border rounded-lg bg-background", className)}>
                    <div className="flex px-3 py-2 border-b">
                        <BreadcrumbHeader />
                    </div>
                    {children}
                </div>
                <Footer />
            </div>
        </div>
    );
}
