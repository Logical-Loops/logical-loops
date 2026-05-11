'use client';
import { useEffect, useRef, useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const projects = [
  {
    id: 1,
    title: 'NovaPay Financial Platform',
    category: 'Web Development',
    description: 'A real-time B2B payment platform processing $2.4B annually, built with microservices architecture and sub-100ms transaction speeds.',
    outcome: '$2.4B processed',
    duration: '9 months',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1d3344084-1778328657533.png",
    tags: ['Next.js', 'Node.js', 'PostgreSQL'],
    colSpan: 2,
    rowSpan: 1
  },
  {
    id: 2,
    title: 'HealthBridge Patient Portal',
    category: 'App Development',
    description: 'HIPAA-compliant mobile app connecting 180,000+ patients with healthcare providers across 12 hospital networks.',
    outcome: '180K+ active users',
    duration: '7 months',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1337508e7-1774674447859.png",
    tags: ['React Native', 'AWS', 'HIPAA'],
    colSpan: 1,
    rowSpan: 2
  },
  {
    id: 3,
    title: 'Meridian Analytics Dashboard',
    category: 'UI/UX Design',
    description: 'Enterprise data visualization platform redesigned to reduce analyst time-to-insight by 67%.',
    outcome: '67% faster insights',
    duration: '4 months',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_11a2096e9-1778328657990.png",
    tags: ['Figma', 'React', 'D3.js'],
    colSpan: 1,
    rowSpan: 1
  },
  {
    id: 4,
    title: 'LogiTrack Supply Chain AI',
    category: 'AI & ML',
    description: 'Predictive demand forecasting ML system reducing inventory waste by 41% across a 200-location retail chain.',
    outcome: '41% waste reduction',
    duration: '6 months',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1a66fb927-1778187792494.png",
    tags: ['Python', 'TensorFlow', 'AWS'],
    colSpan: 1,
    rowSpan: 1
  },
  {
    id: 5,
    title: 'Vertex CRM Platform',
    category: 'Web Development',
    description: 'Custom CRM replacing Salesforce for a 500-person sales org, cutting licensing costs by $1.2M annually.',
    outcome: '$1.2M saved/year',
    duration: '12 months',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1fc236af0-1767090333024.png",
    tags: ['React', 'GraphQL', 'Kubernetes'],
    colSpan: 1,
    rowSpan: 1
  },
  {
    id: 6,
    title: 'CloudShift Migration Suite',
    category: 'Cloud & DevOps',
    description: 'Zero-downtime migration of a 14-year-old legacy system to cloud-native architecture, serving 3M daily active users.',
    outcome: '3M DAU migrated',
    duration: '8 months',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_102b90abe-1770960125698.png",
    tags: ['AWS', 'Terraform', 'Docker'],
    colSpan: 2,
    rowSpan: 1
  }];


function ProjectCard({ project, cardRef, delay }: { project: typeof projects[0]; cardRef: (el: HTMLDivElement | null) => void; delay: number; }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={cardRef}
      className={`scroll-reveal-hidden relative group overflow-hidden rounded-2xl bg-card border border-border cursor-pointer ${project.colSpan === 2 ? 'md:col-span-2' : 'md:col-span-1'} ${project.rowSpan === 2 ? 'md:row-span-2' : 'row-span-1'}`}
      style={{ transitionDelay: `${delay}ms` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}>

      {/* Image */}
      <div className="absolute inset-0 z-0">
        <AppImage
          src={project.image}
          alt={`${project.title} project screenshot showing ${project.category} work`}
          fill
          sizes={project.colSpan === 2 ? '(max-width: 768px) 100vw, 66vw' : '(max-width: 768px) 100vw, 33vw'}
          className={`object-cover transition-transform duration-700 ${hovered ? 'scale-105' : 'scale-100'}`} />

        <div className={`absolute inset-0 transition-all duration-500 ${hovered ? 'bg-background/85' : 'bg-background/60'}`} />
        {/* Gold gradient overlay from bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 p-6 md:p-8 flex flex-col justify-end h-full min-h-[260px]">
        {/* Category tag */}
        <span className="text-xs font-semibold text-accent uppercase tracking-widest mb-3 block">{project.category}</span>

        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2 leading-tight">{project.title}</h3>

        {/* Description — visible on hover */}
        <p className={`text-muted-foreground text-sm leading-relaxed mb-4 transition-all duration-300 ${hovered ? 'opacity-100 max-h-32' : 'opacity-0 max-h-0 overflow-hidden'}`}>
          {project.description}
        </p>

        <div className="flex flex-wrap items-center justify-between gap-4">
          {/* Outcome badge */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20">
            <Icon name="TrophyIcon" size={12} className="text-accent" />
            <span className="text-xs font-bold text-accent">{project.outcome}</span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 2).map((tag) =>
              <span key={tag} className="text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded-md border border-border">
                {tag}
              </span>
            )}
          </div>
        </div>

        {/* Arrow indicator */}
        <div className={`absolute top-6 right-6 w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center transition-all duration-300 ${hovered ? 'opacity-100 bg-accent border-accent' : 'opacity-0'}`}>
          <Icon name="ArrowTopRightOnSquareIcon" size={16} className={hovered ? 'text-accent-foreground' : 'text-accent'} />
        </div>
      </div>
    </div>);

}

