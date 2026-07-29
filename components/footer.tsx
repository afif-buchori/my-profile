import React from "react";

export default function Footer() {
    return (
        <div className="w-full flex flex-col md:flex-row items-center justify-between px-1 opacity-50 text-[10px] sm:text-xs pb-12 md:pb-0">
            <p className="text-center">© 2026 Afif Bochori. All rights reserved</p>
            <p className="text-center">
                Build with
                <span className="text-primary ml-2">Next.JS | TypeScript</span>
            </p>
        </div>
        // <div className="w-full border-t flex justify-center mt-auto">
        //     <div className="w-full max-w-6xl text-xs sm:text-sm flex flex-col sm:flex-row gap-x-4 my-1 px-4">
        //         <p className="text-center">© 2026 Afif Bochori. All rights reserved</p>
        //         <p className="text-center sm:ml-auto">
        //             Build with
        //             <span className="text-primary ml-2">Next.JS | TypeScript</span>
        //         </p>
        //     </div>
        // </div>
    );
}
