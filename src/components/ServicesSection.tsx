import dashboardImg from '@/assets/images/dashboard.png';
import mobileDevImg from '@/assets/images/mobile_dev_img.png';
import riceImg from '@/assets/images/rice_img.png';
import phoneHandImg from '@/assets/images/phone_hand.png';
import serviceTopRightIcon from '@/assets/images/service_top_right_icon.png';

const services = [
  {
    id: 1,
    title: 'Website Design & Development',
    description: 'Your website is often the first impression of your business. We create fast, modern, conversion-focused websites that attract visitors and turn them into customers.',
    image: dashboardImg,
    imageAlt: 'Website design mockup showing digital identity branding on dark screen',
  },
  {
    id: 2,
    title: 'Mobile App Development',
    description: 'We develop intuitive and high-performing mobile applications for Android and iOS that deliver seamless user experiences and measurable business value.',
    image: mobileDevImg,
    imageAlt: 'Mobile app development mockup showing dark UI on smartphone screens',
  },
  {
    id: 3,
    title: 'Graphic Design Services',
    description: 'We create visually compelling and impactful graphic designs that strengthen your brand identity, communicate your message effectively, and leave a lasting impression across digital and print platforms.',
    image: riceImg,
    imageAlt: 'Graphic design services mockup showing colorful food and event poster designs',
  },
  {
    id: 4,
    title: 'UI/UX Design',
    description: 'We craft intuitive, engaging, and visually stunning digital interfaces that elevate user satisfaction, simplify complex workflows, and drive measurable business growth.',
    image: phoneHandImg,
    imageAlt: 'UI/UX Design showing interface wireframes and prototypes',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-28 bg-white relative z-10 overflow-hidden">
      
      {/* Background patterns */}
      {/* Skewed grid on the left */}
      <div
        className="absolute inset-y-0 left-0 w-1/2 pointer-events-none opacity-25"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              135deg,
              transparent,
              transparent 80px,
              rgba(0,0,0,0.12) 80px,
              rgba(0,0,0,0.12) 81px
            ),
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 80px,
              rgba(0,0,0,0.08) 80px,
              rgba(0,0,0,0.08) 81px
            )
          `,
        }}
      />
      {/* Warm yellow/green glow at the bottom right */}
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none opacity-20 filter blur-[120px]"
        style={{
          background: 'radial-gradient(circle, #7EC600 0%, #FFBA00 50%, transparent 100%)'
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative flex flex-col items-center">
        
        {/* Section Title */}
        <div className="text-center mb-20">
          <h2 className="text-gray-900 font-extrabold text-4xl sm:text-5xl tracking-tight">
            Get started with Logicalloops
          </h2>
        </div>

        {/* Rombo / Staggered Layout Grid */}
        <div className="w-full flex flex-col gap-6">
          
          {/* Row 1 (Shifted Left) */}
          <div className="flex flex-col md:flex-row gap-6 w-full lg:w-[90%] self-start justify-start">
            {services.slice(0, 2).map((service) => (
              <div
                key={service.id}
                className="relative rounded-[2rem] bg-black overflow-hidden flex flex-col group cursor-pointer border border-gray-950 hover:shadow-2xl transition-all duration-300 w-full md:w-1/2"
                style={{ minHeight: '340px' }}
              >
                {/* Brand Badge — top right */}
                <div className="absolute top-6 right-6 z-10">
                  <img 
                    src={serviceTopRightIcon} 
                    alt="Crown Icon" 
                    className="w-9 h-9 object-contain"
                  />
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-1 relative z-10">
                  <h3 className="text-white font-extrabold text-2xl leading-tight mb-4 pr-12">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6 max-w-[55%] font-medium">
                    {service.description}
                  </p>
                  
                  {/* Button */}
                  <div className="mt-auto">
                    <button
                      onClick={() => {
                        const el = document.querySelector('#contact');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="bg-white hover:bg-gray-100 text-black text-xs font-bold px-6 py-3 rounded-full transition-colors cursor-pointer shadow"
                    >
                      Get Started
                    </button>
                  </div>
                </div>

                {/* Image Mockup — bottom right, overflowing */}
                <div className="absolute bottom-0 right-0 w-[55%] h-[80%] pointer-events-none overflow-hidden flex items-end justify-end">
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    className="w-full h-full object-contain object-right-bottom group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Row 2 (Shifted Right) */}
          <div className="flex flex-col md:flex-row gap-6 w-full lg:w-[90%] self-end justify-end">
            {services.slice(2, 4).map((service) => (
              <div
                key={service.id}
                className="relative rounded-[2rem] bg-black overflow-hidden flex flex-col group cursor-pointer border border-gray-950 hover:shadow-2xl transition-all duration-300 w-full md:w-1/2"
                style={{ minHeight: '340px' }}
              >
                {/* Brand Badge — top right */}
                <div className="absolute top-6 right-6 z-10">
                  <img 
                    src={serviceTopRightIcon} 
                    alt="Crown Icon" 
                    className="w-9 h-9 object-contain"
                  />
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-1 relative z-10">
                  <h3 className="text-white font-extrabold text-2xl leading-tight mb-4 pr-12">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6 max-w-[55%] font-medium">
                    {service.description}
                  </p>
                  
                  {/* Button */}
                  <div className="mt-auto">
                    <button
                      onClick={() => {
                        const el = document.querySelector('#contact');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="bg-white hover:bg-gray-100 text-black text-xs font-bold px-6 py-3 rounded-full transition-colors cursor-pointer shadow"
                    >
                      Get Started
                    </button>
                  </div>
                </div>

                {/* Image Mockup — bottom right, overflowing */}
                <div className="absolute bottom-0 right-0 w-[55%] h-[80%] pointer-events-none overflow-hidden flex items-end justify-end">
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    className="w-full h-full object-contain object-right-bottom group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
