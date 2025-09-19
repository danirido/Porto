import { ArrowDown, Download, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroPortrait from '@/assets/hero-portrait.jpg';

export const Hero = () => {
  const downloadCV = () => {
    
    const link = document.createElement('a');
    link.href = 'CV M.Ridho Ramadani.pdf'; // This would be a real CV file
    link.download = 'CV M.Ridho Ramadani.pdf';
    link.click();
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center hero-gradient relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-20 h-20 border border-primary rounded-full animate-float" />
        <div className="absolute top-40 right-20 w-16 h-16 border border-accent rounded-lg rotate-45 animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-40 left-20 w-12 h-12 border border-secondary rounded-full animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="text-foreground">Halo, Saya</span>
                <br />
                <span className="text-gradient">Muhammad Ridho Ramadani</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                Passionate about creating beautiful, functional, and user-friendly digital experiences with modern technologies.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={downloadCV}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground glow-effect smooth-transition group"
              >
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Download CV
              </Button>
              <Button
                onClick={scrollToContact}
                variant="outline"
                size="lg"
                className="border-border hover:bg-muted smooth-transition group"
              >
                <Mail className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Contact Me
              </Button>
            </div>

            {/* Social indicators */}
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full animate-glow-pulse" />
                <span>Available for projects</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-2xl animate-glow-pulse" />
              <img
                src={heroPortrait}
                alt="Portfolio Hero"
                className="relative rounded-2xl shadow-2xl hover-lift w-full max-w-md h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          {/* <ArrowDown className="h-6 w-6 text-muted-foreground" /> */}
        </div>
      </div>
    </section>
  );
};