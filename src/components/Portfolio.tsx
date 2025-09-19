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
  // {
  //   title: 'Social Media Dashboard',
  //   description: 'Analytics dashboard for social media management with data visualization and automated reporting features.',
  //   image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
  //   technologies: ['React', 'D3.js', 'Express.js', 'PostgreSQL'],
  //   demoUrl: '#',
  //   githubUrl: '#',
  //   featured: false,
  // },
  // {
  //   title: 'Learning Management System',
  //   description: 'Educational platform with course management, progress tracking, and interactive learning modules.',
  //   image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
  //   technologies: ['Next.js', 'Prisma', 'NextAuth.js', 'Tailwind CSS'],
  //   demoUrl: '#',
  //   githubUrl: '#',
  //   featured: false,
  // },
];

export const Portfolio = () => {
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
              Featured Projects
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A showcase of my recent work and creative solutions to real-world problems
            </p>
          </div>

          {/* Featured Projects */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {featuredProjects.map((project, index) => (
              <div
                key={project.title}
                className="group bg-card border border-border rounded-xl overflow-hidden hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
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
                    <Button size="sm" variant="default" className="flex-1">
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

          {/* Other Projects Grid */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center">Other Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <div
                  key={project.title}
                  className="group bg-card border border-border rounded-xl overflow-hidden hover-lift animate-fade-in-up"
                  style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 smooth-transition"
                    />
                  </div>
                  <div className="p-4 space-y-3">
                    <h4 className="font-semibold group-hover:text-primary smooth-transition">
                      {project.title}
                    </h4>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    <div className="flex gap-2">
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button size="sm" variant="ghost" className="flex-1 text-xs">
                        <ExternalLink className="mr-1 h-3 w-3" />
                        Demo
                      </Button>
                      </a>
                      {/* <Button size="sm" variant="ghost" className="flex-1 text-xs">
                        <Github className="mr-1 h-3 w-3" />
                        Code
                      </Button> */}
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
