export default function Home() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800'>
      {/* Hero Section */}
      <main className='container mx-auto px-6 py-16'>
        <div className='text-center mb-16'>
          <h1 className='text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
            Abu Amar
          </h1>
          <p className='text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto'>
            Software Developer & Digital Creator
          </p>
          <p className='text-lg text-slate-500 dark:text-slate-400 mb-12 max-w-3xl mx-auto'>
            Passionate about creating innovative digital solutions and bringing ideas to life
            through code. Welcome to my digital portfolio.
          </p>

          <div className='flex gap-4 justify-center flex-wrap'>
            <a
              href='#about'
              className='bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200'
            >
              About Me
            </a>
            <a
              href='#projects'
              className='border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200'
            >
              View Projects
            </a>
          </div>
        </div>

        {/* Quick Stats */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-16'>
          <div className='bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg text-center'>
            <h3 className='text-3xl font-bold text-blue-600 mb-2'>5+</h3>
            <p className='text-slate-600 dark:text-slate-300'>Years Experience</p>
          </div>
          <div className='bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg text-center'>
            <h3 className='text-3xl font-bold text-purple-600 mb-2'>20+</h3>
            <p className='text-slate-600 dark:text-slate-300'>Projects Completed</p>
          </div>
          <div className='bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg text-center'>
            <h3 className='text-3xl font-bold text-green-600 mb-2'>10+</h3>
            <p className='text-slate-600 dark:text-slate-300'>Technologies</p>
          </div>
        </div>

        {/* About Section */}
        <section id='about' className='mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold text-center mb-12 text-slate-800 dark:text-white'>
            About Me
          </h2>
          <div className='bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg max-w-4xl mx-auto'>
            <p className='text-lg text-slate-600 dark:text-slate-300 mb-6'>
              Hello! I&apos;m Abu Amar, a passionate software developer with a love for creating
              innovative digital solutions. I specialize in modern web technologies and enjoy
              turning complex problems into simple, beautiful designs.
            </p>
            <p className='text-lg text-slate-600 dark:text-slate-300'>
              When I&apos;m not coding, you can find me exploring new technologies, contributing to
              open-source projects, or sharing knowledge with the developer community.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section className='mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold text-center mb-12 text-slate-800 dark:text-white'>
            Skills & Technologies
          </h2>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto'>
            {[
              "TypeScript",
              "React",
              "Next.js",
              "Node.js",
              "Python",
              "JavaScript",
              "Tailwind CSS",
              "Git",
            ].map((skill) => (
              <div
                key={skill}
                className='bg-white dark:bg-slate-800 p-4 rounded-lg shadow-md text-center'
              >
                <span className='text-slate-700 dark:text-slate-300 font-medium'>{skill}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className='text-center'>
          <h2 className='text-3xl md:text-4xl font-bold mb-8 text-slate-800 dark:text-white'>
            Let&apos;s Work Together
          </h2>
          <p className='text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto'>
            I&apos;m always interested in new opportunities and collaborations. Feel free to reach
            out if you&apos;d like to work together!
          </p>
          <a
            href='mailto:abu.amar@example.com'
            className='bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 inline-block'
          >
            Get In Touch
          </a>
        </section>
      </main>
    </div>
  );
}
