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
      title: "Full Stack Software Engineer",
      company: "Refactory",
      duration: "07/2024 - 05/2025",
      location: "Remote",
      description: [
        "Mengikuti program untuk pengembangan proyek full-stack, mulai dari perencanaan hingga deployment",
        "Menyusun dokumentasi teknis seperti C4 Model, database schema, dan API contract untuk kebutuhan project",
        "Mengembangkan aplikasi mobile (Flutter), web (React), dan backend (Supabase dan Raiden) sesuai standar industri",
        "Mengimplementasikan CI/CD pipeline menggunakan GitHub Actions untuk otomatisasi proses build dan deploy",
        "Implementasi praktik software engineering mulai penggunaan OOP, algoritma, dan design pattern",
        "Bekerja sama membuat proyek dengan tim dengan menggunakan tools seperti github dan workboard",
      ],
      technologies: ["Flutter", "React", "Supabase", "GitHub Actions", "C4 Model", "API Contract"],
      type: "work",
    },
    {
      title: "Mobile Development Cohort",
      company: "Bangkit Academy led by Google, GoTo, & Traveloka",
      duration: "02/2024 - 07/2024",
      location: "Remote",
      description: [
        "Mengikuti program pelatihan intensif selama 6 bulan dengan fokus pada Mobile Development (Android) menggunakan Kotlin dan Jetpack Compose",
        "Mendalami konsep software engineering, UI/UX design, dan cloud computing sebagai bagian dari kurikulum interdisipliner",
        "Mengembangkan proyek akhir berupa aplikasi deteksi penyakit tumbuhan kopi melalui image classification menggunakan teknologi AI",
        "Berkolaborasi dalam tim multidisiplin (Mobile, Cloud, ML) untuk merancang dan membangun solusi nyata berbasis teknologi",
        "Meningkatkan soft skill seperti time management, komunikasi tim, dan problem solving melalui berbagai sesi mentoring dan workshop",
        "Lulus sertifikasi internal Bangkit dan mendapatkan pengakuan langsung dari Google & Kampus Merdeka",
      ],
      technologies: ["Kotlin", "Jetpack Compose", "Android", "Machine Learning", "Cloud Computing"],
      type: "education",
    },
    {
      title: "Bendahara Wilayah",
      company: "PERMIKOMNAS Wilayah 8 Yogyakarta",
      duration: "2023 - 2024",
      location: "Yogyakarta",
      description: [
        "Menangani pengelolaan keuangan organisasi di tingkat wilayah secara transparan dan bertanggung jawab",
        "Menjadi penanggung jawab atas pelaksanaan program kerja Divisi BPD selama menjabat sebagai bendahara",
        "Membuat laporan keuangan kegiatan dan memastikan efisiensi penggunaan dana pada berbagai program wilayah",
      ],
      technologies: ["Google Spreadsheet", "Financial Management", "Leadership"],
      type: "work",
    },
    {
      title: "Anggota Divisi BPD",
      company: "PERMIKOMNAS Wilayah 8 Yogyakarta",
      duration: "2022 - 2023",
      location: "Yogyakarta",
      description: [
        "Bertanggung jawab dalam pelaksanaan program kerja divisi BPD, khususnya pengadaan dan distribusi merchandise organisasi",
        "Mengelola proyek produksi lanyard, ID card, dan jaket PERMIKOMNAS dari tahap perencanaan, pemesanan, hingga distribusi",
        "Berperan aktif dalam strategi pemasaran untuk meningkatkan penjualan merchandise dari organisasi",
        "Mengelola keuangan internal divisi",
      ],
      technologies: ["Project Management", "Marketing Strategy", "Financial Management"],
      type: "work",
    },
    {
      title: "Informatika",
      company: "Universitas Jenderal Achmad Yani Yogyakarta",
      duration: "2021 - Saat ini",
      location: "Yogyakarta",
      description: [
        "Mengonversi nilai beberapa mata kuliah melalui partisipasi dalam program Kampus Merdeka (Bangkit 2023)",
        "Aktif dalam organisasi himpunan mahasiswa informatika, baik di tingkat kampus (HMIF) maupun nasional (PERMIKOMNAS)",
        "Semester 8 dengan fokus pada Mobile Development dan Software Engineering",
      ],
      technologies: ["Software Engineering", "Mobile Development", "Database Systems", "Algorithm"],
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