export default function PortfolioSection() {
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
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    cardRefs.current.forEach((el) => { if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="portfolio"
      className="py-24 bg-secondary relative overflow-hidden"
      aria-labelledby="portfolio-heading">

      <div className="blob-gold-sm absolute top-0 right-0 w-[400px] h-[400px] opacity-30 pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <span className="text-accent text-xs font-semibold uppercase tracking-widest block mb-3">Case Studies</span>
            <h2 id="portfolio-heading" className="text-section-title font-extrabold text-foreground">
              Work That<br />
              <span className="text-gold-gradient">Speaks Volumes</span>
            </h2>
          </div>
          <div className="flex flex-col items-start md:items-end gap-2">
            <p className="text-muted-foreground text-sm max-w-xs text-left md:text-right leading-relaxed">
              Real projects. Real outcomes. Every case study represents a business challenge solved at scale.
            </p>
            <button className="inline-flex items-center gap-2 text-accent text-sm font-semibold hover:gap-3 transition-all">
              View All Projects <Icon name="ArrowRightIcon" size={14} />
            </button>
          </div>
        </div>

        {/* Portfolio Grid
             BENTO AUDIT:
             Array: [P1(cs-2), P2(cs-1,rs-2), P3(cs-1), P4(cs-1), P5(cs-1), P6(cs-2)]
             Row 1: [col-1,2: P1 cs-2] [col-3: P2 cs-1 rs-2]
             Row 2: [col-1: P3 cs-1] [col-2: P4 cs-1] [col-3: P2 continued]
             Row 3: [col-1: P5 cs-1] [col-2,3: P6 cs-2]
             Placed: 6/6 ✓
          */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[320px]">
          {/* Row 1 col 1-2: NovaPay */}
          <ProjectCard
            project={projects[0]}
            cardRef={(el) => { cardRefs.current[0] = el; }}
            delay={0} />


          {/* Row 1-2 col 3: HealthBridge (row-span-2) */}
          <ProjectCard
            project={projects[1]}
            cardRef={(el) => { cardRefs.current[1] = el; }}
            delay={80} />


          {/* Row 2 col 1: Meridian */}
          <ProjectCard
            project={projects[2]}
            cardRef={(el) => { cardRefs.current[2] = el; }}
            delay={160} />


          {/* Row 2 col 2: LogiTrack */}
          <ProjectCard
            project={projects[3]}
            cardRef={(el) => { cardRefs.current[3] = el; }}
            delay={240} />


          {/* Row 3 col 1: Vertex */}
          <ProjectCard
            project={projects[4]}
            cardRef={(el) => { cardRefs.current[4] = el; }}
            delay={320} />


          {/* Row 3 col 2-3: CloudShift */}
          <ProjectCard
            project={projects[5]}
            cardRef={(el) => { cardRefs.current[5] = el; }}
            delay={400} />

        </div>
      </div>
    </section>);

}