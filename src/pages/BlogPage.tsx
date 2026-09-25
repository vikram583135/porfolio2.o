import { FiCalendar, FiClock, FiArrowRight, FiVideo, FiExternalLink, FiGithub, FiPlayCircle, FiCheckCircle } from 'react-icons/fi';
import SectionHeader from '../components/SectionHeader';
import { useState } from 'react';

interface BlogPost {
    id: number;
    title: string;
    subtitle?: string;
    excerpt: string;
    date: string;
    readTime: string;
    category: string;
    color: string;
    videoUrl?: string;
    liveUrl?: string;
    githubUrl?: string;
    authorRole?: string;
    content: {
        intro?: string[];
        sections: {
            heading: string;
            paragraphs: string[];
            list?: string[];
            quote?: string;
        }[];
        conclusion: string;
    };
}

const BlogPage = () => {
    const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

    const blogPosts: BlogPost[] = [
        {
            id: 1,
            title: "ParcelPulse: Turning Delivery Packages into a New Advertising Opportunity",
            subtitle: "From an MCA Graduate & Part-Time Zomato Rider to an AccioJob Hackathon Platform",
            excerpt: "What if the millions of delivery packages moving through our cities could become a measurable advertising medium? Combining ground-level delivery experience with systems engineering to build an end-to-end AdTech & verification platform.",
            date: "February 2025",
            readTime: "7 min read",
            category: "AdTech & Systems",
            color: "blue",
            videoUrl: "https://lnkd.in/p/d3XRsYM8",
            liveUrl: "https://parcel-pulse-phi.vercel.app/admin",
            githubUrl: "https://github.com/vikram583135/ParcelPulse",
            authorRole: "MCA Graduate & Part-Time Delivery Partner",
            content: {
                intro: [
                    "As an MCA graduate and a part-time Zomato delivery partner, I have experienced the delivery ecosystem from both sides: as a technology builder and as someone working on the ground.",
                    "That experience led me to a simple question: What if the millions of delivery packages moving through our cities could become a measurable advertising medium?",
                    "That question became ParcelPulse."
                ],
                sections: [
                    {
                        heading: "The Problem I Observed",
                        paragraphs: [
                            "While working as a delivery partner across busy neighborhoods, I noticed two separate problems existing side-by-side:",
                            "On one side, delivery riders spend hours moving through busy neighborhoods every day. Their earning opportunities can vary significantly depending on peak demand, and non-seasonal or off-peak periods can be particularly challenging.",
                            "On the other side, many local and growing businesses are constantly looking for affordable, targeted ways to reach customers in specific neighborhoods. Traditional advertising (billboards, print flyers, social ads) can be expensive, difficult to measure, and often completely disconnected from the exact hyper-local areas a business wants to target.",
                            "At the same time, every delivery creates an underutilized physical touchpoint: the package itself. That package travels through streets, residential gates, apartments, offices, and communities before reaching the end customer."
                        ],
                        quote: "I saw an opportunity that was largely sitting unused: turning the moving box into a trackable, verified advertising medium."
                    },
                    {
                        heading: "The Idea: Packages as Advertising Inventory",
                        paragraphs: [
                            "Instead of treating a delivery package as just something that needs to be transported, ParcelPulse treats it as high-value physical advertising inventory.",
                            "The concept is simple and creates an aligned economic loop:"
                        ],
                        list: [
                            "Businesses pay ParcelPulse for targeted advertising campaigns.",
                            "ParcelPulse manages and serializes physical advertising stickers.",
                            "Field agents distribute those stickers in batches to participating riders.",
                            "Riders place them on packages during their normal delivery routes.",
                            "ParcelPulse verifies the placement using a two-step cryptographic evidence pipeline.",
                            "Riders earn guaranteed rewards and completion bonuses for participating.",
                            "Businesses receive measurable campaign results and geographic heatmaps."
                        ]
                    },
                    {
                        heading: "How ParcelPulse Works: The Campaign Lifecycle",
                        paragraphs: [
                            "Imagine a local business wants to run an advertising campaign in Bangalore.",
                            "The business creates a campaign through the ParcelPulse Business Portal and selects specific campaign requirements, target volume, and budget.",
                            "ParcelPulse manages the campaign economics centrally rather than making the advertiser negotiate or determine rider compensation. The platform supports both full and partial campaign payments, passing an upfront discount for full settlements.",
                            "Once the campaign is active, ParcelPulse automatically generates cryptographically serialized sticker identifiers, for example:"
                        ],
                        list: [
                            "PP-NIKE-0001 (Unique physical sticker ID)",
                            "PP-NIKE-0002 (Unique physical sticker ID)",
                            "PP-NIKE-0003 (Unique physical sticker ID)"
                        ]
                    },
                    {
                        heading: "The Rider Experience: Two-Step Evidence Workflow",
                        paragraphs: [
                            "This is where the idea becomes practical on the ground. A rider receives a set of advertising stickers and can choose to use them during their regular delivery work without slowing down or handling cumbersome tasks.",
                            "The system does not need continuous intrusive GPS tracking of the entire rider route. Instead, it focuses on validating the placement lifecycle through two lightweight evidence anchors:"
                        ],
                        list: [
                            "Step 1 — Start Evidence: After attaching a sticker to a package, the rider captures the first photograph. ParcelPulse records the photo, GPS coordinates, timestamp, rider identity, and sticker UID.",
                            "Step 2 — End Evidence: The rider continues their delivery normally. Immediately before handing the package to the customer at their doorstep, the rider captures the second photograph. ParcelPulse again records the photo, GPS coordinates, timestamp, sticker UID, and rider identity."
                        ],
                        quote: "The placement data model is built around these start and end evidence points — including GPS coordinates, timestamps, and cryptographic photo hashes."
                    },
                    {
                        heading: "Verification: The Trust Engine",
                        paragraphs: [
                            "The biggest challenge with physical offline advertising has always been trust: If a business pays for 5,000 advertising placements, how does it know that those placements actually happened?",
                            "ParcelPulse approaches that problem through automated, multi-factor evidence verification. The engine automatically checks:"
                        ],
                        list: [
                            "Dual-Photograph Presence: Both start and handover photographs must be submitted.",
                            "Campaign Association: The sticker ID must match an active, valid campaign.",
                            "Chronological Sequence: Timestamps must follow a logical time progression from attachment to delivery.",
                            "Spatial Plausibility: Recorded GPS movement between start and handover points must be geographically plausible.",
                            "Anti-Fraud Hash Uniqueness: Image perceptual hashes are checked to ensure photos have not been reused or spoofed."
                        ]
                    },
                    {
                        heading: "Placement Audit States & Admin Review",
                        paragraphs: [
                            "The verification engine classifies every submission into three clear states:"
                        ],
                        list: [
                            "VERIFIED: All automated criteria passed; rider wallet is credited automatically.",
                            "REVIEW REQUIRED: Borderline metrics or potential edge cases routed to the Admin Inspection Console for manual oversight.",
                            "REJECTED: Mismatched stickers, duplicate photos, or physically impossible GPS jumps detected."
                        ]
                    },
                    {
                        heading: "Creating an Incentive for Delivery Partners",
                        paragraphs: [
                            "ParcelPulse is designed to create a straightforward, motivating incentive mechanism that respects the rider's hustle:",
                            "For the current MVP, rider compensation includes a fixed placement reward for each verified delivery, plus an additional completion bonus for riders who finish their assigned batch quotas.",
                            "The platform also enforces minimum usage rules and provides campaign-level rider statistics, ensuring accountability while rewarding diligent riders."
                        ],
                        list: [
                            "Businesses get verified hyper-local advertising exposure.",
                            "Riders gain a legitimate supplemental income stream that fits into their existing delivery workflow.",
                            "ParcelPulse operates the trusted marketplace and verification layer."
                        ]
                    },
                    {
                        heading: "Built as an AccioJob Hackathon Project (AccioBuild 2026)",
                        paragraphs: [
                            "ParcelPulse was conceived and engineered as part of the AccioJob AccioBuild 2026 Hackathon.",
                            "The goal was not simply to create a UI prototype or pitch deck, but to build an end-to-end working concept across four distinct user portals with a complete campaign-to-verification journey:",
                            "The architecture uses a React 19 + TypeScript + Vite frontend, a Spring Boot 3.3 modular monolith backend, PostgreSQL database, and Cloudinary media storage."
                        ],
                        list: [
                            "🏢 Business Portal — Campaign creation, budget settings, payment management, and real-time reach analytics.",
                            "📦 Agent Portal — Physical sticker inventory tracking, batch check-in, and rider handover logging.",
                            "🛵 Rider App — Mobile-first interface for rapid sticker attachment photo capture, GPS tagging, and earnings dashboard.",
                            "🛡️ Admin Console — Automated verification pipeline, fraud review queue, and platform-wide system oversight."
                        ]
                    },
                    {
                        heading: "Project Walkthrough Video & Live Access",
                        paragraphs: [
                            "To demonstrate the complete lifecycle in action, a project explanation video is available detailing the technical architecture, four portals, and live verification workflow."
                        ],
                        list: [
                            "Project Explanation Video (LinkedIn): Complete walkthrough of the platform and delivery workflow.",
                            "Live Prototype (Admin Console): https://parcel-pulse-phi.vercel.app/admin",
                            "GitHub Repository: https://github.com/vikram583135/ParcelPulse"
                        ]
                    },
                    {
                        heading: "What's Next? The Road to Real-World Validation",
                        paragraphs: [
                            "This hackathon version is the starting point, not the finished business. The next stage focuses on validating the model in the real world:"
                        ],
                        list: [
                            "Piloting with local merchants and restaurants in target Bangalore neighborhoods.",
                            "Building a participating rider community and distribution hub network.",
                            "Testing sticker placement durability, adhesives, and retention across weather conditions.",
                            "Measuring advertiser campaign ROI and audience recall.",
                            "Enhancing computer vision models for automated sticker detection and fraud prevention.",
                            "Exploring formal integrations with authorized delivery aggregator ecosystems."
                        ]
                    }
                ],
                conclusion: "I started this project not just by looking at a market report, but by experiencing the delivery ecosystem myself. As someone who is both an MCA graduate and a part-time delivery partner, I saw the people, movement, packages, and businesses involved in the ecosystem every day. ParcelPulse came from asking: 'Can we create value from something that is already happening at massive scale?' I believe the answer is worth exploring. ParcelPulse — Turning delivery packages into measurable advertising opportunities."
            }
        },
        {
            id: 2,
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
            id: 3,
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
            id: 4,
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
                        className="mb-8 text-g-blue hover:text-g-blue-dark font-medium flex items-center gap-2 transition-colors cursor-pointer"
                    >
                        ← Back to all posts
                    </button>

                    {/* Article Header */}
                    <article className="card-elevated p-8 md:p-12 rounded-goog-xl">
                        <div className="mb-6">
                            <div className="flex flex-wrap items-center gap-2 mb-4">
                                <span className={`inline-block px-3 py-1 ${getTagClass(selectedPost.color)} rounded-goog-full text-xs font-medium`}>
                                    {selectedPost.category}
                                </span>
                                {selectedPost.videoUrl && (
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-red-50 text-g-red border border-red-200 rounded-goog-full text-xs font-medium">
                                        <FiVideo size={13} />
                                        Project Video Walkthrough
                                    </span>
                                )}
                                {selectedPost.authorRole && (
                                    <span className="inline-block px-3 py-1 bg-surface-alt text-text-secondary rounded-goog-full text-xs font-medium">
                                        {selectedPost.authorRole}
                                    </span>
                                )}
                            </div>

                            <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-3 leading-tight">
                                {selectedPost.title}
                            </h1>

                            {selectedPost.subtitle && (
                                <p className="text-lg text-g-blue font-medium mb-4">
                                    {selectedPost.subtitle}
                                </p>
                            )}

                            <div className="flex flex-wrap items-center gap-4 text-text-secondary text-sm">
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

                        {/* Project Explanation Video Feature Card */}
                        {selectedPost.videoUrl && (
                            <div className="mb-8 p-6 bg-gradient-to-r from-red-50 via-white to-blue-50 border-2 border-red-100 rounded-goog-xl shadow-goog-1">
                                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-full bg-g-red text-white flex items-center justify-center flex-shrink-0 shadow-md">
                                            <FiPlayCircle size={26} />
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-g-red text-white uppercase tracking-wider">
                                                    Video Explanation
                                                </span>
                                                <span className="text-xs text-text-muted">AccioJob Hackathon Walkthrough</span>
                                            </div>
                                            <h3 className="text-lg font-bold text-text-primary">
                                                Watch the Project Explanation Video
                                            </h3>
                                            <p className="text-sm text-text-secondary mt-1 max-w-xl">
                                                Comprehensive walkthrough detailing the problem statement, two-step evidence verification workflow, and a live demonstration across all four portals.
                                            </p>
                                        </div>
                                    </div>
                                    <a
                                        href={selectedPost.videoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-red flex items-center gap-2 text-sm font-semibold whitespace-nowrap shadow-goog-2 hover:shadow-goog-3 transition-all"
                                    >
                                        <FiPlayCircle size={18} />
                                        Watch Video on LinkedIn
                                        <FiExternalLink size={14} />
                                    </a>
                                </div>
                            </div>
                        )}

                        {/* Quick Resource Links Bar */}
                        {(selectedPost.liveUrl || selectedPost.githubUrl || selectedPost.videoUrl) && (
                            <div className="flex flex-wrap items-center gap-3 mb-8 p-4 bg-surface-alt rounded-goog-lg border border-outline">
                                <span className="text-xs font-semibold text-text-primary uppercase tracking-wider">
                                    Project Links:
                                </span>
                                {selectedPost.videoUrl && (
                                    <a
                                        href={selectedPost.videoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-red-100 text-g-red rounded-goog-full text-xs font-semibold hover:bg-red-200 transition-colors"
                                    >
                                        <FiVideo size={14} />
                                        Explanation Video
                                    </a>
                                )}
                                {selectedPost.liveUrl && (
                                    <a
                                        href={selectedPost.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-g-blue text-white rounded-goog-full text-xs font-semibold hover:bg-blue-600 transition-colors"
                                    >
                                        <FiExternalLink size={14} />
                                        Live Admin Prototype
                                    </a>
                                )}
                                {selectedPost.githubUrl && (
                                    <a
                                        href={selectedPost.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white text-text-primary border border-outline rounded-goog-full text-xs font-semibold hover:bg-surface-hover transition-colors"
                                    >
                                        <FiGithub size={14} />
                                        GitHub Repository
                                    </a>
                                )}
                            </div>
                        )}

                        {/* Article Content */}
                        <div className="prose prose-lg max-w-none">
                            {/* Intro Paragraphs */}
                            {selectedPost.content.intro && (
                                <div className="mb-8 p-6 section-blue rounded-goog-lg border-l-4 border-g-blue">
                                    {selectedPost.content.intro.map((para, iIndex) => (
                                        <p key={iIndex} className="text-text-primary font-medium leading-relaxed mb-3 last:mb-0">
                                            {para}
                                        </p>
                                    ))}
                                </div>
                            )}

                            {/* Main Sections */}
                            {selectedPost.content.sections.map((section, index) => (
                                <div key={index} className="mb-10">
                                    <h2 className="text-xl md:text-2xl font-bold text-text-primary mb-4 flex items-center gap-2">
                                        <div className={`w-2.5 h-2.5 bg-g-${selectedPost.color} rounded-full`}></div>
                                        {section.heading}
                                    </h2>

                                    {section.paragraphs.map((para, pIndex) => (
                                        <p key={pIndex} className="text-text-secondary leading-relaxed mb-4">
                                            {para}
                                        </p>
                                    ))}

                                    {section.list && (
                                        <ul className="space-y-2.5 ml-2 mb-4 bg-surface-alt/60 p-4 rounded-goog-lg border border-outline/50">
                                            {section.list.map((item, lIndex) => (
                                                <li key={lIndex} className="text-text-secondary flex items-start gap-2.5 text-sm md:text-base">
                                                    <span className="text-g-blue mt-1 flex-shrink-0">
                                                        <FiCheckCircle size={15} />
                                                    </span>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}

                                    {section.quote && (
                                        <div className="p-4 my-4 bg-blue-50/50 border-l-4 border-g-blue rounded-r-goog italic text-text-primary text-sm md:text-base">
                                            "{section.quote}"
                                        </div>
                                    )}
                                </div>
                            ))}

                            {/* Section for Links if present */}
                            {selectedPost.videoUrl && (
                                <div className="my-10 p-6 bg-surface-alt rounded-goog-xl border border-outline">
                                    <h3 className="text-lg font-bold text-text-primary mb-3 flex items-center gap-2">
                                        <span className="text-g-red">🎥</span>
                                        Explore the Project & Artifacts
                                    </h3>
                                    <p className="text-text-secondary text-sm mb-4">
                                        Access the live prototype, review the Spring Boot & React codebase, or watch the recorded architectural presentation:
                                    </p>
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                        <a
                                            href={selectedPost.videoUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-4 bg-white rounded-goog-lg border border-red-200 hover:border-g-red hover:shadow-goog-1 transition-all group flex flex-col justify-between"
                                        >
                                            <span className="text-xs font-bold text-g-red uppercase tracking-wider flex items-center gap-1">
                                                <FiVideo /> Explanation Video
                                            </span>
                                            <span className="text-sm font-semibold text-text-primary mt-2 group-hover:text-g-red">
                                                Watch on LinkedIn →
                                            </span>
                                        </a>

                                        {selectedPost.liveUrl && (
                                            <a
                                                href={selectedPost.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-4 bg-white rounded-goog-lg border border-blue-200 hover:border-g-blue hover:shadow-goog-1 transition-all group flex flex-col justify-between"
                                            >
                                                <span className="text-xs font-bold text-g-blue uppercase tracking-wider flex items-center gap-1">
                                                    <FiExternalLink /> Live Prototype
                                                </span>
                                                <span className="text-sm font-semibold text-text-primary mt-2 group-hover:text-g-blue">
                                                    Open Admin Console →
                                                </span>
                                            </a>
                                        )}

                                        {selectedPost.githubUrl && (
                                            <a
                                                href={selectedPost.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-4 bg-white rounded-goog-lg border border-outline hover:border-text-primary hover:shadow-goog-1 transition-all group flex flex-col justify-between"
                                            >
                                                <span className="text-xs font-bold text-text-secondary uppercase tracking-wider flex items-center gap-1">
                                                    <FiGithub /> Source Code
                                                </span>
                                                <span className="text-sm font-semibold text-text-primary mt-2 group-hover:text-g-blue">
                                                    View on GitHub →
                                                </span>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            )}

                            {/* Conclusion */}
                            <div className="mt-8 p-6 section-blue rounded-goog-lg border border-blue-200">
                                <h3 className="text-lg font-bold text-text-primary mb-2 flex items-center gap-2">
                                    <span>💡</span> Conclusion: From a Delivery Route to a Business Idea
                                </h3>
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
                    subtitle="Thoughts on development, architecture, real-world systems, and engineering journeys"
                />

                {/* Featured Post */}
                <div
                    className="card-rainbow p-8 cursor-pointer transition-all duration-200 hover:shadow-goog-3"
                    onClick={() => setSelectedPost(blogPosts[0])}
                >
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="space-y-4">
                            <div className="flex flex-wrap items-center gap-2">
                                <span className="inline-block px-3 py-1 tag-blue rounded-goog-full text-xs font-medium">
                                    Featured Article
                                </span>
                                {blogPosts[0].videoUrl && (
                                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-red-100 text-g-red rounded-goog-full text-xs font-semibold">
                                        <FiVideo size={12} /> Project Video
                                    </span>
                                )}
                            </div>

                            <h2 className="text-2xl md:text-3xl font-bold text-text-primary hover:text-g-blue transition-colors">
                                {blogPosts[0].title}
                            </h2>

                            {blogPosts[0].subtitle && (
                                <p className="text-sm text-g-blue font-semibold">
                                    {blogPosts[0].subtitle}
                                </p>
                            )}

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

                            <div className="flex flex-wrap items-center gap-3 pt-2">
                                <button className="btn-blue inline-flex items-center gap-2">
                                    Read Article <FiArrowRight />
                                </button>
                                {blogPosts[0].videoUrl && (
                                    <a
                                        href={blogPosts[0].videoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={(e) => e.stopPropagation()}
                                        className="btn-outline-red inline-flex items-center gap-1.5 text-sm"
                                    >
                                        <FiPlayCircle size={16} />
                                        Watch Video
                                    </a>
                                )}
                            </div>
                        </div>

                        <div className="hidden md:flex flex-col justify-center items-center p-6 bg-surface-alt/60 rounded-goog-xl border border-outline/60 text-center space-y-4">
                            <div className="w-16 h-16 rounded-full bg-blue-100 text-g-blue flex items-center justify-center text-3xl shadow-sm">
                                📦
                            </div>
                            <div>
                                <h4 className="font-bold text-text-primary text-base">ParcelPulse Architecture</h4>
                                <p className="text-xs text-text-secondary mt-1 max-w-xs">
                                    React 19 • Spring Boot 3.3 • PostgreSQL • Two-Step GPS & Hash Evidence Pipeline
                                </p>
                            </div>
                            <div className="flex items-center gap-2 text-xs text-g-green font-medium bg-green-50 px-3 py-1.5 rounded-goog-full border border-green-200">
                                <FiCheckCircle size={14} /> AccioBuild 2026 Hackathon
                            </div>
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

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                        {blogPosts.map((post) => (
                            <article
                                key={post.id}
                                className={`group p-6 ${getCardClass(post.color)} cursor-pointer transition-all duration-200 flex flex-col justify-between`}
                                onClick={() => setSelectedPost(post)}
                            >
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between gap-2">
                                        <span className={`inline-block px-3 py-1 ${getTagClass(post.color)} rounded-goog-full text-xs font-medium`}>
                                            {post.category}
                                        </span>
                                        {post.videoUrl && (
                                            <span className="text-g-red flex items-center gap-1 text-xs font-semibold">
                                                <FiVideo size={13} /> Video
                                            </span>
                                        )}
                                    </div>

                                    <h4 className="text-lg font-bold text-text-primary group-hover:text-g-blue transition-colors duration-200 line-clamp-2">
                                        {post.title}
                                    </h4>

                                    <p className="text-text-secondary text-sm leading-relaxed line-clamp-3">
                                        {post.excerpt}
                                    </p>
                                </div>

                                <div className="flex items-center justify-between pt-4 mt-4 border-t border-outline">
                                    <div className="flex items-center gap-2 text-text-muted text-sm">
                                        <FiCalendar size={14} />
                                        <span>{post.date}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-text-muted text-xs">{post.readTime}</span>
                                        <FiArrowRight className="text-text-muted group-hover:text-g-blue group-hover:translate-x-1 transition-all" size={14} />
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
                        Want to discuss these topics, collaborate on ParcelPulse, or explore engineering opportunities? Reach out!
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
                        <a
                            href="https://parcel-pulse-phi.vercel.app/admin"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-outline-red"
                        >
                            ParcelPulse Live Prototype
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BlogPage;
