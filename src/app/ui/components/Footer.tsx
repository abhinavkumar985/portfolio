"use client"; // Ensure this is a client component for hooks
import { trackContentView } from '@/app/tracking';
import { useEffect, useRef } from 'react';
import { FaLinkedin, FaGithub, FaMedium, FaDev, FaStackOverflow } from 'react-icons/fa';
import { useInView } from 'framer-motion'; // Import useInView

const Footer = () => {
    const footerRef = useRef(null);
    const isInView = useInView(footerRef, { once: true }); // Trigger only once

    useEffect(() => {
        if (isInView) {
            trackContentView('footer');
        }
    }, [isInView]);

    return (
        <footer ref={footerRef} className="bg-gray-900 dark:bg-gray-700 text-gray-100 dark:text-gray-300 mx-auto py-16 px-4 main-footer" role="contentinfo">
            <div className="container mx-auto text-center">
                {/* Main Text */}
                <h2 className="text-3xl font-bold text-teal-400 dark:text-teal-300 font-mono" aria-label="Living, learning, and leveling up">
                    Living, learning & leveling up
                </h2>
                <p className="mt-2 text-2xl text-gray-300 dark:text-gray-400 font-sans" aria-label="One day at a time">
                    one day at a time.
                </p>

                {/* Social Media Icons */}
                <div className="mt-6 flex justify-center space-x-6" role="navigation" aria-label="Social Media Links">
                    <a
                        href="https://www.linkedin.com/in/abhinavkumar985/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-teal-400 dark:text-teal-300 text-3xl hover:text-teal-300 dark:hover:text-teal-200 transition-colors"
                        aria-label="LinkedIn Profile"
                    >
                        <FaLinkedin aria-hidden="true" />
                    </a>
                    <a
                        href="https://github.com/abhinavkumar985"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-teal-400 dark:text-teal-300 text-3xl hover:text-teal-300 dark:hover:text-teal-200 transition-colors"
                        aria-label="GitHub Profile"
                    >
                        <FaGithub aria-hidden="true" />
                    </a>
                    <a
                        href="https://medium.com/@abhinavkumar985"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-teal-400 dark:text-teal-300 text-3xl hover:text-teal-300 dark:hover:text-teal-200 transition-colors"
                        aria-label="Medium Blog"
                    >
                        <FaMedium aria-hidden="true" />
                    </a>
                    <a
                        href="https://g.dev/abhinavkumar985"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-teal-400 dark:text-teal-300 text-3xl hover:text-teal-300 dark:hover:text-teal-200 transition-colors"
                        aria-label="Google Developer Profile"
                    >
                        <FaDev aria-hidden="true" />
                    </a>
                    <a
                        href="https://stackoverflow.com/users/9406763/abhinav-kumar"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-teal-400 dark:text-teal-300 text-3xl hover:text-teal-300 dark:hover:text-teal-200 transition-colors"
                        aria-label="Stack Overflow Profile"
                    >
                        <FaStackOverflow aria-hidden="true" />
                    </a>
                </div>

                {/* Copyright Notice */}
                <p className="mt-8 text-sm text-gray-400 dark:text-gray-500" aria-label="Copyright Notice">
                    © Handcrafted by me
                </p>
            </div>
        </footer>
    );
};

export default Footer;