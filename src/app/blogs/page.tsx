"use client";
import { useEffect, useState } from "react";
import { BlogCategory, BlogDetails } from "../ui/components/types";
import Blog from "../ui/components/Blog";

export default function Blogs() {
    const [groupedBlogs, setGroupedBlogs] = useState<BlogCategory[]>([]);

    useEffect(() => {
        const fetchMetadata = async () => {
            try {
                const response = await fetch("/api/blogs");
                const metadata: BlogDetails[] = await response.json();
                const grouped: BlogCategory[] = metadata.reduce((acc, blog) => {
                    const category = acc.find((c: BlogCategory) => c.category_name === blog.category_name);
                    if (category) {
                        category.blogs.push(blog);
                    } else {
                        acc.push({ category_name: blog.category_name, blogs: [blog] });
                    }
                    return acc;
                }, [] as BlogCategory[]);
                setGroupedBlogs(grouped);
            } catch (error) {
                console.error("Failed to fetch metadata:", error);
            }
        };

        fetchMetadata();
    }, []);

    return (
        <div className="p-4">
            {groupedBlogs.map((category, index) => (
                <div key={index} className={`mb-8 p-4 rounded-lg`}>
                    <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">{category.category_name}</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {category.blogs.map((blog, idx) => (
                            <Blog key={idx} data={blog} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
