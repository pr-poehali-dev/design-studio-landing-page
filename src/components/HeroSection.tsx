import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  scrollToSection: (section: string) => void;
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
    <section id="home" className="pt-32 pb-20 px-6">
      <div className="container mx-auto text-center animate-fade-in">
        <h2 className="text-6xl md:text-7xl font-bold mb-6 text-white">
          Создаём пространства<br />вашей мечты
        </h2>
        <p className="text-xl text-orange mb-12 max-w-2xl mx-auto">
          Премиальный дизайн и ремонт квартир и домов под ключ. 
          Индивидуальный подход к каждому проекту.
        </p>
        <div className="flex gap-4 justify-center">
          <Button size="lg" className="bg-orange hover:bg-orange/90 text-white font-semibold">
            Получить консультацию
          </Button>
          <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10" onClick={() => scrollToSection('portfolio')}>
            Смотреть портфолио
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;