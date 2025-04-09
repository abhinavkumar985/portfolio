"use client";
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGraduationCap, FaBriefcase, FaPlane, FaUserGraduate, FaUserTie, FaBlogger, FaHandHoldingHeart, FaStar } from 'react-icons/fa';
import LinkPreview from './LinkPreview';
import VerticalDivider from './VerticalDivider';

const iconMap = {
    graduation: <FaUserGraduate className="text-neon-cyan mr-2" size="22" />,
    job: <FaBriefcase className="text-neon-cyan mr-2" size="22" />,
    move: <FaPlane className="text-neon-cyan mr-2" size="22" />,
    trainer: <FaUserTie className="text-neon-cyan mr-2" size="22" />,
    blog: <FaBlogger className="text-neon-cyan mr-2" size="22" />,
    support: <FaHandHoldingHeart className="text-neon-cyan mr-2" size="22" />,

};
// @ts-ignore
const TimelineEvent = ({ year, title, description, pills, icon, delay, company, location, links }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true});
    // @ts-ignore
    const iconElement = iconMap[icon];
    return (
        <>
            <motion.div
                ref={ref}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay }}
                className={`flex items-center flex-col`}
            >
                <VerticalDivider title={year} description={title} icon={iconElement} />
                {/* Event Content */}
                <div
                    className={`w-full  shadow-lg p-4 rounded-lg bg-white`}
                >
                    {/* <h4 className="text-xl font-semibold flex">{iconMap[icon]}</h4> */}
                    {/* @ts-ignore */}
                    <h4 className="text-l font-semibold flex"> {company}</h4>
                    <h3 className="text-l text-accent font-mono">{location}</h3>
                    <p className={`mt-3 ${icon === 'job' || icon === 'trainer' ? 'font-sans': 'font-mono'}`}>{description}</p>
                    {/* <LinkPreview url={'https://corporate.zalando.com/en/technology/zalando-launch-fashion-assistant-powered-chatgpt'} /> */}
                    {pills.length > 0 && <div className="mt-4 flex flex-wrap gap-2">
                        {/* @ts-ignore */}
                        {pills.map((pill, index) => (
                            <span
                                key={index}
                                className="text-white px-3 py-1 rounded-full text-sm font-medium bg-gray-500 shadow-lg"
                            >
                                {pill}
                            </span>
                        ))}
                    </div>}
                    <div className="mt-4">
                        {/* @ts-ignore */}
                        {links?.map((link, index) => (
                            <div key={index} className="flex gap-2" style={{alignItems: 'anchor-center'}}><FaStar /> {link.addionalInfo} <a href={link.url} target='_blank' className="font-medium text-blue-500 hover:underline" >{link.description}</a></div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </>
    );
};

export default TimelineEvent;