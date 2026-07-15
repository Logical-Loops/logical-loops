import { useEffect, useRef } from 'react';
import heroBg from '@/assets/hero.png';
import founderImg1 from '@/assets/founder_img_1.png';
import founderImg3 from '@/assets/founder_img_3.png';
import heroCtaIcon from '@/assets/images/hero_cta_icon.png';

export default function HeroSection() {
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = headlineRef.current;
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    setTimeout(() => {
      el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, 100);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center bg-white overflow-hidden pt-28 pb-16"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
        {/* Headline */}
        <h1
          ref={headlineRef}
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-gray-900 leading-[1.1] tracking-tight mb-6"
        >
          Turning Code
          <br />
          into Reality
        </h1>

        {/* Tagline */}
        <p className="text-gray-900 font-bold text-lg sm:text-xl mb-6">
          Where Innovation Meets Execution.
        </p>

        {/* Subheadline/Paragraph */}
        <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-2xl mb-8">
          At Logical Loops, we turn ideas into powerful digital solutions. We combine logic, creativity, and cutting-edge technology to build products that don't just work — they perform, scale, and inspire.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 w-full sm:w-auto">
          <button
            onClick={() => {
              const el = document.querySelector('#contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:w-auto bg-[#1D72E7] hover:bg-[#1a66cf] text-white font-bold px-8 py-3.5 rounded-full transition-all duration-300 text-sm flex items-center justify-center gap-2.5 cursor-pointer shadow-md"
          >
            Let's Loop in Your Success
            <img 
              src={heroCtaIcon} 
              alt="magic wand icon" 
              className="w-[18px] h-[18px] object-contain"
            />
          </button>
          <button
            onClick={() => {
              const el = document.querySelector('#services');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:w-auto bg-black hover:bg-gray-900 text-white font-bold px-8 py-3.5 rounded-full transition-all duration-300 text-sm cursor-pointer shadow-md"
          >
            View Our Work
          </button>
        </div>

        {/* Social proof/Expert stack at the bottom */}
        <div className="flex items-center gap-3">
          {/* Avatar stack */}
          <div className="flex -space-x-2.5">
            <img
              src={founderImg1}
              alt="Expert 1"
              className="w-9 h-9 rounded-full border-2 border-white object-cover"
            />
            <img
              src={founderImg3}
              alt="Expert 2"
              className="w-9 h-9 rounded-full border-2 border-white object-cover"
            />
            <img
              src={founderImg1}
              alt="Expert 3"
              className="w-9 h-9 rounded-full border-2 border-white object-cover filter saturate-50"
            />
          </div>
          <div className="text-left">
            <p className="text-xs font-bold text-gray-900 leading-tight">Verified experts online</p>
            <p className="text-[10px] text-gray-400 leading-tight mt-0.5">Ready for deep architectural audit</p>
          </div>
        </div>
      </div>
    </section>
  );
}
