import { getSummary, getSkills, getEducation, getCertifications } from '../data/portfolioData';
import { FiAward, FiBookOpen, FiCode } from 'react-icons/fi';
import SectionHeader from '../components/SectionHeader';

const AboutPage = () => {
    const summary = getSummary();
    const skills = getSkills();
    const education = getEducation();
    const certifications = getCertifications();

    const skillCategories = {
        'Languages': { skills: ['Python', 'Java', 'C#', 'TypeScript', 'JavaScript', 'C++', 'SQL'], color: 'blue', icon: '🔵' },
        'Frameworks': { skills: ['Django', 'NestJS', 'Node.js', '.NET', 'React', 'Next.js', 'React Native'], color: 'green', icon: '🟢' },
        'Frontend': { skills: ['HTML5', 'CSS3'], color: 'yellow', icon: '🟡' },
        'Cloud & DevOps': { skills: ['AWS (EC2, S3, IAM, CloudWatch)', 'Docker', 'CI/CD'], color: 'red', icon: '🔴' },
        'Databases & Tools': { skills: ['PostgreSQL', 'MySQL', 'Redis', 'Celery', 'WebSockets'], color: 'blue', icon: '🔵' },
        'Concepts': { skills: ['System Design', 'Caching', 'Async Workers'], color: 'green', icon: '🟢' },
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

    return (
        <div className="min-h-screen py-12 px-6 md:px-12">
            <div className="max-w-6xl mx-auto space-y-16">

                {/* Page Header */}
                <SectionHeader
                    title="About Me"
                    subtitle="Passionate about building scalable systems and beautiful user experiences"
                />

                {/* Summary Section - Rainbow Glass */}
                <section className="relative glass-rainbow rounded-2xl p-8">
                    <div className="absolute -left-1 top-0 bottom-0 w-1.5 divider-rainbow rounded-full"></div>
                    <div className="pl-6">
                        <h2 className="text-2xl font-bold text-text-primary mb-3 flex items-center gap-3">
                            <span className="w-10 h-10 bg-ms-blue rounded-lg flex items-center justify-center text-white">
                                <FiCode size={20} />
                            </span>
                            Professional Summary
                        </h2>
                        <div className="w-24 h-1 mb-4 divider-blue"></div>
                        <p className="text-text-secondary text-lg leading-relaxed max-w-4xl">
                            {summary}
                        </p>
                    </div>
                </section>

                {/* Skills Section - Green Theme */}
                <section className="space-y-8 section-green rounded-2xl p-8">
                    <div>
                        <h2 className="text-2xl font-bold text-text-primary flex items-center gap-3">
                            <span className="w-10 h-10 bg-ms-green rounded-lg flex items-center justify-center text-white">
                                <FiCode size={20} />
                            </span>
                            Technical Skills
                        </h2>
                        <div className="w-28 h-1.5 mt-3 bg-gradient-to-r from-ms-green to-ms-green-light rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {Object.entries(skillCategories).map(([category, { skills: categorySkills, color, icon }]) => (
                            <div
                                key={category}
                                className={`p-6 ${getCardClass(color)} rounded-2xl transition-all duration-300`}
                            >
                                <h3 className="text-lg font-bold text-text-primary mb-4 flex items-center gap-2">
                                    <span>{icon}</span> {category}
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {categorySkills.filter(s => skills.includes(s)).map((skill) => (
                                        <span
                                            key={skill}
                                            className={`px-3 py-1.5 ${getTagClass(color)} rounded-full text-sm font-medium`}
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Education Section - Yellow Theme */}
                <section className="space-y-8 section-yellow rounded-2xl p-8">
                    <div>
                        <h2 className="text-2xl font-bold text-text-primary flex items-center gap-3">
                            <span className="w-10 h-10 bg-ms-yellow rounded-lg flex items-center justify-center text-white">
                                <FiBookOpen size={20} />
                            </span>
                            Education
                        </h2>
                        <div className="w-24 h-1.5 mt-3 bg-gradient-to-r from-ms-yellow to-ms-yellow-dark rounded-full"></div>
                    </div>

                    <div className="space-y-6">
                        {education.map((edu, index) => (
                            <div
                                key={index}
                                className="relative pl-8 pb-8 last:pb-0"
                            >
                                {/* Colorful Timeline Line */}
                                <div className="absolute left-[7px] top-6 bottom-0 w-0.5 bg-gradient-to-b from-ms-yellow via-ms-green to-ms-blue"></div>

                                {/* Rainbow Dot */}
                                <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-gradient-to-br from-ms-yellow to-ms-green shadow-md"></div>

                                <div className="card-yellow p-6 rounded-xl">
                                    <div className="flex flex-wrap items-start justify-between gap-2">
                                        <div>
                                            <h3 className="text-xl font-bold text-text-primary">{edu.degree}</h3>
                                            <p className="text-text-secondary font-medium">{edu.institution}</p>
                                        </div>
                                        <span className="px-4 py-1.5 tag-yellow rounded-full text-sm font-semibold">
                                            🎓 {edu.year}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Certifications Section - Red Theme */}
                <section className="space-y-8 section-red rounded-2xl p-8">
                    <div>
                        <h2 className="text-2xl font-bold text-text-primary flex items-center gap-3">
                            <span className="w-10 h-10 bg-ms-red rounded-lg flex items-center justify-center text-white">
                                <FiAward size={20} />
                            </span>
                            Certifications
                        </h2>
                        <div className="w-28 h-1.5 mt-3 bg-gradient-to-r from-ms-red to-ms-yellow rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {certifications.map((cert, index) => {
                            const cardColors = ['card-red', 'card-yellow', 'card-green', 'card-blue'];
                            const cardClass = cardColors[index % cardColors.length];
                            return (
                                <div
                                    key={index}
                                    className={`p-5 ${cardClass} rounded-xl flex items-center gap-4 transition-all duration-300`}
                                >
                                    <div className="p-3 bg-white/50 rounded-full">
                                        <FiAward className="text-ms-red" size={22} />
                                    </div>
                                    <p className="text-text-primary font-semibold">{cert}</p>
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
