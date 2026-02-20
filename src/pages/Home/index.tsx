import { portfolioData } from '../../data';

export function Home() {
  // Função auxiliar para definir a largura da barra de idioma
  const getLanguageWidth = (level: string) => {
    switch (level.toLowerCase()) {
      case 'nativo': return '100%';
      case 'avançado': return '80%';
      case 'intermediário': return '60%';
      case 'técnico': return '40%';
      default: return '50%';
    }
  };

  // Função auxiliar para buscar as skills específicas do portfolioData
  const getSkills = (names: string[]) => {
    return portfolioData.skills.filter(skill => names.includes(skill.name));
  };

  return (
    <div className="p-8 md:p-12 max-w-200 mx-auto w-full">
      
      {/* Secção Sobre Mim */}
      <section className="mb-12">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
            <span className="text-xl">👋</span> Olá, eu sou o Hector
          </h2>
          <p className="text-text-secondary leading-relaxed text-lg">
            Desenvolvedor Front-End, bacharel em Sistemas de Informação pela UFPI, com foco na criação de interfaces modernas, responsivas e centradas na experiência do usuário. Trabalho com JavaScript e TypeScript, utilizando Angular e React, e possuo conhecimentos em Back-End com NestJS, Prisma e PostgreSQL, o que me permite ter uma visão completa das aplicações.
          </p>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-6 mb-12">
        
        {/* Competências Técnicas */}
        <div className="bg-surface-accent/30 p-8 rounded-2xl border border-border-color">
          <div className="flex items-center gap-3 mb-8 border-b border-border-color pb-4">
            <span className="material-symbols-outlined text-primary">code</span>
            <h3 className="text-primary font-semibold text-lg">Competências Técnicas</h3>
          </div>

          <div className="space-y-8">
            {/* 1. Linguagens de Programação */}
            <div>
              <h4 className="text-xs font-bold text-text-secondary uppercase tracking-wider mb-3">Linguagens de Programação</h4>
              <div className="flex flex-wrap gap-2">
                {getSkills(['HTML', 'CSS', 'JavaScript', 'TypeScript']).map(skill => (
                  <span key={skill.id} className="skill-tag">{skill.name}</span>
                ))}
              </div>
            </div>

            {/* 2. Frameworks & Bibliotecas */}
            <div>
              <h4 className="text-xs font-bold text-text-secondary uppercase tracking-wider mb-3">Frameworks & Bibliotecas Front-end</h4>
              <div className="flex flex-wrap gap-2">
                {getSkills(['React', 'Angular', 'VueJS', 'JQuery']).map(skill => (
                  <span key={skill.id} className="skill-tag">{skill.name}</span>
                ))}
              </div>
            </div>

            {/* 3. Estilização & Design */}
            <div>
              <h4 className="text-xs font-bold text-text-secondary uppercase tracking-wider mb-3">Estilização & Design Responsivo</h4>
              <div className="flex flex-wrap gap-2">
                {getSkills(['Mobile First', 'CSS Grid', 'Flexbox', 'Media Queries', 'Material UI', 'Bootstrap', 'SASS', 'LESS']).map(skill => (
                  <span key={skill.id} className="skill-tag">{skill.name}</span>
                ))}
              </div>
            </div>

            {/* GRID PARA AS RESTANTES (2 COLUNAS) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* 4. Versionamento */}
              <div>
                <h4 className="text-xs font-bold text-text-secondary uppercase tracking-wider mb-3">Versionamento & Colaboração</h4>
                <div className="flex flex-wrap gap-2">
                  {getSkills(['Git', 'GitHub', 'Jira']).map(skill => (
                    <span key={skill.id} className="skill-tag">{skill.name}</span>
                  ))}
                </div>
              </div>

              {/* 5. APIs */}
              <div>
                <h4 className="text-xs font-bold text-text-secondary uppercase tracking-wider mb-3">Consumo & Integração de APIs</h4>
                <div className="flex flex-wrap gap-2">
                  {getSkills(['Axios', 'Fetch API', 'REST API', 'JSON']).map(skill => (
                    <span key={skill.id} className="skill-tag">{skill.name}</span>
                  ))}
                </div>
              </div>

              {/* 6. Automação */}
              <div>
                <h4 className="text-xs font-bold text-text-secondary uppercase tracking-wider mb-3">Automação & Build Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {getSkills(['Gulp', 'Grunt', 'Parcel', 'Vite']).map(skill => (
                    <span key={skill.id} className="skill-tag">{skill.name}</span>
                  ))}
                </div>
              </div>

              {/* 7. Back-End */}
              <div>
                <h4 className="text-xs font-bold text-text-secondary uppercase tracking-wider mb-3">Back-End & Database</h4>
                <div className="flex flex-wrap gap-2">
                  {getSkills(['NestJS', 'Node.js', 'Python', 'Django', 'PostgreSQL', 'Prisma ORM']).map(skill => (
                    <span key={skill.id} className="skill-tag">{skill.name}</span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Formação (Educação) */}
        <section className="bg-surface-accent/30 p-8 rounded-2xl border border-border-color mb-12">
          <div className="flex items-center gap-3 mb-8 border-b border-border-color pb-4">
            <span className="material-symbols-outlined text-primary">school</span>
            <h3 className="text-primary font-semibold text-lg">Formação</h3>
          </div>
          <div className="space-y-8">
            {portfolioData.education.map((edu, idx) => (
              <div key={edu.id} className="flex flex-col gap-2">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                  <h4 className="text-primary text-lg font-bold leading-tight">{edu.course}</h4>
                  <span className="w-fit text-text-secondary text-xs font-bold uppercase tracking-wider bg-surface-element px-2 py-1 rounded border border-border-color">
                    {edu.period}
                  </span>
                </div>
                <p className="text-primary font-medium opacity-80">{edu.level}</p>
                <p className="text-text-secondary text-sm">{edu.local}</p>
                {/* Linha divisória exceto no último item */}
                {idx !== portfolioData.education.length - 1 && (
                  <hr className="border-border-color/50 mt-4" />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Idiomas */}
        <div className="bg-surface-accent/30 p-6 rounded-2xl border border-border-color">
          <div className="flex items-center gap-3 mb-4 border-b border-border-color pb-4">
            <span className="material-symbols-outlined text-primary">language</span>
            <h3 className="text-primary font-semibold">Idiomas</h3>
          </div>
          <div className="space-y-4">
            {portfolioData.languages.map(lang => (
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