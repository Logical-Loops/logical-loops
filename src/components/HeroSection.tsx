'use client';
import { useEffect, useRef, useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const stats = [
  { value: 120, suffix: '+', label: 'Projects Delivered' },
  { value: 85, suffix: '+', label: 'Enterprise Clients' },
  { value: 8, suffix: ' yrs', label: 'Industry Experience' },
  { value: 98, suffix: '%', label: 'Client Retention' }];


function useCountUp(target: number, duration: number, start: boolean) {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return current;
}

function StatItem({ value, suffix, label, delay, started }: { value: number; suffix: string; label: string; delay: number; started: boolean; }) {
  const count = useCountUp(value, 1600, started);
  return (
    <div className="flex flex-col items-center sm:items-start" style={{ transitionDelay: `${delay}ms` }}>
      <span className="text-3xl md:text-4xl font-bold text-gold-gradient tabular-nums">
        {count}{suffix}
      </span>
      <span className="text-xs text-muted-foreground mt-1 uppercase tracking-widest font-medium">{label}</span>
    </div>);

}

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const blob1Ref = useRef<HTMLDivElement>(null);
  const blob2Ref = useRef<HTMLDivElement>(null);
  const [statsStarted, setStatsStarted] = useState(false);
  const [sparkles, setSparkles] = useState<{ id: number; x: number; y: number; color: string; scale: number; delay: number; }[]>([]);
  const sparkleIdRef = useRef(0);

  // Parallax on mouse move
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const mx = (e.clientX / innerWidth - 0.5) * 2;
      const my = (e.clientY / innerHeight - 0.5) * 2;
      if (blob1Ref.current) {
        blob1Ref.current.style.transform = `translate(${mx * 40}px, ${my * 30}px)`;
      }
      if (blob2Ref.current) {
        blob2Ref.current.style.transform = `translate(${mx * -25}px, ${my * -20}px)`;
      }
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Parallax on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (bgRef.current) {
        const scrollY = window.scrollY;
        bgRef.current.style.transform = `translateY(${scrollY * 0.3}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Start stats counter after mount
  useEffect(() => {
    const timer = setTimeout(() => setStatsStarted(true), 800);
    return () => clearTimeout(timer);
  }, []);

  // Sparkle system
  useEffect(() => {
    const colors = ['#C8965A', '#E8B878', '#F5E6C8', '#A67840'];
    const interval = setInterval(() => {
      const id = sparkleIdRef.current++;
      const sparkle = {
        id,
        x: Math.random() * 100,
        y: Math.random() * 100,
        color: colors[Math.floor(Math.random() * colors.length)],
        scale: Math.random() * 0.8 + 0.4,
        delay: Math.random() * 0.5
      };
      setSparkles((prev) => [...prev.slice(-12), sparkle]);
      setTimeout(() => {
        setSparkles((prev) => prev.filter((s) => s.id !== id));
      }, 2500);
    }, 450);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden noise-overlay"
      aria-label="Hero section">

      {/* Background Image Layer */}
      <div ref={bgRef} className="absolute inset-0 z-0 will-change-transform">
        <AppImage
          src="https://images.unsplash.com/photo-1630103430874-4d96736660b5"
          alt="Modern dark office workspace with dramatic architectural lighting and deep shadows"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-25" />

        {/* Dark scrim for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
      </div>

      {/* Atmospheric Blobs */}
      <div
        ref={blob1Ref}
        className="blob-gold absolute w-[600px] h-[600px] -top-20 -right-20 z-0 transition-transform duration-700 ease-out"
        aria-hidden="true" />

      <div
        ref={blob2Ref}
        className="blob-gold-sm absolute w-[400px] h-[400px] bottom-20 left-10 z-0 transition-transform duration-700 ease-out"
        aria-hidden="true" />


      {/* Sparkle Particles */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden" aria-hidden="true">
        {sparkles.map((s) =>
          <svg
            key={s.id}
            className="absolute animate-sparkle"
            width="20"
            height="20"
            viewBox="0 0 21 21"
            style={{
              left: `${s.x}%`,
              top: `${s.y}%`,
              transform: `scale(${s.scale})`,
              animationDelay: `${s.delay}s`
            }}>

            <path
              d="M9.82531 0.843845C10.0553 0.215178 10.9446 0.215178 11.1746 0.843845L11.8618 2.72026C12.4006 4.19229 12.3916 6.39157 13.5 7.5C14.6084 8.60843 16.8077 8.59935 18.2797 9.13822L20.1561 9.82534C20.7858 10.0553 20.7858 10.9447 20.1561 11.1747L18.2797 11.8618C16.8077 12.4007 14.6084 12.3916 13.5 13.5C12.3916 14.6084 12.4006 16.8077 11.8618 18.2798L11.1746 20.1562C10.9446 20.7858 10.0553 20.7858 9.82531 20.1562L9.13819 18.2798C8.59932 16.8077 8.60843 14.6084 7.5 13.5C6.39157 12.3916 4.19225 12.4007 2.72023 11.8618L0.843814 11.1747C0.215148 10.9447 0.215148 10.0553 0.843814 9.82534L2.72023 9.13822C4.19225 8.59935 6.39157 8.60843 7.5 7.5C8.60843 6.39157 8.59932 4.19229 9.13819 2.72026L9.82531 0.843845Z"
              fill={s.color} />

          </svg>
        )}
      </div>

      {/* Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 pt-20 pb-20">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/10 text-accent text-xs font-semibold uppercase tracking-widest mb-8 animate-fade-in">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-gold" />
            Premium Tech Consulting
          </div>

          {/* Headline */}
          <h1 className="text-hero-xl font-extrabold text-foreground mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            We Build the{' '}
            <span className="shimmer-text">Digital Engines</span>
            <br />
            That Drive{' '}
            <span className="relative inline-block">
              Your Growth.
              <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gold-gradient opacity-60" />
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Logical Loops partners with B2B enterprises to deliver world-class app development, web platforms, UI/UX systems, and AI-powered solutions — on time, on budget, on point.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-16 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="group inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-full text-sm font-bold hover:opacity-90 transition-all duration-200 shadow-gold">

              Start Your Project
              <Icon name="ArrowRightIcon" size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#portfolio"
              onClick={(e) => { e.preventDefault(); document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="inline-flex items-center gap-2 border border-border text-foreground px-8 py-4 rounded-full text-sm font-semibold hover:border-accent/50 hover:bg-card transition-all duration-200">

              <Icon name="PlayIcon" size={16} className="text-accent" />
              View Our Work
            </a>
          </div>

          {/* Stats Bar */}
          <div className="animate-fade-in" style={{ animationDelay: '0.45s' }}>
            <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent mb-8" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((s, i) =>
                <StatItem key={s.label} {...s} delay={i * 120} started={statsStarted} />
              )}
            </div>
          </div>
        </div>

        {/* Floating Client Badge */}
        {/* <div className="absolute right-6 bottom-16 hidden lg:block animate-float">
          <div className="card-glass rounded-2xl p-5 gold-border-glow max-w-[220px]">
            <div className="flex items-center gap-3 mb-3">
              <div className="flex -space-x-2">
                {[
                  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&q=80',
                  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&q=80',
                  'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop&q=80'].
                  map((src, i) =>
                    <AppImage
                      key={i}
                      src={src}
                      alt={`Client avatar ${i + 1}`}
                      width={32}
                      height={32}
                      className="w-8 h-8 rounded-full border-2 border-card object-cover" />

                  )}
              </div>
              <div className="flex">
                {[...Array(5)].map((_, i) =>
                  <Icon key={i} name="StarIcon" variant="solid" size={10} className="text-accent" />
                )}
              </div>
            </div>
            <p className="text-xs font-semibold text-foreground">85+ Enterprises Trust Us</p>
            <p className="text-xs text-muted-foreground mt-0.5">Avg. 4.9 satisfaction score</p>
          </div>
        </div> */}
      </div>

      {/* Scroll Indicator */}
      {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 animate-float-delayed" aria-hidden="true">
        <span className="text-xs text-muted-foreground uppercase tracking-widest font-medium">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-accent/60 to-transparent" />
      </div> */}
    </section>);

}