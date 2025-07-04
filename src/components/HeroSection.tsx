import Image from "next/image";
import { ArrowDown, Download } from "lucide-react";

export function HeroSection() {
  return (
    <section id='home' className='min-h-screen flex items-center justify-center pt-16'>
      <div className='container mx-auto px-6 text-center'>
        {/* Profile Image */}
        <div className='mb-8'>
          <div className='w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1'>
            <div className='w-full h-full rounded-full overflow-hidden'>
              <Image
                src='/assets/profile.jpg'
                alt='M. Abu Amar Al Badawi'
                width={128}
                height={128}
                className='w-full h-full object-cover'
                priority
              />
            </div>
          </div>
        </div>

        {/* Name and Title */}
        <h1 className='text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
          M. Abu Amar Al Badawi
        </h1>

        <p className='text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-4'>
          Software Engineer
        </p>

        <p className='text-lg text-slate-500 dark:text-slate-400 mb-8 max-w-3xl mx-auto'>
          Mahasiswa Informatika semester 8 di Universitas Jenderal Achmad Yani Yogyakarta dengan
          minat kuat di bidang Mobile Development. Memiliki pengalaman magang hampir satu tahun
          sebagai Full-Stack Software Engineer dan peserta program Bangkit 2024.
        </p>

        {/* CTA Buttons */}
        <div className='flex gap-4 justify-center flex-wrap mb-12'>
          <a
            href='#projects'
            className='bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 flex items-center gap-2'
          >
            View My Work
            <ArrowDown className='h-4 w-4' />
          </a>
          <a
            href='/resume.pdf'
            target='_blank'
            className='border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 flex items-center gap-2'
          >
            <Download className='h-4 w-4' />
            Download CV
          </a>
          <a
            href='#contact'
            className='border border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 px-8 py-3 rounded-lg font-medium transition-all duration-200'
          >
            Get In Touch
          </a>
        </div>

        {/* Stats */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto'>
          <div className='bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-white/20 dark:border-slate-700/50'>
            <h3 className='text-3xl font-bold text-blue-600 mb-2'>3+</h3>
            <p className='text-slate-600 dark:text-slate-300'>Years Experience</p>
          </div>
          <div className='bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-white/20 dark:border-slate-700/50'>
            <h3 className='text-3xl font-bold text-purple-600 mb-2'>15+</h3>
            <p className='text-slate-600 dark:text-slate-300'>Projects Completed</p>
          </div>
          <div className='bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-white/20 dark:border-slate-700/50'>
            <h3 className='text-3xl font-bold text-green-600 mb-2'>8+</h3>
            <p className='text-slate-600 dark:text-slate-300'>Technologies</p>
          </div>
        </div>
      </div>
    </section>
  );
}
