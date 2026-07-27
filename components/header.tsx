import React from "react";

export default function HeadBar() {
    const menu = [
        { name: "Home", link: "" },
        { name: "About", link: "" },
        { name: "Skills", link: "" },
        { name: "Experience", link: "" },
        { name: "Educations", link: "" },
        { name: "Projects", link: "" },
        { name: "Contact", link: "" },
    ];

    return (
        <div className="w-full flex justify-center shadow-lg border-b">
            <div className="w-full max-w-6xl flex items-center gap-4">
                <p className="text-2xl font-black">KUFFS</p>
                <div className="flex-1 flex gap-4 justify-center">
                    {menu.map((item, idx) => (
                        <button key={idx} className="py-4">
                            {item.name}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
