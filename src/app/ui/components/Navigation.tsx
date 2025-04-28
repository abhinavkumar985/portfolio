"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navigation = () => {
    const pathname = usePathname();
    return (
        <header>
            <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white p-4 z-10" style={{ zIndex: 100 }} role="navigation" aria-label="Main Navigation">
                <ul className="flex justify-center space-x-10" role="menubar">
                    <li role="none">
                        <Link href="/about"
                            className={`transition hover:text-teal-400 ${pathname === '/about' ? 'text-teal-400 font-bold' : ''}`}
                            role="menuitem"
                            aria-current={pathname === '/about' ? 'page' : undefined}
                        >About</Link>
                    </li>
                    <li role="none">
                        <Link href="/blogs"
                            className={`transition hover:text-teal-400 ${pathname === '/blogs' ? 'text-teal-400 font-bold' : ''}`}
                            role="menuitem"
                            aria-current={pathname === '/blogs' ? 'page' : undefined}
                        >Blogs</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navigation;