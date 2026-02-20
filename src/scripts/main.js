function initTheme() {
    const userPref = localStorage.getItem('theme');
    const isDark = userPref === 'dark' || (!userPref && true);

    if (isDark) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
    updateThemeIcon(isDark);
}

initTheme();

function toggleTheme() {
    const html = document.documentElement;
    const isDark = html.classList.toggle('dark');

    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateThemeIcon(isDark);
}

function updateThemeIcon(isDark) {
    if (typeof isDark !== 'boolean') {
        isDark = document.documentElement.classList.contains('dark');
    }

    const btnIcon = document.getElementById('theme-toggle-icon');
    if (btnIcon) {
        btnIcon.textContent = isDark ? 'light_mode' : 'dark_mode';
    }
}

async function loadComponent(elementId, filePath, callback) {
    try {
        const response = await fetch(filePath);
        if (response.ok) {
            const content = await response.text();
            document.getElementById(elementId).innerHTML = content;
            if (callback) callback();
        } else {
            console.error(`Erro ao carregar ${filePath}: ${response.status}`);
        }
    } catch (error) {
        console.error(`Erro ao buscar ${filePath}:`, error);
    }
}

function highlightActiveLink() {
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    const links = document.querySelectorAll('.sidebar-link');

    links.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('bg-surface-accent', 'border', 'border-border-color');
            link.classList.remove('hover:bg-surface-accent');

            const icon = link.querySelector('span.material-symbols-outlined');
            const text = link.querySelector('p');
            if (icon) {
                icon.classList.remove('text-text-secondary');
                icon.classList.add('text-primary');
            }
            if (text) {
                text.classList.remove('text-text-secondary', 'font-medium');
                text.classList.add('text-primary', 'font-bold');
            }
        }
    });
}

function initMobileMenu() {
    const btn = document.getElementById('mobile-menu-btn');
    const sidebar = document.getElementById('sidebar-placeholder');
    const overlay = document.getElementById('mobile-overlay');

    if (btn && sidebar && overlay) {
        btn.addEventListener('click', () => {
            sidebar.classList.remove('-translate-x-full');
            overlay.classList.remove('hidden');
        });

        overlay.addEventListener('click', () => {
            sidebar.classList.add('-translate-x-full');
            overlay.classList.add('hidden');
        });
    }
}

function initThemeToggleBtn() {
    const btn = document.getElementById('theme-toggle-btn');
    if (btn) {
        btn.addEventListener('click', toggleTheme);
        updateThemeIcon();
    }
}

