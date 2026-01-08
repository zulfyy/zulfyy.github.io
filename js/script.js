// Mobile Menu Toggle
function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}

// Typewriter Effect
document.addEventListener('DOMContentLoaded', function() {
    const texts = [
        'Programmer from Banjarmasin 🌴',
        'Game Development Enthusiast 🎮',
        'Tech Explorer 🚀',
        'Continuous Learner 📚',
        'Code | Game | Tech 💻'
    ];
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let currentText = '';
    
    function typeWriter() {
        const element = document.getElementById('typed-text');
        if (!element) return;
        
        if (textIndex === texts.length) {
            textIndex = 0;
        }
        
        currentText = texts[textIndex];
        
        if (isDeleting) {
            element.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            element.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }
        
        let typeSpeed = isDeleting ? 50 : 100;
        
        if (!isDeleting && charIndex === currentText.length) {
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex++;
            typeSpeed = 500;
        }
        
        setTimeout(typeWriter, typeSpeed);
    }
    
    // Start typewriter
    typeWriter();
    
    // Counter Animation - FIXED!
    const counters = document.querySelectorAll('.stat-number');
    const speed = 200;
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                
                // Skip if already animated OR no data-target
                if (counter.classList.contains('animated') || !counter.dataset.target) {
                    return;
                }
                
                counter.classList.add('animated');
                const target = parseInt(counter.dataset.target);
                
                // Validasi target
                if (isNaN(target)) {
                    counter.textContent = '0';
                    return;
                }
                
                const animate = () => {
                    const current = parseInt(counter.innerText) || 0;
                    const increment = target / speed;
                    
                    if (current < target) {
                        counter.innerText = Math.ceil(current + increment);
                        setTimeout(animate, 10);
                    } else {
                        counter.innerText = target;
                    }
                };
                
                animate();
            }
        });
    });
    
    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
    
    // Project Filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const filter = button.dataset.filter;
            
            projectCards.forEach(card => {
                if (filter === 'all' || card.dataset.category === filter) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 100);
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
    
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Form handling - FIXED!
    window.submitForm = function(event) {
        event.preventDefault();
        
        const form = event.target;
        const submitBtn = form.querySelector('.btn');
        const btnText = submitBtn.querySelector('.btn-text');
        const btnLoading = submitBtn.querySelector('.btn-loading');
        
        // Show loading state
        submitBtn.classList.add('loading');
        
        // Simulate form submission
        setTimeout(() => {
            alert('Message sent successfully! I\'ll get back to you soon.');
            form.reset();
            submitBtn.classList.remove('loading');
        }, 2000);
    };
    
    window.subscribeNewsletter = function(event) {
        event.preventDefault();
        const email = event.target.querySelector('input[type="email"]').value;
        alert(`Thank you for subscribing with email: ${email}`);
        event.target.reset();
    };
    
    // Blog card clicks
    document.querySelectorAll('.blog-card').forEach(card => {
        card.addEventListener('click', function() {
            const title = this.querySelector('h3').textContent;
            alert(`Opening blog post: "${title}"\n\nThis would navigate to the full blog post page.`);
        });
    });
    
    console.log('🚀 Muhammad Zulfy Portfolio - Fixed & Ready!');
});