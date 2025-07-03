"use client";

import { useState } from "react";
import { ProjectCard } from "./ProjectCardNew";
import { ProjectProps } from "@/types";
import { Filter } from "lucide-react";

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects: ProjectProps[] = [
    {
      id: "1",
      title: "Coffee Plant Disease Detection App",
      description:
        "Aplikasi deteksi penyakit tumbuhan kopi melalui image classification menggunakan teknologi AI. Proyek akhir Bangkit Academy dengan tim multidisiplin (Mobile, Cloud, ML).",
      technologies: [
        "Kotlin",
        "Jetpack Compose",
        "Machine Learning",
        "TensorFlow",
        "Cloud Computing",
      ],
      featured: true,
      githubUrl: "https://github.com/abuamar142",
      demoUrl: "#",
    },
    {
      id: "2",
      title: "Full-Stack Project Refactory",
      description:
        "Proyek full-stack yang dikembangkan selama magang di Refactory, mencakup aplikasi mobile (Flutter), web (React), dan backend (Supabase) dengan CI/CD pipeline.",
      technologies: ["Flutter", "React", "Supabase", "GitHub Actions", "C4 Model"],
      featured: true,
      githubUrl: "https://github.com/abuamar142",
      demoUrl: "#",
    },
    {
      id: "3",
      title: "PERMIKOMNAS Merchandise System",
      description:
        "Sistem manajemen produksi dan distribusi merchandise organisasi PERMIKOMNAS, dari perencanaan hingga distribusi untuk tingkat wilayah.",
      technologies: ["Project Management", "Google Spreadsheet", "Financial Management"],
      githubUrl: "https://github.com/abuamar142",
      demoUrl: "#",
    },
    {
      id: "4",
      title: "Komplek Financial Management",
      description:
        "Sistem pengelolaan keuangan harian dan bulanan untuk Komplek Madrasah Huffadh dengan dokumentasi transaksi terstruktur.",
      technologies: ["Google Spreadsheet", "Financial Analysis", "Reporting"],
      githubUrl: "https://github.com/abuamar142",
      demoUrl: "#",
    },
    {
      id: "5",
      title: "HMIF Open Recruitment System",
      description:
        "Sistem rekrutmen anggota baru HMIF dengan alur seleksi dan koordinasi antar panitia yang terstruktur dan efisien.",
      technologies: ["Event Management", "Organizational Tools", "Google Forms"],
      featured: true,
      githubUrl: "https://github.com/abuamar142",
    },
    {
      id: "6",
      title: "Personal Portfolio Website",
      description:
        "Website portfolio personal yang dibangun dengan Next.js 15, TypeScript, dan Tailwind CSS dengan fitur dark/light mode dan desain responsif.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React", "Responsive Design"],
      githubUrl: "https://github.com/abuamar142",
      demoUrl: "#",
    },
  ];

  const categories = [
    { id: "all", name: "All Projects", count: projects.length },
    {
      id: "mobile",
      name: "Mobile Apps",
      count: projects.filter((p) =>
        p.technologies.some((t) => ["React Native", "Flutter", "Dart"].includes(t))
      ).length,
    },
    {
      id: "web",
      name: "Web Apps",
      count: projects.filter((p) =>
        p.technologies.some((t) => ["React", "Next.js", "Node.js"].includes(t))
      ).length,
    },
    { id: "featured", name: "Featured", count: projects.filter((p) => p.featured).length },
  ];

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "featured") return project.featured;
    if (activeFilter === "mobile")
      return project.technologies.some((t) => ["React Native", "Flutter", "Dart"].includes(t));
    if (activeFilter === "web")
      return project.technologies.some((t) => ["React", "Next.js", "Node.js"].includes(t));
    return true;
  });

  return (
    <section id='projects' className='py-20 bg-slate-50 dark:bg-slate-900'>
      <div className='container mx-auto px-6'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4'>
            Featured Projects
          </h2>
          <p className='text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto'>
            Here are some of my recent projects that showcase my skills and experience in software
            development
          </p>
        </div>

        {/* Filter Buttons */}
        <div className='flex flex-wrap justify-center gap-4 mb-12'>
          <div className='flex items-center gap-2 text-slate-600 dark:text-slate-400'>
            <Filter className='h-4 w-4' />
            <span className='text-sm font-medium'>Filter:</span>
          </div>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                activeFilter === category.id
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700"
              }`}
            >
              {category.name}
              <span className='ml-2 text-sm opacity-75'>({category.count})</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Load More Button */}
        {filteredProjects.length > 6 && (
          <div className='text-center mt-12'>
            <button className='bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200'>
              Load More Projects
            </button>
          </div>
        )}

        {/* GitHub CTA */}
        <div className='text-center mt-16'>
          <p className='text-slate-600 dark:text-slate-300 mb-4'>Want to see more of my work?</p>
          <a
            href='https://github.com/abuamar142'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-2 bg-slate-900 dark:bg-slate-700 hover:bg-slate-800 dark:hover:bg-slate-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200'
          >
            <svg className='h-5 w-5' fill='currentColor' viewBox='0 0 24 24'>
              <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
            </svg>
            Visit My GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
