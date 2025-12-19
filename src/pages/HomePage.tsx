import { getPersonal, getSummary, getSkills } from '../data/portfolioData';
import { FiGithub, FiLinkedin, FiMail, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import profileImage from '../assets/profile.png';

const HomePage = () => {
    const personal = getPersonal();
    const summary = getSummary();
    const skills = getSkills().slice(0, 12);

    return (
        <div className="min-h-screen">
            {/* Hero Section - Google Partners Style */}
            <section className="relative py-20 px-6 md:px-12 overflow-hidden bg-gradient-to-br from-white via-surface-alt to-white">
                {/* Subtle Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-g-blue/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-g-green/10 rounded-full blur-3xl"></div>
                    <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-g-yellow/10 rounded-full blur-3xl"></div>
                </div>

                <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-8 animate-fadeIn">
                        <div className="space-y-4">
                            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                                <span className="text-text-primary">Hi, I'm</span>
                                <br />
                                <span className="gradient-text">{personal.name}</span>
                            </h1>

                            {/* Google-style underline */}
                            <div className="w-32 h-1 divider-google"></div>

                            <p className="text-xl text-text-secondary font-medium">
                                {personal.title}
                            </p>
                        </div>

                        <div className="card-elevated p-6">
                            <p className="text-text-secondary leading-relaxed">
                                {summary}
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4">
                            <Link to="/projects" className="btn-blue flex items-center gap-2 group">
                                View Projects
                                <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
                            </Link>
                            <Link to="/contact" className="btn-outline-green">
                                Contact Me
                            </Link>
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center gap-4 pt-4">
                            <a
                                href={personal.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-white rounded-full shadow-goog-1 hover:shadow-goog-2 transition-all duration-200 text-text-secondary hover:text-g-blue"
                            >
                                <FiGithub size={22} />
                            </a>
                            <a
                                href={personal.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-white rounded-full shadow-goog-1 hover:shadow-goog-2 transition-all duration-200 text-text-secondary hover:text-g-blue"
                            >
                                <FiLinkedin size={22} />
                            </a>
                            <a
                                href={`mailto:${personal.email}`}
                                className="p-3 bg-white rounded-full shadow-goog-1 hover:shadow-goog-2 transition-all duration-200 text-text-secondary hover:text-g-red"
                            >
                                <FiMail size={22} />
                            </a>
                        </div>
                    </div>

                    {/* Right Content - Profile Avatar */}
                    <div className="relative flex justify-center items-center animate-fadeIn delay-200">
                        <div className="relative">
                            {/* Profile Container with Image */}
                            <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-white shadow-goog-4 p-2 relative z-10 overflow-hidden">
                                {/* Google-style gradient ring */}
                                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-g-blue via-g-green via-g-yellow to-g-red p-1">
                                    <div className="w-full h-full bg-white rounded-full"></div>
                                </div>

                                {/* Profile Image */}
                                <img
                                    src={profileImage}
                                    alt={personal.name}
                                    className="relative z-10 w-full h-full object-cover rounded-full"
                                />
                            </div>

                            {/* Floating dots */}
                            <div className="absolute -top-4 -right-4 w-8 h-8 bg-g-blue rounded-full animate-float shadow-goog-2"></div>
                            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-g-green rounded-full animate-float delay-500 shadow-goog-2"></div>
                            <div className="absolute top-1/2 -right-8 w-4 h-4 bg-g-yellow rounded-full animate-float delay-300 shadow-goog-1"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Preview Section */}
            <section className="py-16 px-6 md:px-12 section-blue">
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-text-primary flex items-center gap-3">
                                <span className="w-10 h-10 bg-g-blue rounded-goog flex items-center justify-center text-white text-lg">💻</span>
                                Tech Stack
                            </h2>
                            <div className="w-20 h-1 mt-3 divider-blue"></div>
                        </div>
                        <Link to="/about" className="btn-outline-blue text-sm">
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
                                    className={`px-4 py-2 ${colorClass} rounded-goog-full text-sm
                                     hover:shadow-goog-1 transition-all duration-200 cursor-default`}
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
