import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [area, setArea] = useState(50);
  const [roomType, setRoomType] = useState('apartment');
  const [repairType, setRepairType] = useState('standard');
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  useEffect(() => {
    if (mobileMenuOpen || selectedProject !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen, selectedProject]);

  const calculatePrice = () => {
    const basePrice = {
      cosmetic: 15000,
      standard: 25000,
      premium: 45000,
      luxury: 80000
    }[repairType] || 25000;

    const roomMultiplier = {
      apartment: 1,
      house: 1.3,
      office: 1.1,
      commercial: 1.5
    }[roomType] || 1;

    return Math.round(area * basePrice * roomMultiplier);
  };

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const portfolioProjects = [
    {
      title: 'Современная квартира в ЖК "Премиум"',
      type: 'Квартира 120 м²',
      description: 'Полная трансформация пространства с использованием премиальных материалов. Индивидуальный дизайн, отражающий стиль жизни владельцев.',
      area: '120 м²',
      duration: '4 месяца',
      year: '2024',
      image: 'https://cdn.poehali.dev/projects/2b9da5c2-3365-4f75-8bb3-5edbba0afaee/files/948f37c7-27f5-4d85-a872-a8badbf75629.jpg',
      gallery: [
        'https://cdn.poehali.dev/projects/2b9da5c2-3365-4f75-8bb3-5edbba0afaee/files/948f37c7-27f5-4d85-a872-a8badbf75629.jpg',
        'https://cdn.poehali.dev/projects/2b9da5c2-3365-4f75-8bb3-5edbba0afaee/files/687ed3b2-ffee-4881-a502-57bb25b3839b.jpg',
        'https://cdn.poehali.dev/projects/2b9da5c2-3365-4f75-8bb3-5edbba0afaee/files/1975b7f9-a25b-4b9d-ae12-e780637331a7.jpg',
        'https://cdn.poehali.dev/projects/2b9da5c2-3365-4f75-8bb3-5edbba0afaee/files/809a5316-2a41-4d16-bf3d-bd93c1207fb7.jpg'
      ]
    },
    {
      title: 'Элегантная кухня-гостиная',
      type: 'Квартира 85 м²',
      description: 'Объединённое пространство кухни и гостиной в современном стиле. Мраморные поверхности и золотые акценты создают атмосферу роскоши.',
      area: '85 м²',
      duration: '3 месяца',
      year: '2023',
      image: 'https://cdn.poehali.dev/projects/2b9da5c2-3365-4f75-8bb3-5edbba0afaee/files/62831a09-080a-4a57-9933-8aeafaf56233.jpg',
      gallery: [
        'https://cdn.poehali.dev/projects/2b9da5c2-3365-4f75-8bb3-5edbba0afaee/files/62831a09-080a-4a57-9933-8aeafaf56233.jpg',
        'https://cdn.poehali.dev/projects/2b9da5c2-3365-4f75-8bb3-5edbba0afaee/files/809a5316-2a41-4d16-bf3d-bd93c1207fb7.jpg',
        'https://cdn.poehali.dev/projects/2b9da5c2-3365-4f75-8bb3-5edbba0afaee/files/687ed3b2-ffee-4881-a502-57bb25b3839b.jpg'
      ]
    },
    {
      title: 'Роскошная ванная комната',
      type: 'Дом 200 м²',
      description: 'Spa-зона премиум класса с использованием итальянской плитки и дизайнерской сантехники. Система умного дома для полного комфорта.',
      area: '200 м²',
      duration: '6 месяцев',
      year: '2024',
      image: 'https://cdn.poehali.dev/projects/2b9da5c2-3365-4f75-8bb3-5edbba0afaee/files/1ec73730-579e-4d7d-af76-bdb19c31ee71.jpg',
      gallery: [
        'https://cdn.poehali.dev/projects/2b9da5c2-3365-4f75-8bb3-5edbba0afaee/files/1ec73730-579e-4d7d-af76-bdb19c31ee71.jpg',
        'https://cdn.poehali.dev/projects/2b9da5c2-3365-4f75-8bb3-5edbba0afaee/files/1975b7f9-a25b-4b9d-ae12-e780637331a7.jpg',
        'https://cdn.poehali.dev/projects/2b9da5c2-3365-4f75-8bb3-5edbba0afaee/files/96019dfe-81ea-448b-9b8e-422fa9fa46de.jpg',
        'https://cdn.poehali.dev/projects/2b9da5c2-3365-4f75-8bb3-5edbba0afaee/files/f3948afd-b7be-4835-84ea-c648cd9f04e2.jpg',
        'https://cdn.poehali.dev/projects/2b9da5c2-3365-4f75-8bb3-5edbba0afaee/files/2c89f405-09bb-4804-b65d-c4e90851f763.jpg'
      ]
    }
  ];

  const services = [
    {
      icon: 'Ruler',
      title: 'Дизайн-проект',
      description: 'Индивидуальная разработка концепции интерьера с 3D-визуализацией'
    },
    {
      icon: 'Hammer',
      title: 'Ремонт под ключ',
      description: 'Полный цикл ремонтных работ от демонтажа до финишной отделки'
    },
    {
      icon: 'PaintBucket',
      title: 'Отделочные работы',
      description: 'Качественная отделка любой сложности с использованием премиальных материалов'
    },
    {
      icon: 'Lightbulb',
      title: 'Освещение',
      description: 'Проектирование и монтаж систем освещения для создания идеальной атмосферы'
    }
  ];

  const advantages = [
    { icon: 'Award', title: 'Опыт 15+ лет', description: 'Более 500 реализованных проектов' },
    { icon: 'ShieldCheck', title: 'Гарантия качества', description: '3 года гарантии на все работы' },
    { icon: 'Users', title: 'Профессиональная команда', description: 'Сертифицированные специалисты' },
    { icon: 'Clock', title: 'Точные сроки', description: 'Выполнение работ строго по графику' }
  ];

  const team = [
    { name: 'Анна Петрова', role: 'Главный дизайнер', experience: '12 лет опыта' },
    { name: 'Михаил Соколов', role: 'Архитектор', experience: '15 лет опыта' },
    { name: 'Елена Волкова', role: 'Дизайнер интерьеров', experience: '8 лет опыта' },
    { name: 'Дмитрий Иванов', role: 'Прораб', experience: '20 лет опыта' }
  ];

  const reviews = [
    {
      name: 'Ольга Смирнова',
      text: 'Потрясающий результат! Квартира превратилась в произведение искусства. Команда работала чётко, все сроки соблюдены.',
      rating: 5
    },
    {
      name: 'Александр Кузнецов',
      text: 'Профессионалы своего дела. Особенно впечатлил индивидуальный подход и внимание к деталям.',
      rating: 5
    },
    {
      name: 'Мария Новикова',
      text: 'Великолепный дизайн и качественное исполнение. Рекомендую всем, кто ценит премиальный сервис.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-charcoal">Premium Design & Renovation</h1>
            
            <div className="hidden md:flex gap-8">
              {['home', 'portfolio', 'services', 'advantages', 'team', 'reviews', 'calculator', 'contacts'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors hover:text-gold ${
                    activeSection === section ? 'text-gold' : 'text-foreground'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'portfolio' && 'Портфолио'}
                  {section === 'services' && 'Услуги'}
                  {section === 'advantages' && 'Преимущества'}
                  {section === 'team' && 'Команда'}
                  {section === 'reviews' && 'Отзывы'}
                  {section === 'calculator' && 'Калькулятор'}
                  {section === 'contacts' && 'Контакты'}
                </button>
              ))}
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-gold/10 rounded-lg transition-colors"
              aria-label="Меню"
            >
              <Icon name={mobileMenuOpen ? 'X' : 'Menu'} size={24} className="text-charcoal" />
            </button>
          </div>
        </div>

        <div
          className={`md:hidden fixed inset-0 top-[73px] bg-charcoal/95 backdrop-blur-lg transition-transform duration-300 ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col items-center justify-center h-full gap-8 px-6">
            {['home', 'portfolio', 'services', 'advantages', 'team', 'reviews', 'calculator', 'contacts'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`text-2xl font-medium transition-colors hover:text-gold ${
                  activeSection === section ? 'text-gold' : 'text-white'
                }`}
              >
                {section === 'home' && 'Главная'}
                {section === 'portfolio' && 'Портфолио'}
                {section === 'services' && 'Услуги'}
                {section === 'advantages' && 'Преимущества'}
                {section === 'team' && 'Команда'}
                {section === 'reviews' && 'Отзывы'}
                {section === 'calculator' && 'Калькулятор'}
                {section === 'contacts' && 'Контакты'}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center animate-fade-in">
          <h2 className="text-6xl md:text-7xl font-bold mb-6 text-charcoal">
            Создаём пространства<br />вашей мечты
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Премиальный дизайн и ремонт квартир и домов под ключ. 
            Индивидуальный подход к каждому проекту.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-gold hover:bg-gold/90 text-charcoal font-semibold">
              Получить консультацию
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollToSection('portfolio')}>
              Смотреть портфолио
            </Button>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-6 bg-latte">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4 text-charcoal">Портфолио</h2>
          <p className="text-center text-muted-foreground mb-16">Наши лучшие проекты</p>
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
                    <Button className="bg-gold hover:bg-gold/90 text-charcoal font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Смотреть проект
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-sm text-gold mb-2">{project.type}</p>
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

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

      <section id="advantages" className="py-20 px-6 bg-charcoal text-white">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4">Преимущества</h2>
          <p className="text-center text-gray-300 mb-16">Почему выбирают нас</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-gold/20 rounded-full flex items-center justify-center">
                  <Icon name={advantage.icon} size={40} className="text-gold" />
                </div>
                <h3 className="text-2xl font-semibold mb-3">{advantage.title}</h3>
                <p className="text-gray-300">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4 text-charcoal">Команда</h2>
          <p className="text-center text-muted-foreground mb-16">Профессионалы своего дела</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="w-24 h-24 mx-auto mb-6 bg-gold/10 rounded-full flex items-center justify-center">
                  <Icon name="User" size={48} className="text-gold" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-gold mb-2">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.experience}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-6 bg-latte">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4 text-charcoal">Отзывы</h2>
          <p className="text-center text-muted-foreground mb-16">Что говорят наши клиенты</p>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="text-gold fill-gold" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">"{review.text}"</p>
                <p className="font-semibold text-charcoal">{review.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="calculator" className="py-20 px-6">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-5xl font-bold text-center mb-4 text-charcoal">Калькулятор стоимости</h2>
          <p className="text-center text-muted-foreground mb-12">Рассчитайте предварительную стоимость ремонта</p>
          <Card className="p-8 shadow-2xl border-none">
            <div className="space-y-8">
              <div>
                <Label className="text-base mb-4 block">Площадь помещения: {area} м²</Label>
                <Slider
                  value={[area]}
                  onValueChange={(value) => setArea(value[0])}
                  min={20}
                  max={300}
                  step={5}
                  className="mb-2"
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>20 м²</span>
                  <span>300 м²</span>
                </div>
              </div>

              <div>
                <Label className="text-base mb-3 block">Тип помещения</Label>
                <Select value={roomType} onValueChange={setRoomType}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="apartment">Квартира</SelectItem>
                    <SelectItem value="house">Дом</SelectItem>
                    <SelectItem value="office">Офис</SelectItem>
                    <SelectItem value="commercial">Коммерческое помещение</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="text-base mb-3 block">Тип ремонта</Label>
                <Select value={repairType} onValueChange={setRepairType}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cosmetic">Косметический</SelectItem>
                    <SelectItem value="standard">Стандартный</SelectItem>
                    <SelectItem value="premium">Премиум</SelectItem>
                    <SelectItem value="luxury">Люкс</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="pt-6 border-t">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-2">Предварительная стоимость:</p>
                  <p className="text-4xl font-bold text-gold mb-6">
                    {calculatePrice().toLocaleString('ru-RU')} ₽
                  </p>
                  <Button className="w-full bg-gold hover:bg-gold/90 text-charcoal font-semibold" size="lg">
                    Получить точный расчёт
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

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

      <footer className="bg-charcoal text-white py-8 px-6 border-t border-gold/20">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">© 2024 Premium Design & Renovation. Все права защищены.</p>
        </div>
      </footer>

      {selectedProject !== null && (
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
      )}
    </div>
  );
};

export default Index;