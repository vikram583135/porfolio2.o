import { useState } from 'react';
import { 
    FiDownload, 
    FiExternalLink, 
    FiPrinter, 
    FiCopy, 
    FiCheck, 
    FiFileText, 
    FiEye, 
    FiCheckCircle, 
    FiBriefcase, 
    FiAward, 
    FiBookOpen, 
    FiCode, 
    FiMail, 
    FiPhone, 
    FiMapPin, 
    FiGithub, 
    FiLinkedin,
    FiGlobe
} from 'react-icons/fi';
import SectionHeader from '../components/SectionHeader';
import { 
    getPersonal, 
    getSummary, 
    getEducation, 
    getCertifications, 
    getProjects, 
    getExperience, 
    getAchievements 
} from '../data/portfolioData';
import resumePdf from '../assets/resume.pdf';

const ResumePage = () => {
    const personal = getPersonal();
    const summary = getSummary();
    const education = getEducation();
    const certifications = getCertifications();
    const projects = getProjects();
    const experience = getExperience();
    const achievements = getAchievements();
    const [activeTab, setActiveTab] = useState<'pdf' | 'web'>(() => {
        if (typeof window !== 'undefined' && window.innerWidth < 640) {
            return 'web';
        }
        return 'pdf';
    });
    const [copied, setCopied] = useState(false);

    const handleCopyLink = () => {
        const url = window.location.origin ? `${window.location.origin}/resume` : window.location.href;
        navigator.clipboard.writeText(url).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2500);
        });
    };

    const handlePrint = () => {
        window.print();
    };

    const skillCategories = [
        { name: 'Languages', items: ['Java 17', 'Python', 'TypeScript', 'SQL'], color: 'blue' },
        { name: 'Java Ecosystem', items: ['Spring Boot 3', 'Spring Security', 'Spring Data JPA', 'Spring Cloud', 'Hibernate', 'Maven'], color: 'green' },
        { name: 'Messaging & Cache', items: ['Apache Kafka', 'Redis', 'Celery'], color: 'yellow' },
        { name: 'Cloud & DevOps', items: ['AWS (EC2, S3, IAM, Cost Explorer)', 'Docker', 'Docker Compose', 'CI/CD', 'Git', 'Vercel', 'Cloudinary'], color: 'red' },
        { name: 'Databases', items: ['PostgreSQL', 'MySQL', 'SQLite', 'Query Optimization', 'Indexing'], color: 'blue' },
        { name: 'APIs & Tools', items: ['REST APIs', 'JWT/OAuth2', 'Swagger/OpenAPI', 'JUnit 5', 'Testcontainers', 'Micrometer'], color: 'green' },
    ];

    const getTagClass = (color: string) => {
        const classes: Record<string, string> = {
            blue: 'tag-blue',
            green: 'tag-green',
            yellow: 'tag-yellow',
            red: 'tag-red',
        };
        return classes[color] || 'tag-blue';
    };

    return (
        <div className="min-h-screen py-12 px-4 sm:px-6 md:px-12 bg-white">
            <div className="max-w-6xl mx-auto space-y-10">

                {/* Header Section */}
                <div className="print:hidden">
                    <SectionHeader
                        title="Resume & Curriculum Vitae"
                        subtitle="AWS Certified Cloud Practitioner • Production-Grade Spring Boot Microservices"
                    />
                </div>

                {/* Quick Credential Highlights Bar */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 print:hidden animate-fadeIn">
                    <div className="p-4 bg-surface-alt rounded-goog-lg border border-outline hover:border-g-blue transition-colors">
                        <div className="flex items-center gap-3">
                            <div className="p-2.5 bg-g-blue/10 text-g-blue rounded-goog">
                                <FiBriefcase size={20} />
                            </div>
                            <div>
                                <p className="text-xs text-text-secondary font-medium">Experience</p>
                                <p className="text-sm font-bold text-text-primary">Founder & Dev</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-4 bg-surface-alt rounded-goog-lg border border-outline hover:border-g-green transition-colors">
                        <div className="flex items-center gap-3">
                            <div className="p-2.5 bg-g-green/10 text-g-green rounded-goog">
                                <FiAward size={20} />
                            </div>
                            <div>
                                <p className="text-xs text-text-secondary font-medium">Certification</p>
                                <p className="text-sm font-bold text-text-primary">AWS (CLF-C02)</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-4 bg-surface-alt rounded-goog-lg border border-outline hover:border-g-yellow transition-colors">
                        <div className="flex items-center gap-3">
                            <div className="p-2.5 bg-g-yellow/10 text-g-yellow-dark rounded-goog">
                                <FiCode size={20} />
                            </div>
                            <div>
                                <p className="text-xs text-text-secondary font-medium">Primary Stack</p>
                                <p className="text-sm font-bold text-text-primary">Java 17 • Spring 3</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-4 bg-surface-alt rounded-goog-lg border border-outline hover:border-g-red transition-colors">
                        <div className="flex items-center gap-3">
                            <div className="p-2.5 bg-g-red/10 text-g-red rounded-goog">
                                <FiBookOpen size={20} />
                            </div>
                            <div>
                                <p className="text-xs text-text-secondary font-medium">Education</p>
                                <p className="text-sm font-bold text-text-primary">MCA (BU) • BCA</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Primary Action Control Bar */}
                <div className="card-elevated p-4 sm:p-5 flex flex-wrap items-center justify-between gap-4 print:hidden sticky top-20 z-40 bg-white/95 backdrop-blur-md border border-outline">
                    {/* View Switcher Tabs */}
                    <div className="flex items-center bg-surface-hover p-1 rounded-goog">
                        <button
                            onClick={() => setActiveTab('pdf')}
                            className={`flex items-center gap-2 px-4 py-2 rounded-goog text-sm font-medium transition-all duration-200 ${
                                activeTab === 'pdf'
                                    ? 'bg-white text-g-blue shadow-goog-1 font-semibold'
                                    : 'text-text-secondary hover:text-text-primary'
                            }`}
                            id="tab-pdf-viewer"
                        >
                            <FiFileText size={16} />
                            <span>PDF Document</span>
                        </button>
                        <button
                            onClick={() => setActiveTab('web')}
                            className={`flex items-center gap-2 px-4 py-2 rounded-goog text-sm font-medium transition-all duration-200 ${
                                activeTab === 'web'
                                    ? 'bg-white text-g-blue shadow-goog-1 font-semibold'
                                    : 'text-text-secondary hover:text-text-primary'
                            }`}
                            id="tab-web-resume"
                        >
                            <FiEye size={16} />
                            <span>Interactive View</span>
                        </button>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                        {/* Download Button */}
                        <a
                            href={resumePdf}
                            download="KS_Vinayaka_Resume.pdf"
                            className="btn-blue flex items-center gap-2 text-sm py-2.5 px-4 font-semibold shadow-goog-1 hover:shadow-goog-2 transition-all"
                            title="Download PDF version directly"
                            id="btn-download-resume"
                        >
                            <FiDownload size={16} />
                            <span>Download PDF</span>
                        </a>

                        {/* Open in New Tab */}
                        <a
                            href={resumePdf}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-outline-blue flex items-center gap-2 text-sm py-2 px-3.5 transition-colors"
                            title="Open raw PDF file in new browser tab"
                            id="btn-open-tab"
                        >
                            <FiExternalLink size={16} />
                            <span className="hidden sm:inline">Open in Tab</span>
                        </a>

                        {/* Print Button */}
                        <button
                            onClick={handlePrint}
                            className="p-2.5 text-text-secondary hover:text-g-blue bg-surface-alt hover:bg-surface-hover rounded-goog border border-outline transition-colors"
                            title="Print Resume"
                            aria-label="Print Resume"
                        >
                            <FiPrinter size={18} />
                        </button>

                        {/* Copy Link Button */}
                        <button
                            onClick={handleCopyLink}
                            className="flex items-center gap-1.5 px-3 py-2 text-sm text-text-secondary hover:text-g-blue bg-surface-alt hover:bg-surface-hover rounded-goog border border-outline transition-colors relative"
                            title="Copy link to this page"
                            id="btn-copy-link"
                        >
                            {copied ? (
                                <>
                                    <FiCheck size={16} className="text-g-green" />
                                    <span className="text-xs text-g-green font-medium">Copied!</span>
                                </>
                            ) : (
                                <>
                                    <FiCopy size={16} />
                                    <span className="hidden sm:inline text-xs">Copy Link</span>
                                </>
                            )}
                        </button>
                    </div>
                </div>

                {/* TAB 1: PDF DOCUMENT VIEWER */}
                {activeTab === 'pdf' && (
                    <div className="space-y-4 animate-fadeIn">
                        {/* Notice for mobile users */}
                        <div className="sm:hidden p-3 bg-g-blue/10 border border-g-blue/20 rounded-goog text-xs text-text-secondary flex items-center justify-between">
                            <span>Using a mobile device? For best reading experience:</span>
                            <button
                                onClick={() => setActiveTab('web')}
                                className="text-g-blue font-bold ml-2 underline"
                            >
                                Switch to Web View
                            </button>
                        </div>

                        {/* PDF Frame Container */}
                        <div className="card-elevated overflow-hidden border border-outline rounded-goog-lg bg-surface-alt">
                            {/* Document Viewer Top Bar */}
                            <div className="px-4 py-3 bg-surface border-b border-outline flex items-center justify-between text-xs text-text-secondary">
                                <div className="flex items-center gap-2">
                                    <span className="w-2.5 h-2.5 rounded-full bg-g-red"></span>
                                    <span className="w-2.5 h-2.5 rounded-full bg-g-yellow"></span>
                                    <span className="w-2.5 h-2.5 rounded-full bg-g-green"></span>
                                    <span className="font-semibold text-text-primary ml-2 font-mono">
                                        KS_Vinayaka_Resume.pdf
                                    </span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="hidden sm:inline text-text-muted">1 Page • PDF</span>
                                    <a
                                        href={resumePdf}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-g-blue hover:underline flex items-center gap-1 font-medium"
                                    >
                                        Fullscreen <FiExternalLink size={12} />
                                    </a>
                                </div>
                            </div>

                            {/* Embedded Document Object / iframe */}
                            <div className="relative w-full h-[750px] sm:h-[900px] md:h-[1100px] bg-white">
                                <iframe
                                    src={`${resumePdf}#toolbar=1&navpanes=0&scrollbar=1`}
                                    title="K S Vinayaka Resume PDF Viewer"
                                    className="w-full h-full border-0"
                                />
                            </div>

                            {/* Viewer Footer */}
                            <div className="p-4 bg-surface border-t border-outline flex flex-wrap items-center justify-between gap-3 text-sm">
                                <div className="text-text-secondary flex items-center gap-2">
                                    <FiCheckCircle className="text-g-green" />
                                    <span>Verified PDF Document • Updated for 2025</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <a
                                        href={resumePdf}
                                        download="KS_Vinayaka_Resume.pdf"
                                        className="text-g-blue font-semibold hover:underline flex items-center gap-1.5"
                                    >
                                        <FiDownload size={14} /> Download Copy
                                    </a>
                                    <span className="text-outline">|</span>
                                    <button
                                        onClick={() => setActiveTab('web')}
                                        className="text-text-secondary hover:text-text-primary font-medium"
                                    >
                                        View as Web Page
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* TAB 2: INTERACTIVE DIGITAL RESUME (ATS-Optimized & Mobile-Friendly) */}
                {(activeTab === 'web' || true) && (
                    <div className={`${activeTab === 'web' ? 'block' : 'hidden print:block'} animate-fadeIn space-y-8`}>
                        {/* Main Resume Sheet */}
                        <div className="bg-white rounded-goog-xl border border-outline shadow-goog-2 p-6 sm:p-10 md:p-12 space-y-10">

                            {/* Resume Header */}
                            <div className="border-b border-outline pb-8">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                                    <div>
                                        <h1 className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight">
                                            {personal.name}
                                        </h1>
                                        <p className="text-xl font-semibold text-g-blue mt-1">
                                            {personal.title}
                                        </p>
                                        <p className="text-text-secondary text-sm mt-1 flex items-center gap-1.5">
                                            <FiMapPin className="text-g-red" size={14} />
                                            {personal.location}
                                        </p>
                                    </div>

                                    {/* Contact & Social Links */}
                                    <div className="flex flex-col sm:flex-row md:flex-col gap-2 text-sm text-text-secondary">
                                        <a 
                                            href={`mailto:${personal.email}`} 
                                            className="flex items-center gap-2 hover:text-g-blue transition-colors"
                                        >
                                            <FiMail className="text-g-blue" size={15} />
                                            <span>{personal.email}</span>
                                        </a>
                                        <a 
                                            href={`tel:${personal.phone}`} 
                                            className="flex items-center gap-2 hover:text-g-green transition-colors"
                                        >
                                            <FiPhone className="text-g-green" size={15} />
                                            <span>{personal.phone}</span>
                                        </a>
                                        <div className="flex items-center gap-4 pt-1">
                                            <a 
                                                href={personal.linkedin} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-1 text-g-blue hover:underline font-medium"
                                            >
                                                <FiLinkedin size={15} />
                                                <span>LinkedIn</span>
                                            </a>
                                            <a 
                                                href={personal.github} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-1 text-text-primary hover:text-g-blue font-medium"
                                            >
                                                <FiGithub size={15} />
                                                <span>GitHub</span>
                                            </a>
                                            <a 
                                                href="/" 
                                                className="flex items-center gap-1 text-g-green hover:underline font-medium"
                                            >
                                                <FiGlobe size={15} />
                                                <span>Portfolio</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Summary */}
                            <section className="space-y-3">
                                <h2 className="text-lg font-bold uppercase tracking-wider text-text-primary flex items-center gap-2">
                                    <span className="w-2.5 h-2.5 rounded-full bg-g-blue"></span>
                                    Professional Summary
                                </h2>
                                <p className="text-text-secondary leading-relaxed bg-surface-alt p-4 rounded-goog border-l-4 border-g-blue">
                                    {summary}
                                </p>
                            </section>

                            {/* Experience */}
                            <section className="space-y-4">
                                <h2 className="text-lg font-bold uppercase tracking-wider text-text-primary flex items-center gap-2">
                                    <span className="w-2.5 h-2.5 rounded-full bg-g-green"></span>
                                    Experience
                                </h2>

                                {experience.map((exp, idx) => (
                                    <div key={idx} className="card-elevated p-6 border-l-4 border-g-green">
                                        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                                            <h3 className="text-lg font-bold text-text-primary">
                                                {exp.role} <span className="text-text-secondary font-normal">|</span> {exp.company}
                                            </h3>
                                            <span className="text-xs font-semibold px-3 py-1 bg-g-green/10 text-g-green rounded-goog-full">
                                                {exp.location}
                                            </span>
                                        </div>
                                        <ul className="mt-3 space-y-2 text-sm text-text-secondary list-disc list-inside">
                                            {exp.highlights.map((point, pIdx) => (
                                                <li key={pIdx} className="leading-relaxed">
                                                    {point}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </section>

                            {/* Technical Skills */}
                            <section className="space-y-4">
                                <h2 className="text-lg font-bold uppercase tracking-wider text-text-primary flex items-center gap-2">
                                    <span className="w-2.5 h-2.5 rounded-full bg-g-yellow"></span>
                                    Technical Skills
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {skillCategories.map((cat) => (
                                        <div key={cat.name} className="p-4 bg-surface-alt rounded-goog border border-outline">
                                            <p className="text-xs font-bold text-text-secondary uppercase mb-2">
                                                {cat.name}
                                            </p>
                                            <div className="flex flex-wrap gap-1.5">
                                                {cat.items.map((skill) => (
                                                    <span
                                                        key={skill}
                                                        className={`px-2.5 py-1 text-xs rounded-goog ${getTagClass(cat.color)} font-medium`}
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Featured Projects */}
                            <section className="space-y-4">
                                <h2 className="text-lg font-bold uppercase tracking-wider text-text-primary flex items-center gap-2">
                                    <span className="w-2.5 h-2.5 rounded-full bg-g-red"></span>
                                    Key Projects
                                </h2>

                                <div className="space-y-5">
                                    {projects.map((proj, pIdx) => (
                                        <div key={pIdx} className="p-6 bg-surface-alt rounded-goog-lg border border-outline hover:border-g-blue/50 transition-colors">
                                            <div className="flex flex-wrap items-start justify-between gap-3">
                                                <div>
                                                    <h3 className="text-base sm:text-lg font-bold text-text-primary">
                                                        {proj.title}
                                                    </h3>
                                                    <div className="flex flex-wrap gap-1.5 mt-2">
                                                        {proj.tech_stack.map((t) => (
                                                            <span key={t} className="px-2 py-0.5 bg-white text-text-secondary border border-outline rounded text-xs font-mono">
                                                                {t}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Project Links */}
                                                <div className="flex items-center gap-2 flex-shrink-0">
                                                    {proj.live && (
                                                        <a
                                                            href={proj.live}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="px-3 py-1 bg-g-green text-white text-xs font-semibold rounded-goog hover:bg-g-green-dark transition-colors flex items-center gap-1"
                                                        >
                                                            <span>Live</span>
                                                            <FiExternalLink size={11} />
                                                        </a>
                                                    )}
                                                    {proj.video && (
                                                        <a
                                                            href={proj.video}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="px-3 py-1 bg-g-yellow-dark text-white text-xs font-semibold rounded-goog transition-colors flex items-center gap-1"
                                                        >
                                                            <span>Demo</span>
                                                            <FiExternalLink size={11} />
                                                        </a>
                                                    )}
                                                    {proj.github && (
                                                        <a
                                                            href={proj.github}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="px-3 py-1 bg-text-primary text-white text-xs font-semibold rounded-goog hover:bg-g-blue transition-colors flex items-center gap-1"
                                                        >
                                                            <FiGithub size={12} />
                                                            <span>Code</span>
                                                        </a>
                                                    )}
                                                </div>
                                            </div>

                                            {proj.highlights && proj.highlights.length > 0 ? (
                                                <ul className="mt-3 space-y-1.5 text-sm text-text-secondary list-disc list-inside">
                                                    {proj.highlights.map((h, hIdx) => (
                                                        <li key={hIdx} className="leading-relaxed">
                                                            {h}
                                                        </li>
                                                    ))}
                                                </ul>
                                            ) : (
                                                <p className="mt-3 text-sm text-text-secondary leading-relaxed">
                                                    {proj.description}
                                                </p>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Achievements */}
                            <section className="space-y-4">
                                <h2 className="text-lg font-bold uppercase tracking-wider text-text-primary flex items-center gap-2">
                                    <span className="w-2.5 h-2.5 rounded-full bg-g-yellow"></span>
                                    Achievements & Leadership
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {achievements.map((ach, aIdx) => (
                                        <div key={aIdx} className="card-yellow p-5">
                                            <div className="flex items-start gap-3">
                                                <div className="p-2 bg-g-yellow/20 text-g-yellow-dark rounded-full flex-shrink-0 mt-0.5">
                                                    <FiAward size={18} />
                                                </div>
                                                <div>
                                                    <h3 className="font-bold text-text-primary text-sm sm:text-base">
                                                        {ach.title}
                                                    </h3>
                                                    <p className="text-xs font-semibold text-g-yellow-dark mt-0.5">
                                                        {ach.organization}
                                                    </p>
                                                    <p className="text-xs text-text-secondary mt-1.5 leading-relaxed">
                                                        {ach.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Education & Certifications */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                                {/* Education */}
                                <section className="space-y-4">
                                    <h2 className="text-lg font-bold uppercase tracking-wider text-text-primary flex items-center gap-2">
                                        <span className="w-2.5 h-2.5 rounded-full bg-g-blue"></span>
                                        Education
                                    </h2>
                                    <div className="space-y-3">
                                        {education.map((edu, eIdx) => (
                                            <div key={eIdx} className="p-4 bg-surface-alt rounded-goog border border-outline">
                                                <div className="flex items-center justify-between">
                                                    <h3 className="font-bold text-text-primary text-base">
                                                        {edu.degree}
                                                    </h3>
                                                    <span className="text-xs px-2.5 py-0.5 bg-g-blue/10 text-g-blue font-semibold rounded-full">
                                                        {edu.year}
                                                    </span>
                                                </div>
                                                <p className="text-sm text-text-secondary mt-1">
                                                    {edu.institution}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </section>

                                {/* Certifications */}
                                <section className="space-y-4">
                                    <h2 className="text-lg font-bold uppercase tracking-wider text-text-primary flex items-center gap-2">
                                        <span className="w-2.5 h-2.5 rounded-full bg-g-red"></span>
                                        Certifications
                                    </h2>
                                    <div className="space-y-3">
                                        {certifications.map((cert, cIdx) => (
                                            <div key={cIdx} className="p-4 card-red flex items-center gap-3">
                                                <div className="p-2 bg-g-red/10 text-g-red rounded-full flex-shrink-0">
                                                    <FiAward size={18} />
                                                </div>
                                                <p className="text-sm font-bold text-text-primary">
                                                    {cert}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            </div>

                        </div>
                    </div>
                )}

                {/* Bottom Call to Action */}
                <div className="card-rainbow p-8 text-center space-y-4 print:hidden">
                    <h3 className="text-xl font-bold text-text-primary">
                        Interested in working together or discussing potential opportunities?
                    </h3>
                    <p className="text-text-secondary max-w-xl mx-auto text-sm">
                        I am actively available for software engineering and Java backend roles. Feel free to download my resume or contact me directly.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                        <a
                            href={resumePdf}
                            download="KS_Vinayaka_Resume.pdf"
                            className="btn-blue flex items-center gap-2"
                        >
                            <FiDownload size={16} />
                            <span>Download Full Resume PDF</span>
                        </a>
                        <a
                            href="/contact"
                            className="btn-outline-green flex items-center gap-2"
                        >
                            <FiMail size={16} />
                            <span>Contact K S Vinayaka</span>
                        </a>
                    </div>
                </div>

            </div>

            {/* FLOATING MOBILE DOWNLOAD PILL */}
            <div className="sm:hidden fixed bottom-4 left-4 right-4 z-30 bg-white/95 backdrop-blur-md p-2 rounded-2xl border border-outline shadow-goog-4 flex items-center justify-between gap-2 animate-fadeIn">
                <a
                    href={resumePdf}
                    download="KS_Vinayaka_Resume.pdf"
                    className="btn-blue flex-1 py-2.5 px-3 text-xs font-semibold flex items-center justify-center gap-1.5 shadow-sm text-center"
                >
                    <FiDownload size={14} /> <span>Download PDF (17 KB)</span>
                </a>
                <a
                    href={resumePdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline-blue py-2.5 px-3 text-xs font-semibold flex items-center justify-center gap-1 text-center"
                    title="Open in new tab"
                >
                    <FiExternalLink size={14} />
                </a>
            </div>
        </div>
    );
};

export default ResumePage;
