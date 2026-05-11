'use client';
import React, { useState, useRef, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

const services = [
  'App Development',
  'Web Development',
  'UI/UX Design',
  'Cloud & DevOps',
  'AI & Machine Learning',
  'Digital Strategy',
  'Other',
];

type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  message: string;
};

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [form, setForm] = useState<FormState>({
    name: '', company: '', email: '', phone: '',
    service: '', budget: '', message: '',
  });
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errors, setErrors] = useState<Partial<FormState>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setVisible(true); });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const validate = () => {
    const errs: Partial<FormState> = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.company.trim()) errs.company = 'Company is required';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Valid email required';
    if (!form.service) errs.service = 'Please select a service';
    if (!form.message.trim() || form.message.length < 20) errs.message = 'Please describe your project (min 20 chars)';
    return errs;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setStatus('submitting');
    // Mock submit — replace with backend integration
    await new Promise(res => setTimeout(res, 1800));
    setStatus('success');
    setForm({ name: '', company: '', email: '', phone: '', service: '', budget: '', message: '' });
  };

  const inputClass = (field: keyof FormState) =>
    `w-full bg-muted border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring transition-all duration-200 ${errors[field] ? 'border-red-500/60 focus:ring-red-500/60' : 'border-border focus:border-accent/40'
    }`;

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 bg-secondary relative overflow-hidden"
      aria-labelledby="contact-heading"
    >
      <div className="blob-gold-sm absolute bottom-0 left-0 w-[400px] h-[400px] opacity-30 pointer-events-none" aria-hidden="true" />
      <div className="blob-gold-sm absolute top-0 right-0 w-[300px] h-[300px] opacity-20 pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent text-xs font-semibold uppercase tracking-widest block mb-3">Get In Touch</span>
          <h2 id="contact-heading" className="text-section-title font-extrabold text-foreground mb-4">
            Ready to Build<br />
            <span className="text-gold-gradient">Something Exceptional?</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto leading-relaxed">
            Tell us about your project. We review every inquiry and respond within one business day.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Left Panel — Info */}
          <div
            className={`lg:col-span-2 transition-all duration-700 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
          >
            {/* CTA Card */}
            <div className="p-8 rounded-2xl bg-card border border-border gold-border-glow mb-6">
              <h3 className="text-xl font-bold text-foreground mb-3">Why Logical Loops?</h3>
              <ul className="space-y-4">
                {[
                  { icon: 'ClockIcon', text: 'Response within 1 business day' },
                  { icon: 'ShieldCheckIcon', text: 'NDA signed before project discussion' },
                  { icon: 'UserGroupIcon', text: 'Dedicated team from day one' },
                  { icon: 'CurrencyDollarIcon', text: 'Fixed-price or T&M — your choice' },
                ].map((item) => (
                  <li key={item.text} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon name={item.icon as "ClockIcon"} size={14} className="text-accent" />
                    </div>
                    <span className="text-sm text-muted-foreground leading-relaxed">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Details */}
            <div className="p-6 rounded-2xl card-glass border border-border">
              <div className="space-y-4">
                <a href="mailto:logicalloops.in@gmail.com" className="flex items-center gap-3 group">
                  <div className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Icon name="EnvelopeIcon" size={14} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Email</p>
                    <p className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors">logicalloops.in@gmail.com</p>
                  </div>
                </a>
                <a href="tel:+14155550191" className="flex items-center gap-3 group">
                  <div className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Icon name="PhoneIcon" size={14} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Phone</p>
                    <p className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors">+91 93904 06793</p>
                  </div>
                </a>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                    <Icon name="MapPinIcon" size={14} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Location</p>
                    <p className="text-sm font-semibold text-foreground">Hyderabad, India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel — Form */}
          <div
            className={`lg:col-span-3 transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
          >
            <div className="p-8 rounded-2xl bg-card border border-border">
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center py-16 gap-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center animate-pulse-gold">
                    <Icon name="CheckCircleIcon" size={32} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">Message Received!</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Thank you for reaching out. Our team will review your project details and get back to you within one business day.
                    </p>
                  </div>
                  <button
                    onClick={() => setStatus('idle')}
                    className="text-accent text-sm font-semibold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate aria-label="Project inquiry form">
                  <h3 className="text-lg font-bold text-foreground mb-6">Tell Us About Your Project</h3>

                  {/* Row 1: Name + Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                        Full Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="James Mitchell"
                        className={inputClass('name')}
                        autoComplete="name"
                      />
                      {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                        Company *
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Apex Ventures Inc."
                        className={inputClass('company')}
                        autoComplete="organization"
                      />
                      {errors.company && <p className="text-red-400 text-xs mt-1">{errors.company}</p>}
                    </div>
                  </div>

                  {/* Row 2: Email + Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                        Work Email *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="j.mitchell@apexventures.com"
                        className={inputClass('email')}
                        autoComplete="email"
                      />
                      {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                        Phone
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+1 (415) 555-0100"
                        className={inputClass('phone')}
                        autoComplete="tel"
                      />
                    </div>
                  </div>

                  {/* Row 3: Service + Budget */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="service" className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                        Service Needed *
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className={inputClass('service')}
                      >
                        <option value="">Select a service</option>
                        {services.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                      {errors.service && <p className="text-red-400 text-xs mt-1">{errors.service}</p>}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                      Project Description *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Describe your project goals, current challenges, timeline, and any technical requirements..."
                      className={`${inputClass('message')} resize-none`}
                    />
                    {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full flex items-center justify-center gap-3 bg-accent text-accent-foreground py-4 rounded-xl text-sm font-bold hover:opacity-90 transition-all duration-200 shadow-gold disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? (
                      <>
                        <div className="w-4 h-4 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin" />
                        Sending Inquiry...
                      </>
                    ) : (
                      <>
                        Submit Project Inquiry
                        <Icon name="PaperAirplaneIcon" size={16} />
                      </>
                    )}
                  </button>

                  <p className="text-xs text-muted-foreground text-center mt-4">
                    By submitting, you agree to our{' '}
                    <a href="#" className="text-accent hover:underline">Privacy Policy</a>.
                    We never share your information.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}