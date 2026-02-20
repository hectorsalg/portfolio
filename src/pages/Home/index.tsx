import { useTranslation } from 'react-i18next';
import { portfolioData } from '../../data';
import type { Education, Language } from '../../data';

export function Home() {
  const { t } = useTranslation();

  const rawEducation = t('education', { returnObjects: true });
  const educationList = Array.isArray(rawEducation) ? rawEducation as Education[] : [];

  const rawLanguages = t('languages', { returnObjects: true });
  const languagesList = Array.isArray(rawLanguages) ? rawLanguages as Language[] : [];

  const getLanguageWidth = (level: string) => {
    switch (level.toLowerCase()) {
      case 'nativo':
      case 'native': return '100%';
      case 'avançado':
      case 'advanced': return '80%';
      case 'intermediário':
      case 'intermediate': return '60%';
      case 'técnico':
      case 'technical': return '40%';
      default: return '50%';
    }
  };

  const getSkills = (names: string[]) => {
    return portfolioData.skills.filter(skill => names.includes(skill.name));
  };

  return (
    <div className="p-8 md:p-12 max-w-200 mx-auto w-full">
      <section className="mb-12">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
            <span className="text-xl">👋</span> {t('ui.home.greeting')}
          </h2>
          <p className="text-text-secondary leading-relaxed text-lg">
            {t('ui.home.aboutText')}
          </p>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-6 mb-12">
        <div className="bg-surface-accent/30 p-8 rounded-2xl border border-border-color">
          <div className="flex items-center gap-3 mb-8 border-b border-border-color pb-4">
            <span className="material-symbols-outlined text-primary">code</span>
            <h3 className="text-primary font-semibold text-lg">{t('ui.home.techTitle')}</h3>
          </div>

          <div className="space-y-8">
            <div>
              <h4 className="text-xs font-bold text-text-secondary uppercase tracking-wider mb-3">{t('ui.home.techLangs')}</h4>
              <div className="flex flex-wrap gap-2">
                {getSkills(['HTML', 'CSS', 'JavaScript', 'TypeScript']).map(skill => (
                  <span key={skill.id} className="skill-tag">{skill.name}</span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold text-text-secondary uppercase tracking-wider mb-3">{t('ui.home.techFrameworks')}</h4>
              <div className="flex flex-wrap gap-2">
                {getSkills(['React', 'Angular', 'VueJS', 'JQuery']).map(skill => (
                  <span key={skill.id} className="skill-tag">{skill.name}</span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold text-text-secondary uppercase tracking-wider mb-3">{t('ui.home.techStyle')}</h4>
              <div className="flex flex-wrap gap-2">
                {getSkills(['Mobile First', 'CSS Grid', 'Flexbox', 'Media Queries', 'Material UI', 'Bootstrap', 'SASS', 'LESS']).map(skill => (
                  <span key={skill.id} className="skill-tag">{skill.name}</span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-xs font-bold text-text-secondary uppercase tracking-wider mb-3">{t('ui.home.techVersion')}</h4>
                <div className="flex flex-wrap gap-2">
                  {getSkills(['Git', 'GitHub', 'Jira']).map(skill => (
                    <span key={skill.id} className="skill-tag">{skill.name}</span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold text-text-secondary uppercase tracking-wider mb-3">{t('ui.home.techApi')}</h4>
                <div className="flex flex-wrap gap-2">
                  {getSkills(['Axios', 'Fetch API', 'REST API', 'JSON']).map(skill => (
                    <span key={skill.id} className="skill-tag">{skill.name}</span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold text-text-secondary uppercase tracking-wider mb-3">{t('ui.home.techAuto')}</h4>
                <div className="flex flex-wrap gap-2">
                  {getSkills(['Gulp', 'Grunt', 'Parcel', 'Vite']).map(skill => (
                    <span key={skill.id} className="skill-tag">{skill.name}</span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold text-text-secondary uppercase tracking-wider mb-3">{t('ui.home.techBack')}</h4>
                <div className="flex flex-wrap gap-2">
                  {getSkills(['NestJS', 'Node.js', 'Python', 'Django', 'PostgreSQL', 'Prisma ORM']).map(skill => (
                    <span key={skill.id} className="skill-tag">{skill.name}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="bg-surface-accent/30 p-8 rounded-2xl border border-border-color mb-12">
          <div className="flex items-center gap-3 mb-8 border-b border-border-color pb-4">
            <span className="material-symbols-outlined text-primary">school</span>
            <h3 className="text-primary font-semibold text-lg">{t('ui.home.eduTitle')}</h3>
          </div>
          <div className="space-y-8">
            {educationList.map((edu, idx) => (
              <div key={edu.id} className="flex flex-col gap-2">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                  <h4 className="text-primary text-lg font-bold leading-tight">{edu.course}</h4>
                  <span className="w-fit text-text-secondary text-xs font-bold uppercase tracking-wider bg-surface-element px-2 py-1 rounded border border-border-color">
                    {edu.period}
                  </span>
                </div>
                <p className="text-primary font-medium opacity-80">{edu.level}</p>
                <p className="text-text-secondary text-sm">{edu.local}</p>
                {idx !== educationList.length - 1 && (
                  <hr className="border-border-color/50 mt-4" />
                )}
              </div>
            ))}
          </div>
        </section>

        <div className="bg-surface-accent/30 p-6 rounded-2xl border border-border-color">
          <div className="flex items-center gap-3 mb-4 border-b border-border-color pb-4">
            <span className="material-symbols-outlined text-primary">language</span>
            <h3 className="text-primary font-semibold">{t('ui.home.langTitle')}</h3>
          </div>
          <div className="space-y-4">
            {languagesList.map(lang => (
               <div key={lang.id}>
                  <div className="flex justify-between items-center text-sm mb-1">
                      <span className="text-primary">{lang.name}</span>
                      <span className="text-text-secondary">{lang.level}</span>
                  </div>
                  <div className="w-full bg-surface-element border border-border-color rounded-full h-1.5">
                      <div 
                        className="bg-primary h-1.5 rounded-full" 
                        style={{ width: getLanguageWidth(lang.level) }}
                      ></div>
                  </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="h-20"></div>
    </div>
  );
}