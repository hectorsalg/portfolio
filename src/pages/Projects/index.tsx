import { useTranslation } from 'react-i18next';
import { portfolioData } from '../../data';

export function Projects() {
  const { t } = useTranslation();

  const sortedProjects = [...portfolioData.projects].sort((a, b) => b.id - a.id);

  return (
    <div className="p-8 md:p-12 max-w-200 mx-auto w-full">
      <h2 className="text-2xl font-bold text-primary mb-8">{t('ui.projects.title')}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sortedProjects.map((proj) => (
          <div key={proj.id} className="group relative bg-surface-accent/30 rounded-2xl overflow-hidden border border-border-color hover:border-text-secondary transition-all duration-300 flex flex-col">
            
            <div className="h-48 bg-surface-element relative overflow-hidden flex items-center justify-center border-b border-border-color shrink-0">
              <img 
                src={proj.image} 
                alt={`Print do projeto ${proj.id}`} 
                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" 
              />
              <div className="absolute top-3 right-3">
                <span className="bg-surface-dark/80 backdrop-blur text-primary text-[10px] font-bold px-2 py-1 rounded border border-border-color uppercase">
                  {t(`projects.${proj.id}.date`)}
                </span>
              </div>
            </div>

            <div className="p-6 flex flex-col grow">
              <h3 className="text-primary text-xl font-bold mb-2 group-hover:text-text-secondary transition-colors">
                {t(`projects.${proj.id}.title`)}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-4 line-clamp-3">
                {t(`projects.${proj.id}.description`)}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4 mt-auto">
                {proj.techStack.map((tech, i) => (
                  <span key={i} className="skill-tag">{tech}</span>
                ))}
              </div>
              
              <div className="flex justify-between gap-4 pt-4 border-t border-border-color">
                <a href={proj.linkGithub} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-bold text-primary hover:text-text-secondary transition-colors">
                  <span className="material-symbols-outlined text-[18px]">code</span> {t('ui.projects.codeBtn')}
                </a>
                <a href={proj.linkPreview} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-bold text-primary hover:text-text-secondary transition-colors">
                  <span className="material-symbols-outlined text-[18px]">web</span> {t('ui.projects.webBtn')}
                </a>
              </div>
            </div>

          </div>
        ))}
      </div>
      
      <div className="h-20"></div>
    </div>
  );
}