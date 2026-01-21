// ========================
// Navigation
// ========================
document.addEventListener('DOMContentLoaded', function() {
    const nav = document.getElementById('mainNav');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const dropdowns = document.querySelectorAll('.nav-dropdown');
    
    // Scroll effect for navigation
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });
    
    // Mobile menu toggle
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }
    
    // Mobile dropdown toggle
    dropdowns.forEach(dropdown => {
        const link = dropdown.querySelector('.nav-link');
        link.addEventListener('click', (e) => {
            if (window.innerWidth <= 968) {
                e.preventDefault();
                dropdown.classList.toggle('active');
            }
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!nav.contains(e.target) && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
        }
    });
});

// ========================
// Smooth Scroll for Anchor Links
// ========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = document.getElementById('mainNav').offsetHeight;
            const targetPosition = target.offsetTop - navHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ========================
// Intersection Observer for Animations
// ========================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.quick-card, .outcome-card, .tip-card, .timeline-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ========================
// Progress Tracking
// ========================
const progressTracking = {
    init() {
        this.loadProgress();
        this.bindCheckboxes();
        this.updateDisplay();
    },
    
    loadProgress() {
        const sections = ['viticulture', 'france', 'italy', 'spain', 'germany', 
                         'newworld', 'sparkling', 'fortified', 'tasting', 'service'];
        
        sections.forEach(section => {
            const completed = localStorage.getItem(`wset3-${section}`) === 'true';
            const checkbox = document.getElementById(`progress-${section}`);
            if (checkbox) {
                checkbox.checked = completed;
            }
        });
    },
    
    bindCheckboxes() {
        const checkboxes = document.querySelectorAll('[id^="progress-"]');
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', (e) => {
                const section = e.target.id.replace('progress-', '');
                localStorage.setItem(`wset3-${section}`, e.target.checked);
                this.updateDisplay();
            });
        });
    },
    
    updateDisplay() {
        const checkboxes = document.querySelectorAll('[id^="progress-"]');
        const completed = Array.from(checkboxes).filter(cb => cb.checked).length;
        const total = checkboxes.length;
        const percentage = Math.round((completed / total) * 100);
        
        const progressBar = document.getElementById('progress-bar');
        const progressText = document.getElementById('progress-text');
        
        if (progressBar) {
            progressBar.style.width = `${percentage}%`;
        }
        
        if (progressText) {
            progressText.textContent = `${completed}/${total} sections complete (${percentage}%)`;
        }
    }
};

// ========================
// Flashcard System
// ========================
const flashcards = {
    init() {
        const cards = document.querySelectorAll('.flashcard');
        cards.forEach(card => {
            card.addEventListener('click', function() {
                this.classList.toggle('flipped');
            });
        });
    },
    
    shuffle() {
        const container = document.querySelector('.flashcard-container');
        if (container) {
            const cards = Array.from(container.children);
            cards.sort(() => Math.random() - 0.5);
            cards.forEach(card => container.appendChild(card));
        }
    }
};

