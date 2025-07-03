import { ProjectProps } from "@/types";
import { ExternalLink, Github, Star } from "lucide-react";
import Image from "next/image";

interface ProjectCardProps {
  project: ProjectProps;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className='group bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600'>
      {/* Project Image */}
      <div className='relative overflow-hidden'>
        {project.imageUrl ? (
          <Image
            src={project.imageUrl}
            alt={project.title}
            width={400}
            height={200}
            className='w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300'
          />
        ) : (
          <div className='w-full h-48 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-700 dark:to-slate-600 flex items-center justify-center group-hover:from-blue-100 group-hover:to-purple-100 dark:group-hover:from-slate-600 dark:group-hover:to-slate-500 transition-all duration-300'>
            <div className='text-center'>
              <div className='w-16 h-16 mx-auto mb-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center'>
                <span className='text-white font-bold text-xl'>{project.title.charAt(0)}</span>
              </div>
              <span className='text-slate-500 dark:text-slate-400 text-sm'>Project Preview</span>
            </div>
          </div>
        )}

        {project.featured && (
          <div className='absolute top-3 right-3'>
            <div className='bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-300 px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1'>
              <Star className='h-3 w-3' />
              Featured
            </div>
          </div>
        )}
      </div>

      <div className='p-6'>
        {/* Header */}
        <div className='flex justify-between items-start mb-3'>
          <h3 className='text-xl font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200'>
            {project.title}
          </h3>
        </div>

        {/* Description */}
        <p className='text-slate-600 dark:text-slate-300 mb-4 line-clamp-3'>
          {project.description}
        </p>

        {/* Technologies */}
        <div className='flex flex-wrap gap-2 mb-6'>
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className='px-3 py-1 text-xs bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 rounded-full'
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className='px-3 py-1 text-xs bg-slate-200 dark:bg-slate-600 text-slate-500 dark:text-slate-400 rounded-full'>
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>

        {/* Actions */}
        <div className='flex gap-3'>
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2'
            >
              <ExternalLink className='h-4 w-4' />
              Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='flex-1 border border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 py-2 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2'
            >
              <Github className='h-4 w-4' />
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