const translations = {
    pt: {
        // Sidebar & Menu
        "sidebar-role": "Engenheiro Front-End",
        "nav-about": "Sobre",
        "nav-experience": "Experiência",
        "nav-projects": "Projetos",

        // index.html (Sobre)
        "home-greeting": "<span class='text-xl'>👋</span> Olá, eu sou o Hector",
        "home-about": "Desenvolvedor Front-End, bacharel em Sistemas de Informação pela UFPI, com foco na criação de interfaces modernas, responsivas e centradas na experiência do usuário. Trabalho com JavaScript e TypeScript, utilizando Angular e React, e possuo conhecimentos em Back-End com NestJS, Prisma e PostgreSQL, o que me permite ter uma visão completa das aplicações.",
        "home-skills-title": "Competências Técnicas",
        "home-skills-lang": "Linguagens de Programação",
        "home-skills-front": "Frameworks & Bibliotecas Front-end",
        "home-skills-style": "Estilização & Design Responsivo",
        "home-skills-git": "Versionamento & Colaboração",
        "home-skills-api": "Consumo & Integração de APIs",
        "home-skills-auto": "Automação & Build Tools",
        "home-skills-back": "Back-End & Database",
        "home-edu-title": "Formação",
        "home-edu-role1": "Engenheiro Front-End",
        "home-edu-date1": "Dez 2024 - Fev 2026",
        "home-edu-desc1": "Curso Livre Profissionalizante",
        "home-edu-school1": "Escola Britânica de Artes Criativas e Tecnologia (EBAC)",
        "home-edu-role2": "Sistemas de Informação",
        "home-edu-date2": "Ago 2021 - Dez 2025",
        "home-edu-desc2": "Bacharelado",
        "home-edu-school2": "Universidade Federal do Piauí (UFPI)",
        "home-lang-title": "Idiomas",
        "home-lang-pt": "Português",
        "home-lang-native": "Nativo",
        "home-lang-en": "Inglês",
        "home-lang-inter": "Intermediário",
        "home-lang-es": "Espanhol",
        "home-lang-tech": "Técnico",

        // experience.html
        "exp-title": "Experiência Profissional",
        "exp-job1-title": "Desenvolvedor Full Stack",
        "exp-job1-date": "Jan 2025 - Jul 2025",
        "exp-job1-type": "Profissional Autônomo",
        "exp-job1-desc": "Desenvolvimento e manutenção de aplicações web de alta performance. Otimização avançada de queries em PostgreSQL e resolução de desafios técnicos complexos.",
        "exp-job2-title": "Estagiário Back-End",
        "exp-job2-date": "Set 2023 - Abr 2024",
        "exp-job2-type": "Fábrica de Gênios",
        "exp-job2-desc": "Desenvolvimento e manutenção de sistemas back-end com Python/Django e migração de legado para NestJS. Criação de APIs RESTful para integração eficiente de dados.",

        // projects.html
        "proj-title": "Meus Projetos",
        "proj-code-btn": "<span class='material-symbols-outlined text-[18px]'>code</span> Ver Código",
        "proj-date-jan26": "Jan 2026",
        "proj-date-dez25": "Dez 2025",
        "proj-date-ago25": "Ago 2025",
        "proj1-desc": "Réplica da landing page do Disney+.",
        "proj2-title": "Projeto Costs",
        "proj2-desc": "Sistema de gestão de projetos e controlo de custos.",
        "proj3-title": "Projeto Filme Carros",
        "proj3-desc": "Landing page para o filme \"Carros\" da Disney Pixar.",
        "proj4-title": "Projeto World Cup 2026",
        "proj4-desc": "Landing page para um timer da copa de 2026.",
        "proj5-title": "Projeto Loja \"Entendo\"",
        "proj5-desc": "Landing page para uma loja de jogos fictícia.",
        "proj6-title": "Projeto Pizzaria",
        "proj6-desc": "Landing page para uma pizzaria fictícia."
    },
    en: {
        // Sidebar & Menu
        "sidebar-role": "Front-End Engineer",
        "nav-about": "About",
        "nav-experience": "Experience",
        "nav-projects": "Projects",

        // index.html (About)
        "home-greeting": "<span class='text-xl'>👋</span> Hi, I'm Hector",
        "home-about": "Front-End Developer, Bachelor's in Information Systems from UFPI, focused on creating modern, responsive, and user-centric interfaces. I work with JavaScript and TypeScript using Angular and React, and I have Back-End knowledge with NestJS, Prisma, and PostgreSQL, which gives me a complete view of applications.",
        "home-skills-title": "Technical Skills",
        "home-skills-lang": "Programming Languages",
        "home-skills-front": "Front-end Frameworks & Libraries",
        "home-skills-style": "Styling & Responsive Design",
        "home-skills-git": "Versioning & Collaboration",
        "home-skills-api": "API Consumption & Integration",
        "home-skills-auto": "Automation & Build Tools",
        "home-skills-back": "Back-End & Database",
        "home-edu-title": "Education",
        "home-edu-role1": "Front-End Engineer",
        "home-edu-date1": "Dec 2024 - Feb 2026",
        "home-edu-desc1": "Professional Certificate Course",
        "home-edu-school1": "British School of Creative Arts and Technology (EBAC)",
        "home-edu-role2": "Information Systems",
        "home-edu-date2": "Aug 2021 - Dec 2025",
        "home-edu-desc2": "Bachelor's Degree",
        "home-edu-school2": "Federal University of Piauí (UFPI)",
        "home-lang-title": "Languages",
        "home-lang-pt": "Portuguese",
        "home-lang-native": "Native",
        "home-lang-en": "English",
        "home-lang-inter": "Intermediate",
        "home-lang-es": "Spanish",
        "home-lang-tech": "Technical",

        // experience.html
        "exp-title": "Professional Experience",
        "exp-job1-title": "Full Stack Developer",
        "exp-job1-date": "Jan 2025 - Jul 2025",
        "exp-job1-type": "Freelance Professional",
        "exp-job1-desc": "Development and maintenance of high-performance web applications. Advanced PostgreSQL query optimization and resolution of complex technical challenges.",
        "exp-job2-title": "Back-End Intern",
        "exp-job2-date": "Sep 2023 - Apr 2024",
        "exp-job2-type": "Fábrica de Gênios",
        "exp-job2-desc": "Development and maintenance of back-end systems with Python/Django and legacy migration to NestJS. Creation of RESTful APIs for efficient data integration.",

        // projects.html
        "proj-title": "My Projects",
        "proj-code-btn": "<span class='material-symbols-outlined text-[18px]'>code</span> View Code",
        "proj-date-jan26": "Jan 2026",
        "proj-date-dez25": "Dec 2025",
        "proj-date-ago25": "Aug 2025",
        "proj1-desc": "Disney+ landing page replica.",
        "proj2-title": "Costs Project",
        "proj2-desc": "Project management and cost control system.",
        "proj3-title": "Cars Movie Project",
        "proj3-desc": "Landing page for Disney Pixar's \"Cars\" movie.",
        "proj4-title": "World Cup 2026 Project",
        "proj4-desc": "Landing page for a 2026 World Cup timer.",
        "proj5-title": "\"Entendo\" Store Project",
        "proj5-desc": "Landing page for a fictional game store.",
        "proj6-title": "Pizzeria Project",
        "proj6-desc": "Landing page for a fictional pizzeria."
    }
};

