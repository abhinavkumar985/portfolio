"use client";
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import TimelineEvent from './TimelineEvent';

// @ts-ignore
const Timeline = ({ events }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="relative max-w-4xl mx-auto py-16"
            role="list"
            aria-label="Timeline of events"
        >
            {/* Events */}
            {/* @ts-ignore */}
            {events.map((event, index) => (
                <TimelineEvent
                    key={index}
                    year={event.year}
                    title={event.title}
                    company={event.company}
                    location={event.location}
                    description={event.description}
                    pills={event.pills}
                    icon={event.icon}
                    delay={index * 0.2} // Staggered animation
                    links={event?.links}
                />
            ))}
        </motion.div>
    );
};

export default Timeline;