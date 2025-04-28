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
            <div className="relative flex flex-col items-center justify-center h-24" role="separator" aria-hidden="true">
                <div className="absolute h-full w-px bg-gray-400" />
            </div>
            <div className="z-10 px-2 text-gray-500 text-md font-medium" role="heading">
                <div className="rounded-full p-4 bg-teal-600 text-white shadow-lg " aria-label={title}>
                    {title}
                </div>
            </div>
            <div className="relative flex flex-col items-center justify-center h-4" role="separator" aria-hidden="true">
                <div className="absolute h-full w-px bg-gray-400" />
            </div>
            <div className="z-10 px-2 dark:text-gray-300 text-xl font-medium flex" aria-label={description}>
                {icon}{description}
            </div>
            <div className="relative flex flex-col items-center justify-center h-24" role="separator" aria-hidden="true">
                <div className="absolute h-full w-px bg-gray-400" />
            </div>

        </>
    );
};

export default VerticalDivider;