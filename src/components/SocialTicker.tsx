import { useState, useEffect } from 'react';


const SocialTicker = () => {
    const socialTabs = ['SOCIAL', 'Twitter', 'Dribbble', 'Facebook'];
    const [activeTab, setActiveTab] = useState(0);

    const tweets = [
        {
            user: 'K S Vinayaka',
            handle: '@ksvinayaka',
            time: '5 min ago',
            text: 'Just pushed a new update to my portfolio project! Loving how the glassmorphism effect turned out. #webdev #react'
        },
        {
            user: 'K S Vinayaka',
            handle: '@ksvinayaka',
            time: '1 hour ago',
            text: 'Exploring the latest features in Tailwind CSS. The JIT compiler is a game changer for performance. #css #tailwindcss'
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveTab((prevTab) => (prevTab + 1) % socialTabs.length);
        }, 6000);
        return () => clearInterval(timer);
    }, [socialTabs.length]);

    return (
        <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-md rounded-xl p-4 w-80 max-w-xs shadow-lg border border-white/10">
            <div className="flex justify-between items-center text-sm mb-4">
                {socialTabs.map((tab, index) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(index)}
                        className={`uppercase tracking-widest transition-colors duration-300 ${activeTab === index ? 'text-white' : 'text-muted-grey'}`}
                    >
                        {tab}
                    </button>
                ))}
            </div>
            <div className="space-y-4">
                {tweets.map((tweet, index) => (
                    <div key={index}>
                        <div className="flex items-center justify-between text-xs text-muted-grey">
                            <p>{tweet.user} <span className="ml-2">{tweet.handle}</span></p>
                            <p>{tweet.time}</p>
                        </div>
                        <p className="text-white text-sm mt-1">{tweet.text}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SocialTicker;
