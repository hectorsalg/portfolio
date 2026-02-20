import { portfolioData } from '../../data';

export function Experience() {
  return (
    <div className="p-8 md:p-12 max-w-200 mx-auto w-full">
      <h2 className="text-2xl font-bold text-primary mb-8">Experiência Profissional</h2>

      <section>
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-linear-to-b before:from-transparent before:via-border-color before:to-transparent">
          
          {portfolioData.experience.map((job, index) => (
            <div key={job.id} className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group ${index === 0 ? 'is-active' : ''}`}>
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-border-color bg-surface-element group-[.is-active]:bg-primary group-[.is-active]:border-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 translate-y-10 z-10 transition-colors">
                <span className={`material-symbols-outlined text-base ${index === 0 ? 'text-background-dark' : 'text-text-secondary'}`}>
                  {index === 0 ? 'code' : 'terminal'}
                </span>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-surface-accent/30 p-6 rounded-2xl border border-border-color hover:border-text-secondary transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-1 mb-2">
                  <h3 className="text-primary text-lg font-bold leading-normal">{job.role}</h3>
                  <span className="text-text-secondary text-xs font-bold uppercase tracking-wider bg-surface-element px-2 py-1 rounded border border-border-color cursor-pointer">
                    {job.period}
                  </span>
                </div>
                <p className="text-primary font-medium mb-3 opacity-80">{job.company}</p>
                <p className="text-text-secondary text-sm leading-relaxed mb-4">{job.description}</p>
                <div className="flex gap-2 flex-wrap">
                  {job.skills.map((skill, i) => (
                    <span key={i} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}

        </div>
      </section>

      <div className="h-20"></div>
    </div>
  );
}