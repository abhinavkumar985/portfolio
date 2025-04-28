// components/VerticalDivider.tsx

import React from "react";
import { FaUserGraduate } from "react-icons/fa";

interface VerticalDividerProps {
    title: string;
    description?: string;
    icon?: React.ReactNode;
}

const VerticalDivider: React.FC<VerticalDividerProps> = ({ title, description, icon }) => {
    return (
        <>
            <div className="relative flex flex-col items-center justify-center h-24">
                <div className="absolute h-full w-px bg-gray-400" />
            </div>
            <div className="z-10 px-2 text-gray-500 text-md font-medium">
                <div className="rounded-full p-4 bg-teal-600 text-white shadow-lg ">
                    {title}
                </div>
            </div>
            <div className="relative flex flex-col items-center justify-center h-4">
                <div className="absolute h-full w-px bg-gray-400" />
            </div>
            <div className="z-10 px-2 dark:text-gray-300 text-xl font-medium flex">
                {/* {text} */}
                {icon}{description}
            </div>
            <div className="relative flex flex-col items-center justify-center h-24">
                <div className="absolute h-full w-px bg-gray-400" />
            </div>

        </>
    );
};

export default VerticalDivider;