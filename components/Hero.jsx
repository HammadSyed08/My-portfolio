'use client';

import { useEffect, useState } from 'react';
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiArrowDown, FiDownload } from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showEmailTooltip, setShowEmailTooltip] = useState(false);


  const handleEmailClick = (e) => {

    window.location.href = 'mailto:hammadword08@gmail.com';
    navigator.clipboard.writeText('hammadword08@gmail.com').then(() => {
      setShowEmailTooltip(true);
      setTimeout(() => setShowEmailTooltip(false), 2000);
    });
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToNext = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const stats = [
    { label: 'Years Experience', value: '1+' },
    { label: 'Projects Done', value: '7+' },
    { label: 'Technologies', value: '12+' },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-950"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(99, 102, 241, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(99, 102, 241, 0.3) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* Animated gradient orbs */}
        <div
          className="absolute top-1/4 -left-32 w-96 h-96 bg-primary-500/20 rounded-full blur-[128px] animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 1.5}px, ${mousePosition.y * 1.5}px)`,
            transition: 'transform 0.3s ease-out',
          }}
        />
        <div
          className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-blue-500/15 rounded-full blur-[128px]"
          style={{
            transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
            transition: 'transform 0.3s ease-out',
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-500/10 rounded-full blur-[150px]" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random() * 0.5 + 0.2,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col items-center text-center">
          {/* Status Badge - Slide from top */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full mb-8 backdrop-blur-sm"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
            </span>
            <span className="text-primary-300 text-sm font-medium">Available for opportunities</span>
          </motion.div>

          {/* Main Heading - Slide from bottom with stagger */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white mb-6 leading-tight tracking-tight max-w-4xl"
          >
            Hi, I&apos;m{' '} <br />
            <span className="gradient-text bg-gradient-to-r from-primary-400 via-blue-400 to-violet-400">
              Syed Hammad Ali
            </span>
          </motion.h1>

          {/* Subtitle - Slide up */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-xl sm:text-2xl md:text-3xl text-dark-300 font-light mb-4"
          >
            Associate Software Engineer
          </motion.h2>

          {/* Description - Fade in */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="text-dark-400 text-base sm:text-lg mb-8 max-w-2xl leading-relaxed"
          >
            Building dynamic, user-friendly web applications with modern technologies.
            Passionate about clean code and exceptional user experiences.
          </motion.p>

          {/* Contact Info - Fade in */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.0 }}
            className="flex flex-wrap items-center justify-center gap-6 mb-8 text-dark-400 text-sm"
          >
            <div className="flex items-center gap-2 hover:text-primary-400 transition-colors cursor-default">
              <FiMapPin className="text-primary-400" size={16} />
              <span>Bahawalpur, Punjab, Pakistan</span>
            </div>
            <div className="flex items-center gap-2">
              <FiMail className="text-primary-400" size={16} />
              <a
                href="mailto:hammadword08@gmail.com"
                className="hover:text-primary-400 transition-colors"
              >
                hammadword08@gmail.com
              </a>
            </div>
          </motion.div>

          {/* CTA Buttons - Pop in */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-16"
          >
            <a
              href="#contact"
              className="group px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/25 hover:-translate-y-0.5 active:translate-y-0"
            >
              <span className="flex items-center gap-2">
                <FiMail size={18} />
                Get In Touch
              </span>
            </a>
            <a
              href="#projects"
              className="group px-6 py-3 border-2 border-primary-500/50 text-primary-400 hover:bg-primary-500/10 hover:border-primary-400 font-semibold rounded-xl transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
            >
              <span className="flex items-center gap-2">
                View Projects
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </a>
            <a
              href="/Syed-Hammad-Ali-CV.pdf"
              download="Syed-Hammad-Ali-CV.pdf"
              className="group px-6 py-3 border border-dark-700 hover:border-dark-500 text-dark-300 hover:text-white font-medium rounded-xl transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
            >
              <span className="flex items-center gap-2">
                <FiDownload size={16} />
                Download CV
              </span>
            </a>
          </motion.div>

          {/* Social Links & Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.4 }}
            className="flex flex-col items-center gap-8"
          >
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/HammadSyed08"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-dark-800/80 hover:bg-dark-700 border border-dark-700/50 hover:border-primary-500/30 text-dark-300 hover:text-white rounded-xl transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm"
                title="GitHub"
              >
                <FiGithub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/hammadsyed88/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-dark-800/80 hover:bg-dark-700 border border-dark-700/50 hover:border-primary-500/30 text-dark-300 hover:text-white rounded-xl transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm"
                title="LinkedIn"
              >
                <FiLinkedin size={20} />
              </a>
              <div className="relative">
                <button
                  onClick={handleEmailClick}
                  className="p-3 bg-dark-800/80 hover:bg-dark-700 border border-dark-700/50 hover:border-primary-500/30 text-dark-300 hover:text-white rounded-xl transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm"
                  title="Email - Click to send email"
                >
                  <FiMail size={20} />
                </button>

                {/* Tooltip confirmation */}
                {showEmailTooltip && (
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-blue-500/90 text-white text-xs rounded-lg whitespace-nowrap">
                    Email copied!
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-green-500/90" />
                  </div>
                )}
              </div>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-dark-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.button
        onClick={scrollToNext}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 2, duration: 0.5 },
          y: { repeat: Infinity, duration: 2, ease: 'easeInOut' },
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-dark-500 hover:text-primary-400 transition-colors cursor-pointer"
        aria-label="Scroll to next section"
      >
        <FiArrowDown size={24} />
      </motion.button>

      {/* Custom Styles for float animation */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-20px) scale(1.5); }
        }
      `}</style>
    </section>
  );
}