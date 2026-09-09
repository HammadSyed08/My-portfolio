import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';

export default function Contact() {
  return (
    <section id="contact" className="bg-dark-950">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">Let&apos;s work together</p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6">
              Let&apos;s talk about your <span className="gradient-text">project</span>
            </h3>

            <div className="space-y-4">
              <a
                href="mailto:hammadword08@gmail.com"
                className="flex items-center gap-4 p-4 glass-card hover:border-primary-500/50 transition-all duration-300 group"
              >
                <div className="p-3 bg-primary-500/10 rounded-xl text-primary-400 group-hover:bg-primary-500/20 transition-colors">
                  <FiMail size={20} />
                </div>
                <div>
                  <p className="text-dark-400 text-sm">Email</p>
                  <p className="text-white font-medium">hammadword08@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:+923121572571"
                className="flex items-center gap-4 p-4 glass-card hover:border-primary-500/50 transition-all duration-300 group"
              >
                <div className="p-3 bg-primary-500/10 rounded-xl text-primary-400 group-hover:bg-primary-500/20 transition-colors">
                  <FiPhone size={20} />
                </div>
                <div>
                  <p className="text-dark-400 text-sm">Phone</p>
                  <p className="text-white font-medium">+92 312 1572571</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 glass-card">
                <div className="p-3 bg-primary-500/10 rounded-xl text-primary-400">
                  <FiMapPin size={20} />
                </div>
                <div>
                  <p className="text-dark-400 text-sm">Location</p>
                  <p className="text-white font-medium">Bahawalpur Punjab Pakistan</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card">
            <form className="space-y-5">
              <div>
                <label className="block text-dark-300 text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-xl text-white placeholder-dark-500 focus:outline-none focus:border-primary-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-dark-300 text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-xl text-white placeholder-dark-500 focus:outline-none focus:border-primary-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-dark-300 text-sm font-medium mb-2">Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-xl text-white placeholder-dark-500 focus:outline-none focus:border-primary-500 transition-colors resize-none"
                />
              </div>
              <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
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