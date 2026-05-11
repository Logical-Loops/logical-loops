import { useEffect, useRef, useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const metrics = [
  { value: 120, suffix: '+', label: 'Projects Shipped' },
  { value: 85, suffix: '+', label: 'Enterprise Clients' },
  { value: 4.9, suffix: '/10', label: 'Avg. Satisfaction', isFloat: true },
  { value: 98, suffix: '%', label: 'On-Time Delivery' }];


const testimonials = [
  {
    quote: "Logical Loops didn\'t just build our platform — they redesigned how our entire engineering org thinks about product development. The NovaPay system they delivered processes $200M/month without a hiccup.",
    name: 'Marcus Webb',
    role: 'CTO',
    company: 'NovaPay Financial',
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_182bb6c77-1767880718117.png",
    metric: '$200M/month processed'
  },
  {
    quote: "We evaluated six agencies. Logical Loops was the only team that asked the right questions before writing a single line of code. Our HealthBridge app launched 3 weeks ahead of schedule.",
    name: 'Dr. Priya Nair',
    role: 'Chief Digital Officer',
    company: 'HealthBridge Systems',
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_100bc66a6-1772072545601.png",
    metric: '3 weeks ahead of schedule'
  },
  {
    quote: "The AI forecasting system they built for LogiTrack paid for itself in the first quarter. That\'s not a marketing claim — that\'s our CFO\'s exact words in the board meeting.",
    name: 'James Okafor',
    role: 'VP Operations',
    company: 'LogiTrack Supply Co.',
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_105ad1e1b-1772111917180.png",
    metric: 'ROI in Q1 post-launch'
  }];


function CounterMetric({ value, suffix, label, isFloat, started, delay }: { value: number; suffix: string; label: string; isFloat?: boolean; started: boolean; delay: number; }) {
  const [current, setCurrent] = useState(0.0);
  useEffect(() => {
    if (!started) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / 1800, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const val = eased * value;
      setCurrent(isFloat ? parseFloat(val.toFixed(1)) : Math.floor(val));
      if (progress < 1) requestAnimationFrame(step);
    };
    const timer = setTimeout(() => requestAnimationFrame(step), delay);
    return () => clearTimeout(timer);
  }, [value, started, delay, isFloat]);

  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-extrabold text-gold-gradient tabular-nums mb-2">
        {isFloat ? current.toFixed(1) : current}{suffix}
      </div>
      <div className="text-xs text-muted-foreground uppercase tracking-widest font-medium">{label}</div>
    </div>);

}

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [countersStarted, setCountersStarted] = useState(false);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const metricsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setCountersStarted(true);
        });
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) metricsObserver.observe(sectionRef.current);

    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('scroll-reveal-visible');
            entry.target.classList.remove('scroll-reveal-hidden');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    cardRefs.current.forEach((el) => { if (el) cardObserver.observe(el); });

    return () => {
      metricsObserver.disconnect();
      cardObserver.disconnect();
    };
  }, []);

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="py-24 bg-background relative overflow-hidden"
      aria-labelledby="testimonials-heading">

      <div className="blob-gold absolute w-[700px] h-[700px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-accent text-xs font-semibold uppercase tracking-widest block mb-3">Client Results</span>
          <h2 id="testimonials-heading" className="text-section-title font-extrabold text-foreground mb-4">
            Proof in the{' '}
            <span className="text-gold-gradient">Numbers</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
            We measure success in outcomes, not outputs. Here's what happens when enterprises work with Logical Loops.
          </p>
        </div>

        {/* Metrics Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 p-8 rounded-2xl card-glass border border-border gold-border-glow">
          {metrics.map((m, i) =>
            <CounterMetric key={m.label} {...m} started={countersStarted} delay={i * 200} />
          )}
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) =>
            <div
              key={t.name}
              ref={(el) => { cardRefs.current[i] = el; }}
              className="scroll-reveal-hidden relative flex flex-col justify-between p-8 rounded-2xl card-glass border border-border card-glass-hover"
              style={{ transitionDelay: `${i * 120}ms` }}>

              {/* Quote mark */}
              <div className="text-accent/20 text-7xl font-serif leading-none absolute top-4 right-6 pointer-events-none select-none" aria-hidden="true">"</div>

              <div className="relative z-10">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) =>
                    <Icon key={j} name="StarIcon" variant="solid" size={14} className="text-accent" />
                  )}
                </div>

                <blockquote className="text-foreground/90 text-sm leading-relaxed mb-6 italic">
                  "{t.quote}"
                </blockquote>

                {/* Outcome badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-6">
                  <Icon name="CheckCircleIcon" size={12} className="text-accent" />
                  <span className="text-xs font-bold text-accent">{t.metric}</span>
                </div>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <AppImage
                  src={t.avatar}
                  alt={`${t.name}, ${t.role} at ${t.company}`}
                  width={44}
                  height={44}
                  className="w-11 h-11 rounded-full object-cover border-2 border-accent/30" />

                <div>
                  <p className="text-sm font-bold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}, {t.company}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}