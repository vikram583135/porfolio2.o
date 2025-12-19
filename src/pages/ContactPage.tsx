import { getContact } from '../data/portfolioData';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi';
import { useState, FormEvent } from 'react';
import SectionHeader from '../components/SectionHeader';

const ContactPage = () => {
    const contact = getContact();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
            setTimeout(() => setSubmitStatus('idle'), 3000);
        }, 1000);
    };

    const contactMethods = [
        { icon: FiMail, label: 'Email', value: contact.email, href: `mailto:${contact.email}`, color: 'blue', emoji: '📧' },
        { icon: FiPhone, label: 'Phone', value: contact.phone, href: `tel:${contact.phone}`, color: 'green', emoji: '📞' },
        { icon: FiMapPin, label: 'Location', value: contact.location, href: null, color: 'yellow', emoji: '📍' }
    ];

    const socialLinks = [
        { icon: FiGithub, label: 'GitHub', href: contact.github, username: '@vikram583135', color: 'blue' },
        { icon: FiLinkedin, label: 'LinkedIn', href: contact.linkedin, username: 'K S Vinayaka', color: 'green' }
    ];

    const getCardClass = (color: string) => {
        const classes: Record<string, string> = {
            blue: 'card-blue',
            green: 'card-green',
            yellow: 'card-yellow',
            red: 'card-red',
        };
        return classes[color] || 'card-blue';
    };

    return (
        <div className="min-h-screen py-12 px-6 md:px-12">
            <div className="max-w-6xl mx-auto space-y-12">

                {/* Page Header */}
                <SectionHeader
                    title="Get In Touch"
                    subtitle="Have a project in mind or want to collaborate? I'd love to hear from you!"
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Contact Form - Blue Section */}
                    <div className="p-8 section-blue rounded-2xl">
                        <h2 className="text-2xl font-bold text-text-primary mb-3 flex items-center gap-2">
                            <span className="w-10 h-10 bg-ms-blue rounded-lg flex items-center justify-center text-white">✉️</span>
                            Send a Message
                        </h2>
                        <div className="w-24 h-1.5 mb-6 divider-blue"></div>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm text-text-secondary mb-2 font-medium">Name</label>
                                    <input
                                        type="text"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        required
                                        className="input-styled w-full"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm text-text-secondary mb-2 font-medium">Email</label>
                                    <input
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        required
                                        className="input-styled w-full"
                                        placeholder="your@email.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm text-text-secondary mb-2 font-medium">Subject</label>
                                <input
                                    type="text"
                                    value={formData.subject}
                                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                    required
                                    className="input-styled w-full"
                                    placeholder="What's this about?"
                                />
                            </div>

                            <div>
                                <label className="block text-sm text-text-secondary mb-2 font-medium">Message</label>
                                <textarea
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    required
                                    rows={5}
                                    className="input-styled w-full resize-none"
                                    placeholder="Tell me about your project..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full btn-blue flex items-center justify-center gap-2 py-4"
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <FiSend />
                                        Send Message
                                    </>
                                )}
                            </button>

                            {submitStatus === 'success' && (
                                <div className="p-4 card-green rounded-xl text-center font-medium">
                                    ✅ Message sent successfully! I'll get back to you soon.
                                </div>
                            )}
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-8">
                        {/* Contact Details - Green Section */}
                        <div className="space-y-4 section-green rounded-2xl p-6">
                            <h2 className="text-2xl font-bold text-text-primary flex items-center gap-2">
                                <span className="w-10 h-10 bg-ms-green rounded-lg flex items-center justify-center text-white">📋</span>
                                Contact Details
                            </h2>
                            <div className="w-24 h-1.5 bg-gradient-to-r from-ms-green to-ms-yellow rounded-full"></div>

                            <div className="space-y-4 pt-2">
                                {contactMethods.map((method, index) => (
                                    <div
                                        key={index}
                                        className={`p-4 ${getCardClass(method.color)} rounded-xl flex items-center gap-4 transition-all duration-300`}
                                    >
                                        <div className="w-12 h-12 bg-white/50 rounded-full flex items-center justify-center text-xl">
                                            {method.emoji}
                                        </div>
                                        <div>
                                            <p className="text-sm text-text-secondary font-medium">{method.label}</p>
                                            {method.href ? (
                                                <a href={method.href} className="text-text-primary hover:text-ms-blue transition-colors duration-300 font-semibold">
                                                    {method.value}
                                                </a>
                                            ) : (
                                                <p className="text-text-primary font-semibold">{method.value}</p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Connect Online - Yellow Section */}
                        <div className="space-y-4 section-yellow rounded-2xl p-6">
                            <h2 className="text-2xl font-bold text-text-primary flex items-center gap-2">
                                <span className="w-10 h-10 bg-ms-yellow rounded-lg flex items-center justify-center text-white">🌐</span>
                                Connect Online
                            </h2>
                            <div className="w-28 h-1.5 bg-gradient-to-r from-ms-yellow to-ms-red rounded-full"></div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`group p-5 ${getCardClass(social.color)} rounded-xl flex items-center gap-4 transition-all duration-300`}
                                    >
                                        <social.icon className="text-text-secondary group-hover:text-ms-blue transition-colors duration-300" size={26} />
                                        <div>
                                            <p className="text-text-primary font-semibold">{social.label}</p>
                                            <p className="text-sm text-text-secondary">{social.username}</p>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Available Status - Rainbow Glass */}
                        <div className="p-6 glass-rainbow rounded-xl">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-4 h-4 bg-ms-green rounded-full animate-pulse glow-green"></div>
                                <span className="text-ms-green-dark font-bold">✨ Available for opportunities</span>
                            </div>
                            <p className="text-text-secondary text-sm leading-relaxed">
                                I'm currently open to full-time positions and interesting freelance projects.
                                Let's build something amazing together!
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ContactPage;
