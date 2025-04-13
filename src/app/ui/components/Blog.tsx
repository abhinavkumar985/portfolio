// components/LinkPreview.tsx
import React from "react";
import { BlogDetails } from "./types";

const Blog: React.FC<{ data: BlogDetails }> = ({ data }) => {
  if (!data) return <div className="text-sm text-gray-500">Preview not available</div>;

  return (
    <a
      href={data.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-xl overflow-hidden hover:shadow-lg transition-shadow bg-white dark:bg-gray-800 max-w-xl shadow-md dark:shadow-lg"
    >
      {data.image && (
        <img src={data.image} alt={data.title} className="w-full h-48 object-cover" />
      )}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{data.title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{data.description}</p>
      </div>
    </a>
  );
};

export default Blog;