function setLanguage(lang) {
    localStorage.setItem('language', lang);
    
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key]; 
        }
    });

    const btnPt = document.getElementById('lang-pt-btn');
    const btnEn = document.getElementById('lang-en-btn');
    
    if (btnPt && btnEn) {
        if (lang === 'pt') {
            btnPt.className = "text-sm font-bold text-primary transition-colors hover:text-text-secondary cursor-pointer";
            btnEn.className = "text-sm font-medium text-text-secondary transition-colors hover:text-primary cursor-pointer";
        } else {
            btnEn.className = "text-sm font-bold text-primary transition-colors hover:text-text-secondary cursor-pointer";
            btnPt.className = "text-sm font-medium text-text-secondary transition-colors hover:text-primary cursor-pointer";
        }
    }
}

function initLanguageToggle() {
    const savedLang = localStorage.getItem('language') || 'pt';
    setLanguage(savedLang);
    document.addEventListener('click', (event) => {
        if (event.target.closest('#lang-pt-btn')) {
            console.log("Mudando para PT...");
            setLanguage('pt');
        }
        
        if (event.target.closest('#lang-en-btn')) {
            console.log("Mudando para EN...");
            setLanguage('en');
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    initLanguageToggle();

    loadComponent("header-placeholder", "./components/header.html", () => {
        initMobileMenu();
        initThemeToggleBtn();

        const currentLang = localStorage.getItem('language') || 'pt';
        setLanguage(currentLang);
    });

    loadComponent("sidebar-placeholder", "./components/sidebar.html", () => {
        highlightActiveLink();
        
        const currentLang = localStorage.getItem('language') || 'pt';
        setLanguage(currentLang);
    });
});