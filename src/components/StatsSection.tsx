import { useEffect, useRef, useState } from 'react';

const stats = [
  {
    value: 98,
    suffix: '%',
    label: 'Customer Satisfaction',
    gradient: 'linear-gradient(135deg, #c2410c 30%, #7c2d12 100%)',
  },
  {
    value: 120,
    suffix: '+',
    label: 'Projects Delivered',
    gradient: 'linear-gradient(135deg, #b45309 30%, #78350f 100%)',
  },
  {
    value: 15,
    suffix: '+',
    label: 'Active Businesses',
    gradient: 'linear-gradient(135deg, #15803d 30%, #14532d 100%)',
  },
  {
    value: 25,
    suffix: '+',
    label: 'Enterprise Clients',
    gradient: 'linear-gradient(135deg, #1d4ed8 30%, #1e3a8a 100%)',
  },
];

function useCountUp(target: number, duration: number, started: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [started, target, duration]);

  return count;
}

function StatCard({
  stat,
  index,
  started,
}: {
  stat: (typeof stats)[0];
  index: number;
  started: boolean;
}) {
  const count = useCountUp(stat.value, 1800, started);

  return (
    <div
      className="text-center reveal-hidden flex flex-col items-center"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Gradient Text for Stats Number */}
      <div
        className="text-6xl sm:text-7xl font-extrabold mb-3 tracking-tight select-none"
        style={{
          background: stat.gradient,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        {count}
        {stat.suffix}
      </div>
      <p className="text-gray-500 font-semibold text-xs sm:text-sm tracking-wide">
        {stat.label}
      </p>
    </div>
  );
}

export default function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStarted(true);
            entry.target
              .querySelectorAll<HTMLElement>('.reveal-hidden')
              .forEach((el) => {
                el.classList.remove('reveal-hidden');
                el.classList.add('reveal-visible');
              });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="stats" className="py-24 bg-white relative z-10" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-20 reveal-hidden">
          <h2 className="text-gray-900 font-extrabold text-4xl sm:text-5xl tracking-tight mb-4">
            Proof in the Numbers
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            We measure success in outcomes, not outputs. Here's what happens when enterprises work with Logical Loops.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8 lg:gap-x-12">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} started={started} />
          ))}
        </div>

      </div>
    </section>
  );
}