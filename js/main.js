/* ===================================
   BRASSERIE ARTEMUS - MAIN JAVASCRIPT
   =================================== */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initNavigation();
    initScrollEffects();
    initCookieConsent();
    initScrollToTop();
    initAnimations();
    initForms();
    initGallery();
});

/* ===================================
   NAVIGATION
   =================================== */
function initNavigation() {
    const navbar = document.querySelector('.navbar');
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Scroll effect for navbar
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
            navbar.classList.remove('navbar-transparent');
        } else {
            navbar.classList.remove('navbar-scrolled');
            navbar.classList.add('navbar-transparent');
        }
    });
    
    // Close mobile menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth < 992) {
                navbarCollapse.classList.remove('show');
            }
        });
    });
    
    // Active page indicator
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === 'index.html' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
}

/* ===================================
   SCROLL EFFECTS
   =================================== */
function initScrollEffects() {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/* ===================================
   COOKIE CONSENT
   =================================== */
function initCookieConsent() {
    const cookieConsent = document.querySelector('.cookie-consent');
    const acceptBtn = document.querySelector('.cookie-accept');
    const declineBtn = document.querySelector('.cookie-decline');
    
    // Check if user has already made a choice
    const cookieChoice = localStorage.getItem('cookieConsent');
    
    if (!cookieChoice) {
        setTimeout(() => {
            cookieConsent.classList.add('show');
        }, 1000);
    }
    
    if (acceptBtn) {
        acceptBtn.addEventListener('click', function() {
            localStorage.setItem('cookieConsent', 'accepted');
            cookieConsent.classList.remove('show');
        });
    }
    
    if (declineBtn) {
        declineBtn.addEventListener('click', function() {
            localStorage.setItem('cookieConsent', 'declined');
            cookieConsent.classList.remove('show');
        });
    }
}

/* ===================================
   SCROLL TO TOP
   =================================== */
function initScrollToTop() {
    const scrollToTopBtn = document.querySelector('.scroll-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
    });
    
    if (scrollToTopBtn) {
        scrollToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

/* ===================================
   ANIMATIONS
   =================================== */
function initAnimations() {
    // Animate elements on scroll
    const animatedElements = document.querySelectorAll('[data-aos]');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    animatedElements.forEach(element => {
        observer.observe(element);
    });
    
    // Counter animation
    const counters = document.querySelectorAll('.stat-number');
    
    const counterObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-target'));
                const duration = 2000;
                const step = target / (duration / 16);
                let current = 0;
                
                const updateCounter = () => {
                    current += step;
                    if (current < target) {
                        counter.textContent = Math.floor(current);
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target;
                    }
                };
                
                updateCounter();
                counterObserver.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
}

/* ===================================
   FORMS
   =================================== */
function initForms() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic validation
            const inputs = form.querySelectorAll('input[required], textarea[required]');
            let isValid = true;
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.classList.add('is-invalid');
                } else {
                    input.classList.remove('is-invalid');
                }
            });
            
            if (isValid) {
                // Show success message
                const successMessage = document.createElement('div');
                successMessage.className = 'alert alert-success mt-3';
                successMessage.textContent = 'Merci ! Votre message a été envoyé avec succès.';
                form.appendChild(successMessage);
                
                // Reset form
                form.reset();
                
                // Remove success message after 5 seconds
                setTimeout(() => {
                    successMessage.remove();
                }, 5000);
            }
        });
        
        // Remove invalid class on input
        const inputs = form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('input', function() {
                this.classList.remove('is-invalid');
            });
        });
    });
}

/* ===================================
   GALLERY
   =================================== */
function initGallery() {
    // Lightbox functionality
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const imgSrc = this.querySelector('img').src;
            const imgAlt = this.querySelector('img').alt;
            
            // Create lightbox
            const lightbox = document.createElement('div');
            lightbox.className = 'lightbox';
            lightbox.innerHTML = `
                <div class="lightbox-content">
                    <button class="lightbox-close">&times;</button>
                    <img src="${imgSrc}" alt="${imgAlt}">
                </div>
            `;
            
            document.body.appendChild(lightbox);
            document.body.style.overflow = 'hidden';
            
            // Close lightbox
            const closeBtn = lightbox.querySelector('.lightbox-close');
            closeBtn.addEventListener('click', closeLightbox);
            lightbox.addEventListener('click', function(e) {
                if (e.target === lightbox) {
                    closeLightbox();
                }
            });
            
            function closeLightbox() {
                lightbox.remove();
                document.body.style.overflow = '';
            }
            
            // Close on escape key
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape') {
                    closeLightbox();
                }
            });
        });
    });
}

/* ===================================
   LOADING ANIMATION
   =================================== */
window.addEventListener('load', function() {
    const loadingOverlay = document.querySelector('.loading-overlay');
    if (loadingOverlay) {
        setTimeout(() => {
            loadingOverlay.classList.add('hidden');
            setTimeout(() => {
                loadingOverlay.remove();
            }, 500);
        }, 500);
    }
});

/* ===================================
   PARALLAX EFFECT
   =================================== */
function initParallax() {
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    
    window.addEventListener('scroll', function() {
        const scrollY = window.scrollY;
        
        parallaxElements.forEach(element => {
            const speed = element.getAttribute('data-parallax-speed') || 0.5;
            const yPos = -(scrollY * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });
}

/* ===================================
   BEER FILTER
   =================================== */
function initBeerFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const beerCards = document.querySelectorAll('.beer-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter cards
            beerCards.forEach(card => {
                const style = card.getAttribute('data-style');
                
                if (filter === 'all' || style === filter) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 10);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

/* ===================================
   HERO ANIMATION
   =================================== */
function initHeroAnimation() {
    const heroContent = document.querySelector('.hero-content');
    
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            heroContent.style.transition = 'opacity 1s ease, transform 1s ease';
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 300);
    }
}
