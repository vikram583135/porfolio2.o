import { getPersonal, getSummary, getSkills } from '../data/portfolioData';
import { FiGithub, FiLinkedin, FiMail, FiArrowRight, FiDownload, FiEye, FiFileText } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import profileImage from '../assets/profile.png';
import resumePdf from '../assets/resume.pdf';

const HomePage = () => {
    const personal = getPersonal();
    const summary = getSummary();
    const skills = getSkills().slice(0, 12);

    return (
        <div className="min-h-screen">
            {/* Hero Section - Google Partners Style */}
            <section className="relative py-10 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 overflow-hidden bg-gradient-to-br from-white via-surface-alt to-white">
                {/* Subtle Background Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-12 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-g-blue/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-12 right-4 sm:right-10 w-56 sm:w-96 h-56 sm:h-96 bg-g-green/10 rounded-full blur-3xl"></div>
                    <div className="absolute top-1/2 right-1/4 w-40 sm:w-64 h-40 sm:h-64 bg-g-yellow/10 rounded-full blur-3xl"></div>
                </div>

                <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-6 sm:space-y-8 animate-fadeIn text-center lg:text-left">
                        <div className="space-y-3 sm:space-y-4">
                            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight">
                                <span className="text-text-primary">Hi, I'm</span>
                                <br />
                                <span className="gradient-text">{personal.name}</span>
                            </h1>

                            {/* Google-style underline */}
                            <div className="w-28 sm:w-32 h-1 divider-google mx-auto lg:mx-0"></div>

                            <p className="text-lg sm:text-xl text-text-secondary font-medium">
                                {personal.title}
                            </p>
                        </div>

                        <div className="card-elevated p-4 sm:p-6 text-left">
                            <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
                                {summary}
                            </p>
                        </div>

                        {/* CTA Buttons - 2x2 grid on phone, flex on tablet/desktop */}
                        <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2.5 sm:gap-3.5 text-xs sm:text-sm">
                            <Link to="/projects" className="btn-blue flex items-center justify-center gap-1.5 sm:gap-2 group py-2.5 px-3 sm:px-4 text-center">
                                <span>Projects</span>
                                <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
                            </Link>
                            <Link to="/resume" className="btn-outline-blue flex items-center justify-center gap-1.5 sm:gap-2 group font-semibold shadow-goog-1 hover:shadow-goog-2 py-2.5 px-3 sm:px-4 text-center">
                                <FiEye size={16} className="text-g-blue" />
                                <span>Resume</span>
                            </Link>
                            <a
                                href={resumePdf}
                                download="KS_Vinayaka_Resume.pdf"
                                className="btn-red flex items-center justify-center gap-1.5 sm:gap-2 group shadow-goog-1 hover:shadow-goog-2 py-2.5 px-3 sm:px-4 text-center"
                                title="Download PDF Resume"
                            >
                                <FiDownload className="group-hover:translate-y-0.5 transition-transform duration-200" />
                                <span>Download CV</span>
                            </a>
                            <Link to="/contact" className="btn-outline-green flex items-center justify-center py-2.5 px-3 sm:px-4 text-center">
                                <span>Contact</span>
                            </Link>
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
                            <a
                                href={personal.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2.5 sm:p-3 bg-white rounded-full shadow-goog-1 hover:shadow-goog-2 transition-all duration-200 text-text-secondary hover:text-g-blue"
                                aria-label="GitHub Profile"
                            >
                                <FiGithub size={20} />
                            </a>
                            <a
                                href={personal.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2.5 sm:p-3 bg-white rounded-full shadow-goog-1 hover:shadow-goog-2 transition-all duration-200 text-text-secondary hover:text-g-blue"
                                aria-label="LinkedIn Profile"
                            >
                                <FiLinkedin size={20} />
                            </a>
                            <a
                                href={`mailto:${personal.email}`}
                                className="p-2.5 sm:p-3 bg-white rounded-full shadow-goog-1 hover:shadow-goog-2 transition-all duration-200 text-text-secondary hover:text-g-red"
                                aria-label="Send Email"
                            >
                                <FiMail size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Right Content - Profile Avatar with fluid mobile scaling */}
                    <div className="relative flex justify-center items-center animate-fadeIn delay-200 order-first lg:order-last">
                        <div className="relative">
                            {/* Profile Container with Image */}
                            <div className="w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-full bg-white shadow-goog-4 p-2 relative z-10 overflow-hidden">
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

                            {/* Floating decorative dots */}
                            <div className="absolute -top-3 -right-3 w-6 h-6 sm:w-8 sm:h-8 bg-g-blue rounded-full animate-float shadow-goog-2"></div>
                            <div className="absolute -bottom-3 -left-3 w-5 h-5 sm:w-6 sm:h-6 bg-g-green rounded-full animate-float delay-500 shadow-goog-2"></div>
                            <div className="absolute top-1/2 -right-6 w-3.5 h-3.5 sm:w-4 sm:h-4 bg-g-yellow rounded-full animate-float delay-300 shadow-goog-1"></div>
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

            {/* Resume & Credentials Feature Banner */}
            <section className="py-16 px-6 md:px-12 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="card-rainbow p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="space-y-3 max-w-2xl">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-g-blue/10 text-g-blue rounded-full text-xs font-semibold">
                                <FiFileText size={14} />
                                <span>Official Curriculum Vitae</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-text-primary">
                                Complete Resume & Experience Record
                            </h2>
                            <p className="text-text-secondary text-sm md:text-base leading-relaxed">
                                Detailed background covering production Spring Boot microservices, Kafka streaming pipelines, AWS architecture, 6 delivered client projects as Founder, and formal qualifications.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
                            <Link
                                to="/resume"
                                className="btn-blue flex items-center justify-center gap-2 w-full sm:w-auto text-sm font-semibold shadow-goog-2 hover:shadow-goog-3 transition-all"
                            >
                                <FiEye size={16} />
                                <span>View Online Resume</span>
                            </Link>
                            <a
                                href={resumePdf}
                                download="KS_Vinayaka_Resume.pdf"
                                className="btn-outline-blue flex items-center justify-center gap-2 w-full sm:w-auto text-sm font-semibold hover:bg-surface-hover transition-all"
                            >
                                <FiDownload size={16} />
                                <span>Download PDF</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
