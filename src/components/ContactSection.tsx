import { useState, useRef, useEffect } from 'react';

const faqs = [
  {
    q: 'How can I contact Logicalloops Team?',
    a: (
      <span>
        You can reach us through our contact form on our website or by emailing us at{' '}
        <strong className="text-gray-900 font-bold">Contactlogicalloops.in@gmail.com</strong> We typically respond within 24 hours.
      </span>
    ),
  },
  {
    q: 'What services do you offer?',
    a: 'We offer comprehensive digital product services including Website Design & Development, Mobile App Development, UI/UX Design, and Graphic Design.',
  },
  {
    q: 'Do you provide website maintenance services?',
    a: 'Yes, we offer ongoing maintenance, optimization, security monitoring, and content updates to keep your website running smoothly.',
  },
  {
    q: 'How long does it take to design and develop a website?',
    a: 'Standard websites typically take 2-4 weeks, while complex web applications can take 6-12 weeks depending on scope and features.',
  },
];

function FAQItem({ q, a }: { q: string; a: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-[#f8f9fa] rounded-xl overflow-hidden transition-all duration-200 border border-gray-100">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left gap-4 group cursor-pointer"
      >
        <span className="text-[#1a1a1a] font-bold text-sm sm:text-base leading-snug">
          {q}
        </span>
        <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-gray-500 font-light text-xl select-none">
          {open ? '−' : '+'}
        </span>
      </button>
      {open && (
        <div className="px-6 pb-5 text-gray-400 text-xs sm:text-sm leading-relaxed">
          {a}
        </div>
      )}
    </div>
  );
}

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll<HTMLElement>('.reveal-hidden').forEach((el, i) => {
              setTimeout(() => {
                el.classList.remove('reveal-hidden');
                el.classList.add('reveal-visible');
              }, i * 100);
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
    <>
      {/* FAQ Section */}
      <section className="py-24 bg-white border-t border-gray-100 relative z-10" ref={sectionRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: FAQ */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-gray-900 font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight mb-8">
                Got Questions? We Have Answers.
              </h2>
              <div className="space-y-4">
                {faqs.map((faq) => (
                  <FAQItem key={faq.q} q={faq.q} a={faq.a} />
                ))}
              </div>
            </div>

            {/* Right: Newsletter / Stay in the Loop */}
            <div className="lg:col-span-5 flex flex-col justify-center lg:pl-8">
              <h2 className="text-gray-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-4">
                Stay in the <span className="text-[#a3a3a3] font-medium">Loop</span>
              </h2>
              <p className="text-gray-400 text-xs sm:text-sm mb-8 leading-relaxed max-w-md">
                Subscribe to receive the latest tech insights, UI/UX trends, and digital growth strategies delivered straight to your inbox. No spam, just value.
              </p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const input = (e.target as HTMLFormElement).querySelector('input');
                  if (input) input.value = '';
                  alert('Thanks! You\'re subscribed.');
                }}
                className="flex items-center justify-between p-1 bg-white border border-gray-200 rounded-full w-full max-w-md focus-within:border-[#F5C518]/60 transition-colors"
              >
                <input
                  type="email"
                  required
                  placeholder="Enter email address"
                  className="flex-1 bg-transparent border-none focus:outline-none px-5 py-3 text-[#1a1a1a] text-xs sm:text-sm placeholder-gray-400"
                />
                <button
                  type="submit"
                  className="bg-[#71B206] text-white font-bold px-6 py-3 rounded-full hover:bg-[#639c05] transition-colors text-xs sm:text-sm flex-shrink-0 cursor-pointer"
                >
                  Get Listed
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}