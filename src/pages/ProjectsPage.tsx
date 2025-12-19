import { getProjects } from '../data/portfolioData';
import { FiGithub, FiFolder } from 'react-icons/fi';
import { useState } from 'react';
import SectionHeader from '../components/SectionHeader';

const ProjectsPage = () => {
    const projects = getProjects();
    const [filter, setFilter] = useState<string>('all');

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(p => p.tech_stack.includes(filter));

    const getTechColor = (tech: string): string => {
        const colors: Record<string, string> = {
            'Django': 'tag-green',
            'React': 'tag-blue',
            'Python': 'tag-yellow',
            'JavaScript': 'tag-yellow',
            'TypeScript': 'tag-blue',
            'PostgreSQL': 'tag-blue',
            'Redis': 'tag-red',
            'Next.js': 'bg-gray-100 text-gray-700 border border-gray-300',
            'NestJS': 'tag-red',
            'Node.js': 'tag-green',
            '.NET': 'bg-purple-100 text-purple-700 border border-purple-300',
            'C#': 'bg-purple-100 text-purple-700 border border-purple-300',
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
                    subtitle="A collection of projects showcasing my skills in full-stack development"
                />

                {/* Filter Pills - Blue Section */}
                <div className="flex flex-wrap justify-center gap-3 p-6 section-blue rounded-2xl">
                    <button
                        onClick={() => setFilter('all')}
                        className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300
                      ${filter === 'all'
                                ? 'btn-blue glow-blue'
                                : 'bg-white text-text-secondary hover:bg-ms-blue/10 border-2 border-gray-200 hover:border-ms-blue'
                            }`}
                    >
                        🌟 All Projects
                    </button>
                    {[
                        { name: 'Django', emoji: '🐍', color: 'green' },
                        { name: 'React', emoji: '⚛️', color: 'blue' },
                        { name: 'NestJS', emoji: '🔴', color: 'red' },
                        { name: '.NET', emoji: '💜', color: 'purple' },
                        { name: 'JavaScript', emoji: '🟡', color: 'yellow' }
                    ].map((tech) => (
                        <button
                            key={tech.name}
                            onClick={() => setFilter(tech.name)}
                            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300
                        ${filter === tech.name
                                    ? 'btn-blue glow-blue'
                                    : 'bg-white text-text-secondary hover:bg-ms-blue/10 border-2 border-gray-200 hover:border-ms-blue'
                                }`}
                        >
                            {tech.emoji} {tech.name}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredProjects.map((project, index) => (
                        <article
                            key={index}
                            className={`group relative p-6 ${getCardColor(index)} rounded-2xl transition-all duration-500`}
                        >
                            <div className="absolute top-6 right-6">
                                <FiFolder className="text-ms-blue" size={26} />
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-xl font-bold text-text-primary group-hover:text-ms-blue transition-colors duration-300 pr-10">
                                    {project.title}
                                </h3>
                                {/* Colorful Underline */}
                                <div className="w-20 h-1 divider-rainbow rounded-full"></div>

                                <p className="text-text-secondary text-sm leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 pt-2">
                                    {project.tech_stack.map((tech) => (
                                        <span
                                            key={tech}
                                            className={`px-3 py-1.5 rounded-full text-xs font-semibold ${getTechColor(tech)}`}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                                    {(project.github || project.github_ref) && (
                                        <a
                                            href={project.github || project.github_ref}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-text-secondary hover:text-ms-blue transition-colors duration-300 font-medium"
                                        >
                                            <FiGithub size={18} />
                                            <span className="text-sm">View Code</span>
                                        </a>
                                    )}
                                    <span className="text-xs text-text-muted ml-auto bg-gray-100 px-2 py-1 rounded">
                                        {project.source}
                                    </span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {filteredProjects.length === 0 && (
                    <div className="text-center py-12 glass-rainbow rounded-2xl">
                        <p className="text-text-secondary text-lg">No projects found with the selected filter.</p>
                        <button
                            onClick={() => setFilter('all')}
                            className="mt-4 btn-blue"
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
