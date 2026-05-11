import { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

const services = [
  {
    id: 'app-dev',
    title: 'App Development',
    description: 'Native iOS, Android, and cross-platform apps built for performance and scale. From MVP to enterprise-grade systems handling millions of users.',
    icon: 'DevicePhoneMobileIcon',
    tag: 'Mobile & Native',
    highlight: true,
    colSpan: 2,
    rowSpan: 1,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1bdbd65f5-1769233351664.png"
  },
  {
    id: 'web-dev',
    title: 'Web Development',
    description: 'High-performance web platforms, SaaS products, and enterprise portals. Built on modern stacks — Next.js, React, Node — that scale with your business.',
    icon: 'GlobeAltIcon',
    tag: 'Full-Stack',
    colSpan: 1,
    rowSpan: 2,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_13a6419a1-1772328360733.png"
  },
  {
    id: 'uiux',
    title: 'UI/UX Design',
    description: 'Research-driven design systems and interfaces that convert. Every pixel earns its place.',
    icon: 'PaintBrushIcon',
    tag: 'Design Systems',
    colSpan: 1,
    rowSpan: 1
  },
  {
    id: 'cloud',
    title: 'Cloud & DevOps',
    description: 'AWS, GCP, Azure architecture. CI/CD pipelines. Infrastructure that scales without drama.',
    icon: 'CloudIcon',
    tag: 'Infrastructure',
    colSpan: 1,
    rowSpan: 1
  },
  {
    id: 'ai',
    title: 'AI & Machine Learning',
    description: 'Custom ML models, LLM integrations, intelligent automation, and data pipelines that give your business a measurable edge.',
    icon: 'CpuChipIcon',
    tag: 'AI-Powered',
    colSpan: 2,
    rowSpan: 1,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_19b04359f-1768042769184.png"
  },
  {
    id: 'strategy',
    title: 'Digital Strategy',
    description: 'Tech audits, product roadmaps, CTO advisory. Turn business goals into executable technical plans.',
    icon: 'ChartBarIcon',
    tag: 'Advisory',
    colSpan: 1,
    rowSpan: 1
  }];


export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('scroll-reveal-visible');
            entry.target.classList.remove('scroll-reveal-hidden');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );
    cardRefs.current.forEach((el) => { if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-24 bg-background relative overflow-hidden"
      aria-labelledby="services-heading">

      {/* Background accent */}
      <div className="blob-gold absolute w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40 pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <span className="text-accent text-xs font-semibold uppercase tracking-widest block mb-3">What We Do</span>
            <h2 id="services-heading" className="text-section-title font-extrabold text-foreground">
              Services That<br />
              <span className="text-gold-gradient">Move the Needle</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm leading-relaxed text-sm md:text-base">
            End-to-end tech execution. We don't just consult — we build, ship, and scale alongside you.
          </p>
        </div>

        {/* Bento Grid */}
        {/* BENTO AUDIT:
             Array: [AppDev(cs-2), WebDev(cs-1,rs-2), UIUX(cs-1), Cloud(cs-1), AI(cs-2), Strategy(cs-1)]
             Row 1: [col-1,2: AppDev cs-2] [col-3: WebDev cs-1 rs-2]
             Row 2: [col-1: UIUX cs-1] [col-2: Cloud cs-1] [col-3: WebDev continued]
             Row 3: [col-1,2: AI cs-2] [col-3: Strategy cs-1]
             Placed: 6/6 ✓
          */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[280px]">
          {/* Row 1 Col 1-2: App Dev */}
          <div
            ref={(el) => { cardRefs.current[0] = el; }}
            className="scroll-reveal-hidden md:col-span-2 row-span-1 relative group overflow-hidden rounded-2xl card-glass border border-border card-glass-hover cursor-default"
            style={{ transitionDelay: '0ms' }}>

            {services[0].image &&
              <div className="absolute inset-0 z-0">
                <img src={services[0].image} alt="" className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500" aria-hidden="true" />
                <div className="absolute inset-0 bg-gradient-to-r from-card/95 via-card/80 to-transparent" />
              </div>
            }
            <div className="relative z-10 p-8 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                    <Icon name={services[0].icon as "DevicePhoneMobileIcon"} size={20} className="text-accent" />
                  </div>
                  <span className="text-xs font-semibold text-accent uppercase tracking-widest px-3 py-1 rounded-full border border-accent/20 bg-accent/5">{services[0].tag}</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">{services[0].title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-md">{services[0].description}</p>
              </div>
              <div className="flex items-center gap-2 text-accent text-sm font-semibold group-hover:gap-3 transition-all">
                Learn More <Icon name="ArrowRightIcon" size={14} />
              </div>
            </div>
          </div>

          {/* Row 1-2 Col 3: Web Dev (row-span-2) */}
          <div
            ref={(el) => { cardRefs.current[1] = el; }}
            className="scroll-reveal-hidden md:col-span-1 md:row-span-2 relative group overflow-hidden rounded-2xl card-glass border border-border card-glass-hover cursor-default flex flex-col"
            style={{ transitionDelay: '80ms' }}>

            {services[1].image &&
              <div className="absolute inset-0 z-0">
                <img src={services[1].image} alt="" className="w-full h-full object-cover opacity-15 group-hover:opacity-25 transition-opacity duration-500" aria-hidden="true" />
                <div className="absolute inset-0 bg-gradient-to-t from-card/98 via-card/70 to-card/30" />
              </div>
            }
            <div className="relative z-10 p-8 flex flex-col justify-end h-full">
              <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-4">
                <Icon name={services[1].icon as "GlobeAltIcon"} size={20} className="text-accent" />
              </div>
              <span className="text-xs font-semibold text-accent uppercase tracking-widest px-3 py-1 rounded-full border border-accent/20 bg-accent/5 w-fit mb-3">{services[1].tag}</span>
              <h3 className="text-xl font-bold text-foreground mb-2">{services[1].title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{services[1].description}</p>
              <div className="flex items-center gap-2 text-accent text-sm font-semibold mt-4 group-hover:gap-3 transition-all">
                Learn More <Icon name="ArrowRightIcon" size={14} />
              </div>
            </div>
          </div>

          {/* Row 2 Col 1: UI/UX */}
          <div
            ref={(el) => { cardRefs.current[2] = el; }}
            className="scroll-reveal-hidden md:col-span-1 row-span-1 relative group overflow-hidden rounded-2xl card-glass border border-border card-glass-hover cursor-default"
            style={{ transitionDelay: '160ms' }}>

            <div className="p-8 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                    <Icon name={services[2].icon as "PaintBrushIcon"} size={20} className="text-accent" />
                  </div>
                  <span className="text-xs font-semibold text-accent uppercase tracking-widest px-3 py-1 rounded-full border border-accent/20 bg-accent/5">{services[2].tag}</span>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{services[2].title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{services[2].description}</p>
              </div>
              <div className="flex items-center gap-2 text-accent text-sm font-semibold group-hover:gap-3 transition-all">
                Learn More <Icon name="ArrowRightIcon" size={14} />
              </div>
            </div>
          </div>

          {/* Row 2 Col 2: Cloud */}
          <div
            ref={(el) => { cardRefs.current[3] = el; }}
            className="scroll-reveal-hidden md:col-span-1 row-span-1 relative group overflow-hidden rounded-2xl card-glass border border-border card-glass-hover cursor-default"
            style={{ transitionDelay: '240ms' }}>

            <div className="p-8 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                    <Icon name={services[3].icon as "CloudIcon"} size={20} className="text-accent" />
                  </div>
                  <span className="text-xs font-semibold text-accent uppercase tracking-widest px-3 py-1 rounded-full border border-accent/20 bg-accent/5">{services[3].tag}</span>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{services[3].title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{services[3].description}</p>
              </div>
              <div className="flex items-center gap-2 text-accent text-sm font-semibold group-hover:gap-3 transition-all">
                Learn More <Icon name="ArrowRightIcon" size={14} />
              </div>
            </div>
          </div>

          {/* Row 3 Col 1-2: AI/ML */}
          <div
            ref={(el) => { cardRefs.current[4] = el; }}
            className="scroll-reveal-hidden md:col-span-2 row-span-1 relative group overflow-hidden rounded-2xl card-glass border border-border card-glass-hover cursor-default"
            style={{ transitionDelay: '320ms' }}>

            {services[4].image &&
              <div className="absolute inset-0 z-0">
                <img src={services[4].image} alt="" className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500" aria-hidden="true" />
                <div className="absolute inset-0 bg-gradient-to-r from-card/95 via-card/80 to-transparent" />
              </div>
            }
            <div className="relative z-10 p-8 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                    <Icon name={services[4].icon as "CpuChipIcon"} size={20} className="text-accent" />
                  </div>
                  <span className="text-xs font-semibold text-accent uppercase tracking-widest px-3 py-1 rounded-full border border-accent/20 bg-accent/5">{services[4].tag}</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">{services[4].title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-md">{services[4].description}</p>
              </div>
              <div className="flex items-center gap-2 text-accent text-sm font-semibold group-hover:gap-3 transition-all">
                Learn More <Icon name="ArrowRightIcon" size={14} />
              </div>
            </div>
          </div>

          {/* Row 3 Col 3: Strategy */}
          <div
            ref={(el) => { cardRefs.current[5] = el; }}
            className="scroll-reveal-hidden md:col-span-1 row-span-1 relative group overflow-hidden rounded-2xl card-glass border border-border card-glass-hover cursor-default"
            style={{ transitionDelay: '400ms' }}>

            <div className="p-8 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                    <Icon name={services[5].icon as "ChartBarIcon"} size={20} className="text-accent" />
                  </div>
                  <span className="text-xs font-semibold text-accent uppercase tracking-widest px-3 py-1 rounded-full border border-accent/20 bg-accent/5">{services[5].tag}</span>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{services[5].title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{services[5].description}</p>
              </div>
              <div className="flex items-center gap-2 text-accent text-sm font-semibold group-hover:gap-3 transition-all">
                Learn More <Icon name="ArrowRightIcon" size={14} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}