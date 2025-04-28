"use client";
import { FaLinkedin, FaGithub, FaMedium } from 'react-icons/fa';
import { motion } from "motion/react";
import Timeline from '../ui/components/Timeline';

export default function About() {
    const experienceEvents = [
        {
            year: 'March, 2014',
            title: 'Completed Graduation',
            company: 'Magadh University',
            location: 'Patna, India',
            description:
                'I was introduced to programming in college and quickly got interested in languages like Java. For my final project, I implemented OTP authentication via Gmail — not something new, but doing it on my own felt like a big win back in that time',
            pills: ['Java', 'Data Sctructure', 'Computer Sceince'],
            icon: 'graduation',
        },
        {
            year: 'July, 2014',
            title: 'Software Developer',
            company: 'TCS Ignite labs',
            location: 'Chennai, India',
            description: "I started my career as a trainee at TCS Ignite Labs and was selected for advanced training. Since then, I’ve worked on data-centric and visualization projects, along with leadership activities focused on skill development. For 2.5 years, I trained a new batch of 24 graduates every six months in the latest technologies, supporting Ignite’s mission by leveraging modern tools and practices.",
            pills: ['AngularJS', 'NodeJS', 'CSS', 'JavaScript', 'HTML5', 'D3', 'NVD3', 'Mapbox', 'Bootstrap', 'ExpressJS', 'Mentoring', 'Trainer'],
            icon: 'trainer',
        },
        {
            year: 'Oct, 2017',
            title: 'Moved to Uruguay',
            location: 'Montevideo, Uruguay',
            company: 'TCS (Carnival Cruise Line)',
            description:
                "Relocated to Uruguay to take on new opportunities within TCS, contributing to the digital transformation of Carnival Cruise Line’s operations — including embarkation, debarkation, fleet management, room service, and restaurant gratuity systems.",
            pills: ['Angular', 'TypeScript', 'NodeJS', 'PrimeNG', 'Component Design', 'Agile Development'],
            icon: 'move',
        },
        {
            year: 'Aug, 2019',
            title: 'Senior Associate L1',
            company: 'Publicis Sapient',
            location: 'Gurgaon, India',
            description:
                "Moved back to India and joined Publicis Sapient as a Senior Associate L1, working on UPS’s small business initiative in Europe. I built a web application to help small businesses manage their shipping and logistics. A standout moment was when I developed a Google Assistant–based POC using Dialogflow and Node.js to estimate and track parcels — built in just a week for a high-profile client visit. While it didn’t go to production due to data privacy, it boosted client confidence and inspired my first Medium blog.",
            pills: ['Angular', 'Accessiblity', 'Web Performance', 'Google Assistant', 'Dialogflow', 'NodeJS', 'ExpressJS', 'WebSockets', 'Apple AR Web Integration'],
            icon: 'job',
            links: [
                {
                    addionalInfo: 'Check out this cool demo I built',
                    url: 'https://lion.app.box.com/s/1n8ivywqbircm4viugcb3nsuynrcj8v1',
                    description: 'Cool demo from 2019, Action on Google Assistant',
                },
            ]
        },
        {
            year: 'Feb, 2020',
            title: 'Writing Journey Begins',
            description:
                'I began my writing journey on Medium and Stackoverflow to share insights from my career. A few blogs reached thousands of readers, which motivated me to keep contributing to the tech community. Since then, I’ve published 30+ blogs on web technologies, personal growth, and learning experiences — reaching over 13,000 reads and 30,000 views.',
            icon: 'blog',
            pills: [],
            links: [
                {
                    addionalInfo: 'My write ups on Medium',
                    url: 'https://medium.com/@abhinavkumar985',
                    description: 'Medium corner',
                },
                {
                    addionalInfo: 'My Stackoverflow contributions',
                    url: 'https://stackoverflow.com/users/9406763/abhinav-kumar',
                    description: 'Stackoverflow Contributions',
                },
            ]
        },
        {
            year: 'Nov, 2020',
            title: 'Senior Consultant',
            company: 'Capgemini',
            location: 'Pune, India',
            description:
                'At Zeta Suite (via Capgemini), I helped shape a multi-tenant banking platform in a fast-paced startup environment, building slick, scalable frontends for banking products like credit card issuance and transaction tools. Using Vue.js and Web Components, we crafted a powerful component library that made delivering consistent, high-quality UIs across financial apps feel seamless.',
            pills: ['VueJS', 'Web Performance', 'Component Design', 'Web Components', 'Micro Frontend', 'Agile Development'],
            icon: 'job',
        },
        {
            year: 'Mar, 2022',
            title: 'Moved to Germany',
            description:
                "I made the move to Berlin to dive into new tech opportunities and soak up the city’s creative energy. With its buzzing startup scene and rich culture, it felt like the perfect place to grow, both professionally and personally.",
            pills: [],
            icon: 'move',
        },
        {
            year: 'Apr, 2022',
            title: 'Senior Frontend Engineer',
            company: 'Zalando',
            location: 'Berlin, Germany',
            description:
                'At Zalando, I build scalable, high-performance frontend applications for millions of users across Europe. I played a key role in developing Zalando Assistant, an AI-powered digital assistant revolutionizing online shopping with personalized fashion advice, intuitive product discovery, and AI-driven outfit creation.',
            pills: ['AI', 'Co-Pilot', 'React', 'TypeScript', 'GraphQL', 'CICD', 'AWS', 'NodeJS', 'NextJS'],
            icon: 'job',
        },
        {
            year: 'Feb, 2025',
            title: 'Volunteer Talent Coach',
            comany: 'Imagine Foundation',
            description:
                'I volunteer as a coach at Imagine, mentoring tech talents from regions like Afghanistan, Egypt, Nigeria, and Pakistan. I help them unlock their potential by reviewing CVs, providing LinkedIn feedback, and guiding them toward job opportunities in Europe., helping emerging talent take their first steps in tech. From reviewing CVs to giving feedback and mentoring, it’s an experience that keeps me connected to the next generation of innovators.',
            icon: 'support',
            pills: [],
            links: [
                {
                    addionalInfo: 'Learn more about the foundation',
                    url: 'https://www.joinimagine.com/',
                    description: 'Imagine Foundation',
                },
            ]
        },
    ];

    const skills = experienceEvents.reduce((acc, index) => {
        index.pills.forEach((pill: string) => {
            // @ts-expect-error type error type error
            if (!acc.includes(pill)) {
                // @ts-expect-error type error type error
                acc.push(pill);
            }
        });
        return acc;
    }, []);
    return (
        <div className="min-h-screen" role="main" aria-labelledby="about-section">
            <section id="about" className="container mx-auto py-16 px-4">
                {/* Hero Intro */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <h1 id="about-section" className="text-5xl font-bold mb-4">
                        Abhinav Kumar
                    </h1>
                    <p className="text-xl text-accent mb-6">
                        Senior Engineer @ Zalando | Scalable UX & Frontend Systems
                    </p>
                    <p className="text-lg max-w-2xl mx-auto">
                        I’m a Frontend Software Enginneer based in Berlin, Germany 🇩🇪 (origionally from India 🇮🇳), passionate about building scalable, customer-focused web experiences with React & TypeScript. With ~10 years in tech, I love solving problems, contributing to the community, and always learning something new. 📚✈️
                    </p>
                </motion.div>

                {/* Social Links */}
                <div className="flex justify-center space-x-6 mt-8" aria-label="Social Media Links">
                    <a
                        href="https://www.linkedin.com/in/abhinav-kumar-985/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-5xl hover:text-accent transition-colors"
                        style={{ color: 'rgb(10, 102, 194)' }}
                        aria-label="LinkedIn Profile"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://github.com/abhinavkumar985"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-5xl hover:text-accent transition-colors"
                        aria-label="GitHub Profile"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://medium.com/@abhinavkumar985"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-5xl hover:text-accent transition-colors"
                        aria-label="Medium Blog"
                    >
                        <FaMedium />
                    </a>
                </div>

                {/* Timeline Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mt-16"
                >
                    <h2 className="text-4xl font-semibold text-center" id="timeline-section">
                        My Journey
                    </h2>
                    <Timeline events={experienceEvents} />
                </motion.div>

                {/* Skills Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-16"
                >
                    <h2 className="text-3xl font-semibold text-center mb-8" id="skills-section">
                        Skills
                    </h2>
                    <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto" role="list" aria-labelledby="skills-section">
                        {skills.reverse().map((skill) => (
                            <span
                                key={skill}
                                className="px-4 py-2 rounded-full text-sm font-medium bg-teal-600 text-white"
                                role="listitem"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </section>
        </div>
    );
}