'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { siteConfig } from '@/lib/data';

type FormState = 'idle' | 'loading' | 'success' | 'error';

export default function ContactPage() {
  const [formState, setFormState] = useState<FormState>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('loading');

    // Simulate submission — replace with actual API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setFormState('success');
      setFormData({ name: '', email: '', phone: '', service: '', budget: '', message: '' });
    } catch {
      setFormState('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const contactInfo = [
    { icon: <Mail size={18} strokeWidth={1.5} />, label: 'Email', value: siteConfig.email },
    { icon: <Phone size={18} strokeWidth={1.5} />, label: 'Phone', value: siteConfig.phone },
    { icon: <MapPin size={18} strokeWidth={1.5} />, label: 'Address', value: siteConfig.address },
    { icon: <Clock size={18} strokeWidth={1.5} />, label: 'Hours', value: siteConfig.hours },
  ];

  const inputClasses = `w-full px-4 py-3 text-[14px] text-nexus-navy bg-white border border-black/[0.08] rounded-lg
    placeholder:text-nexus-text-tertiary
    focus:outline-none focus:border-nexus-blue/30 focus:ring-[3px] focus:ring-nexus-blue/[0.08]
    transition-all duration-200`;

  const selectClasses = `w-full px-4 py-3 text-[14px] text-nexus-navy bg-white border border-black/[0.08] rounded-lg
    focus:outline-none focus:border-nexus-blue/30 focus:ring-[3px] focus:ring-nexus-blue/[0.08]
    transition-all duration-200 appearance-none cursor-pointer`;

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-8 md:pt-40 md:pb-12 bg-nexus-surface/60 dark:bg-white/[0.02]">
        <div className="px-6 max-content md:px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-[12px] font-medium uppercase tracking-[0.1em] text-nexus-blue mb-3">
              Contact
            </p>
            <h1 className="font-display text-[36px] md:text-[48px] font-semibold text-nexus-navy tracking-display leading-tight dark:text-slate-100">
              Get in touch
            </h1>
            <p className="mt-3 text-[16px] text-nexus-text-secondary leading-relaxed max-w-[480px]">
              Have a project in mind? We&apos;d love to hear about it. Reach out and we&apos;ll respond within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact section */}
      <section className="pt-8 bg-nexus-surface/60 dark:bg-white/[0.02]">
        <div className="max-content">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-16">
            {/* Left: Contact info */}
            <div className="lg:col-span-2">
              <ScrollReveal>
                <div className="space-y-4">
                  {contactInfo.map((info) => (
                    <div
                      key={info.label}
                      className="flex items-start gap-4 p-4 rounded-xl bg-nexus-surface/60 border border-black/[0.03]"
                    >
                      <div className="w-10 h-10 rounded-lg bg-nexus-blue/[0.06] flex items-center justify-center text-nexus-blue flex-shrink-0">
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-[11px] font-medium uppercase tracking-[0.1em] text-nexus-text-tertiary">
                          {info.label}
                        </p>
                        <p className="mt-0.5 text-[14px] font-medium text-nexus-navy">
                          {info.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social */}
                <div className="mt-8">
                  <p className="text-[12px] font-medium uppercase tracking-[0.08em] text-nexus-text-tertiary mb-3 dark:text-ellipsis" >
                    Follow Us
                  </p>
                  <div className="flex items-center gap-3">
                    {Object.entries(siteConfig.social).map(([platform, url]) => (
                      <a
                        key={platform}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-lg bg-nexus-surface border border-black/[0.04] flex items-center justify-center
                          text-nexus-text-secondary hover:text-nexus-blue hover:border-nexus-blue/[0.15] transition-all duration-200 dark:text-slate-300 dark:hover:text-slate-100"
                      >
                        <span className="text-[11px] font-mono font-medium capitalize">
                          {platform.slice(0, 2).toUpperCase()}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-3">
              <ScrollReveal delay={0.1}>
                <div className="p-8 md:p-10 rounded-2xl bg-nexus-surface/40 border border-black/[0.04]">
                  <h2 className="font-display text-[20px] font-semibold text-nexus-navy tracking-heading mb-8">
                    Send us a message
                  </h2>

                  {formState === 'success' ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="py-16 text-center"
                    >
                      <div className="w-14 h-14 rounded-full bg-emerald-500/[0.1] flex items-center justify-center mx-auto mb-4">
                        <CheckCircle size={24} className="text-emerald-500" />
                      </div>
                      <h3 className="font-display text-[18px] font-semibold text-nexus-navy">
                        Message sent
                      </h3>
                      <p className="mt-2 text-[14px] text-nexus-text-secondary">
                        We&apos;ll be in touch within 24 hours.
                      </p>
                      <button
                        onClick={() => setFormState('idle')}
                        className="mt-6 text-[13px] font-medium text-nexus-blue hover:underline"
                      >
                        Send another message
                      </button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                        <div>
                          <label className="block text-[12px] font-medium text-nexus-text-secondary mb-1.5">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Your name"
                            className={inputClasses}
                          />
                        </div>
                        <div>
                          <label className="block text-[12px] font-medium text-nexus-text-secondary mb-1.5">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="you@company.com"
                            className={inputClasses}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                        <div>
                          <label className="block text-[12px] font-medium text-nexus-text-secondary mb-1.5">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+92 300 0000000"
                            className={inputClasses}
                          />
                        </div>
                        <div>
                          <label className="block text-[12px] font-medium text-nexus-text-secondary mb-1.5">
                            Service of Interest *
                          </label>
                          <select
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            required
                            className={selectClasses}
                          >
                            <option value="">Select a service</option>
                            <option value="web">Web Development</option>
                            <option value="app">App Development</option>
                            <option value="ai">AI & LLM Solutions</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-[12px] font-medium text-nexus-text-secondary mb-1.5">
                          Project Budget Range
                        </label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className={selectClasses}
                        >
                          <option value="">Select budget range</option>
                          <option value="<5k">Less than $5,000</option>
                          <option value="5k-20k">$5,000 - $20,000</option>
                          <option value="20k-50k">$20,000 - $50,000</option>
                          <option value="50k+">$50,000+</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[12px] font-medium text-nexus-text-secondary mb-1.5">
                          Project Description *
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          placeholder="Tell us about your project — goals, timeline, and any relevant details."
                          className={`${inputClasses} resize-none`}
                        />
                      </div>

                      {formState === 'error' && (
                        <div className="flex items-center gap-2 p-3 border border-red-100 rounded-lg bg-red-50">
                          <AlertCircle size={16} className="flex-shrink-0 text-red-500" />
                          <p className="text-[13px] text-red-600">
                            Something went wrong. Please try again or email us directly.
                          </p>
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={formState === 'loading'}
                        className="flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3 bg-nexus-blue text-white
                          text-[14px] font-medium rounded-lg
                          hover:bg-nexus-blue-dark hover:-translate-y-[1px] hover:shadow-[0_4px_16px_rgba(37,99,235,0.25)]
                          disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none
                          transition-all duration-200"
                      >
                        {formState === 'loading' ? (
                          <>
                            <div className="w-4 h-4 border-2 rounded-full border-white/30 border-t-white animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send size={15} />
                            Send Message
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
