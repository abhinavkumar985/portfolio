"use client";
import TimelineEvent from './TimelineEvent';

// @ts-expect-error type error
const Timeline = ({ events }) => {
    return (
        <div>
            {/* @ts-expect-error type error */}
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
        </div>
    );
};

export default Timeline;