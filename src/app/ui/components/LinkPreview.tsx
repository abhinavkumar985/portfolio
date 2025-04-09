// components/LinkPreview.tsx
import React, { useEffect, useState } from "react";

interface LinkPreviewProps {
  url: string;
}

interface PreviewData {
  title: string;
  description: string;
  image: string;
  hostname: string;
}

const LinkPreview: React.FC<LinkPreviewProps> = ({ url }) => {
  const [data, setData] = useState<PreviewData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPreview = async () => {
      try {
        const res = await fetch(`/api/link-preview?url=${encodeURIComponent(url)}`);
        const json = await res.json();
        setData(json);
      } catch (err) {
        setError("Preview not available");
      }
    };

    fetchPreview();
  }, [url]);

  if (error) return <div className="text-sm text-gray-500">{error}</div>;
  if (!data) return <div className="text-sm text-gray-400">Loading preview...</div>;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block border rounded-xl overflow-hidden hover:shadow-lg transition-shadow bg-white max-w-xl"
    >
      {data.image && (
        <img src={data.image} alt={data.title} className="w-full h-48 object-cover" />
      )}
      <div className="p-4">
        <p className="text-sm text-gray-500 mb-1">{data.hostname}</p>
        <h3 className="text-lg font-semibold">{data.title}</h3>
        <p className="text-sm text-gray-600 mt-1">{data.description}</p>
      </div>
    </a>
  );
};

export default LinkPreview;