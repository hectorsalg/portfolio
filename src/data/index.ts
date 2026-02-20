export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  date: string;
  linkGithub: string;
  linkPreview: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
}

export interface Skill {
  id: number;
  name: string;
}

export interface Education {
  id: number;
  course: string;
  level: string;
  period: string;
  local: string;
}

export interface Language {
  id: number;
  name: string;
  level: string;
}

export const portfolioData = {
  skills: [
    { id: 1, name: 'HTML' },
    { id: 2, name: 'CSS' },
    { id: 3, name: 'JavaScript' },
    { id: 4, name: 'TypeScript' },

    { id: 5, name: 'React' },
    { id: 6, name: 'Angular' },
    { id: 7, name: 'VueJS' },
    { id: 8, name: 'JQuery' },

    { id: 9, name: 'Mobile First' },
    { id: 10, name: 'CSS Grid' },
    { id: 11, name: 'Flexbox' },
    { id: 12, name: 'Media Queries' },
    { id: 13, name: 'Material UI' },
    { id: 14, name: 'Bootstrap' },
    { id: 15, name: 'SASS' },
    { id: 16, name: 'LESS' },

    { id: 17, name: 'Git' },
    { id: 18, name: 'GitHub' },
    { id: 19, name: 'Jira' },

    { id: 20, name: 'Axios' },
    { id: 21, name: 'Fetch API' },
    { id: 22, name: 'REST API' },
    { id: 23, name: 'JSON' },

    { id: 24, name: 'Gulp' },
    { id: 25, name: 'Grunt' },
    { id: 26, name: 'Parcel' },
    { id: 27, name: 'Vite' },

    { id: 28, name: 'NestJS' },
    { id: 29, name: 'Node.js' },
    { id: 30, name: 'Python' },
    { id: 31, name: 'Django' },
    { id: 32, name: 'PostgreSQL' },
    { id: 33, name: 'Prisma ORM' }
  ] as Skill[],

  education: [
    {
      id: 1,
      course: 'Engenheiro Front-End',
      level: 'Curso Livre Profissionalizante',
      period: 'Dez 2024 - Fev 2026',
      local: 'Escola Britânica de Artes Criativas e Tecnologia (EBAC)',
    },
    {
      id: 2,
      course: 'Sistemas de Informação',
      level: 'Bacharelado',
      period: 'Ago 2021 - Dez 2025',
      local: 'Universidade Federal do Piauí (UFPI)',
    }
  ] as Education[],

  languages: [
    { id: 1, name: 'Português', level: 'Nativo' },
    { id: 2, name: 'Inglês', level: 'Intermediário' },
    { id: 3, name: 'Espanhol', level: 'Técnico' },
  ] as Language[],

  experience: [
    {
      id: 1,
      role: 'Desenvolvedor Full Stack',
      company: 'Profissional Autônomo',
      period: 'Jan 2025 - Jul 2025',
      description: 'Desenvolvimento e manutenção de aplicações web de alta performance. Otimização avançada de queries em PostgreSQL e resolução de desafios técnicos complexos.',
      skills: ['TypeScript', 'Angular', 'NestJS', 'PostgreSQL', 'Prisma ORM', 'Jira', 'Fetch API']
    },
    {
      id: 2,
      role: 'Estagiário Back-End',
      company: 'Fábrica de Gênios',
      period: 'Set 2023 - Abr 2024',
      description: 'Desenvolvimento e manutenção de sistemas back-end com Python/Django e migração de legado para NestJS. Criação de APIs RESTful para integração eficiente de dados.',
      skills: ['TypeScript', 'Python', 'Django', 'REST API', 'PostgreSQL', 'Prisma ORM']
    },
  ] as Experience[],

  projects: [
    {
      id: 1,
      title: 'Clone Disney+',
      description: 'Réplica da landing page do Disney+.',
      image: '/assets/disneyplus.png',
      techStack: ['HTML', 'JavaScript', 'SASS', 'Bootstrap', 'Flexbox', 'Media Queries', 'Gulp'],
      date: 'Jan 2026',
      linkGithub: 'https://github.com/hectorsalg/clone_disneyplus',
      linkPreview: 'https://clone-disneyplus-hectorsalg.vercel.app/'
    },
    {
      id: 2,
      title: 'Projeto Costs',
      description: 'Sistema de gestão de projetos e controlo de custos.',
      image: '/assets/projeto-costs.png',
      techStack:['HTML', 'React', 'Vite', 'JavaScript', 'CSS Modules', 'JSON'],
      date: 'Dez 2025',
      linkGithub: 'https://github.com/hectorsalg/projeto-cost',
      linkPreview: 'https://hectorsalg.github.io/projeto-cost/'
    },
    {
      id: 3,
      title: 'Projeto Filme Carros',
      description: 'Landing page para o filme "Carros" da Disney Pixar.',
      image: '/assets/cars-landingpage.png',
      techStack: ['HTML', 'SASS', 'JavaScript', 'Gulp', 'Media Queries', 'Flexbox'],
      date: 'Jan 2026',
      linkGithub: 'https://github.com/hectorsalg/cars-landing-page',
      linkPreview: 'https://cars-landing-page-hectorsalg.vercel.app/'
    },
    {
      id:4,
      title: 'Projeto World Cup 2026',
      description: 'Landing page para um timer da copa de 2026.',
      image: '/assets/projeto-worldcup.png',
      techStack: ['HTML', 'SASS', 'JavaScript', 'Parcel', 'Media Queries', 'CSS GRID', 'Flexbox', 'Mobile First'],
      date: 'Jan 2026',
      linkGithub: 'https://github.com/hectorsalg/world-cup-timer',
      linkPreview: 'https://world-cup-timer.vercel.app/'
    },
    {
      id:5,
      title: 'Projeto Loja "Entendo"',
      description: 'Landing page para uma loja de jogos fictícia.',
      image: '/assets/projeto-loja-entendo.png',
      techStack: ['HTML', 'CSS', 'Bootstrap'],
      date: 'Ago 2025',
      linkGithub: 'https://github.com/hectorsalg/projeto-loja-entendo',
      linkPreview: 'https://projeto-loja-entendo.vercel.app/'
    },
    {
      id:6,
      title: 'Projeto Pizzaria',
      description: 'Landing page para uma pizzaria fictícia.',
      image: '/assets/projeto-pizzaria.png',
      techStack: ['HTML', 'CSS', 'Bootstrap'],
      date: 'Ago 2025',
      linkGithub: 'https://github.com/hectorsalg/projeto-pizzaria',
      linkPreview: 'https://projeto-pizzaria-hector.vercel.app/'
    },
  ] as Project[]
};