import { Code, Smartphone, Database, Palette, Globe, Server } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface Skill {
  name: string;
  level: number;
  category: string;
}

interface SkillCategory {
  name: string;
  icon: LucideIcon;
  skills: Skill[];
  color: string;
}

export function SkillsSection() {
  const skillCategories: SkillCategory[] = [
    {
      name: "Mobile Development",
      icon: Smartphone,
      color: "blue",
      skills: [
        { name: "React Native", level: 90, category: "Mobile" },
        { name: "Flutter", level: 85, category: "Mobile" },
        { name: "Java (Android)", level: 75, category: "Mobile" },
        { name: "Swift (iOS)", level: 60, category: "Mobile" },
      ],
    },
    {
      name: "Frontend Development",
      icon: Globe,
      color: "green",
      skills: [
        { name: "React", level: 88, category: "Frontend" },
        { name: "Next.js", level: 85, category: "Frontend" },
        { name: "TypeScript", level: 82, category: "Frontend" },
        { name: "Tailwind CSS", level: 90, category: "Frontend" },
      ],
    },
    {
      name: "Backend Development",
      icon: Server,
      color: "purple",
      skills: [
        { name: "Node.js", level: 85, category: "Backend" },
        { name: "Express.js", level: 80, category: "Backend" },
        { name: "Python", level: 75, category: "Backend" },
        { name: "PHP", level: 70, category: "Backend" },
      ],
    },
    {
      name: "Database & Tools",
      icon: Database,
      color: "orange",
      skills: [
        { name: "MongoDB", level: 82, category: "Database" },
        { name: "PostgreSQL", level: 78, category: "Database" },
        { name: "Firebase", level: 85, category: "Database" },
        { name: "Git", level: 90, category: "Tools" },
      ],
    },
    {
      name: "UI/UX Design",
      icon: Palette,
      color: "pink",
      skills: [
        { name: "Figma", level: 80, category: "Design" },
        { name: "Adobe XD", level: 75, category: "Design" },
        { name: "Photoshop", level: 70, category: "Design" },
        { name: "Canva", level: 85, category: "Design" },
      ],
    },
    {
      name: "Programming Languages",
      icon: Code,
      color: "indigo",
      skills: [
        { name: "JavaScript", level: 90, category: "Programming" },
        { name: "Dart", level: 85, category: "Programming" },
        { name: "Python", level: 75, category: "Programming" },
        { name: "Java", level: 70, category: "Programming" },
      ],
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "border-blue-500 bg-blue-50 dark:bg-blue-900/20",
      green: "border-green-500 bg-green-50 dark:bg-green-900/20",
      purple: "border-purple-500 bg-purple-50 dark:bg-purple-900/20",
      orange: "border-orange-500 bg-orange-50 dark:bg-orange-900/20",
      pink: "border-pink-500 bg-pink-50 dark:bg-pink-900/20",
      indigo: "border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20",
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getProgressColor = (color: string) => {
    const colors = {
      blue: "bg-blue-500",
      green: "bg-green-500",
      purple: "bg-purple-500",
      orange: "bg-orange-500",
      pink: "bg-pink-500",
      indigo: "bg-indigo-500",
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getIconColor = (color: string) => {
    const colors = {
      blue: "text-blue-500",
      green: "text-green-500",
      purple: "text-purple-500",
      orange: "text-orange-500",
      pink: "text-pink-500",
      indigo: "text-indigo-500",
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id='skills' className='py-20'>
      <div className='container mx-auto px-6'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4'>
            Skills & Technologies
          </h2>
          <p className='text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto'>
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl border-2 ${getColorClasses(
                category.color
              )} transition-all duration-300 hover:shadow-lg`}
            >
              {/* Category Header */}
              <div className='flex items-center gap-3 mb-6'>
                <div className={`p-2 rounded-lg ${getColorClasses(category.color)}`}>
                  <category.icon className={`h-5 w-5 ${getIconColor(category.color)}`} />
                </div>
                <h3 className='text-lg font-semibold text-slate-900 dark:text-white'>
                  {category.name}
                </h3>
              </div>

              {/* Skills */}
              <div className='space-y-4'>
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className='flex justify-between items-center mb-2'>
                      <span className='text-sm font-medium text-slate-700 dark:text-slate-300'>
                        {skill.name}
                      </span>
                      <span className='text-xs text-slate-500 dark:text-slate-400'>
                        {skill.level}%
                      </span>
                    </div>
                    <div className='w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2'>
                      <div
                        className={`h-2 rounded-full transition-all duration-500 ${getProgressColor(
                          category.color
                        )}`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Summary */}
        <div className='mt-16 text-center'>
          <h3 className='text-xl font-semibold text-slate-900 dark:text-white mb-6'>
            Other Technologies I&apos;ve Worked With
          </h3>
          <div className='flex flex-wrap justify-center gap-3'>
            {[
              "Docker",
              "AWS",
              "GraphQL",
              "Redux",
              "Sass",
              "Webpack",
              "Jest",
              "Cypress",
              "Postman",
              "Jira",
              "Slack",
              "VS Code",
            ].map((tech) => (
              <span
                key={tech}
                className='px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-full text-sm border border-slate-200 dark:border-slate-700'
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
