import { Heart, Github, Linkedin, Mail, Instagram } from "lucide-react";

export function Footer() {
  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/abuamar142",
      color: "hover:text-gray-600",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/abu-amar/",
      color: "hover:text-blue-600",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://www.instagram.com/abuuamar_/",
      color: "hover:text-pink-600",
    },
    {
      name: "Email",
      icon: Mail,
      href: "mailto:abuamar.albadawi@gmail.com",
      color: "hover:text-green-600",
    },
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className='bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800'>
      <div className='container mx-auto px-6 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          {/* Brand */}
          <div className='col-span-1 md:col-span-2'>
            <h3 className='text-xl font-bold text-slate-900 dark:text-white mb-4'>
              Abu Amar Al Badawi
            </h3>
            <p className='text-slate-600 dark:text-slate-300 mb-6 max-w-md'>
              Full Stack Developer passionate about creating innovative digital solutions.
              Specializing in mobile and web development with modern technologies.
            </p>
            <div className='flex space-x-4'>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={`p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 ${social.color} transition-all duration-200 hover:scale-110`}
                  title={social.name}
                >
                  <social.icon className='h-4 w-4' />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className='text-lg font-semibold text-slate-900 dark:text-white mb-4'>
              Quick Links
            </h4>
            <ul className='space-y-2'>
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className='text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200'
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className='text-lg font-semibold text-slate-900 dark:text-white mb-4'>
              Get In Touch
            </h4>
            <div className='space-y-2'>
              <p className='text-slate-600 dark:text-slate-400'>
                <a
                  href='mailto:abuamar.albadawi@gmail.com'
                  className='hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200'
                >
                  abuamar.albadawi@gmail.com
                </a>
              </p>
              <p className='text-slate-600 dark:text-slate-400'>Jakarta, Indonesia</p>
              <p className='text-slate-600 dark:text-slate-400'>Available for freelance work</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className='mt-12 pt-8 border-t border-slate-200 dark:border-slate-800'>
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <p className='text-slate-600 dark:text-slate-400 text-sm mb-4 md:mb-0'>
              © {new Date().getFullYear()} Abu Amar Al Badawi. All rights reserved.
            </p>
            <div className='flex items-center gap-1 text-slate-600 dark:text-slate-400 text-sm'>
              <span>Built with</span>
              <Heart className='h-4 w-4 text-red-500' />
              <span>using Next.js & Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
