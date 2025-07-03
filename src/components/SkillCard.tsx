import { SkillProps } from "@/types";

interface SkillCardProps {
  skill: SkillProps;
}

export function SkillCard({ skill }: SkillCardProps) {
  const getCategoryColor = (category: string) => {
    const colors = {
      Frontend: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
      Backend: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
      Mobile: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
      DevOps: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300",
      Database: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
      Design: "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300",
    };
    return (
      colors[category as keyof typeof colors] ||
      "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
    );
  };

  return (
    <div className='bg-white dark:bg-slate-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200'>
      <div className='flex justify-between items-start mb-2'>
        <h3 className='font-semibold text-slate-800 dark:text-white'>{skill.name}</h3>
        {skill.level && (
          <span className='text-xs px-2 py-1 rounded bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-400'>
            {skill.level}
          </span>
        )}
      </div>
      {skill.category && (
        <span className={`text-xs px-2 py-1 rounded ${getCategoryColor(skill.category)}`}>
          {skill.category}
        </span>
      )}
    </div>
  );
}
