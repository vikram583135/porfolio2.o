interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    className?: string;
}

const SectionHeader = ({ title, subtitle, className = '' }: SectionHeaderProps) => {
    return (
        <header className={`text-center space-y-4 ${className}`}>
            <h1 className="text-4xl md:text-6xl font-bold">
                <span className="bg-gradient-to-r from-ms-blue via-ms-green via-ms-yellow to-ms-red bg-clip-text text-transparent">
                    {title}
                </span>
            </h1>
            {/* Microsoft Rainbow Underline */}
            <div className="flex justify-center">
                <div className="w-24 h-1 bg-gradient-to-r from-ms-blue via-ms-green via-ms-yellow to-ms-red rounded-full"></div>
            </div>
            {subtitle && (
                <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                    {subtitle}
                </p>
            )}
        </header>
    );
};

export default SectionHeader;
