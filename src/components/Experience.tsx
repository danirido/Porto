import { Building2, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    title: 'Operator Komputer Administrasi',
    company: 'Badan Pertanahan Nasional',
    period: 'Februari 2022 - April 2022',
    location: 'Cikarang, Indonesia',
    description: [
      'Mengelola data sertifikat tanah dengan menginputnya ke dalam sistem internal, secara teliti untuk memastikan keakuratan dan validitas informasi.',
      'Melakukan verifikasi dan pengecekan dokumen serifikat guna mendukung kelengkapan persyaratan administarasi.',
      'Memberikan dukungan teknis dana administratif kepada Divisi KPR dalam proses analisis kelayakan kredit dan pengajuan data.',
      'Terlibat dalam proses digitalisasi arsip sertifikat tanah untuk meningkatkan efisiensi pengelolaan data dan kecepatan akses dokumen.',
    ],
    technologies: ['Microsoft Office', 'Google Workspace', 'Sistem Manajemen Dokumen' ],
  },
  {
    title: 'Volunteer Biopori',
    company: 'Teach for Indonesia',
    period: ' September 2024',
    location: 'Binus Bekasi',
    description: [
      'Berperan aktif dalam pembuatan lubang resapan biopori untuk meningkatkan daya serap air tanah dan memperbaiki sistem drainase lingkungan.',
      'Membantu proses pengolahan sampah organik menjadi kompos langsung di dalam lubang biopori, berkontribusi pada peningkatan kesuburan tanah.',
      'Berkolaborasi dalam tim untuk memastikan program berjalan efektif demi mewujudkan lingkungan yang lebih hijau dan bebas genangan',
      'Mengadakan sosialisasi dan edukasi kepada masyarakat mengenai pentingnya pengelolaan sampah dan pelestarian lingkungan.',
    ],
    technologies: [],
  },
  {
    title: 'Volunteer Edukasi Pemilahan Sampah',
    company: 'Teach for Indonesia',
    period: 'Oktober 2024',
    location: 'Jakarta Recycle Center',
    description: [
      'Terlibat dalam program edukasi di Jakarta Recycle Center (JRC) mengenai pentingnya pemilahan sampah yang dimulai dari sumbernya.',
      'Mendemonstrasikan dan mempraktikkan alur pemilahan sampah yang tepat untuk mendukung inovasi pengelolaan limbah yang efisien.',
      'Berinteraksi dengan komunitas untuk mendorong perubahan perilaku dan meningkatkan kesadaran akan pentingnya daur ulang.',
      'Berkontribusi pada upaya pelestarian lingkungan melalui pengurangan volume sampah yang masuk ke tempat pembuangan akhir.',
    ],
    technologies: [],
  },
  // {
  //   title: 'Junior Web Developer',
  //   company: 'StartUp Hub',
  //   period: '2019 - 2020',
  //   location: 'Surabaya, Indonesia',
  //   description: [
  //     'Assisted in developing company website and internal tools',
  //     'Learned modern development practices and version control',
  //     'Participated in code reviews and team meetings',
  //     'Contributed to open source projects and documentation',
  //   ],
  //   technologies: ['React', 'JavaScript', 'Git', 'Bootstrap', 'PHP'],
  // },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
               Experience
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {/* A journey through various roles and exciting projects that shaped my expertise */}
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="relative animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block" />

                  {/* Content */}
                  <div className="md:ml-20 bg-card border border-border rounded-xl p-6 hover-lift">
                    <div className="space-y-4">
                      {/* Header */}
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold">{exp.title}</h3>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Building2 className="h-4 w-4" />
                            <span className="font-medium">{exp.company}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <ul className="space-y-2 text-muted-foreground">
                        {exp.description.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full border border-border"
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
      </div>
    </section>
  );
};