import { Calendar, MapPin } from "lucide-react";

interface ExperienceItem {
  title: string;
  company: string;
  duration: string;
  location: string;
  description: string[];
  technologies: string[];
  type: "work" | "education" | "project";
}

export function ExperienceSection() {
  const experiences: ExperienceItem[] = [
    {
      title: "Mobile Developer",
      company: "PT. Teknologi Digital Indonesia",
      duration: "2023 - Present",
      location: "Jakarta, Indonesia",
      description: [
        "Developed and maintained mobile applications using React Native and Flutter",
        "Collaborated with cross-functional teams to deliver high-quality user experiences",
        "Implemented responsive designs and optimized app performance",
        "Participated in code reviews and mentored junior developers",
      ],
      technologies: ["React Native", "Flutter", "JavaScript", "Dart", "Firebase"],
      type: "work",
    },
    {
      title: "Full Stack Developer",
      company: "Freelance",
      duration: "2022 - 2023",
      location: "Remote",
      description: [
        "Built custom web applications for various clients",
        "Designed and implemented RESTful APIs using Node.js and Express",
        "Created responsive front-end interfaces with React and Next.js",
        "Managed databases and deployed applications to cloud platforms",
      ],
      technologies: ["React", "Node.js", "Express", "MongoDB", "Next.js"],
      type: "work",
    },
    {
      title: "Computer Science",
      company: "Universitas Indonesia",
      duration: "2020 - 2024",
      location: "Jakarta, Indonesia",
      description: [
        "Focused on software engineering and computer systems",
        "Completed coursework in algorithms, data structures, and software design",
        "Participated in programming competitions and hackathons",
        "Final project: Mobile application for local business management",
      ],
      technologies: ["Java", "Python", "C++", "Database Systems", "Software Engineering"],
      type: "education",
    },
  ];

  const getIcon = (type: string) => {
    const iconClass = "h-3 w-3";
    switch (type) {
      case "work":
        return <div className={`${iconClass} bg-blue-600 rounded-full`}></div>;
      case "education":
        return <div className={`${iconClass} bg-green-600 rounded-full`}></div>;
      case "project":
        return <div className={`${iconClass} bg-purple-600 rounded-full`}></div>;
      default:
        return <div className={`${iconClass} bg-slate-400 rounded-full`}></div>;
    }
  };

  return (
    <section id='experience' className='py-20 bg-slate-50 dark:bg-slate-900'>
      <div className='container mx-auto px-6'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4'>
            Experience & Education
          </h2>
          <p className='text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto'>
            My professional journey and educational background in software development
          </p>
        </div>

        <div className='max-w-4xl mx-auto'>
          <div className='relative'>
            {/* Timeline line */}
            <div className='absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-700'></div>

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className='absolute left-8 md:left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2'>
                  <div className='w-4 h-4 bg-white dark:bg-slate-900 border-4 border-blue-600 rounded-full'></div>
                </div>

                {/* Content */}
                <div
                  className={`w-full md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  } ml-16 md:ml-0`}
                >
                  <div className='bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700'>
                    {/* Header */}
                    <div className='flex items-start justify-between mb-4'>
                      <div>
                        <h3 className='text-xl font-semibold text-slate-900 dark:text-white'>
                          {exp.title}
                        </h3>
                        <p className='text-blue-600 dark:text-blue-400 font-medium'>
                          {exp.company}
                        </p>
                      </div>
                      {getIcon(exp.type)}
                    </div>

                    {/* Meta info */}
                    <div className='flex flex-wrap gap-4 mb-4 text-sm text-slate-500 dark:text-slate-400'>
                      <div className='flex items-center gap-1'>
                        <Calendar className='h-4 w-4' />
                        {exp.duration}
                      </div>
                      <div className='flex items-center gap-1'>
                        <MapPin className='h-4 w-4' />
                        {exp.location}
                      </div>
                    </div>

                    {/* Description */}
                    <ul className='space-y-2 mb-4'>
                      {exp.description.map((item, i) => (
                        <li
                          key={i}
                          className='text-slate-600 dark:text-slate-300 flex items-start gap-2'
                        >
                          <div className='w-1.5 h-1.5 bg-slate-400 dark:bg-slate-500 rounded-full mt-2 flex-shrink-0'></div>
                          {item}
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className='flex flex-wrap gap-2'>
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className='px-3 py-1 text-xs bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full'
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
