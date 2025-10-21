import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

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

interface ProjectModalProps {
  selectedProject: number | null;
  portfolioProjects: PortfolioProject[];
  setSelectedProject: (index: number | null) => void;
  scrollToSection: (section: string) => void;
}

const ProjectModal = ({ 
  selectedProject, 
  portfolioProjects, 
  setSelectedProject, 
  scrollToSection 
}: ProjectModalProps) => {
  if (selectedProject === null) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/90 z-[100] overflow-y-auto"
      onClick={() => setSelectedProject(null)}
    >
      <div className="min-h-screen py-12 px-4">
        <div 
          className="max-w-6xl mx-auto bg-white rounded-lg overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white rounded-full p-3 transition-colors"
            >
              <Icon name="X" size={24} className="text-charcoal" />
            </button>
            
            <div className="p-8 md:p-12">
              <div className="mb-8">
                <p className="text-gold font-medium mb-2">{portfolioProjects[selectedProject].type}</p>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-charcoal">
                  {portfolioProjects[selectedProject].title}
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  {portfolioProjects[selectedProject].description}
                </p>
                
                <div className="flex flex-wrap gap-6 text-sm">
                  <div>
                    <span className="text-muted-foreground">Площадь:</span>
                    <span className="ml-2 font-semibold">{portfolioProjects[selectedProject].area}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Срок реализации:</span>
                    <span className="ml-2 font-semibold">{portfolioProjects[selectedProject].duration}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Год:</span>
                    <span className="ml-2 font-semibold">{portfolioProjects[selectedProject].year}</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {portfolioProjects[selectedProject].gallery.map((image, idx) => (
                  <div key={idx} className="relative overflow-hidden rounded-lg group">
                    <img
                      src={image}
                      alt={`${portfolioProjects[selectedProject].title} - фото ${idx + 1}`}
                      className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                ))}
              </div>

              <div className="mt-12 text-center">
                <Button 
                  size="lg" 
                  className="bg-gold hover:bg-gold/90 text-charcoal font-semibold"
                  onClick={() => {
                    setSelectedProject(null);
                    scrollToSection('contacts');
                  }}
                >
                  Заказать похожий проект
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
