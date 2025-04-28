"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navigation = () => {
    const pathname = usePathname();
    return (
        <header>
            <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white p-4 z-10" style={{ zIndex: 100 }}>
                <ul className="flex justify-center space-x-10">
                    <li>
                        <Link href="/about"
                            className={`transition hover:text-teal-400 ${pathname === '/about' ? 'text-teal-400 font-bold' : ''}`}
                        >About</Link>
                    </li>
                    <li>
                        <Link href="/blogs"
                            className={`transition hover:text-teal-400 ${pathname === '/blogs' ? 'text-teal-400 font-bold' : ''}`}
                        >Blogs</Link>
                    </li>
                    <li>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navigation;