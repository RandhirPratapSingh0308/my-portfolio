import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy, Check } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedType, setCopiedType] = useState(null); // 'email' | 'phone' | null

  // Validate form field in real-time
  const validateField = (name, value) => {
    let error = '';
    if (name === 'name' && !value.trim()) {
      error = 'Full Name is required.';
    } else if (name === 'email') {
      if (!value.trim()) {
        error = 'Email Address is required.';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        error = 'Please enter a valid email address.';
      }
    } else if (name === 'message') {
      if (!value.trim()) {
        error = 'Message cannot be empty.';
      } else if (value.trim().length < 10) {
        error = 'Message should be at least 10 characters.';
      }
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    
    // Clear error for that field or update
    const error = validateField(name, value);
    setErrors({ ...errors, [name]: error });
  };

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check all fields
    const newErrors = {};
    Object.keys(form).forEach((key) => {
      const error = validateField(key, form[key]);
      if (error) {
        newErrors[key] = error;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Process Form Submission (Web3Forms API Endpoint)
    setIsSubmitting(true);
    setErrors({});

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: 'c7908727-f4f9-4065-9fef-498cf90673d7', // Get your free access key from https://web3forms.com
          name: form.name,
          email: form.email,
          subject: form.subject || 'Portfolio Lead - Randhir',
          message: form.message
        })
      });

      const result = await response.json();
      if (result.success) {
        setIsSubmitted(true);
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        setErrors({ submit: result.message || 'Submission failed. Please check your Access Key.' });
      }
    } catch (err) {
      setErrors({ submit: 'Network error. Please check your internet connection and try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden">
      {/* Decorative Blur Background circles */}
      <div className="absolute top-1/3 right-1/10 w-80 h-80 rounded-full bg-primary-500/10 dark:bg-primary-500/5 blur-3xl z-0" />
      <div className="absolute bottom-1/10 left-1/10 w-72 h-72 rounded-full bg-brand-accent/10 dark:bg-brand-accent/5 blur-3xl z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-xs font-bold uppercase tracking-widest text-primary-500 dark:text-primary-400 font-heading">
            Connect
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-heading">
            Let's Collaborate On Your Next Project
          </h3>
          <div className="h-1.5 w-16 bg-gradient-to-r from-primary-500 to-brand-accent mx-auto rounded-full" />
        </div>

        {/* Section Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <h4 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-200 font-heading">
                Contact Information
              </h4>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-light text-sm sm:text-base">
                Whether you want to build a high-converting landing page, discuss software architecture, or explore frontend designs, send me a message!
              </p>
            </div>

            {/* Information Badges */}
            <div className="space-y-4">
              
              {/* Email Card */}
              <div className="p-4 sm:p-5 rounded-3xl border border-slate-200/50 dark:border-slate-800/50 bg-slate-50/50 dark:bg-slate-900/35 flex items-center justify-between group shadow-sm hover:shadow transition-shadow">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-2xl bg-white dark:bg-slate-900 text-primary-500 border border-slate-200/50 dark:border-slate-800/50">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Send Email</span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200">randhirpratapsingh3899@gmail.com</span>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy('rps85071@gmail.com', 'email')}
                  className="p-2 rounded-xl bg-white dark:bg-slate-900 text-slate-400 hover:text-primary-500 border border-slate-200/40 dark:border-slate-800/40 hover:scale-105 active:scale-95 transition-all cursor-pointer"
                >
                  {copiedType === 'email' ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
                </button>
              </div>

              {/* Phone Card */}
              <div className="p-4 sm:p-5 rounded-3xl border border-slate-200/50 dark:border-slate-800/50 bg-slate-50/50 dark:bg-slate-900/35 flex items-center justify-between group shadow-sm hover:shadow transition-shadow">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-2xl bg-white dark:bg-slate-900 text-rose-500 border border-slate-200/50 dark:border-slate-800/50">
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Call Direct</span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200">+91 8051379149</span>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy('+918051379149', 'phone')}
                  className="p-2 rounded-xl bg-white dark:bg-slate-900 text-slate-400 hover:text-rose-500 border border-slate-200/40 dark:border-slate-800/40 hover:scale-105 active:scale-95 transition-all cursor-pointer"
                >
                  {copiedType === 'phone' ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
                </button>
              </div>

              {/* Location Card */}
              <div className="p-4 sm:p-5 rounded-3xl border border-slate-200/50 dark:border-slate-800/50 bg-slate-50/50 dark:bg-slate-900/35 flex items-center group shadow-sm hover:shadow transition-shadow">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-2xl bg-white dark:bg-slate-900 text-amber-500 border border-slate-200/50 dark:border-slate-800/50">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Location</span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200">Noida, UP, India</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Social details display */}
            <div className="hidden lg:block text-xs text-slate-400 italic">
              * Messages submitted are answered within 24 operational hours.
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="relative p-6 sm:p-8 rounded-3xl border border-slate-200/60 dark:border-slate-800/60 bg-slate-50/30 dark:bg-slate-900/15 shadow-sm h-full flex flex-col justify-center min-h-[420px]">
              
              {/* Success State Overlay */}
              {isSubmitted ? (
                <div className="absolute inset-0 bg-white dark:bg-slate-950 rounded-3xl flex flex-col items-center justify-center text-center p-6 sm:p-8 space-y-5 animate-fade-in z-20">
                  <div className="h-16 w-16 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center shadow-inner animate-scale-up">
                    <CheckCircle2 size={36} />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-white font-heading">
                      Message Sent!
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-sm mx-auto leading-relaxed">
                      Thank you for connecting, Randhir. Your query has been successfully received, and I will get back to you shortly.
                    </p>
                  </div>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-slate-950 dark:bg-white text-white dark:text-slate-950 hover:bg-slate-800 transition-all cursor-pointer shadow-md"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : null}

              {/* Form Input fields */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Name field */}
                  <div className="space-y-1">
                    <label htmlFor="name" className="text-xs font-semibold text-slate-500 dark:text-slate-400">Full Name *</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className={`w-full px-4 py-2.5 rounded-xl border bg-white dark:bg-slate-950 text-slate-800 dark:text-white text-sm outline-none transition-all ${
                        errors.name 
                          ? 'border-rose-500 focus:ring-1 focus:ring-rose-500' 
                          : form.name && !errors.name
                            ? 'border-green-500 focus:ring-1 focus:ring-green-500'
                            : 'border-slate-200 dark:border-slate-800 focus:border-primary-500'
                      }`}
                    />
                    {errors.name && <span className="text-[10px] text-rose-500 block font-medium">{errors.name}</span>}
                  </div>

                  {/* Email field */}
                  <div className="space-y-1">
                    <label htmlFor="email" className="text-xs font-semibold text-slate-500 dark:text-slate-400">Email Address *</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="e.g. john@example.com"
                      className={`w-full px-4 py-2.5 rounded-xl border bg-white dark:bg-slate-950 text-slate-800 dark:text-white text-sm outline-none transition-all ${
                        errors.email 
                          ? 'border-rose-500 focus:ring-1 focus:ring-rose-500' 
                          : form.email && !errors.email
                            ? 'border-green-500 focus:ring-1 focus:ring-green-500'
                            : 'border-slate-200 dark:border-slate-800 focus:border-primary-500'
                      }`}
                    />
                    {errors.email && <span className="text-[10px] text-rose-500 block font-medium">{errors.email}</span>}
                  </div>

                </div>

                {/* Subject field */}
                <div className="space-y-1">
                  <label htmlFor="subject" className="text-xs font-semibold text-slate-500 dark:text-slate-400">Subject (Optional)</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="e.g. Freelance Proposal / Job Interview"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-800 dark:text-white text-sm outline-none focus:border-primary-500 transition-all"
                  />
                </div>

                {/* Message field */}
                <div className="space-y-1">
                  <label htmlFor="message" className="text-xs font-semibold text-slate-500 dark:text-slate-400">Message *</label>
                  <textarea 
                    id="message" 
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Write details of your project context..."
                    className={`w-full px-4 py-2.5 rounded-xl border bg-white dark:bg-slate-950 text-slate-800 dark:text-white text-sm outline-none transition-all resize-none ${
                      errors.message 
                        ? 'border-rose-500 focus:ring-1 focus:ring-rose-500' 
                        : form.message && !errors.message
                          ? 'border-green-500 focus:ring-1 focus:ring-green-500'
                          : 'border-slate-200 dark:border-slate-800 focus:border-primary-500'
                    }`}
                  />
                  {errors.message && <span className="text-[10px] text-rose-500 block font-medium">{errors.message}</span>}
                </div>

                {errors.submit && (
                  <div className="p-3.5 rounded-xl bg-rose-500/10 text-rose-500 text-xs font-semibold border border-rose-500/20 text-center animate-fade-in">
                    {errors.submit}
                  </div>
                )}

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center space-x-2 py-3.5 rounded-xl text-sm font-semibold uppercase tracking-wider bg-gradient-to-r from-primary-500 to-brand-accent text-white shadow-md shadow-primary-500/10 hover:scale-[1.01] active:scale-95 disabled:scale-100 disabled:opacity-50 transition-all cursor-pointer"
                >
                  {isSubmitting ? (
                    <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={15} />
                    </>
                  )}
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
