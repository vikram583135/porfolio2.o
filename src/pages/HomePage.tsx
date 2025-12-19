import { getPersonal, getSummary, getSkills } from '../data/portfolioData';
import { FiGithub, FiLinkedin, FiMail, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const HomePage = () => {
    const personal = getPersonal();
    const summary = getSummary();
    const skills = getSkills().slice(0, 12);

    return (
        <div className="min-h-screen">
            {/* Hero Section with Colorful Background */}
            <section className="relative py-20 px-6 md:px-12 overflow-hidden section-rainbow">
                {/* Animated Background Circles */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-10 left-10 w-80 h-80 bg-ms-blue/20 rounded-full blur-3xl animate-pulse-slow"></div>
                    <div className="absolute bottom-10 right-10 w-96 h-96 bg-ms-green/20 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
                    <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-ms-yellow/20 rounded-full blur-3xl animate-pulse-slow delay-500"></div>
                </div>

                <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <p className="inline-block px-4 py-2 bg-ms-blue/10 border border-ms-blue/30 rounded-full text-ms-blue uppercase tracking-widest text-sm font-semibold animate-fadeIn">
                                👋 Welcome to my portfolio
                            </p>
                            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                                <span className="text-text-primary">Hi, I'm</span>
                                <br />
                                <span className="bg-gradient-to-r from-ms-blue via-ms-green via-ms-yellow to-ms-red bg-clip-text text-transparent">
                                    {personal.name}
                                </span>
                            </h1>
                            {/* Rainbow Animated Underline */}
                            <div className="w-40 h-1.5 gradient-underline rounded-full"></div>
                            <p className="text-xl md:text-2xl text-text-secondary font-medium">
                                {personal.title}
                            </p>
                        </div>

                        <p className="text-text-secondary text-lg leading-relaxed max-w-xl glass-rainbow p-4 rounded-xl">
                            {summary}
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4">
                            <Link
                                to="/projects"
                                className="btn-blue flex items-center gap-2 group"
                            >
                                View Projects
                                <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                            </Link>
                            <Link
                                to="/contact"
                                className="btn-outline-green"
                            >
                                Contact Me
                            </Link>
                        </div>

                        {/* Social Links with Colors */}
                        <div className="flex items-center gap-4 pt-4">
                            <a
                                href={personal.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-4 card-blue rounded-full hover:glow-blue transition-all duration-300"
                            >
                                <FiGithub size={22} className="text-ms-blue" />
                            </a>
                            <a
                                href={personal.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-4 card-green rounded-full hover:glow-green transition-all duration-300"
                            >
                                <FiLinkedin size={22} className="text-ms-green-dark" />
                            </a>
                            <a
                                href={`mailto:${personal.email}`}
                                className="p-4 card-red rounded-full hover:glow-red transition-all duration-300"
                            >
                                <FiMail size={22} className="text-ms-red" />
                            </a>
                        </div>
                    </div>

                    {/* Right Content - Colorful Animated Graphic */}
                    <div className="relative flex justify-center items-center">
                        <div className="relative">
                            {/* Rainbow Outer Ring */}
                            <div className="absolute inset-[-20px] rounded-full animate-spin-slow"
                                style={{ background: 'linear-gradient(135deg, #0078D4, #7FBA00, #FFB900, #F25022, #0078D4)', padding: '3px' }}>
                                <div className="w-full h-full bg-white/90 rounded-full"></div>
                            </div>

                            {/* Profile Container */}
                            <div className="w-72 h-72 md:w-96 md:h-96 rounded-full glass-rainbow flex items-center justify-center relative z-10 shadow-xl">
                                <div className="text-center space-y-4">
                                    <div className="text-6xl md:text-8xl font-bold bg-gradient-to-br from-ms-blue via-ms-green via-ms-yellow to-ms-red bg-clip-text text-transparent">
                                        {personal.name.split(' ').map(n => n[0]).join('')}
                                    </div>
                                    <p className="text-text-secondary text-sm uppercase tracking-widest font-medium">
                                        📍 {personal.location}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Preview Section - Blue Theme */}
            <section className="py-16 px-6 md:px-12 section-blue">
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-text-primary flex items-center gap-3">
                                <span className="w-10 h-10 bg-ms-blue rounded-lg flex items-center justify-center text-white">💻</span>
                                Tech Stack
                            </h2>
                            <div className="w-24 h-1.5 mt-3 divider-blue"></div>
                        </div>
                        <Link
                            to="/about"
                            className="btn-outline-blue text-sm"
                        >
                            View All <FiArrowRight className="inline ml-1" />
                        </Link>
                    </div>

                    <div className="flex flex-wrap gap-3">
                        {skills.map((skill, index) => {
                            const colors = ['tag-blue', 'tag-green', 'tag-yellow', 'tag-red'];
                            const colorClass = colors[index % colors.length];
                            return (
                                <span
                                    key={skill}
                                    className={`px-5 py-2.5 ${colorClass} rounded-full text-sm font-medium
                                     hover:scale-105 transition-all duration-300 cursor-default shadow-sm`}
                                    style={{ animationDelay: `${index * 50}ms` }}
                                >
                                    {skill}
                                </span>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
