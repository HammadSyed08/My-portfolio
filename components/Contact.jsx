import Image from 'next/image'; // Use standard <img> if using Vite / React SPA
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';

export default function Contact() {
  return (
    <section id="contact" className="bg-dark-950 py-16">
      <div className="section-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">Let&apos;s work together</p>
        </div>

        {/* 3-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* 1. LEFT COLUMN: Contact Information (4 Columns) */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
            <h3 className="text-2xl font-bold text-white mb-2">
              Let&apos;s talk about your <span className="gradient-text">project</span>
            </h3>

            <div className="space-y-4 flex-1 flex flex-col justify-center">
              {/* Email */}
              <a
                href="mailto:hammadword08@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 glass-card rounded-2xl bg-dark-900/50 border border-dark-800 hover:border-primary-500/50 transition-all duration-300 group"
              >
                <div className="p-3 bg-primary-500/10 rounded-xl text-primary-400 group-hover:bg-primary-500/20 transition-colors shrink-0">
                  <FiMail size={20} />
                </div>
                <div className="overflow-hidden">
                  <p className="text-dark-400 text-sm">Email</p>
                  <p className="text-white font-medium truncate">hammadword08@gmail.com</p>
                </div>
              </a>

              {/* WhatsApp / Phone */}
              <a
                href="https://wa.me/923121572571"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 glass-card rounded-2xl bg-dark-900/50 border border-dark-800 hover:border-primary-500/50 transition-all duration-300 group"
              >
                <div className="p-3 bg-primary-500/10 rounded-xl text-primary-400 group-hover:bg-primary-500/20 transition-colors shrink-0">
                  <FiPhone size={20} />
                </div>
                <div>
                  <p className="text-dark-400 text-sm">WhatsApp / Phone</p>
                  <p className="text-white font-medium">+92 312 1572571</p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 p-4 glass-card rounded-2xl bg-dark-900/50 border border-dark-800">
                <div className="p-3 bg-primary-500/10 rounded-xl text-primary-400 shrink-0">
                  <FiMapPin size={20} />
                </div>
                <div>
                  <p className="text-dark-400 text-sm">Location</p>
                  <p className="text-white font-medium">Bahawalpur, Punjab, Pakistan</p>
                </div>
              </div>
            </div>
          </div>

          {/* 2. CENTER COLUMN: Personal Profile Image (3 Columns) */}
          <div className="lg:col-span-3 flex justify-center items-center">
            <div className="relative w-full h-full min-h-[320px] max-w-sm rounded-2xl overflow-hidden border border-dark-700 shadow-2xl group">
              {/* Subtle Ambient Glow */}
              <div className="absolute -inset-1 bg-gradient-to-b from-primary-500/30 to-green-500/30 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500" />

              {/* Image Container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-dark-900">
                <Image
                  src="/img/contact.jfif" // Replace with your image path
                  alt="Contact Me"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* 3. RIGHT COLUMN: Contact Form (5 Columns) */}
          <div className="lg:col-span-5 glass-card p-6 rounded-2xl bg-dark-900/50 border border-dark-800 backdrop-blur-md">
            <form className="space-y-4">
              <div>
                <label className="block text-dark-300 text-sm font-medium mb-1.5">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-xl text-white placeholder-dark-500 focus:outline-none focus:border-primary-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-dark-300 text-sm font-medium mb-1.5">Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-xl text-white placeholder-dark-500 focus:outline-none focus:border-primary-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-dark-300 text-sm font-medium mb-1.5">Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-xl text-white placeholder-dark-500 focus:outline-none focus:border-primary-500 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="btn-primary w-full flex items-center justify-center gap-2 py-3 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-xl transition-colors"
              >
                <FiSend />
                Send Message
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}