"use client";

import { useState, type FormEvent } from "react";

const contactInfo = [
  {
    label: "Email",
    value: "contact@moriahsystems.com",
    icon: "M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75",
  },
  {
    label: "Response Time",
    value: "Within 24 hours",
    icon: "M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
  },
  {
    label: "Availability",
    value: "Mon - Sat, 9am - 6pm GMT+5:30",
    icon: "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5",
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please email us directly.");
      }
    } catch {
      setError("Something went wrong. Please email us directly.");
    } finally {
      setSending(false);
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-card/50 to-background">
        <div className="max-w-4xl mx-auto px-6 text-center subpage-hero-content">
          <div className="overline-decorated mb-6">
            <span className="text-gold-muted text-xs tracking-[0.3em] uppercase font-light">Contact</span>
          </div>
          <h1 className="font-heading text-4xl md:text-6xl font-light tracking-wide mb-8">Let&apos;s Talk</h1>
          <p className="text-muted/80 text-base md:text-lg max-w-xl mx-auto font-light leading-relaxed">
            Ready to bring your business online? Have questions about our services?
            We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="pt-12 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2 scroll-reveal">
              <div className="card-premium rounded-2xl p-8 lg:p-10">
                {submitted ? (
                  <div className="text-center py-16">
                    <div className="w-16 h-16 border border-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                    </div>
                    <h3 className="font-heading text-2xl font-light tracking-wide mb-3">Message Sent</h3>
                    <p className="text-muted/60 font-light">We&apos;ll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_KEY" />
                    <input type="hidden" name="subject" value="New inquiry from Moriah Systems website" />
                    <input type="hidden" name="from_name" value="Moriah Systems Website" />
                    <input type="checkbox" name="botcheck" className="hidden" />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-xs font-light tracking-[0.1em] uppercase text-muted/60 mb-3">Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          className="w-full px-4 py-3.5 bg-black/40 border border-white/5 rounded-lg focus:outline-none focus:border-gold/40 transition-colors text-white font-light placeholder:text-muted/30"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-xs font-light tracking-[0.1em] uppercase text-muted/60 mb-3">Email</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="w-full px-4 py-3.5 bg-black/40 border border-white/5 rounded-lg focus:outline-none focus:border-gold/40 transition-colors text-white font-light placeholder:text-muted/30"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="business" className="block text-xs font-light tracking-[0.1em] uppercase text-muted/60 mb-3">Business Name</label>
                      <input
                        type="text"
                        id="business"
                        name="business"
                        className="w-full px-4 py-3.5 bg-black/40 border border-white/5 rounded-lg focus:outline-none focus:border-gold/40 transition-colors text-white font-light placeholder:text-muted/30"
                        placeholder="Your business name (optional)"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-xs font-light tracking-[0.1em] uppercase text-muted/60 mb-3">Service Interested In</label>
                      <select
                        id="service"
                        name="service"
                        className="w-full px-4 py-3.5 bg-black/40 border border-white/5 rounded-lg focus:outline-none focus:border-gold/40 transition-colors text-white font-light"
                      >
                        <option value="">Select a service</option>
                        <option value="website">Website Development</option>
                        <option value="maintenance">Maintenance & Hosting</option>
                        <option value="seo">Content & SEO</option>
                        <option value="software">Custom Software</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-xs font-light tracking-[0.1em] uppercase text-muted/60 mb-3">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        className="w-full px-4 py-3.5 bg-black/40 border border-white/5 rounded-lg focus:outline-none focus:border-gold/40 transition-colors text-white font-light placeholder:text-muted/30 resize-none"
                        placeholder="Tell us about your project..."
                      />
                    </div>
                    {error && (
                      <p className="text-red-400 text-sm font-light">{error}</p>
                    )}
                    <button
                      type="submit"
                      disabled={sending}
                      className="btn-premium w-full py-4 text-xs tracking-[0.15em] disabled:opacity-50"
                    >
                      {sending ? "Sending..." : "Send Message"}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6 scroll-reveal">
              {contactInfo.map((info) => (
                <div key={info.label} className="card-premium rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 border border-gold/20 rounded-full flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d={info.icon} />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-gold-muted font-light text-xs uppercase tracking-[0.2em]">{info.label}</h4>
                      <p className="text-muted/70 mt-1.5 font-light">{info.value}</p>
                    </div>
                  </div>
                </div>
              ))}

              <div className="card-premium rounded-xl p-6 border-gold/15">
                <h4 className="font-heading font-normal tracking-wide mb-2">Free Consultation</h4>
                <p className="text-muted/60 text-sm leading-relaxed font-light">
                  Not sure what you need? We offer a free consultation to understand your
                  business and recommend the right solution. No obligation, no pressure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
