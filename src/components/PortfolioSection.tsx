import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface PortfolioProject {
  title: string;
  type: string;
  description: string;
  area: string;
  duration: string;
  year: string;
  image: string;
  gallery: string[];
}

interface PortfolioSectionProps {
  portfolioProjects: PortfolioProject[];
  setSelectedProject: (index: number) => void;
}

const PortfolioSection = ({ portfolioProjects, setSelectedProject }: PortfolioSectionProps) => {
  return (
    <section id="portfolio" className="py-20 px-6 bg-background/50">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold text-center mb-4 text-white">Портфолио</h2>
        <p className="text-center text-orange mb-16">Наши лучшие проекты</p>
        <div className="grid md:grid-cols-3 gap-8">
          {portfolioProjects.map((project, index) => (
            <Card 
              key={index} 
              onClick={() => setSelectedProject(index)}
              className="overflow-hidden group cursor-pointer animate-scale-in hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                  <Button className="bg-orange hover:bg-orange/90 text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Смотреть проект
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-sm text-orange mb-2">{project.type}</p>
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;