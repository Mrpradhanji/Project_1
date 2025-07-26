declare module '../blog/blogData' {
  interface BlogPost {
    title: string;
    slug: string;
    excerpt: string;
    date: string;
    author: string;
    category: string;
    readTime: string;
    image: string;
  }

  interface ServiceCategory {
    name: string;
    description: string;
    services: string[];
  }

  export const blogPosts: BlogPost[];
  export const serviceCategories: ServiceCategory[];
}
