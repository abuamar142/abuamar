"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram } from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // You can integrate with a backend service or email service here
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "abuamar.albadawi@gmail.com",
      href: "mailto:abuamar.albadawi@gmail.com",
      color: "text-blue-600",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+62 812-3456-7890",
      href: "tel:+6281234567890",
      color: "text-green-600",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Jakarta, Indonesia",
      href: "#",
      color: "text-purple-600",
    },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/abuamar142",
      color: "hover:text-gray-600",
      bgColor: "hover:bg-gray-100 dark:hover:bg-gray-800",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "#",
      color: "hover:text-blue-600",
      bgColor: "hover:bg-blue-100 dark:hover:bg-blue-900",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://www.instagram.com/official_platag/",
      color: "hover:text-pink-600",
      bgColor: "hover:bg-pink-100 dark:hover:bg-pink-900",
    },
  ];

  return (
    <section id='contact' className='py-20'>
      <div className='container mx-auto px-6'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4'>
            Get In Touch
          </h2>
          <p className='text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto'>
            I&apos;m always open to discussing new opportunities, collaborating on interesting
            projects, or just having a chat about technology. Feel free to reach out!
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          {/* Contact Information */}
          <div className='space-y-8'>
            <div>
              <h3 className='text-xl font-semibold text-slate-900 dark:text-white mb-6'>
                Contact Information
              </h3>
              <div className='space-y-4'>
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className='flex items-center gap-4 p-4 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 hover:shadow-md transition-all duration-200 group'
                  >
                    <div
                      className={`p-3 rounded-lg bg-slate-100 dark:bg-slate-700 ${info.color} group-hover:scale-110 transition-transform duration-200`}
                    >
                      <info.icon className='h-5 w-5' />
                    </div>
                    <div>
                      <p className='text-sm text-slate-500 dark:text-slate-400'>{info.label}</p>
                      <p className='font-medium text-slate-900 dark:text-white'>{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className='text-xl font-semibold text-slate-900 dark:text-white mb-6'>
                Connect With Me
              </h3>
              <div className='flex gap-4'>
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className={`p-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 ${social.color} ${social.bgColor} transition-all duration-200 hover:scale-110 hover:shadow-md`}
                    title={social.name}
                  >
                    <social.icon className='h-5 w-5' />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className='p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 rounded-lg border border-blue-200 dark:border-slate-600'>
              <h4 className='font-semibold text-slate-900 dark:text-white mb-2'>
                🚀 Currently Available
              </h4>
              <p className='text-slate-600 dark:text-slate-300 text-sm'>
                I&apos;m open to freelance projects and full-time opportunities. Let&apos;s build
                something amazing together!
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className='text-xl font-semibold text-slate-900 dark:text-white mb-6'>
              Send Me a Message
            </h3>
            <form onSubmit={handleSubmit} className='space-y-6'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div>
                  <label
                    htmlFor='name'
                    className='block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2'
                  >
                    Name
                  </label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className='w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-white transition-colors duration-200'
                    placeholder='Your name'
                  />
                </div>
                <div>
                  <label
                    htmlFor='email'
                    className='block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2'
                  >
                    Email
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className='w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-white transition-colors duration-200'
                    placeholder='your.email@example.com'
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor='subject'
                  className='block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2'
                >
                  Subject
                </label>
                <input
                  type='text'
                  id='subject'
                  name='subject'
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-white transition-colors duration-200'
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label
                  htmlFor='message'
                  className='block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2'
                >
                  Message
                </label>
                <textarea
                  id='message'
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className='w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-white transition-colors duration-200 resize-vertical'
                  placeholder='Tell me about your project or just say hi!'
                />
              </div>

              <button
                type='submit'
                className='w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2'
              >
                <Send className='h-4 w-4' />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
