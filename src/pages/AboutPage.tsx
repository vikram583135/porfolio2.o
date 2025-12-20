import { getSummary, getSkills, getEducation, getCertifications } from '../data/portfolioData';
import { FiAward, FiBookOpen, FiCode, FiDownload } from 'react-icons/fi';
import SectionHeader from '../components/SectionHeader';
import resumePdf from '../assets/resume.pdf';

const AboutPage = () => {
    const summary = getSummary();
    const skills = getSkills();
    const education = getEducation();
    const certifications = getCertifications();

    const skillCategories = {
        'Languages': { skills: ['Python', 'Java', 'C#', 'TypeScript', 'JavaScript', 'C++', 'SQL'], color: 'blue' },
        'Frameworks': { skills: ['Django', 'NestJS', 'Node.js', '.NET', 'React', 'Next.js', 'React Native'], color: 'green' },
        'Frontend': { skills: ['HTML5', 'CSS3'], color: 'yellow' },
        'Cloud & DevOps': { skills: ['AWS (EC2, S3, IAM, CloudWatch)', 'Docker', 'CI/CD'], color: 'red' },
        'Databases & Tools': { skills: ['PostgreSQL', 'MySQL', 'Redis', 'Celery', 'WebSockets'], color: 'blue' },
        'Concepts': { skills: ['System Design', 'Caching', 'Async Workers'], color: 'green' },
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
        <div className="min-h-screen py-12 px-6 md:px-12">
            <div className="max-w-6xl mx-auto space-y-16">

                {/* Page Header */}
                <SectionHeader
                    title="About Me"
                    subtitle="Passionate about building scalable systems and beautiful user experiences"
                />

                {/* Download Resume Button */}
                <div className="flex justify-center animate-fadeIn">
                    <a
                        href={resumePdf}
                        download="KS_Vinayaka_Resume.pdf"
                        className="btn-red flex items-center gap-3 px-8 py-4 text-lg group shadow-goog-2 hover:shadow-goog-3 transition-all duration-300"
                    >
                        <FiDownload size={24} className="group-hover:translate-y-0.5 transition-transform duration-200" />
                        Download My Resume
                    </a>
                </div>

                {/* Summary Section */}
                <section className="card-rainbow p-8 animate-fadeIn">
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-g-blue rounded-goog flex items-center justify-center text-white flex-shrink-0">
                            <FiCode size={24} />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold text-text-primary mb-2">Professional Summary</h2>
                            <div className="w-16 h-1 mb-4 divider-blue"></div>
                            <p className="text-text-secondary leading-relaxed">
                                {summary}
                            </p>
                        </div>
                    </div>
                </section>

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
