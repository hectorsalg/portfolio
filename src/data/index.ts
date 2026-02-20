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
  ] as Skill[]
};