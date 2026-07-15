import aboutBigLogoImg from '@/assets/images/about-big-logo.png';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white relative z-10 overflow-hidden border-t border-gray-100">
      {/* Skewed background grid matching the parallelograms */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              135deg,
              transparent,
              transparent 90px,
              rgba(0,0,0,0.04) 90px,
              rgba(0,0,0,0.04) 91px
            ),
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 90px,
              rgba(0,0,0,0.03) 90px,
              rgba(0,0,0,0.03) 91px
            )
          `,
        }}
      />

      <div className="max-w-5xl mx-auto px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left: Text (Occupies 7 cols on desktop) */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-gray-900 font-extrabold text-4xl sm:text-5xl leading-tight">
              About us
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              At{' '}
              <span className="underline underline-offset-4 decoration-gray-900 font-bold text-gray-900">
                Logical Loops
              </span>
              , we believe every great idea deserves a powerful digital presence. With a passion for innovation and precision, we specialize in building scalable web applications, high-performance websites, mobile apps, and visually impactful designs. Our mission is simple — to help businesses turn complex ideas into seamless digital realities. By combining creativity, strategy, and cutting-edge technology, we create solutions that are functional, future-ready, and user-focused.
            </p>
          </div>

          {/* Right: Colorful Logicalloops logo mark from assets (Occupies 5 cols on desktop) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <img
              src={aboutBigLogoImg}
              alt="Logical Loops Logo Mark"
              className="w-full max-w-[340px] sm:max-w-[380px] h-auto object-contain select-none hover:scale-[1.02] transition-transform duration-300"
              loading="lazy"
            />
          </div>

        </div>
      </div>
    </section>
  );
}