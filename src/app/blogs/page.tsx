"use client";
import { BlogCategory, BlogDetails } from "../ui/components/types";
import Blog from "../ui/components/Blog";
import { FaMedium } from "react-icons/fa";
import jsonData from "../api/link-preview/article-metadata.json";
import { useEffect, useState } from "react";

export default function Blogs() {
    const [groupedBlogs, setGroupedBlogs] = useState<BlogCategory[]>([]);

    useEffect(() => {
        const fetchMetadata = async () => {
            try {
                // For Dynamic fetching, uncomment the following lines
                // const response = await fetch("/api/blogs");
                // const metadata: BlogDetails[] = response as BlogDetails[];
                const metadata: BlogDetails[] = jsonData as BlogDetails[];
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
        <div className="sm:p-0 lg:p-4 mt-8">
            {groupedBlogs.map((category, index) => (
                <div key={index} className={`mb-8 rounded-lg lg:p-4 sm:p-1 `}>
                    <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200 flex items-center"> <FaMedium /> <span className="ml-2">{category.category_name}</span></h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {category.blogs.map((blog, idx) => (
                            <Blog key={idx} data={blog} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
