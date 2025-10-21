import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface Service {
  icon: string;
  title: string;
  description: string;
}

interface ServicesSectionProps {
  services: Service[];
}

const ServicesSection = ({ services }: ServicesSectionProps) => {
  return (
    <section id="services" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold text-center mb-4 text-charcoal">Услуги</h2>
        <p className="text-center text-muted-foreground mb-16">Полный спектр дизайнерских и ремонтных услуг</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="text-center p-8 hover:shadow-xl transition-shadow duration-300 border-none bg-white">
              <div className="w-16 h-16 mx-auto mb-6 bg-gold/10 rounded-full flex items-center justify-center">
                <Icon name={service.icon} size={32} className="text-gold" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
