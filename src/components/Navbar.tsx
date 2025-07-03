"use client";

import { useState } from "react";
import { Menu, X, Github, Mail, Linkedin } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { name: "GitHub", href: "https://github.com/abuamar142", icon: Github },
    { name: "LinkedIn", href: "#", icon: Linkedin },
    { name: "Email", href: "mailto:abuamar.albadawi@gmail.com", icon: Mail },
  ];

  return (
    <nav className='fixed top-0 left-0 right-0 z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700'>
      <div className='container mx-auto px-6'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo */}
          <div className='flex-shrink-0'>
            <a href='#home' className='text-xl font-bold text-slate-900 dark:text-white'>
              Abu Amar
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden md:block'>
            <div className='ml-10 flex items-baseline space-x-4'>
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className='text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors duration-200'
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className='hidden md:flex items-center space-x-3'>
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className='text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200'
              >
                <link.icon className='h-5 w-5' />
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className='md:hidden'>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400'
            >
              {isOpen ? <X className='h-6 w-6' /> : <Menu className='h-6 w-6' />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className='md:hidden'>
            <div className='px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700'>
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className='text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 block px-3 py-2 text-base font-medium transition-colors duration-200'
                >
                  {item.name}
                </a>
              ))}
              <div className='flex space-x-4 px-3 py-2'>
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className='text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200'
                  >
                    <link.icon className='h-5 w-5' />
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
