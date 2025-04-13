import { FaLinkedin, FaGithub, FaMedium, FaTwitter, FaRss } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-900 dark:bg-gray-700 text-gray-100 dark:text-gray-300 mx-auto py-16 px-4">
            <div className="container mx-auto text-center">
                {/* Main Text */}
                <h2 className="text-3xl font-bold text-teal-400 dark:text-teal-300 font-mono">
                    Living, learning & leveling up
                </h2>
                <p className="mt-2 text-2xl text-gray-300 dark:text-gray-400 font-sans">one day at a time.</p>

                {/* Social Media Icons */}
                <div className="mt-6 flex justify-center space-x-6">
                    <a
                        href="https://www.linkedin.com/in/abhinavkumar985/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-teal-400 dark:text-teal-300 text-3xl hover:text-teal-300 dark:hover:text-teal-200 transition-colors"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://github.com/abhinavkumar985"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-teal-400 dark:text-teal-300 text-3xl hover:text-teal-300 dark:hover:text-teal-200 transition-colors"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://medium.com/@abhinavkumar985"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-teal-400 dark:text-teal-300 text-3xl hover:text-teal-300 dark:hover:text-teal-200 transition-colors"
                    >
                        <FaMedium />
                    </a>
                    <a
                        href="https://x.com/abhinav985"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-teal-400 dark:text-teal-300 text-3xl hover:text-teal-300 dark:hover:text-teal-200 transition-colors"
                    >
                        <FaTwitter />
                    </a>
                    <a
                        href="/blogs"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-teal-400 dark:text-teal-300 text-3xl hover:text-teal-300 dark:hover:text-teal-200 transition-colors"
                    >
                        <FaRss />
                    </a>
                </div>

                {/* Copyright Notice */}
                <p className="mt-8 text-sm text-gray-400 dark:text-gray-500">
                    © Handcrafted by me
                </p>
            </div>
        </footer>
    );
};

export default Footer;