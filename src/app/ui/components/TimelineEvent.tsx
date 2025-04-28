"use client";
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaBriefcase, FaPlane, FaUserGraduate, FaUserTie, FaBlogger, FaHandHoldingHeart, FaStar } from 'react-icons/fa';
import VerticalDivider from './VerticalDivider';
import { TimelineEventProps } from './types';

const iconMap = {
    graduation: <FaUserGraduate className="text-neon-cyan mr-2" size="22" />,
    job: <FaBriefcase className="text-neon-cyan mr-2" size="22" />,
    move: <FaPlane className="text-neon-cyan mr-2" size="22" />,
    trainer: <FaUserTie className="text-neon-cyan mr-2" size="22" />,
    blog: <FaBlogger className="text-neon-cyan mr-2" size="22" />,
    support: <FaHandHoldingHeart className="text-neon-cyan mr-2" size="22" />,
};

interface Link {
    url: string;
    description: string;
    addionalInfo?: string;
}

const TimelineEvent: React.FC<TimelineEventProps> = ({ year, title, description, pills, icon, delay, company, location, links }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    //@ts-ignore
    const iconElement = iconMap[icon];

    return (
        <>
            <motion.div
                ref={ref}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay }}
                className={`flex items-center flex-col`}
                role="region"
                aria-labelledby={`timeline-event-${year}-${title}`}
            >
                <VerticalDivider title={year} description={title} icon={iconElement} />
                {/* Event Content */}
                <div
                    className={`w-full shadow-lg p-4 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-300`}
                    role="group"
                    aria-labelledby={`timeline-event-${year}-${title}`}
                >
                    <h4 id={`timeline-event-${year}-${title}`} className="text-l font-semibold flex"> {company}</h4>
                    <h3 className="text-l text-accent font-mono">{location}</h3>
                    <p className={`mt-3 ${icon === 'job' || icon === 'trainer' ? 'font-sans' : 'font-mono'}`}>{description}</p>
                    {pills.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-2" aria-label="Skills">
                            {pills.map((pill, index) => (
                                <span
                                    key={index}
                                    className="text-white dark:text-gray-900 px-3 py-1 rounded-full text-sm font-medium bg-gray-500 dark:bg-gray-300 shadow-lg"
                                    role="listitem"
                                >
                                    {pill}
                                </span>
                            ))}
                        </div>
                    )}
                    <div className="mt-4" aria-label="Related Links">
                        {links?.map((link, index) => (
                            <div key={index} className="flex gap-2" style={{ alignItems: 'anchor-center' }}>
                                <FaStar aria-hidden="true" /> <a href={link.url} target='_blank' rel="noopener noreferrer" className="font-medium text-teal-700 dark:text-teal-400 hover:underline" title={link.addionalInfo} aria-label={link.description}>{link.description}</a>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </>
    );
};

export default TimelineEvent;