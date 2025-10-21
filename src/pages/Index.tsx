import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import PortfolioSection from '@/components/PortfolioSection';
import ServicesSection from '@/components/ServicesSection';
import AdvantagesSection from '@/components/AdvantagesSection';
import TeamSection from '@/components/TeamSection';
import ReviewsSection from '@/components/ReviewsSection';
import CalculatorSection from '@/components/CalculatorSection';
import ContactsSection from '@/components/ContactsSection';
import ProjectModal from '@/components/ProjectModal';

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
      <Navigation
        activeSection={activeSection}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        scrollToSection={scrollToSection}
      />

      <HeroSection scrollToSection={scrollToSection} />

      <PortfolioSection
        portfolioProjects={portfolioProjects}
        setSelectedProject={setSelectedProject}
      />

      <ServicesSection services={services} />

      <AdvantagesSection advantages={advantages} />

      <TeamSection team={team} />

      <ReviewsSection reviews={reviews} />

      <CalculatorSection
        area={area}
        setArea={setArea}
        roomType={roomType}
        setRoomType={setRoomType}
        repairType={repairType}
        setRepairType={setRepairType}
        calculatePrice={calculatePrice}
      />

      <ContactsSection />

      <footer className="bg-charcoal text-white py-8 px-6 border-t border-gold/20">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">© 2024 Premium Design & Renovation. Все права защищены.</p>
        </div>
      </footer>

      <ProjectModal
        selectedProject={selectedProject}
        portfolioProjects={portfolioProjects}
        setSelectedProject={setSelectedProject}
        scrollToSection={scrollToSection}
      />
    </div>
  );
};

export default Index;