// ========================
// Quiz Functionality
// ========================
const quiz = {
    init() {
        const quizForms = document.querySelectorAll('.quiz-form');
        quizForms.forEach(form => {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                this.checkAnswers(form);
            });
        });
    },
    
    checkAnswers(form) {
        const questions = form.querySelectorAll('.quiz-question');
        let correct = 0;
        let answered = 0;
        const total = questions.length;
        
        questions.forEach(question => {
            const selected = question.querySelector('input[type="radio"]:checked');
            const correctAnswer = question.dataset.correct;
            const feedback = question.querySelector('.quiz-feedback');
            
            if (selected) {
                answered++;
                if (selected.value === correctAnswer) {
                    correct++;
                    feedback.textContent = '✓ Correct';
                    feedback.className = 'quiz-feedback correct';
                } else {
                    const correctText = question.querySelector(`input[value="${correctAnswer}"]`)
                        .closest('label').textContent.trim();
                    feedback.textContent = `✗ Incorrect. The answer is: ${correctText}`;
                    feedback.className = 'quiz-feedback incorrect';
                }
                feedback.style.display = 'block';
            }
        });
        
        const result = form.querySelector('.quiz-result');
        if (result && answered === total) {
            const percentage = Math.round((correct / total) * 100);
            result.innerHTML = `
                <strong>Score: ${correct}/${total} (${percentage}%)</strong>
                ${this.getGradeMessage(percentage)}
            `;
            result.style.display = 'block';
            result.className = 'quiz-result ' + this.getGradeClass(percentage);
        }
    },
    
    getGradeMessage(percentage) {
        if (percentage >= 80) return '<br>Distinction level! Excellent work!';
        if (percentage >= 65) return '<br>Merit level. Very good!';
        if (percentage >= 55) return '<br>Pass level. Keep studying!';
        return '<br>Keep practicing. Review the material.';
    },
    
    getGradeClass(percentage) {
        if (percentage >= 80) return 'distinction';
        if (percentage >= 65) return 'merit';
        if (percentage >= 55) return 'pass';
        return 'fail';
    }
};

// ========================
// Study Timer
// ========================
const studyTimer = {
    seconds: 0,
    interval: null,
    
    init() {
        this.loadTime();
        this.updateDisplay();
        
        const startBtn = document.getElementById('timer-start');
        const stopBtn = document.getElementById('timer-stop');
        const resetBtn = document.getElementById('timer-reset');
        
        if (startBtn) startBtn.addEventListener('click', () => this.start());
        if (stopBtn) stopBtn.addEventListener('click', () => this.stop());
        if (resetBtn) resetBtn.addEventListener('click', () => this.reset());
    },
    
    start() {
        if (!this.interval) {
            this.interval = setInterval(() => {
                this.seconds++;
                this.updateDisplay();
                this.saveTime();
            }, 1000);
        }
    },
    
    stop() {
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
        }
    },
    
    reset() {
        this.stop();
        this.seconds = 0;
        this.updateDisplay();
        this.saveTime();
    },
    
    loadTime() {
        const saved = localStorage.getItem('wset3-study-time');
        if (saved) {
            this.seconds = parseInt(saved);
        }
    },
    
    saveTime() {
        localStorage.setItem('wset3-study-time', this.seconds);
    },
    
    updateDisplay() {
        const hours = Math.floor(this.seconds / 3600);
        const minutes = Math.floor((this.seconds % 3600) / 60);
        const secs = this.seconds % 60;
        
        const display = document.getElementById('study-timer');
        if (display) {
            display.textContent = `${this.pad(hours)}:${this.pad(minutes)}:${this.pad(secs)}`;
        }
    },
    
    pad(num) {
        return num.toString().padStart(2, '0');
    }
};

// ========================
// Search Functionality
// ========================
const search = {
    init() {
        const searchInput = document.getElementById('search-input');
        const searchResults = document.getElementById('search-results');
        
        if (searchInput) {
            let debounceTimer;
            searchInput.addEventListener('input', (e) => {
                clearTimeout(debounceTimer);
                debounceTimer = setTimeout(() => {
                    this.performSearch(e.target.value, searchResults);
                }, 300);
            });
        }
    },
    
    performSearch(query, resultsContainer) {
        if (!resultsContainer) return;
        
        if (query.length < 2) {
            resultsContainer.style.display = 'none';
            return;
        }
        
        // This would be replaced with actual search functionality
        resultsContainer.innerHTML = `<p>Searching for "${query}"...</p>`;
        resultsContainer.style.display = 'block';
    }
};

// ========================
// Initialize Everything
// ========================
document.addEventListener('DOMContentLoaded', () => {
    progressTracking.init();
    flashcards.init();
    quiz.init();
    studyTimer.init();
    search.init();
});

// ========================
// Export for use in other scripts
// ========================
window.wsetStudy = {
    progressTracking,
    flashcards,
    quiz,
    studyTimer,
    search
};
