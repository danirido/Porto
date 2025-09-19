import { Code, Coffee, Heart, Users } from 'lucide-react';

const highlights = [
  {
    icon: Code,
    title: 'Clean Code',
    description: 'Writing maintainable and efficient code',
  },
  {
    icon: Coffee,
    title: 'Problem Solver',
    description: 'Love tackling complex challenges',
  },
  {
    icon: Heart,
    title: 'Passionate',
    description: 'Dedicated to continuous learning',
  },
  {
    icon: Users,
    title: 'Collaborative',
    description: 'Strong team player and communicator',
  },
];

export const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
              About Me
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Passionate developer with a love for creating exceptional digital experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">
                  Hi there! I'm a Software Engineering & UI/UX Designer
                </h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Saya adalah mahasiswa yang antusias dan sedang menapaki perjalanan untuk menjadi UI/UX desainer. 
                    Meskipun masih dalam tahap belajar, saya memiliki semangat besar untuk menciptakan pengalaman digital yang intuitif, fungsional, dan menyenangkan bagi pengguna. 
                    Ketertarikan saya terhadap IT terutama pada UI/UX bermula dari rasa penasaran tentang bagaimana orang berinteraksi dengan teknologi. Dari situ, 
                  </p>
                  <p>
                    saya mulai mendalami proses desain—mulai dari riset pengguna, wireframing, hingga membuat prototipe dengan tools seperti Figma. 
                    Saya percaya bahwa desain yang baik bukan hanya soal estetika, tapi juga soal bagaimana ia bisa memecahkan masalah dengan cara yang sederhana dan bermakna.
                  </p>
                  <p>
                    Di luar dunia desain, saya senang mengeksplorasi tren desain terkini, membaca seputar psikologi pengguna, 
                    atau mencari inspirasi dari komunitas kreatif seperti Dribbble dan Behance. 
                    Saya selalu terbuka untuk kolaborasi dan terus berusaha berkembang bersama tim yang sama-sama peduli dengan pengalaman pengguna.
                  </p>
                </div>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className="bg-card border border-border rounded-xl p-6 hover-lift animate-fade-in-up"
                  style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                >
                  <div className="space-y-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center neon-effect">
                      <item.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h4 className="font-semibold">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
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