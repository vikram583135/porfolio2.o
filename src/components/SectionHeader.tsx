interface SectionHeaderProps {
    title: string;
    subtitle?: string;
}

const SectionHeader = ({ title, subtitle }: SectionHeaderProps) => {
    return (
        <div className="text-center space-y-4 animate-fadeIn">
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary">
                {title}
            </h1>
            {/* Google-style rainbow underline */}
            <div className="flex justify-center">
                <div className="w-20 h-1 divider-google"></div>
            </div>
            {subtitle && (
                <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
                    {subtitle}
                </p>
            )}
        </div>
    );
};

export default SectionHeader;
