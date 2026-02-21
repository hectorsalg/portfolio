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
    { id: 1, name: 'HTML' }, { id: 2, name: 'CSS' }, { id: 3, name: 'JavaScript' }, { id: 4, name: 'TypeScript' },
    { id: 5, name: 'React' }, { id: 6, name: 'Angular' }, { id: 7, name: 'VueJS' }, { id: 8, name: 'JQuery' },
    { id: 9, name: 'Mobile First' }, { id: 10, name: 'CSS Grid' }, { id: 11, name: 'Flexbox' }, { id: 12, name: 'Media Queries' },
    { id: 13, name: 'Material UI' }, { id: 14, name: 'Bootstrap' }, { id: 15, name: 'SASS' }, { id: 16, name: 'LESS' },
    { id: 17, name: 'Git' }, { id: 18, name: 'GitHub' }, { id: 19, name: 'Jira' },
    { id: 20, name: 'Axios' }, { id: 21, name: 'Fetch API' }, { id: 22, name: 'REST API' }, { id: 23, name: 'JSON' },
    { id: 24, name: 'Gulp' }, { id: 25, name: 'Grunt' }, { id: 26, name: 'Parcel' }, { id: 27, name: 'Vite' },
    { id: 28, name: 'NestJS' }, { id: 29, name: 'Node.js' }, { id: 30, name: 'Python' }, { id: 31, name: 'Django' },
    { id: 32, name: 'PostgreSQL' }, { id: 33, name: 'Prisma ORM' }
  ] as Skill[],

  experience: [
    {
      id: 1,
      skills: ['TypeScript', 'Angular', 'NestJS', 'PostgreSQL', 'Prisma ORM', 'Jira', 'Fetch API']
    },
    {
      id: 2,
      skills: ['TypeScript', 'Python', 'Django', 'REST API', 'PostgreSQL', 'Prisma ORM']
    }
  ] as Experience[],

  projects: [
    {
      id: 1,
      image: '/assets/projeto-pizzaria.png',
      techStack: ['HTML', 'CSS', 'Bootstrap'],
      linkGithub: 'https://github.com/hectorsalg/projeto-pizzaria',
      linkPreview: 'https://projeto-pizzaria-hector.vercel.app/'
    },
    {
      id: 2,
      image: '/assets/projeto-loja-entendo.png',
      techStack: ['HTML', 'CSS', 'Bootstrap'],
      linkGithub: 'https://github.com/hectorsalg/projeto-loja-entendo',
      linkPreview: 'https://projeto-loja-entendo.vercel.app/'
    },
    {
      id: 3,
      image: '/assets/projeto-worldcup.png',
      techStack: ['HTML', 'SASS', 'JavaScript', 'Parcel', 'Media Queries', 'CSS GRID', 'Flexbox', 'Mobile First'],
      linkGithub: 'https://github.com/hectorsalg/world-cup-timer',
      linkPreview: 'https://world-cup-timer.vercel.app/'
    },
    {
      id: 4,
      image: '/assets/cars-landingpage.png',
      techStack: ['HTML', 'SASS', 'JavaScript', 'Gulp', 'Media Queries', 'Flexbox'],
      linkGithub: 'https://github.com/hectorsalg/cars-landing-page',
      linkPreview: 'https://cars-landing-page-hectorsalg.vercel.app/'
    },
    {
      id: 5,
      image: '/assets/projeto-costs.png',
      techStack: ['HTML', 'React', 'Vite', 'JavaScript', 'CSS Modules', 'JSON'],
      linkGithub: 'https://github.com/hectorsalg/projeto-costs',
      linkPreview: 'https://hectorsalg.github.io/projeto-costs/'
    },
    {
      id: 6,
      image: '/assets/disneyplus.png',
      techStack: ['HTML', 'JavaScript', 'SASS', 'Bootstrap', 'Flexbox', 'Media Queries', 'Gulp'],
      linkGithub: 'https://github.com/hectorsalg/clone_disneyplus',
      linkPreview: 'https://clone-disneyplus-hectorsalg.vercel.app/'
    },
    {
      id: 7,
      image: '/assets/projeto-contact.png',
      techStack: ['React', 'TypeScript', 'Redux', 'Styled Components', 'Prettier', 'ESLint'],
      linkGithub: 'https://github.com/hectorsalg/lista-contatos-react',
      linkPreview: 'https://lista-contatos-react-hectorsalg.vercel.app/'
    },
    {
      id: 8,
      image: '/assets/projeto-todo.png',
      techStack: ['React', 'TypeScript', 'Redux', 'Styled Components'],
      linkGithub: 'https://github.com/hectorsalg/minhas-tarefas',
      linkPreview: 'https://minhas-tarefas-hectorsalg.vercel.app/'
    }
  ] as Project[]
};