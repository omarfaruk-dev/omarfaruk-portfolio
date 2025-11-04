import React, { useState, useEffect } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaCodepen } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
  const [copiedIndex, setCopiedIndex] = useState(null);

  // Load EmailJS script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
    script.async = true;
    script.onload = () => {
      // Initialize EmailJS with your public key
      if (window.emailjs) {
        window.emailjs.init('-k5QANi11cFGNxl1i'); // Replace with your actual public key
      }
    };
    script.onerror = () => {
      console.error('Failed to load EmailJS');
    };
    document.head.appendChild(script);

    return () => {
      const existingScript = document.querySelector('script[src*="email.min.js"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Check if EmailJS is properly configured
    if (!window.emailjs) {
      console.error('EmailJS not loaded');
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }

    try {
    
      
      // Send email using EmailJS
      await window.emailjs.send(
        'service_w2cf1qp', // Replace with your EmailJS service ID
        'template_tkut5pr', // Replace with your EmailJS template ID
        {
          to_name: "Omar Faruk",
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          reply_to: formData.email,
          contact_number: formData.phone || "Not provided",
          sender_info: `Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`
        }
      );


      setSubmitStatus('success');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: "Email",
      value: "omarfaruk.dev@gmail.com",
      isCopy: true
    },
    {
      icon: <FaPhone className="text-2xl" />,
      title: "Phone",
      value: "+8801739460198",
      isCopy: false,
      isTel: true
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      title: "Location",
      value: "Bogura, Bangladesh",
      isCopy: false
    }
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin className="text-xl" />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/dev-omar-faruk",
      color: "hover:text-primary"
    },
    {
      icon: <FaGithub className="text-xl" />,
      name: "GitHub",
      url: "https://github.com/omarfaruk-dev",
      color: "hover:text-primary"
    },
    {
      icon: <FaXTwitter className="text-xl" />,
      name: "X",
      url: "https://x.com/omarfaruk_dev",
      color: "hover:text-primary"
    },
    {
      icon: <FaCodepen className="text-xl" />,
      name: "CodePen",
      url: "https://codepen.io/omarfaruk-dev",
      color: "hover:text-primary"
    }
  ];

  const handleCopy = (value, idx) => {
    navigator.clipboard.writeText(value);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 1200);
  };



  return (
    <section id="contact" className="flex flex-col items-center py-8 md:py-12 lg:py-16">
      <div className="max-w-7xl w-full mx-auto px-4">
        {/* Section Title */}
        <div className='w-full md:w-1/2 mx-auto mb-16' data-aos="fade-up" data-aos-delay="200">
          <div className="divider before:bg-primary after:bg-primary text-primary text-3xl font-bold space-grotesk-font">
            <h2>Get In Touch</h2>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Contact Information */}
          <div className="space-y-8" data-aos="fade-right" data-aos-delay="300">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6 space-grotesk-font" data-aos="fade-up" data-aos-delay="400">Let's Connect</h3>
              <p className="text-secondary/80 text-lg leading-relaxed" data-aos="fade-up" data-aos-delay="500">
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4" data-aos="fade-up" data-aos-delay="600">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="group flex items-center gap-4 p-4 bg-base-200/50 backdrop-blur-sm rounded-xl border border-primary/20 hover:shadow-md hover:shadow-primary/20 hover:border-primary/40 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                    <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                      {info.icon}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary group-hover:text-secondary/90 transition-colors duration-300">
                      {info.title}
                    </h4>
                    <p
                      className={`text-secondary/80 group-hover:text-secondary/70 transition-colors duration-300 ${info.isCopy || info.isTel ? 'cursor-pointer hover:text-primary font-semibold' : ''}`}
                      onClick={info.isTel ? () => window.open(`tel:${info.value}`, '_self') : info.isCopy ? () => handleCopy(info.value, index) : undefined}
                    >
                      {info.value} {copiedIndex === index && info.isCopy && <span className="ml-2 text-white text-xs">Copied to clipboard!</span>}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div data-aos="fade-up" data-aos-delay="1000">
              <h4 className="text-lg font-semibold text-secondary mb-4">Follow Me</h4>
              <div className="flex gap-4" data-aos="zoom-in" data-aos-delay="1100">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center justify-center w-12 h-12 bg-base-200/50 backdrop-blur-sm rounded-md border border-primary/20 text-secondary/80 hover:shadow-lg hover:shadow-primary/20 hover:border-primary/40 transition-all duration-300 transform hover:-translate-y-1 ${social.color}`}
                  >
                    <div className="group-hover:scale-110 transition-transform duration-300">
                      {social.icon}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-base-200/50 backdrop-blur-sm p-8 rounded-md border border-primary/20 shadow-lg" data-aos="fade-left" data-aos-delay="400">
            <h3 className="text-2xl font-bold text-primary mb-6 space-grotesk-font " data-aos="fade-up" data-aos-delay="500">Send Message</h3>
            
            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg flex items-center gap-3">
                <FaCheckCircle className="text-green-500 text-2xl" />
                <p className="font-medium">Message sent successfully! I'll get back to you soon. Thank you!</p>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg flex items-center gap-3">
                <FaTimesCircle className="text-red-500 text-2xl" />
                <p className="font-medium">Failed to send message. Please contact me directly at omarfaruk.dev@gmail.com</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-secondary mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-base-100 border border-primary/20 rounded-md focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-secondary placeholder-secondary/50 disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-secondary mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-base-100 border border-primary/20 rounded-md focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-secondary placeholder-secondary/50 disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-secondary mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-base-100 border border-primary/20 rounded-md focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-secondary placeholder-secondary/50 disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="What's this about?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-secondary mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-base-100 border border-primary/20 rounded-md focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-secondary placeholder-secondary/50 resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-primary text-base-100 font-semibold rounded-md hover:bg-primary/90 hover:shadow-md hover:shadow-primary/20 transition-all duration-200 shadow-md transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;