import myprofilephoto from '../assets/myprofilephoto.png';

const Hero = () => {
  return (
    <div className="relative p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      {/* Left Side */}
      <div className="flex flex-col items-start relative z-10">
        <div className="absolute left-[-20px] top-0 bottom-0 w-1 bg-white/20"></div>
        <h1 className="font-poppins font-bold text-5xl md:text-7xl text-white">
          K S Vinayaka
        </h1>
        <h2 className="text-xl md:text-3xl text-text-secondary mb-10 max-w-2xl font-light">
          Java Developer
        </h2>
        <button className="mt-8 px-8 py-3 border border-white/50 rounded-full text-white uppercase text-sm tracking-widest transition-all duration-300 hover:border-white hover:bg-white/10">
          Contact
        </button>
      </div>

      {/* Right Side - Image */}
      <div className="relative flex justify-center items-center">
        <img
          src={myprofilephoto}
          alt="K S Vinayaka"
          className="max-w-xs md:max-w-sm rounded-lg mix-blend-luminosity opacity-80"
        />
      </div>
    </div>
  );
};

export default Hero;
