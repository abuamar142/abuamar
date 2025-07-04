import { MapPin, Calendar, GraduationCap } from "lucide-react";
import Image from "next/image";

export function AboutSection() {
  return (
    <section id='about' className='py-20'>
      <div className='container mx-auto px-6'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4'>
            About Me
          </h2>
          <p className='text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto'>
            Get to know more about my background, education, and passion for technology
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          {/* Left side - Image */}
          <div className='relative'>
            <div className='aspect-square rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 dark:from-slate-800 dark:to-slate-700 p-8 flex items-center justify-center'>
              <div className='text-center'>
                <div className='w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1 mb-4'>
                  <div className='w-full h-full rounded-full overflow-hidden'>
                    <Image
                      src='/assets/profile.jpg'
                      alt='M. Abu Amar Al Badawi'
                      width={192}
                      height={192}
                      className='w-full h-full object-cover'
                    />
                  </div>
                </div>
                <p className='text-slate-600 dark:text-slate-400'>Software Engineer</p>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className='space-y-6'>
            <div>
              <h3 className='text-2xl font-semibold text-slate-900 dark:text-white mb-4'>
                Hello! I&apos;m M. Abu Amar Al Badawi
              </h3>
              <p className='text-slate-600 dark:text-slate-300 leading-relaxed mb-6'>
                Mahasiswa Informatika semester 8 di Universitas Jenderal Achmad Yani Yogyakarta
                dengan minat kuat di bidang Mobile Development. Memiliki pengalaman magang hampir
                satu tahun sebagai Full-Stack Software Engineer di software house Refactory, serta
                menjadi peserta program Bangkit 2024 (Google x Kampus Merdeka) dengan learning path
                Mobile Development.
              </p>
              <p className='text-slate-600 dark:text-slate-300 leading-relaxed'>
                Terbiasa mengembangkan aplikasi menggunakan Flutter, Supabase, dan React, serta
                memahami alur pengembangan perangkat lunak dari perencanaan (C4 Model, API Contract)
                hingga deployment (GitHub Actions). Aktif dalam organisasi kampus dan nasional
                seperti HMIF dan PERMIKOMNAS, serta memiliki pengalaman manajerial di bidang
                keuangan dan kepanitiaan.
              </p>
            </div>

            {/* Personal Info */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div className='flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700'>
                <GraduationCap className='h-5 w-5 text-blue-600' />
                <div>
                  <p className='text-sm text-slate-500 dark:text-slate-400'>Education</p>
                  <p className='font-medium text-slate-900 dark:text-white'>Informatika S1</p>
                </div>
              </div>

              <div className='flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700'>
                <MapPin className='h-5 w-5 text-green-600' />
                <div>
                  <p className='text-sm text-slate-500 dark:text-slate-400'>Location</p>
                  <p className='font-medium text-slate-900 dark:text-white'>Bantul, Indonesia</p>
                </div>
              </div>

              <div className='flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700'>
                <Calendar className='h-5 w-5 text-purple-600' />
                <div>
                  <p className='text-sm text-slate-500 dark:text-slate-400'>Experience</p>
                  <p className='font-medium text-slate-900 dark:text-white'>~1 Year</p>
                </div>
              </div>

              <div className='flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700'>
                <div className='h-5 w-5 bg-gradient-to-r from-blue-600 to-purple-600 rounded'></div>
                <div>
                  <p className='text-sm text-slate-500 dark:text-slate-400'>Specialization</p>
                  <p className='font-medium text-slate-900 dark:text-white'>Mobile Development</p>
                </div>
              </div>
            </div>

            {/* What I Do */}
            <div>
              <h4 className='text-lg font-semibold text-slate-900 dark:text-white mb-3'>
                What I Do
              </h4>
              <div className='space-y-2'>
                <div className='flex items-center gap-2'>
                  <div className='w-2 h-2 bg-blue-600 rounded-full'></div>
                  <span className='text-slate-600 dark:text-slate-300'>
                    Mobile App Development (React Native, Flutter)
                  </span>
                </div>
                <div className='flex items-center gap-2'>
                  <div className='w-2 h-2 bg-purple-600 rounded-full'></div>
                  <span className='text-slate-600 dark:text-slate-300'>
                    Web Development (React, Next.js, Node.js)
                  </span>
                </div>
                <div className='flex items-center gap-2'>
                  <div className='w-2 h-2 bg-green-600 rounded-full'></div>
                  <span className='text-slate-600 dark:text-slate-300'>
                    UI/UX Design and Implementation
                  </span>
                </div>
                <div className='flex items-center gap-2'>
                  <div className='w-2 h-2 bg-orange-600 rounded-full'></div>
                  <span className='text-slate-600 dark:text-slate-300'>
                    Database Design and Management
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
