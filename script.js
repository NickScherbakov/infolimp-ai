function initCountdown() {
    const examDate = new Date('June 1, 2026 10:00:00').getTime();
    const counterElement = document.querySelector('.counter');

    if (!counterElement) {
        return;
    }
    
    const timer = setInterval(() => {
        const now = new Date().getTime();
        const distance = examDate - now;
        const hours = Math.floor(distance / (1000 * 60 * 60));
        
        counterElement.innerHTML = hours.toLocaleString();
        
        if (distance < 0) {
            clearInterval(timer);
            counterElement.innerHTML = '<a href="couple.mp4" target="_blank" rel="noopener noreferrer">Наши выпускники</a>';
        }
    }, 1000);
}

function toggleTheme(isDark) {
    const body = document.body;
    const sunIcon = document.querySelector('.sun');
    const moonIcon = document.querySelector('.moon');
    
    body.classList.toggle('dark-theme', isDark);
    sunIcon.style.opacity = isDark ? '0' : '1';
    moonIcon.style.opacity = isDark ? '1' : '0';
}
document.addEventListener('DOMContentLoaded', () => {
    const themeSwitch = document.getElementById('theme-switch');
    if (themeSwitch) {
        themeSwitch.checked = false;
        toggleTheme(false);
        themeSwitch.addEventListener('change', (e) => {
            toggleTheme(e.target.checked);
        });
    }

    initCountdown();
    loadFipiNews();
    const navButtons = document.querySelectorAll('.nav-btn');

    if (navButtons[0]) {
        navButtons[0].addEventListener('click', () => {
            window.open('https://chat.infolimp.keenetic.pro', '_blank');
        });
    }

    if (navButtons[1]) {
        navButtons[1].addEventListener('click', () => {
            window.open('https://t.me/infolimp_bot', '_blank');
        });
    }

    if (navButtons[2]) {
        navButtons[2].addEventListener('click', () => {
            window.open('https://nickscherbakov.github.io/very-simple-tetris-created-by-Copilot/', '_blank');
        });
    }

    navButtons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.classList.add('hovered');
        });

        button.addEventListener('mouseleave', () => {
            button.classList.remove('hovered');
        });
    });
});
function loadFipiNews() {
    const newsContainer = document.querySelector('.news-feed');
    if (!newsContainer) {
        return;
    }

    const newsItems = [
        {
            date: '12.12.2024',
            title: 'Онлайн-консультации по информатике для подготовки к ЕГЭ-2025',
            link: 'https://www.youtube.com/watch?v=P9RDcMKU2dI'
        },
        {
            date: '16.10.2024',
            title: 'Онлайн-консультации по подготовке к ЕГЭ-2025',
            link: 'https://fipi.ru/ege/videokonsultatsii-razrabotchikov-kim-yege'
        },
        {
            date: '05.09.2024',
            title: 'Методические рекомендации для учителей на основе анализа результатов ЕГЭ 2024 года',
            link: 'https://fipi.ru/ege/analiticheskie-i-metodicheskie-materialy'
        },
        {
            date: '23.08.2024',
            title: 'Проекты КИМ ЕГЭ 2025 года',
            link: 'https://fipi.ru/ege/demoversii-specifikacii-kodifikatory'
        }
    ];

    newsItems.forEach(news => {
        const newsElement = document.createElement('div');
        newsElement.classList.add('news-item');
        newsElement.innerHTML = `
            <span class="news-date">${news.date}</span>
            <a href="${news.link}" target="_blank" rel="noopener noreferrer" class="news-link">${news.title}</a>
        `;
        newsContainer.appendChild(newsElement);
    });
}

// CSS styles moved to a separate stylesheet for better maintainability
