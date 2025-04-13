export interface Link {
    url: string;
    description: string;
    addionalInfo?: string;
}

export interface TimelineEventProps {
    year: string;
    title: string;
    description: string;
    pills: string[];
    icon: string;
    delay: number;
    company: string;
    location: string;
    links?: Link[];
}

export interface BlogDetails {
    image: string;
    title: string;
    description: string;
    url: string;
    category_name: string;
    hostname: string;
}

export interface BlogCategory {
    category_name: string;
    blogs: BlogDetails[];
}