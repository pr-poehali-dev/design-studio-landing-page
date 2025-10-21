import Icon from '@/components/ui/icon';

interface Advantage {
  icon: string;
  title: string;
  description: string;
}

interface AdvantagesSectionProps {
  advantages: Advantage[];
}

const AdvantagesSection = ({ advantages }: AdvantagesSectionProps) => {
  return (
    <section id="advantages" className="py-20 px-6 bg-background/50 text-white">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold text-center mb-4">Преимущества</h2>
        <p className="text-center text-orange mb-16">Почему выбирают нас</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-orange/20 rounded-full flex items-center justify-center">
                <Icon name={advantage.icon} size={40} className="text-orange" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">{advantage.title}</h3>
              <p className="text-orange/80">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;