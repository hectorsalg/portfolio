import { NavLink } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';

import FotoPerfil from '/assets/perfil.jpg';

export function Sidebar() {
  const { setMobileMenuOpen } = useAppContext();
  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <div className="flex flex-col gap-8 p-6">
        <div className="flex items-center gap-4">
          <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-14 shrink-0 ring-2 ring-border-color" style={{ backgroundImage: `url(${FotoPerfil})` }}></div>
          <div className="flex flex-col overflow-hidden">
            <h1 className="text-primary text-lg font-bold leading-tight truncate">Hector Salgueiros</h1>
            <p className="text-text-secondary text-sm font-normal leading-normal truncate">Engenheiro Front-End</p>
          </div>
        </div>

        <nav className="flex flex-col gap-2">
          <NavLink to="/" onClick={closeMenu} className={({ isActive }) => `sidebar-link flex items-center gap-3 px-4 py-3 rounded-xl transition-colors group ${isActive ? 'bg-surface-accent border border-border-color' : 'hover:bg-surface-accent'}`}>
            {({ isActive }) => (
              <>
                <span className={`material-symbols-outlined transition-colors ${isActive ? 'text-primary' : 'text-text-secondary group-hover:text-primary'}`}>info</span>
                <p className={`text-sm leading-normal transition-colors ${isActive ? 'text-primary font-bold' : 'text-text-secondary font-medium group-hover:text-primary'}`}>Sobre</p>
              </>
            )}
          </NavLink>
          
          <NavLink to="/experience" onClick={closeMenu} className={({ isActive }) => `sidebar-link flex items-center gap-3 px-4 py-3 rounded-xl transition-colors group ${isActive ? 'bg-surface-accent border border-border-color' : 'hover:bg-surface-accent'}`}>
            {({ isActive }) => (
              <>
                <span className={`material-symbols-outlined transition-colors ${isActive ? 'text-primary' : 'text-text-secondary group-hover:text-primary'}`}>work</span>
                <p className={`text-sm leading-normal transition-colors ${isActive ? 'text-primary font-bold' : 'text-text-secondary font-medium group-hover:text-primary'}`}>Experiência</p>
              </>
            )}
          </NavLink>
          
          <NavLink to="/projects" onClick={closeMenu} className={({ isActive }) => `sidebar-link flex items-center gap-3 px-4 py-3 rounded-xl transition-colors group ${isActive ? 'bg-surface-accent border border-border-color' : 'hover:bg-surface-accent'}`}>
            {({ isActive }) => (
              <>
                <span className={`material-symbols-outlined transition-colors ${isActive ? 'text-primary' : 'text-text-secondary group-hover:text-primary'}`}>rocket_launch</span>
                <p className={`text-sm leading-normal transition-colors ${isActive ? 'text-primary font-bold' : 'text-text-secondary font-medium group-hover:text-primary'}`}>Projetos</p>
              </>
            )}
          </NavLink>
        </nav>
      </div>

      <div className="flex flex-col gap-4 p-6 mt-auto border-t border-border-color">
        <div className="flex flex-col gap-1">
          <a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-surface-accent transition-colors group" href="https://github.com/hectorsalg" target="_blank" rel="noreferrer">
            <span className="material-symbols-outlined text-text-secondary group-hover:text-primary">code</span>
            <p className="text-text-secondary group-hover:text-primary text-sm font-medium">GitHub</p>
          </a>
          <a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-surface-accent transition-colors group" href="https://www.linkedin.com/in/hectorsalg/" target="_blank" rel="noreferrer">
            <span className="material-symbols-outlined text-text-secondary group-hover:text-primary">connect_without_contact</span>
            <p className="text-text-secondary group-hover:text-primary text-sm font-medium">LinkedIn</p>
          </a>
          <a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-surface-accent transition-colors group" href="mailto:hecsalgueiros@gmail.com">
            <span className="material-symbols-outlined text-text-secondary group-hover:text-primary">mail</span>
            <p className="text-text-secondary group-hover:text-primary text-sm font-medium">Email</p>
          </a>
        </div>
      </div>
    </>
  );
}