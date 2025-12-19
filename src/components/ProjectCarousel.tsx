import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

const ProjectCarousel = () => {
  return (
    <div className="absolute top-1/2 right-8 -translate-y-1/2 hidden md:flex flex-col items-center space-y-4">
        <div className="text-white font-montserrat">
            <span className="text-2xl">01</span>
            <span className="text-muted-grey"> / 06</span>
        </div>
        <div className="w-px h-24 bg-white/20"></div>
        <div className="flex flex-col space-y-2">
            <button className="p-2 border border-white/50 rounded-full text-white hover:bg-white/10 transition-colors duration-300">
                <FiArrowLeft />
            </button>
            <button className="p-2 border border-white/50 rounded-full text-white hover:bg-white/10 transition-colors duration-300">
                <FiArrowRight />
            </button>
        </div>
        <a href="#" className="text-white uppercase text-xs tracking-widest writing-mode-vertical-rl">
            View Profile
        </a>
    </div>
  );
};

export default ProjectCarousel;
