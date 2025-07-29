// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.querySelector('.navbar-start .dropdown');
    const mobileMenu = document.querySelector('.navbar-start .dropdown-content');
    
    mobileMenuButton.addEventListener('click', function() {
        const isExpanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', !isExpanded);
        mobileMenu.classList.toggle('hidden');
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// News carousel (example functionality)
let currentNewsIndex = 0;
const newsItems = document.querySelectorAll('.news-item');
const totalNews = newsItems.length;

function showNews(index) {
    newsItems.forEach((item, i) => {
        item.classList.toggle('hidden', i !== index);
    });
}

function nextNews() {
    currentNewsIndex = (currentNewsIndex + 1) % totalNews;
    showNews(currentNewsIndex);
}

function prevNews() {
    currentNewsIndex = (currentNewsIndex - 1 + totalNews) % totalNews;
    showNews(currentNewsIndex);
}

// Initialize first news item
if (newsItems.length > 0) {
    showNews(0);
    
    // Auto-rotate news every 5 seconds
    setInterval(nextNews, 5000);
}

// Form validation example
const forms = document.querySelectorAll('form');
forms.forEach(form => {
    form.addEventListener('submit', function(e) {
        const requiredFields = this.querySelectorAll('[required]');
        let isValid = true;
        
        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                isValid = false;
                field.classList.add('input-error');
            } else {
                field.classList.remove('input-error');
            }
        });
        
        if (!isValid) {
            e.preventDefault();
            alert('Please fill in all required fields.');
        }
    });
});

// Dark mode toggle (example)
const darkModeToggle = document.getElementById('darkModeToggle');
if (darkModeToggle) {
    darkModeToggle.addEventListener('change', function() {
        document.documentElement.classList.toggle('dark', this.checked);
        localStorage.setItem('darkMode', this.checked);
    });
    
    // Check for saved preference
    if (localStorage.getItem('darkMode') === 'true') {
        document.documentElement.classList.add('dark');
        darkModeToggle.checked = true;
    }
}