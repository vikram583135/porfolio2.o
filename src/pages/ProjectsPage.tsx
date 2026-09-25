import { getProjects } from '../data/portfolioData';
import { FiGithub, FiFolder, FiExternalLink, FiVideo } from 'react-icons/fi';
import { useState } from 'react';
import SectionHeader from '../components/SectionHeader';

const ProjectsPage = () => {
    const projects = getProjects();
    const [filter, setFilter] = useState<string>('all');

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(p => p.tech_stack.some(t => t.toLowerCase().includes(filter.toLowerCase()) || filter.toLowerCase().includes(t.toLowerCase())));

    const getTechColor = (tech: string): string => {
        const colors: Record<string, string> = {
            'Java 17': 'tag-red',
            'Spring Boot 3.2': 'tag-green',
            'Spring Boot 3.3': 'tag-green',
            'Spring Boot': 'tag-green',
            'Spring Security': 'tag-blue',
            'Spring Data JPA': 'tag-blue',
            'Apache Kafka': 'tag-yellow',
            'Django': 'tag-green',
            'React': 'tag-blue',
            'React 19': 'tag-blue',
            'Python': 'tag-yellow',
            'JavaScript': 'tag-yellow',
            'TypeScript': 'tag-blue',
            'PostgreSQL': 'tag-blue',
            'Redis': 'tag-red',
            'Cloudinary': 'tag-green',
            'Vite': 'tag-purple',
            'REST APIs': 'tag-yellow',
            'Next.js': 'bg-surface-container text-text-primary border border-outline',
            'NestJS': 'tag-red',
            'Node.js': 'tag-green',
            '.NET': 'bg-purple-100 text-purple-700 border border-purple-200',
            'C#': 'bg-purple-100 text-purple-700 border border-purple-200',
            'SQL': 'tag-yellow',
            'HTML': 'tag-red',
            'CSS': 'tag-blue',
        };
        return colors[tech] || 'tag-blue';
    };

    const getCardColor = (index: number): string => {
        const colors = ['card-blue', 'card-green', 'card-yellow', 'card-red'];
        return colors[index % colors.length];
    };

    return (
        <div className="min-h-screen py-12 px-6 md:px-12">
            <div className="max-w-6xl mx-auto space-y-12">

                {/* Page Header */}
                <SectionHeader
                    title="My Projects"
                    subtitle="A collection of projects showcasing my skills in Java and backend development"
                />

                {/* Filter Pills */}
                <div className="flex flex-wrap justify-center gap-3 p-6 section-blue rounded-goog-xl">
                    <button
                        onClick={() => setFilter('all')}
                        className={`px-5 py-2.5 rounded-goog-full text-sm font-medium transition-all duration-200
                      ${filter === 'all'
                                ? 'bg-g-blue text-white shadow-goog-1'
                                : 'bg-white text-text-secondary hover:bg-surface-hover border border-outline'
                            }`}
                    >
                        All Projects
                    </button>
                    {[
                        { name: 'Java 17', color: 'red' },
                        { name: 'Spring Boot', color: 'green' },
                        { name: 'React', color: 'blue' },
                        { name: 'PostgreSQL', color: 'purple' },
                        { name: 'Django', color: 'yellow' }
                    ].map((tech) => (
                        <button
                            key={tech.name}
                            onClick={() => setFilter(tech.name)}
                            className={`px-5 py-2.5 rounded-goog-full text-sm font-medium transition-all duration-200
                        ${filter === tech.name
                                    ? 'bg-g-blue text-white shadow-goog-1'
                                    : 'bg-white text-text-secondary hover:bg-surface-hover border border-outline'
                                }`}
                        >
                            {tech.name}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredProjects.map((project, index) => (
                        <article
                            key={index}
                            className={`group p-6 ${getCardColor(index)} transition-all duration-200`}
                        >
                            <div className="flex items-start justify-between mb-4">
                                <FiFolder className="text-g-blue" size={28} />
                                <span className="text-xs text-text-muted bg-surface-alt px-2 py-1 rounded-goog">
                                    {project.source}
                                </span>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-xl font-bold text-text-primary group-hover:text-g-blue transition-colors duration-200">
                                    {project.title}
                                </h3>

                                <div className="w-12 h-1 divider-google"></div>

                                <p className="text-text-secondary text-sm leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 pt-2">
                                    {project.tech_stack.map((tech) => (
                                        <span
                                            key={tech}
                                            className={`px-3 py-1 rounded-goog-full text-xs font-medium ${getTechColor(tech)}`}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {(project.github || project.github_ref || project.live || project.video) && (
                                    <div className="pt-4 border-t border-outline flex items-center justify-between gap-3 flex-wrap">
                                        <div className="flex items-center gap-4 flex-wrap">
                                            {(project.github || project.github_ref) && (
                                                <a
                                                    href={project.github || project.github_ref}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 text-text-secondary hover:text-g-blue transition-colors duration-200 font-medium text-sm"
                                                >
                                                    <FiGithub size={18} />
                                                    View Code
                                                </a>
                                            )}
                                            {project.video && (
                                                <a
                                                    href={project.video}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 text-g-red hover:text-red-700 font-medium text-sm transition-colors duration-200"
                                                >
                                                    <FiVideo size={18} />
                                                    Watch Video
                                                </a>
                                            )}
                                        </div>

                                        {project.live && (
                                            <a
                                                href={project.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 text-g-blue hover:text-blue-700 font-semibold text-sm transition-colors duration-200"
                                            >
                                                <FiExternalLink size={18} />
                                                Live Demo
                                            </a>
                                        )}
                                    </div>
                                )}
                            </div>
                        </article>
                    ))}
                </div>

                {filteredProjects.length === 0 && (
                    <div className="text-center py-12 card-elevated rounded-goog-xl">
                        <p className="text-text-secondary text-lg mb-4">No projects found with the selected filter.</p>
                        <button
                            onClick={() => setFilter('all')}
                            className="btn-blue"
                        >
                            View all projects
                        </button>
                    </div>
                )}

            </div>
        </div>
    );
};

export default ProjectsPage;
