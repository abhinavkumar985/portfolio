import { FaLinkedin, FaGithub, FaMedium, FaTwitter, FaRss } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-[#6B46C1] text-white py-12">
            <div className="container mx-auto text-center">
                {/* Main Text */}
                <h2 className="text-4xl font-bold uppercase text-primary">
                    Living, learning & leveling up
                </h2>
                <p className="mt-2 text-xl">one day at a time.</p>

                {/* Social Media Icons */}
                <div className="mt-6 flex justify-center space-x-6">
                    <a
                        href="https://linkedin.com/in/yourprofile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white text-3xl hover:text-gray-200 transition-colors"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://github.com/yourprofile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white text-3xl hover:text-gray-200 transition-colors"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://medium.com/@yourprofile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white text-3xl hover:text-gray-200 transition-colors"
                    >
                        <FaMedium />
                    </a>
                    <a
                        href="https://twitter.com/yourprofile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white text-3xl hover:text-gray-200 transition-colors"
                    >
                        <FaTwitter />
                    </a>
                    <a
                        href="https://yourwebsite.com/rss"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white text-3xl hover:text-gray-200 transition-colors"
                    >
                        <FaRss />
                    </a>
                </div>

                {/* Copyright Notice */}
                <p className="mt-8 text-sm">© Handcrafted by me</p>
            </div>
        </footer>
    );
};

export default Footer;