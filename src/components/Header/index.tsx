import { useTranslation } from 'react-i18next';
import { useAppContext } from '../../context/AppContext';

export function Header() {
  const { theme, toggleTheme, setMobileMenuOpen } = useAppContext();
  const { i18n } = useTranslation();

  const currentLanguage = i18n.language || 'pt';

  const toggleLanguage = () => {
    const newLang = currentLanguage.startsWith('pt') ? 'en' : 'pt';
    i18n.changeLanguage(newLang);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-surface-dark/80 backdrop-blur-md border-b border-border-color transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden text-primary p-1 hover:bg-surface-accent rounded-lg transition-colors"
          >
            <span className="material-symbols-outlined text-[28px]">menu</span>
          </button>
          <div className="text-primary font-bold text-xl tracking-tight">Portfólio</div>
        </div>

        <div className="flex items-center gap-6">
          <button
            onClick={toggleLanguage}
            className="flex items-center justify-center font-bold text-sm rounded-full hover:bg-surface-accent transition-colors text-text-secondary hover:text-primary px-2 py-1"
          >
            {currentLanguage.startsWith('pt') ? 'EN' : 'PT'}
          </button>

          <button 
            onClick={toggleTheme}
            className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-surface-accent transition-colors text-text-secondary hover:text-primary"
          >
            <span className="material-symbols-outlined text-[20px]">
              {theme === 'dark' ? 'light_mode' : 'dark_mode'}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}