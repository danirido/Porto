import { ArrowDown, Download, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroPortrait from '@/assets/hero-portrait.jpg';

export const Hero = () => {
  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = 'CV M.Ridho Ramadani.pdf'; 
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
        {/* Floating shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 border border-primary rounded-full animate-float" />
        <div className="absolute top-40 right-20 w-16 h-16 border border-accent rounded-lg rotate-45 animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-40 left-20 w-12 h-12 border border-secondary rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-60 left-1/4 w-8 h-8 border border-primary/50 rounded-full animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute bottom-60 right-1/3 w-14 h-14 border border-accent/70 rounded-lg rotate-12 animate-float" style={{ animationDelay: '4s' }} />
        
        {/* Animated dots */}
        <div className="absolute top-32 right-1/4 w-2 h-2 bg-primary rounded-full animate-ping" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-32 left-1/3 w-3 h-3 bg-accent rounded-full animate-ping" style={{ animationDelay: '3.5s' }} />
        <div className="absolute top-1/2 left-16 w-1 h-1 bg-secondary rounded-full animate-ping" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-3/4 right-16 w-2 h-2 bg-primary/80 rounded-full animate-ping" style={{ animationDelay: '4.5s' }} />
        
        {/* Moving gradients */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-r from-primary/20 to-transparent rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-gradient-to-r from-accent/20 to-transparent rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Geometric lines */}
        <div className="absolute top-1/3 left-8 w-16 h-0.5 bg-gradient-to-r from-primary/30 to-transparent animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/3 right-8 w-20 h-0.5 bg-gradient-to-l from-accent/30 to-transparent animate-pulse" style={{ animationDelay: '3s' }} />
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
                Dedicated to creating seamless digital experiences by blending clean design, solid functionality, and the latest technologies.
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

          {/* Circular Image */}
          <div className="flex justify-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              {/* Glow effect background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full blur-3xl animate-glow-pulse scale-110" />
              {/* Main circular image */}
              <img
                src={heroPortrait}
                alt="Muhammad Ridho Ramadani"
                className="relative rounded-full shadow-2xl hover-lift w-80 h-80 object-cover object-top border-4 border-primary/20"
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