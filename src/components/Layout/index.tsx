import { Outlet } from 'react-router-dom';
import { Sidebar } from '../Sidebar';
import { Header } from '../Header';
import { useAppContext } from '../../context/AppContext';

export function Layout() {
  const { isMobileMenuOpen, setMobileMenuOpen } = useAppContext();

  return (
    <div className="bg-background-dark font-display text-primary flex flex-col items-center h-screen w-full overflow-hidden transition-colors duration-300">
      <Header />

      <div className="flex w-full max-w-5xl flex-col md:flex-row bg-background-dark shadow-2xl md:rounded-2xl border border-border-color overflow-hidden mt-20 md:mt-28 mb-0 md:mb-6 grow relative transition-colors duration-300">
        <aside className={`fixed inset-y-0 left-0 z-60 w-70 bg-surface-dark border-r border-border-color flex flex-col justify-between h-full overflow-y-auto transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 md:relative md:translate-x-0 md:w-70 lg:w-75 shadow-2xl md:shadow-none`}>
          <Sidebar />
        </aside>
        <main className="flex-1 flex flex-col h-full relative overflow-y-auto custom-scrollbar bg-background-dark">
          <Outlet />
        </main>

      </div>  
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/80 z-40 md:hidden backdrop-blur-sm transition-opacity cursor-pointer"
          onClick={() => setMobileMenuOpen(false)}
        ></div>
      )}
    </div>
  );
}