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

document.addEventListener("DOMContentLoaded", () => {
    loadComponent("header-placeholder", "./components/header.html", () => {
        initMobileMenu();
        initThemeToggleBtn();
    });

    loadComponent("sidebar-placeholder", "./components/sidebar.html", () => {
        highlightActiveLink();
    });
});