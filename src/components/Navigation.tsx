import Icon from '@/components/ui/icon';

interface NavigationProps {
  activeSection: string;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  scrollToSection: (section: string) => void;
}

const Navigation = ({ activeSection, mobileMenuOpen, setMobileMenuOpen, scrollToSection }: NavigationProps) => {
  return (
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

          <button className="md:hidden p-2 hover:bg-gold/10 rounded-lg transition-colors text-slate-600 bg-slate-50 px-2 text-sm"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-gold/10 rounded-lg transition-colors"
            aria-label="Меню"
          >
            <Icon name={mobileMenuOpen ? 'X' : 'Menu'} size={24} className="text-charcoal" />
          </button>
        </div>
      </div>

      <div
        className={`md:hidden fixed inset-0 top-[73px] bg-charcoal transition-transform duration-300 ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-10 px-6">
          {['home', 'portfolio', 'services', 'advantages', 'team', 'reviews', 'calculator', 'contacts'].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`text-3xl font-semibold transition-colors ${
                activeSection === section ? 'text-gold' : 'text-latte hover:text-gold'
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
  );
};

export default Navigation;