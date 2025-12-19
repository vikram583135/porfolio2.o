// Portfolio Data Types and Service
// This file loads and exports the portfolio JSON data with TypeScript types

export interface Personal {
    name: string;
    title: string;
    location: string;
    email: string;
    phone: string;
    github: string;
    linkedin: string;
}

export interface Education {
    degree: string;
    year: string;
    institution: string;
}

export interface Project {
    title: string;
    description: string;
    tech_stack: string[];
    source: string;
    github?: string;
    github_ref?: string;
}

export interface Contact {
    email: string;
    phone: string;
    location: string;
    github: string;
    linkedin: string;
}

export interface BlogPost {
    title: string;
    excerpt: string;
    date: string;
    url: string;
}

export interface PortfolioData {
    personal: Personal;
    summary: string;
    skills: string[];
    education: Education[];
    certifications: string[];
    projects: Project[];
    blog_posts: BlogPost[];
    contact: Contact;
}

// Import the JSON data
import portfolioJson from '../../ks_vinayaka_portfolio.json';

export const portfolioData: PortfolioData = portfolioJson as PortfolioData;

// Helper functions
export const getPersonal = (): Personal => portfolioData.personal;
export const getSummary = (): string => portfolioData.summary;
export const getSkills = (): string[] => portfolioData.skills;
export const getEducation = (): Education[] => portfolioData.education;
export const getCertifications = (): string[] => portfolioData.certifications;
export const getProjects = (): Project[] => portfolioData.projects;
export const getBlogPosts = (): BlogPost[] => portfolioData.blog_posts;
export const getContact = (): Contact => portfolioData.contact;
