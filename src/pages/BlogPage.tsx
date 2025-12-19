import { FiEdit3, FiCalendar, FiArrowRight } from 'react-icons/fi';
import SectionHeader from '../components/SectionHeader';

const BlogPage = () => {
    const placeholderPosts = [
        {
            title: "Coming Soon: Building Scalable Real-Time Systems",
            excerpt: "A deep dive into WebSockets, Redis pub/sub, and handling thousands of concurrent connections in production.",
            date: "Coming Soon",
            category: "Backend",
            color: "blue"
        },
        {
            title: "Coming Soon: Monorepo Architecture with NestJS & Next.js",
            excerpt: "How I structured AttendWise for shared code, type safety, and rapid development across web and mobile.",
            date: "Coming Soon",
            category: "Architecture",
            color: "green"
        },
        {
            title: "Coming Soon: From BCA to Full-Stack: My Learning Journey",
            excerpt: "Lessons learned, resources that helped, and advice for aspiring developers starting their career.",
            date: "Coming Soon",
            category: "Career",
            color: "yellow"
        }
    ];

    const getCardClass = (color: string) => {
        const classes: Record<string, string> = {
            blue: 'card-blue',
            green: 'card-green',
            yellow: 'card-yellow',
            red: 'card-red',
        };
        return classes[color] || 'card-blue';
    };

    const getTagClass = (color: string) => {
        const classes: Record<string, string> = {
            blue: 'tag-blue',
            green: 'tag-green',
            yellow: 'tag-yellow',
            red: 'tag-red',
        };
        return classes[color] || 'tag-blue';
    };

    return (
        <div className="min-h-screen py-12 px-6 md:px-12">
            <div className="max-w-6xl mx-auto space-y-12">

                {/* Page Header */}
                <SectionHeader
                    title="Blog"
                    subtitle="Thoughts on development, architecture, and my journey as a software engineer"
                />

                {/* Coming Soon Banner - Rainbow Glass */}
                <div className="relative p-8 glass-rainbow rounded-2xl text-center overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-ms-blue/10 via-ms-green/10 via-ms-yellow/10 to-ms-red/10 animate-gradient bg-[length:400%_400%]"></div>
                    <div className="relative z-10 space-y-5">
                        <div className="inline-flex items-center gap-2 px-5 py-2.5 tag-blue rounded-full text-sm font-semibold">
                            <FiEdit3 size={18} />
                            📝 Blog Coming Soon
                        </div>
                        <h2 className="text-2xl font-bold text-text-primary">
                            I'm working on some exciting content!
                        </h2>
                        <div className="flex justify-center">
                            <div className="w-24 h-1.5 divider-rainbow"></div>
                        </div>
                        <p className="text-text-secondary max-w-xl mx-auto">
                            In the meantime, connect with me on LinkedIn or check out my projects to see what I've been building.
                        </p>
                        <a
                            href="https://www.linkedin.com/in/k-s-vinayaka-8793a7225/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-blue inline-flex items-center gap-2"
                        >
                            Follow on LinkedIn
                            <FiArrowRight />
                        </a>
                    </div>
                </div>

                {/* Placeholder Posts Grid - Green Section */}
                <div className="space-y-6 section-green rounded-2xl p-8">
                    <div>
                        <h3 className="text-xl font-bold text-text-primary flex items-center gap-2">
                            <span className="w-8 h-8 bg-ms-green rounded-lg flex items-center justify-center text-white text-sm">📋</span>
                            Preview of Upcoming Posts
                        </h3>
                        <div className="w-24 h-1.5 mt-3 bg-gradient-to-r from-ms-green to-ms-yellow rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {placeholderPosts.map((post, index) => (
                            <article
                                key={index}
                                className={`group p-6 ${getCardClass(post.color)} rounded-2xl transition-all duration-300`}
                            >
                                <div className="space-y-4">
                                    <span className={`inline-block px-3 py-1.5 ${getTagClass(post.color)} rounded-full text-xs font-semibold`}>
                                        {post.category}
                                    </span>

                                    <h4 className="text-lg font-bold text-text-primary group-hover:text-ms-blue transition-colors duration-300">
                                        {post.title}
                                    </h4>

                                    <p className="text-text-secondary text-sm leading-relaxed">
                                        {post.excerpt}
                                    </p>

                                    <div className="flex items-center gap-2 text-text-muted text-sm pt-2 border-t border-gray-200">
                                        <FiCalendar size={14} />
                                        <span className="font-medium">{post.date}</span>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>

                {/* Newsletter Signup - Yellow Section */}
                <div className="p-8 section-yellow rounded-2xl text-center">
                    <h3 className="text-2xl font-bold text-text-primary mb-3 flex items-center justify-center gap-2">
                        <span className="w-10 h-10 bg-ms-yellow rounded-full flex items-center justify-center">📬</span>
                        Stay Updated
                    </h3>
                    <div className="flex justify-center mb-5">
                        <div className="w-20 h-1.5 bg-gradient-to-r from-ms-yellow to-ms-red rounded-full"></div>
                    </div>
                    <p className="text-text-secondary mb-6 max-w-md mx-auto">
                        Want to know when I publish new content? Connect with me on social media!
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a
                            href="https://github.com/vikram583135"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-outline-blue"
                        >
                            🐙 GitHub
                        </a>
                        <a
                            href="https://www.linkedin.com/in/k-s-vinayaka-8793a7225/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-outline-green"
                        >
                            💼 LinkedIn
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BlogPage;
