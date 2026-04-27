import { useState, useCallback } from "react";
import emailjs from "@emailjs/browser";
import { Send, MapPin, Phone, Mail, Clock, CheckCircle2, ExternalLink, AlertCircle } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const Contact = () => {
  const [form_data, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      setSubmitting(true);
      setError(null);
      try {
        await emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          {
            from_name: form_data.name,
            from_email: form_data.email,
            reply_to: form_data.email,
            service: form_data.service,
            message: form_data.message,
          },
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        );
        setSubmitted(true);
        setFormData({ name: "", email: "", service: "", message: "" });
      } catch {
        setError("Failed to send message. Please try again or contact us directly.");
      } finally {
        setSubmitting(false);
      }
    },
    [form_data]
  );

  const handleReset = useCallback(() => { setSubmitted(false); setError(null); }, []);

  return (
    <section id="contact" className="relative overflow-hidden bg-secondary py-8 sm:py-12 lg:py-16">
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-5 py-2 text-xs font-bold text-primary uppercase tracking-wider sm:text-sm">
            Get In Touch
          </span>
          <h2 className="mb-4 font-display text-2xl font-bold text-gray-900 sm:mb-5 sm:text-4xl md:text-5xl lg:text-6xl">
            Get Your <span className="text-primary">Quotation</span> Today
          </h2>
          <p className="text-base leading-relaxed text-gray-500 sm:text-lg">
            Tell us about your printing needs and we&apos;ll provide a custom quote within 24 hours.
          </p>
        </AnimatedSection>

        <div className="grid items-start gap-10 sm:gap-12 lg:grid-cols-5 lg:gap-16">
          {/* ── Form ── */}
          <AnimatedSection animation="slide-in-left" className="lg:col-span-3">
            <div className="space-y-6">
              <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-xl shadow-gray-200/50 sm:p-8 lg:p-10">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                      <CheckCircle2 className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-gray-900">Message Sent!</h3>
                    <p className="mb-6 text-sm leading-relaxed text-gray-500 sm:text-base">
                      Thank you! We&apos;ll review your request and get back to you within 24 hours.
                    </p>
                    <button
                      onClick={handleReset}
                      className="rounded-xl border-2 border-primary px-6 py-2.5 text-sm font-bold text-primary transition-all duration-300 hover:bg-primary hover:text-white"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
                      <div>
                        <label htmlFor="name" className="mb-2 block text-sm font-bold text-gray-700">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={form_data.name}
                          onChange={handleChange}
                          required
                          placeholder="Shyam Printing"
                          className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3 text-sm transition-all duration-300 placeholder:text-gray-400 focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/10 sm:py-3.5"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="mb-2 block text-sm font-bold text-gray-700">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={form_data.email}
                          onChange={handleChange}
                          required
                          placeholder="connect@shyamprinting.com"
                          className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3 text-sm transition-all duration-300 placeholder:text-gray-400 focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/10 sm:py-3.5"
                        />
                      </div>
                    </div>

                    <div className="mt-5 sm:mt-6">
                      <label htmlFor="service" className="mb-2 block text-sm font-bold text-gray-700">
                        Service Needed
                      </label>
                      <div className="relative">
                        <select
                          id="service"
                          name="service"
                          value={form_data.service}
                          onChange={handleChange}
                          required
                          className="w-full appearance-none rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3 pr-10 text-sm transition-all duration-300 focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/10 sm:py-3.5"
                        >
                          <option value="">Select a service</option>
                          <option value="custom_design">Creative Design</option>
                          <option value="business_cards">Business Cards</option>
                          <option value="brochures">Brochures,Flyers &amp; Catalogues</option>
                          <option value="large_format">Stationary Printing</option>
                          <option value="stationery">Large Formating Printing</option>
                          <option value="packaging">Packaging Solutions</option>
                          <option value="other">Other</option>
                        </select>
                        <svg className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>

                    <div className="mt-5 sm:mt-6">
                      <label htmlFor="message" className="mb-2 block text-sm font-bold text-gray-700">
                        Project Details
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={form_data.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        placeholder="Tell us about your project, quantity, timeline, and any specific requirements..."
                        className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3 text-sm transition-all duration-300 placeholder:text-gray-400 focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/10 sm:py-3.5"
                      />
                    </div>

                    {error && (
                      <div className="mt-5 flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                        <AlertCircle className="mt-0.5 h-4 w-4 flex-shrink-0" />
                        {error}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={submitting}
                      className="group mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-primary/25 transition-all duration-300 hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/35 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed sm:mt-8 sm:py-4 sm:text-base"
                    >
                      {submitting ? (
                        <>
                          <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                          </svg>
                          Sending…
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>

              {/* Rush CTA */}
              <div className="overflow-hidden rounded-2xl bg-primary p-5 text-white shadow-xl shadow-primary/20 sm:p-6">
                <h3 className="mb-1.5 text-lg font-bold">Need it fast?</h3>
                <p className="mb-4 text-xs leading-relaxed text-white/75 sm:text-sm">
                  Ask about our rush printing service with same-day turnaround for select products.
                </p>
                <a
                  href="tel:+919429914888"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-bold text-primary shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95"
                >
                  <Phone className="h-4 w-4" />
                  Call Now
                </a>
              </div>
            </div>
          </AnimatedSection>

          {/* ── Contact info ── */}
          <AnimatedSection animation="slide-in-right" className="lg:col-span-2">
            <div className="space-y-4 sm:space-y-5">

              {/* Combined address card */}
              <div className="flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="mb-2 text-sm font-bold text-gray-900">Our Locations</p>
                  <div className="space-y-2">
                    <a
                      href="https://maps.app.goo.gl/bgiNiBDtYmeubST79"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-start justify-between rounded-lg bg-gray-50 px-3 py-2 transition-colors hover:bg-primary/5"
                    >
                      <div>
                        <p className="text-[14px] font-semibold uppercase tracking-wide text-primary mb-0.5">Corporate Office</p>
                        <p className="text-xs text-gray-600 leading-relaxed">S/4, 2nd Floor, Raspan Arcade, Raspan Cross road, Nikol, Ahmedabad, Gujarat - 382350.</p>
                      </div>
                      <ExternalLink className="mt-0.5 ml-2 h-3.5 w-3.5 flex-shrink-0 text-gray-400 transition-colors group-hover:text-primary" />
                    </a>
                    <a
                      href="https://www.google.com/maps/place/Shyam+Offset/@23.0412039,72.6797136,153m/data=!3m1!1e3!4m15!1m8!3m7!1s0x395e8711efd3370f:0x2181e85f1cedb628!2sOdhav+Industrial+Estate,+Odhav,+Ahmedabad,+Kathwada,+Gujarat+382415!3b1!8m2!3d23.0409993!4d72.6794128!16s%2Fg%2F11gdxz6yqb!3m5!1s0x395e8754aa50aca7:0x2c35409d09e32c29!8m2!3d23.0409632!4d72.679735!16s%2Fg%2F11fmfz19tv!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDQxNS4wIKXMDSoASAFQAw%3D%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-start justify-between rounded-lg bg-gray-50 px-3 py-2 transition-colors hover:bg-primary/5"
                    >
                      <div>
                        <p className="text-[14px] font-semibold uppercase tracking-wide text-primary mb-0.5">Production Unit</p>
                        <p className="text-xs text-gray-600 leading-relaxed">D/68-69, Suryam Industrial Estate, Nr. Torrent Power Sub Station, Nikol Ring Road, Kathwada, Ahmedabad, Gujarat - 382350.</p>
                      </div>
                      <ExternalLink className="mt-0.5 ml-2 h-3.5 w-3.5 flex-shrink-0 text-gray-400 transition-colors group-hover:text-primary" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <a
                href="tel:+919429914888"
                className="group flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:shadow-lg group-hover:shadow-primary/25">
                  <Phone className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <p className="mb-0.5 text-sm font-bold text-gray-900">Call Us</p>
                  <p className="text-sm font-medium text-primary">+91 94299 14888</p>
                </div>
                <span className="text-xs font-semibold text-gray-400 transition-colors group-hover:text-primary">Tap to call →</span>
              </a>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/919429914888?text=${encodeURIComponent("Hi Shyam Printing! I'm interested in your printing services. Could you please share more details and a quote for my project?")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-green-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-300 hover:shadow-lg hover:shadow-green-500/10"
              >
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-600 transition-all duration-300 group-hover:bg-green-500 group-hover:text-white group-hover:shadow-lg group-hover:shadow-green-500/30">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="mb-0.5 text-sm font-bold text-gray-900">WhatsApp Us</p>
                  <p className="text-sm font-medium text-green-600">+91 94299 14888</p>
                </div>
                <span className="text-xs font-semibold text-gray-400 transition-colors group-hover:text-green-600">Chat now →</span>
              </a>

              {/* Email */}
              <a
                href="mailto:connect@shyamprinting.com"
                className="group flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:shadow-lg group-hover:shadow-primary/25">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="mb-0.5 text-sm font-bold text-gray-900">Email Us</p>
                  <p className="truncate text-sm font-medium text-primary">connect@shyamprinting.com</p>
                </div>
                <span className="text-xs font-semibold text-gray-400 transition-colors group-hover:text-primary flex-shrink-0">Send →</span>
              </a>

              {/* Working hours */}
              <div className="flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <p className="mb-2 text-sm font-bold text-gray-900">Working Hours</p>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between gap-6">
                      <span className="text-xs text-gray-500">Mon – Sat</span>
                      <span className="text-xs font-semibold text-gray-800">10:00 AM – 6:00 PM</span>
                    </div>
                    <div className="flex items-center justify-between gap-6">
                      <span className="text-xs text-gray-500">Sunday</span>
                      <span className="text-xs font-semibold text-red-500">Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;
