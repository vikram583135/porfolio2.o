import { FiCalendar, FiClock, FiArrowRight } from 'react-icons/fi';
import SectionHeader from '../components/SectionHeader';
import { useState } from 'react';

interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    category: string;
    color: string;
    content: {
        sections: {
            heading: string;
            paragraphs: string[];
            list?: string[];
        }[];
        conclusion: string;
    };
}

const BlogPage = () => {
    const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

    const blogPosts: BlogPost[] = [
        {
            id: 1,
            title: "From Monoliths to Real-Time Systems — My Journey as a Java Developer",
            excerpt: "Reflecting on the challenges and lessons learned while building scalable real-time architectures from scratch, exploring how I evolved from making things work to making systems scalable and production-ready.",
            date: "December 2024",
            readTime: "5 min read",
            category: "Career",
            color: "blue",
            content: {
                sections: [
                    {
                        heading: "Introduction",
                        paragraphs: [
                            "When I started building web applications during my MCA, my primary goal was simple: make things work. Today, my focus has shifted toward making systems scalable, real-time, and production-ready. This blog captures my journey from traditional CRUD-based applications to event-driven architectures."
                        ]
                    },
                    {
                        heading: "Early Foundations: Solving Business Problems",
                        paragraphs: [
                            "My early projects, including a Placement Management System, helped me master:"
                        ],
                        list: [
                            "Object-Oriented Programming",
                            "Database design",
                            "Role-Based Access Control (RBAC)",
                            "Secure authentication flows"
                        ]
                    },
                    {
                        heading: "The Shift: Thinking Like a Systems Engineer",
                        paragraphs: [
                            "As I progressed in my MCA, I began asking deeper questions:"
                        ],
                        list: [
                            "How do systems behave under concurrency?",
                            "What happens when multiple users act simultaneously?",
                            "How do production apps stay in sync without refreshes?"
                        ]
                    },
                    {
                        heading: "Engineering Growth: Real-Time, Event-Driven Design",
                        paragraphs: [
                            "That mindset shift resulted in PlatePal 2.0, a multi-interface food delivery ecosystem involving Customers, Restaurants, Delivery Partners, and Admins.",
                            "Instead of polling APIs, I designed a real-time architecture using:"
                        ],
                        list: [
                            "Django Channels (WebSockets)",
                            "Redis as a channel layer",
                            "React + TypeScript monorepo frontend"
                        ]
                    }
                ],
                conclusion: "My journey isn't about frameworks — it's about evolution in thinking. From monoliths to event-driven systems, each project sharpened how I design, scale, and reason about software."
            }
        },
        {
            id: 2,
            title: "Engineering PlatePal 2.0 — Orchestrating Real-Time Systems with Django & WebSockets",
            excerpt: "A deep dive into building a multi-interface food delivery ecosystem with real-time synchronization across Customers, Restaurants, Delivery Partners, and Admins.",
            date: "December 2024",
            readTime: "6 min read",
            category: "Backend",
            color: "green",
            content: {
                sections: [
                    {
                        heading: "The Problem Most Apps Hide",
                        paragraphs: [
                            "Most users see food delivery apps as a single interface. In reality, they are four synchronized systems operating in real time: Customer, Restaurant, Delivery Partner, and Admin.",
                            "Keeping all of them consistent was the real engineering challenge behind PlatePal 2.0."
                        ]
                    },
                    {
                        heading: "Architectural Decisions",
                        paragraphs: [
                            "Instead of traditional REST-only communication, I implemented:"
                        ],
                        list: [
                            "WebSockets via Django Channels for persistent connections",
                            "Redis for high-throughput message broadcasting",
                            "React + TypeScript for type safety and maintainability"
                        ]
                    },
                    {
                        heading: "Real-Time Flow Example",
                        paragraphs: [
                            "Here's how an order flows through the system:"
                        ],
                        list: [
                            "Customer places an order",
                            "Restaurant dashboard updates instantly",
                            "Nearest delivery partner receives a live notification",
                            "Admin sees system-wide state updates"
                        ]
                    },
                    {
                        heading: "Why Event-Driven Systems Matter",
                        paragraphs: [
                            "Event-driven architectures offer significant advantages:"
                        ],
                        list: [
                            "Reduce latency",
                            "Improve UX",
                            "Handle concurrency gracefully",
                            "Mirror real-world production systems"
                        ]
                    }
                ],
                conclusion: "PlatePal 2.0 wasn't about features — it was about orchestration. It strengthened my understanding of concurrency, real-time communication, and system design."
            }
        },
        {
            id: 3,
            title: "Designing a Scalable Placement Management System with Django",
            excerpt: "Building beyond 'it works' — focusing on scalability, maintainability, and clean architecture principles that made this my most adopted solution.",
            date: "December 2024",
            readTime: "4 min read",
            category: "Architecture",
            color: "yellow",
            content: {
                sections: [
                    {
                        heading: "Beyond 'It Works'",
                        paragraphs: [
                            "When building my Placement Management System, my goal wasn't just functionality — it was scalability and maintainability. That mindset is why the project became my most adopted solution."
                        ]
                    },
                    {
                        heading: "Core Engineering Principles",
                        paragraphs: [
                            "I focused on:"
                        ],
                        list: [
                            "Clean database schema design",
                            "Modular Django apps",
                            "Secure RBAC enforcement",
                            "Analytics-ready data structures"
                        ]
                    },
                    {
                        heading: "Technical Highlights",
                        paragraphs: [
                            "The system leverages modern technologies and best practices:"
                        ],
                        list: [
                            "Django 5.2 for modern ORM and security features",
                            "Custom User Model with role-based decorators",
                            "Django Filter for real-time analytics",
                            "ReportLab for automated offer letters and reports",
                            "Bootstrap 5 + Crispy Forms for responsive UI"
                        ]
                    }
                ],
                conclusion: "This project taught me that good software isn't just about solving problems — it's about solving them in a way that scales and remains maintainable over time."
            }
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

    // Blog Post Detail View
    if (selectedPost) {
        return (
            <div className="min-h-screen py-12 px-6 md:px-12">
                <div className="max-w-4xl mx-auto">
                    {/* Back Button */}
                    <button
                        onClick={() => setSelectedPost(null)}
                        className="mb-8 text-g-blue hover:text-g-blue-dark font-medium flex items-center gap-2 transition-colors"
                    >
                        ← Back to all posts
                    </button>

                    {/* Article Header */}
                    <article className="card-elevated p-8 md:p-12 rounded-goog-xl">
                        <div className="mb-6">
                            <span className={`inline-block px-3 py-1 ${getTagClass(selectedPost.color)} rounded-goog-full text-xs font-medium mb-4`}>
                                {selectedPost.category}
                            </span>
                            <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-4 leading-tight">
                                {selectedPost.title}
                            </h1>
                            <div className="flex items-center gap-4 text-text-secondary text-sm">
                                <span className="flex items-center gap-1">
                                    <FiCalendar size={14} />
                                    {selectedPost.date}
                                </span>
                                <span className="flex items-center gap-1">
                                    <FiClock size={14} />
                                    {selectedPost.readTime}
                                </span>
                            </div>
                        </div>

                        <div className="w-full h-1 divider-google mb-8"></div>

                        {/* Article Content */}
                        <div className="prose prose-lg max-w-none">
                            {selectedPost.content.sections.map((section, index) => (
                                <div key={index} className="mb-8">
                                    <h2 className="text-xl font-bold text-text-primary mb-4 flex items-center gap-2">
                                        <div className={`w-2 h-2 bg-g-${selectedPost.color} rounded-full`}></div>
                                        {section.heading}
                                    </h2>
                                    {section.paragraphs.map((para, pIndex) => (
                                        <p key={pIndex} className="text-text-secondary leading-relaxed mb-4">
                                            {para}
                                        </p>
                                    ))}
                                    {section.list && (
                                        <ul className="space-y-2 ml-4">
                                            {section.list.map((item, lIndex) => (
                                                <li key={lIndex} className="text-text-secondary flex items-start gap-2">
                                                    <span className="text-g-blue mt-1">•</span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            ))}

                            {/* Conclusion */}
                            <div className="mt-8 p-6 section-blue rounded-goog-lg">
                                <h3 className="text-lg font-bold text-text-primary mb-2">Conclusion</h3>
                                <p className="text-text-secondary leading-relaxed">
                                    {selectedPost.content.conclusion}
                                </p>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        );
    }

    // Blog List View
    return (
        <div className="min-h-screen py-12 px-6 md:px-12">
            <div className="max-w-6xl mx-auto space-y-12">

                {/* Page Header */}
                <SectionHeader
                    title="Blog"
                    subtitle="Thoughts on development, architecture, and my journey as a software engineer"
                />

                {/* Featured Post */}
                <div
                    className="card-rainbow p-8 cursor-pointer transition-all duration-200 hover:shadow-goog-3"
                    onClick={() => setSelectedPost(blogPosts[0])}
                >
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="space-y-4">
                            <span className="inline-block px-3 py-1 tag-blue rounded-goog-full text-xs font-medium">
                                Featured
                            </span>
                            <h2 className="text-2xl font-bold text-text-primary hover:text-g-blue transition-colors">
                                {blogPosts[0].title}
                            </h2>
                            <p className="text-text-secondary leading-relaxed">
                                {blogPosts[0].excerpt}
                            </p>
                            <div className="flex items-center gap-4 text-text-muted text-sm">
                                <span className="flex items-center gap-1">
                                    <FiCalendar size={14} />
                                    {blogPosts[0].date}
                                </span>
                                <span className="flex items-center gap-1">
                                    <FiClock size={14} />
                                    {blogPosts[0].readTime}
                                </span>
                            </div>
                            <button className="btn-blue inline-flex items-center gap-2 mt-2">
                                Read Article <FiArrowRight />
                            </button>
                        </div>
                        <div className="hidden md:flex justify-center items-center">
                            <div className="w-48 h-48 rounded-full bg-gradient-to-br from-g-blue via-g-green to-g-yellow opacity-20"></div>
                        </div>
                    </div>
                </div>

                {/* All Posts Grid */}
                <div className="space-y-6">
                    <div>
                        <h3 className="text-xl font-bold text-text-primary flex items-center gap-2">
                            <span className="w-8 h-8 bg-g-green rounded-goog flex items-center justify-center text-white text-sm">📝</span>
                            All Articles
                        </h3>
                        <div className="w-16 h-1 mt-3 bg-gradient-to-r from-g-green to-g-blue rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {blogPosts.map((post) => (
                            <article
                                key={post.id}
                                className={`group p-6 ${getCardClass(post.color)} cursor-pointer transition-all duration-200`}
                                onClick={() => setSelectedPost(post)}
                            >
                                <div className="space-y-4">
                                    <span className={`inline-block px-3 py-1 ${getTagClass(post.color)} rounded-goog-full text-xs font-medium`}>
                                        {post.category}
                                    </span>

                                    <h4 className="text-lg font-bold text-text-primary group-hover:text-g-blue transition-colors duration-200 line-clamp-2">
                                        {post.title}
                                    </h4>

                                    <p className="text-text-secondary text-sm leading-relaxed line-clamp-3">
                                        {post.excerpt}
                                    </p>

                                    <div className="flex items-center justify-between pt-4 border-t border-outline">
                                        <div className="flex items-center gap-2 text-text-muted text-sm">
                                            <FiCalendar size={14} />
                                            <span>{post.date}</span>
                                        </div>
                                        <span className="text-text-muted text-xs">{post.readTime}</span>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>

                {/* Connect Section */}
                <div className="p-8 section-yellow rounded-goog-xl text-center">
                    <h3 className="text-2xl font-bold text-text-primary mb-3 flex items-center justify-center gap-2">
                        <span className="w-10 h-10 bg-g-yellow rounded-full flex items-center justify-center">💬</span>
                        Let's Connect
                    </h3>
                    <div className="flex justify-center mb-5">
                        <div className="w-16 h-1 bg-gradient-to-r from-g-yellow to-g-red rounded-full"></div>
                    </div>
                    <p className="text-text-secondary mb-6 max-w-md mx-auto">
                        Want to discuss these topics or collaborate on a project? Reach out on social media!
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a
                            href="https://github.com/vikram583135"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-outline-blue"
                        >
                            GitHub
                        </a>
                        <a
                            href="https://www.linkedin.com/in/k-s-vinayaka-8793a7225/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-outline-green"
                        >
                            LinkedIn
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BlogPage;
