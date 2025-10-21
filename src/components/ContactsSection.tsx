import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

const ContactsSection = () => {
  return (
    <section id="contacts" className="py-20 px-6 bg-charcoal text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-bold mb-4">Контакты</h2>
        <p className="text-gray-300 mb-12">Свяжитесь с нами удобным способом</p>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
          <div className="flex flex-col items-center">
            <Icon name="Phone" size={32} className="text-gold mb-4" />
            <p className="text-lg">+7 (495) 123-45-67</p>
          </div>
          <div className="flex flex-col items-center">
            <Icon name="Mail" size={32} className="text-gold mb-4" />
            <p className="text-lg">info@premium-design.ru</p>
          </div>
          <div className="flex flex-col items-center">
            <Icon name="MapPin" size={32} className="text-gold mb-4" />
            <p className="text-lg">Москва, ул. Примерная, 123</p>
          </div>
        </div>
        <div className="max-w-md mx-auto">
          <Card className="p-8 bg-white text-charcoal">
            <h3 className="text-2xl font-semibold mb-6">Оставьте заявку</h3>
            <div className="space-y-4">
              <Input placeholder="Ваше имя" />
              <Input placeholder="Телефон" type="tel" />
              <Input placeholder="Email" type="email" />
              <Button className="w-full bg-gold hover:bg-gold/90 text-charcoal font-semibold" size="lg">
                Отправить
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
