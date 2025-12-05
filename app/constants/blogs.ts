export interface Blog {
  slug: string;
  title: string;
  image: string;
  language: string;
  category: string;
  excerpt: string;
  date: string;
  content?: string;
}

export const blogs: Blog[] = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started with Next.js 14",
    image: "/images/blog/nextjs.jpg",
    language: "en",
    category: "tutorial",
    excerpt:
      "Learn how to build modern web applications with Next.js 14 and its new App Router.",
    date: "2024-01-15",
    content: `
      <h2>What is Next.js?</h2>
      <p>Next.js is a powerful React framework that enables you to build full-stack web applications with modern features like server-side rendering, static site generation, and API routes.</p>
      
      <h2>Getting Started</h2>
      <p>To create a new Next.js 14 project, run the following command:</p>
      <pre><code>npx create-next-app@latest my-app</code></pre>
      
      <h2>Key Features</h2>
      <ul>
        <li>App Router for better routing and layouts</li>
        <li>Server Components for improved performance</li>
        <li>Built-in optimization for images and fonts</li>
        <li>API routes for backend functionality</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Next.js 14 brings significant improvements and is the perfect choice for building modern web applications.</p>
    `,
  },
  {
    slug: "typescript-best-practices",
    title: "TypeScript Best Practices for 2024",
    image: "/images/blog/typescript.jpg",
    language: "en",
    category: "guide",
    excerpt:
      "Discover the best practices and patterns for writing clean TypeScript code.",
    date: "2024-02-20",
  },
  {
    slug: "react-hooks-erklaert",
    title: "React Hooks Erklärt",
    image: "/images/blog/react-hooks.jpg",
    language: "de",
    category: "tutorial",
    excerpt:
      "Eine umfassende Einführung in React Hooks und deren praktische Anwendung.",
    date: "2024-03-10",
  },
  {
    slug: "web-gelistirme-ipuclari",
    title: "Web Geliştirme İpuçları",
    image: "/images/blog/web-dev.jpg",
    language: "tr",
    category: "guide",
    excerpt:
      "Modern web geliştirme için faydalı ipuçları ve en iyi uygulamalar.",
    date: "2024-04-05",
  },
  {
    slug: "tailwind-css-mastery",
    title: "Mastering Tailwind CSS",
    image: "/images/blog/tailwind.jpg",
    language: "en",
    category: "tutorial",
    excerpt:
      "Deep dive into Tailwind CSS and learn how to create beautiful, responsive designs.",
    date: "2024-05-12",
  },
  {
    slug: "performance-optimization",
    title: "Web Performance Optimization",
    image: "/images/blog/performance.jpg",
    language: "en",
    category: "guide",
    excerpt:
      "Techniques and strategies to optimize your web application's performance.",
    date: "2024-06-08",
  },
];