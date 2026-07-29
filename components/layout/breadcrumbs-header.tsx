"use client";
import React from "react";
import Link from "next/link";

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "../ui/breadcrumb";
import { usePathname } from "next/navigation";

interface IBreadcrumbHead {
    title: string;
    urlLink: string;
}

export default function BreadcrumbHeader() {
    const pathname = usePathname();
    const paths = pathname.split("/").filter(Boolean);

    const breadcrumbs: IBreadcrumbHead[] = [
        {
            title: "Home",
            urlLink: "/",
        },
        ...paths.map((path, index) => ({
            title: path.charAt(0).toUpperCase() + path.slice(1).replace(/-/g, " "),
            urlLink: "/" + paths.slice(0, index + 1).join("/"),
        })),
    ];

    return (
        <Breadcrumb>
            <BreadcrumbList>
                {breadcrumbs.map((item, index) => {
                    const isLast = index === breadcrumbs.length - 1;

                    return (
                        <React.Fragment key={item.title}>
                            <BreadcrumbItem>
                                {isLast ? (
                                    <BreadcrumbPage className="flex items-center gap-2 text-xs sm:text-sm opacity-80 hover:opacity-100">
                                        {item.title}
                                    </BreadcrumbPage>
                                ) : (
                                    <BreadcrumbLink
                                        render={<Link href={item.urlLink} />}
                                        className="flex items-center gap-2 text-xs sm:text-sm opacity-60 hover:opacity-90 cursor-pointer"
                                    >
                                        {item.title}
                                    </BreadcrumbLink>
                                )}
                            </BreadcrumbItem>

                            {!isLast && <BreadcrumbSeparator />}
                        </React.Fragment>
                    );
                })}
            </BreadcrumbList>
        </Breadcrumb>
    );
}
