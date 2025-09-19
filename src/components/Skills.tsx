import { 
  Palette, 
  Code, 
  Wrench
} from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const skillCategories = [
  {
    title: 'Design',
    icon: Palette,
    color: 'from-blue-500 to-blue-600',
    progressColor: 'bg-blue-500',
    skills: [
      { name: 'UI/UX Design', level: 90 },
      { name: 'Typography', level: 60 },
      { name: 'Branding', level: 75 },
      { name: 'Wireframing', level: 80 },
      { name: 'Prototyping', level: 85 },
      { name: 'Interaction Design', level: 75 },
    ],
  },
  {
    title: 'Development',
    icon: Code,
    color: 'from-purple-500 to-purple-600',
    progressColor: 'bg-purple-500',
    skills: [
      { name: 'HTML/CSS', level: 89 },
      { name: 'JavaScript', level: 89 },
      { name: 'Python', level: 90 },
      { name: 'React', level: 60 },
      { name: 'C', level: 65 },
    ],
  },
  {
    title: 'Tools',
    icon: Wrench,
    color: 'from-pink-500 to-pink-600',
    progressColor: 'bg-pink-500',
    skills: [
      { name: 'Figma', level: 95 },
      { name: 'Github', level: 60 },
      { name: 'VS Code', level: 98 },
      { name: 'Mikrotik', level: 90 },
      { name: 'Debian', level: 90 },
      { name: 'Linux', level: 70 },
    ],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="text-gradient">Skills</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Specialized skills across design, development, and modern tools
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.title}
                className="bg-card border border-border rounded-xl p-8 hover-lift animate-fade-in-up"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                <div className="flex items-center space-x-3 mb-8">
                  <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center neon-effect`}>
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">{category.title}</h3>
                </div>

                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-foreground">{skill.name}</span>
                        <span className="text-sm font-bold text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                        <div 
                          className={`h-full ${category.progressColor} rounded-full transition-all duration-1000 ease-out`}
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s` 
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};