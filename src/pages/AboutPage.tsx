import { getSummary, getSkills, getEducation, getCertifications, getExperience } from '../data/portfolioData';
import { FiAward, FiBookOpen, FiCode, FiDownload, FiEye, FiBriefcase, FiExternalLink } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';
import resumePdf from '../assets/resume.pdf';
import profileImage from '../assets/profile.png';

const AboutPage = () => {
    const summary = getSummary();
    const skills = getSkills();
    const education = getEducation();
    const certifications = getCertifications();
    const experience = getExperience();

    const skillCategories = {
        'Languages': { skills: ['Java 17', 'Python', 'TypeScript', 'SQL'], color: 'blue' },
        'Java Ecosystem': { skills: ['Spring Boot 3', 'Spring Security', 'Spring Data JPA', 'Spring Cloud', 'Hibernate', 'Maven'], color: 'green' },
        'Messaging & Cache': { skills: ['Apache Kafka', 'Redis', 'Celery'], color: 'yellow' },
        'Cloud & DevOps': { skills: ['AWS (EC2, S3, IAM, Cost Explorer)', 'Docker', 'Docker Compose', 'CI/CD', 'Git'], color: 'red' },
        'Databases': { skills: ['PostgreSQL', 'MySQL', 'SQLite'], color: 'blue' },
        'APIs & Tools': { skills: ['REST APIs', 'JWT/OAuth2', 'JUnit 5', 'Testcontainers', 'Micrometer'], color: 'green' },
    };

    const getCardClass = (color: string) => {
        const cardClasses: Record<string, string> = {
            blue: 'card-blue',
            green: 'card-green',
            red: 'card-red',
            yellow: 'card-yellow',
        };
        return cardClasses[color] || 'card-blue';
    };

    const getTagClass = (color: string) => {
        const tagClasses: Record<string, string> = {
            blue: 'tag-blue',
            green: 'tag-green',
            red: 'tag-red',
            yellow: 'tag-yellow',
        };
        return tagClasses[color] || 'tag-blue';
    };

    const getIconBgClass = (color: string) => {
        const bgClasses: Record<string, string> = {
            blue: 'bg-g-blue',
            green: 'bg-g-green',
            yellow: 'bg-g-yellow',
            red: 'bg-g-red',
        };
        return bgClasses[color] || 'bg-g-blue';
    };

    return (
        <div className="min-h-screen py-8 sm:py-12 px-4 sm:px-6 md:px-12">
            <div className="max-w-6xl mx-auto space-y-10 sm:space-y-16">

                {/* Page Header */}
                <SectionHeader
                    title="About Me"
                    subtitle="Passionate about building scalable systems and beautiful user experiences"
                />

                {/* Resume Action Buttons */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 animate-fadeIn">
                    <Link
                        to="/resume"
                        className="btn-blue flex items-center justify-center gap-2.5 px-6 py-3 text-sm font-semibold group shadow-goog-2 hover:shadow-goog-3 transition-all duration-300 text-center"
                    >
                        <FiEye size={18} className="group-hover:scale-110 transition-transform duration-200" />
                        <span>View Online Resume</span>
                    </Link>
                    <a
                        href={resumePdf}
                        download="KS_Vinayaka_Resume.pdf"
                        className="btn-red flex items-center justify-center gap-2.5 px-6 py-3 text-sm font-semibold group shadow-goog-2 hover:shadow-goog-3 transition-all duration-300 text-center"
                    >
                        <FiDownload size={18} className="group-hover:translate-y-0.5 transition-transform duration-200" />
                        <span>Download PDF Resume</span>
                    </a>
                </div>

                {/* Summary Section with Framed Profile Photo */}
                <section className="card-rainbow p-6 sm:p-8 animate-fadeIn">
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                        <div className="relative flex-shrink-0">
                            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white shadow-goog-3 p-1 relative z-10 overflow-hidden">
                                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-g-blue via-g-green via-g-yellow to-g-red p-0.5">
                                    <div className="w-full h-full bg-white rounded-full"></div>
                                </div>
                                <img
                                    src={profileImage}
                                    alt="K S Vinayaka"
                                    className="relative z-10 w-full h-full object-cover object-center rounded-full"
                                />
                            </div>
                        </div>
                        <div className="text-center sm:text-left flex-1">
                            <div className="flex items-center justify-center sm:justify-start gap-3 mb-2">
                                <h2 className="text-xl font-bold text-text-primary">Professional Summary</h2>
                                <span className="hidden sm:inline-block px-2.5 py-0.5 bg-g-blue/10 text-g-blue font-semibold text-xs rounded-full">
                                    Java & Cloud
                                </span>
                            </div>
                            <div className="w-16 h-1 mb-4 divider-blue mx-auto sm:mx-0"></div>
                            <p className="text-text-secondary leading-relaxed">
                                {summary}
                            </p>
                        </div>
                    </div>
                </section>

                {/* Professional Experience Section */}
                {experience.length > 0 && (
                    <section className="space-y-6 animate-fadeIn">
                        <div>
                            <h2 className="text-2xl font-bold text-text-primary flex items-center gap-3">
                                <span className="w-10 h-10 bg-g-blue rounded-goog flex items-center justify-center text-white">
                                    <FiBriefcase size={20} />
                                </span>
                                Professional Experience
                            </h2>
                            <div className="w-24 h-1 mt-3 bg-gradient-to-r from-g-blue to-g-green rounded-full"></div>
                        </div>

                        <div className="space-y-4">
                            {experience.map((exp, idx) => (
                                <div key={idx} className="card-blue p-6 md:p-8 space-y-4">
                                    <div className="flex flex-wrap items-center justify-between gap-2">
                                        <div>
                                            <div className="flex items-center gap-2.5">
                                                <h3 className="text-xl font-bold text-text-primary">
                                                    {exp.role} <span className="text-text-secondary font-normal">|</span> {exp.company}
                                                </h3>
                                                {exp.live && (
                                                    <a
                                                        href={exp.live}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="px-2.5 py-0.5 bg-g-green text-white text-xs font-semibold rounded-goog hover:bg-g-green-dark transition-colors inline-flex items-center gap-1 shadow-sm"
                                                    >
                                                        <span>Live</span>
                                                        <FiExternalLink size={11} />
                                                    </a>
                                                )}
                                            </div>
                                            <p className="text-sm text-text-secondary mt-0.5">{exp.location}</p>
                                        </div>
                                        <span className="px-4 py-1.5 tag-blue rounded-full text-xs font-semibold">
                                            Client Solutions & Consulting
                                        </span>
                                    </div>
                                    <ul className="space-y-2 text-sm text-text-secondary list-disc list-inside">
                                        {exp.highlights.map((h, hIdx) => (
                                            <li key={hIdx} className="leading-relaxed">
                                                {h}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Skills Section */}
                <section className="space-y-8 section-green rounded-goog-xl p-8">
                    <div>
                        <h2 className="text-2xl font-bold text-text-primary flex items-center gap-3">
                            <span className="w-10 h-10 bg-g-green rounded-goog flex items-center justify-center text-white">
                                <FiCode size={20} />
                            </span>
                            Technical Skills
                        </h2>
                        <div className="w-24 h-1 mt-3 bg-gradient-to-r from-g-green to-g-blue rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {Object.entries(skillCategories).map(([category, { skills: categorySkills, color }]) => (
                            <div
                                key={category}
                                className={`p-6 ${getCardClass(color)} transition-all duration-200`}
                            >
                                <h3 className="text-lg font-bold text-text-primary mb-4 flex items-center gap-2">
                                    <div className={`w-2 h-2 ${getIconBgClass(color)} rounded-full`}></div>
                                    {category}
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {categorySkills.filter(s => skills.includes(s)).map((skill) => (
                                        <span
                                            key={skill}
                                            className={`px-3 py-1.5 ${getTagClass(color)} rounded-goog-full text-sm`}
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Education Section */}
                <section className="space-y-8 section-yellow rounded-goog-xl p-8">
                    <div>
                        <h2 className="text-2xl font-bold text-text-primary flex items-center gap-3">
                            <span className="w-10 h-10 bg-g-yellow rounded-goog flex items-center justify-center text-white">
                                <FiBookOpen size={20} />
                            </span>
                            Education
                        </h2>
                        <div className="w-20 h-1 mt-3 bg-gradient-to-r from-g-yellow to-g-green rounded-full"></div>
                    </div>

                    <div className="space-y-6">
                        {education.map((edu, index) => (
                            <div key={index} className="relative pl-8 pb-6 last:pb-0">
                                {/* Timeline Line */}
                                <div className="absolute left-[7px] top-6 bottom-0 w-0.5 bg-gradient-to-b from-g-yellow via-g-green to-g-blue"></div>

                                {/* Timeline Dot */}
                                <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-g-yellow shadow-goog-1"></div>

                                <div className="card-yellow p-6">
                                    <div className="flex flex-wrap items-start justify-between gap-2">
                                        <div>
                                            <h3 className="text-lg font-bold text-text-primary">{edu.degree}</h3>
                                            <p className="text-text-secondary">{edu.institution}</p>
                                        </div>
                                        <span className="px-4 py-1.5 tag-yellow rounded-goog-full text-sm font-medium">
                                            🎓 {edu.year}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Certifications Section */}
                <section className="space-y-8 section-red rounded-goog-xl p-8">
                    <div>
                        <h2 className="text-2xl font-bold text-text-primary flex items-center gap-3">
                            <span className="w-10 h-10 bg-g-red rounded-goog flex items-center justify-center text-white">
                                <FiAward size={20} />
                            </span>
                            Certifications
                        </h2>
                        <div className="w-24 h-1 mt-3 bg-gradient-to-r from-g-red to-g-yellow rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {certifications.map((cert, index) => {
                            const cardColors = ['card-red', 'card-yellow', 'card-green', 'card-blue'];
                            const cardClass = cardColors[index % cardColors.length];
                            return (
                                <div
                                    key={index}
                                    className={`p-5 ${cardClass} flex items-center gap-4 transition-all duration-200`}
                                >
                                    <div className="p-2 bg-surface-alt rounded-full">
                                        <FiAward className="text-g-red" size={20} />
                                    </div>
                                    <p className="text-text-primary font-medium">{cert}</p>
                                </div>
                            );
                        })}
                    </div>
                </section>

            </div>
        </div>
    );
};

export default AboutPage;
