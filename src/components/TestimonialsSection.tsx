import React, { useEffect, useRef } from 'react';

const testimonials = [
  {
    name: 'Tousif Khan',
    role: 'CTO, Naticoco Financial',
    initials: 'TK',
    color: '#7a6a5a',
    quote:
      'Working with Logical Loops has been a game-changer for our business. They took our complex ideas and transformed them into a highly intuitive mobile app and a robust custom web application.',
    stars: 5,
  },
  {
    name: 'David K',
    role: 'Founder & Managing Director',
    initials: 'DK',
    color: '#5a7a6a',
    quote:
      'Logical Loops is the ultimate full-service partner. We approached them needing everything from a complete logo redesign and a new UI/UX interface to a fully operational website.',
    stars: 5,
  },
  {
    name: 'Priya N',
    role: 'Head of Product',
    initials: 'PN',
    color: '#6a5a7a',
    quote:
      'Innovation, excellence, and exceptional user experiences—Logical Loops truly turns complex code into business reality.',
    stars: 5,
  },
  {
    name: 'Faizullah',
    role: 'Operations Director',
    initials: 'FZ',
    color: '#7a5a5a',
    quote:
      'True to their mantra, they bring pure innovation to the table. Their cutting-edge web development performs seamlessly across all platforms.',
    stars: 5,
  },
  {
    name: 'Marcus T',
    role: 'CEO, Techobite',
    initials: 'MT',
    color: '#5a6a7a',
    quote:
      'LogicalLoops didn\'t just build our platform — they understood our business model and engineered for scale. We went from 0 to 40,000 users in 4 months.',
    stars: 5,
  },
];

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll<HTMLElement>('.reveal-hidden')
              .forEach((el, i) => {
                setTimeout(() => {
                  el.classList.remove('reveal-hidden');
                  el.classList.add('reveal-visible');
                }, i * 80);
              });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="py-20 bg-white relative z-10 overflow-hidden"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Heading — left-aligned like the image */}
        <div className="mb-12 reveal-hidden">
          <h2 className="text-gray-900 font-black text-4xl sm:text-5xl leading-tight">
            Why Businesses Choose
            <br />
            <span className="text-gray-400 font-black">Logical Loops</span>
          </h2>
        </div>

        {/* Infinite marquee track wrapper */}
        <div className="reveal-hidden overflow-hidden py-8 relative w-full">
          <div className="animate-marquee flex gap-0 w-max">
            {/* Set 1 */}
            <div className="flex gap-5 pr-5 flex-shrink-0">
              {testimonials.map((t) => (
                <div
                  key={t.name}
                  className="relative flex-shrink-0 bg-white border border-gray-200 rounded-[2rem] p-6 pt-10 flex flex-col gap-4 hover:shadow-lg transition-shadow duration-300"
                  style={{
                    width: '320px',
                    minHeight: '280px',
                  }}
                >
                  {/* Dark quote icon overlapping the top boundary */}
                  <div className="absolute top-0 left-8 -translate-y-1/2 w-11 h-11 rounded-full bg-black flex items-center justify-center shadow-md">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>

                  {/* Avatar + Name + Role */}
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 border border-gray-100"
                      style={{ background: t.color }}
                    >
                      {t.initials}
                    </div>
                    <div>
                      <p className="text-gray-900 font-bold text-xs leading-tight uppercase tracking-wider">
                        {t.name}
                      </p>
                      <p className="text-gray-400 text-[10px] leading-tight mt-0.5">{t.role}</p>
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, si) => (
                      <svg
                        key={si}
                        className={`w-3.5 h-3.5 ${si < t.stars ? 'text-[#ff7a59]' : 'text-gray-200'}`}
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" />
                      </svg>
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-gray-500 text-xs leading-relaxed flex-1">{t.quote}</p>
                </div>
              ))}
            </div>

            {/* Set 2 */}
            <div className="flex gap-5 pr-5 flex-shrink-0">
              {testimonials.map((t) => (
                <div
                  key={`${t.name}-clone`}
                  className="relative flex-shrink-0 bg-white border border-gray-200 rounded-[2rem] p-6 pt-10 flex flex-col gap-4 hover:shadow-lg transition-shadow duration-300"
                  style={{
                    width: '320px',
                    minHeight: '280px',
                  }}
                >
                  {/* Dark quote icon overlapping the top boundary */}
                  <div className="absolute top-0 left-8 -translate-y-1/2 w-11 h-11 rounded-full bg-black flex items-center justify-center shadow-md">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>

                  {/* Avatar + Name + Role */}
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 border border-gray-100"
                      style={{ background: t.color }}
                    >
                      {t.initials}
                    </div>
                    <div>
                      <p className="text-gray-900 font-bold text-xs leading-tight uppercase tracking-wider">
                        {t.name}
                      </p>
                      <p className="text-gray-400 text-[10px] leading-tight mt-0.5">{t.role}</p>
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, si) => (
                      <svg
                        key={si}
                        className={`w-3.5 h-3.5 ${si < t.stars ? 'text-[#ff7a59]' : 'text-gray-200'}`}
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" />
                      </svg>
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-gray-500 text-xs leading-relaxed flex-1">{t.quote}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Hide scrollbar globally for this section & define marquee animations */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 35s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}