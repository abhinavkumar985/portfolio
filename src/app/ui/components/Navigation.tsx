import Link from 'next/link';

const Navigation = () => {
    return (
        <header>
            <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white p-4 z-10" style={{ zIndex: 100 }}>
                <ul className="flex justify-center space-x-6">
                    <li>
                        <Link href="/about" className="hover:text-teal-400 transition">About</Link>
                    </li>
                    <li>
                        <Link href="/blogs" className="hover:text-teal-400 transition">Blogs</Link>
                    </li>
                    <li>
                        <Link href="/connect" className="hover:text-teal-400 transition">Connect</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navigation;