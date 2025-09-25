import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'Learn Hub',
    description: 'LearnHub adalah sebuah prototipe platform belajar online. Platform ini menyediakan dasbor bagi pengguna untuk mengelola kursus, melihat kemajuan belajar, serta melihat pencapaian dan sertifikat yang sudah diperoleh.',
    image: 'Learn Hub.png',
    technologies: ['React', 'Html', 'JavaScript', 'Tailwind CSS'],
    demoUrl: 'https://hci-kelas.vercel.app/',
    githubUrl: '#',
    featured: true,
  },
  {
    title: 'Picverse',
    description: 'Picverse adalah sebuah galeri seni digital yang dirancang dengan antarmuka modern dan responsif untuk para penikmat dan kreator seni.',
    image: 'Picverse.png',
    technologies: ['Html', 'Css', 'JavaScript'],
    demoUrl: 'https://picverse-flame.vercel.app/',
    githubUrl: '#',
    featured: true,
  },
  {
    title: 'Portofolio 2023',
    description: 'Dokumentasi keahlian infrastruktur jaringan, administrasi sistem, dan cloud computing melalui proyek praktis instalasi OS, topologi jaringan, web server, dan konfigurasi MikroTik.',
    image: 'Portofolio 2023.png',
    technologies: ['Google Cloud', 'Cisco Packet Tracer', 'Debian', 'Mikrotik'],
    demoUrl: 'https://docs.google.com/document/d/1rWvY10HXgzNwTUgopYIPkCAwxymgnS5q/edit?usp=sharing&ouid=114669596848309489517&rtpof=true&sd=true',
    githubUrl: '#',
    featured: false,
  },
  {
    title: 'Foodbridge',
    description: 'Foodbridge adalah platform web responsif untuk menghubungkan surplus makanan dengan pihak yang membutuhkan, mengurangi food waste dan membantu mengatasi kelaparan di Indonesia.',
    image: 'FoodBridge.png',
    technologies: ['Figma'],
    demoUrl: 'https://www.figma.com/design/kvW3kEVpPzglGqwRGTYITs/FoodBridge?node-id=0-1&t=GSrzxs6CXxPWaaKO-1',
    githubUrl: '#',
    featured: false,
  },
  {
    title: 'Computer Network',
    description: 'Proyek ini adalah desain User Interface/User Experience (UI/UX) untuk simulasi atau visualisasi jaringan komputer, dengan fokus pada AOL Computer Network. Desain ini bertujuan untuk menyajikan kompleksitas infrastruktur jaringan secara visual yang intuitif, membantu pengguna memahami alur data, komponen jaringan, dan interaksi antar elemen dalam lingkungan jaringan komputer.',
    image: 'Computer network.png',
    technologies: ['Figma', 'Cisco Packet Tracer'],
    demoUrl: 'https://www.figma.com/design/fOFnRVhCy0e3SeT5YMmUjj/Aol-Computer-Network?node-id=0-1&t=TqHGTFCPIaTfLST7-1',
    githubUrl: '#',
    featured: false,
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
              My Projects
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A showcase of my recent work and creative solutions to real-world problems
            </p>
          </div>

          {/* All Projects in One Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group bg-card border border-border rounded-xl overflow-hidden hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 smooth-transition"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold group-hover:text-primary smooth-transition">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground">{project.description}</p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-3 pt-2">
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button size="sm" variant="default" className="w-full">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Button>
                    </a>
                    {/* <Button size="sm" variant="outline" className="flex-1">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};