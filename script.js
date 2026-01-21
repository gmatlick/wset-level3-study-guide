// Navigation toggle for mobile
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking a link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });

    // Smooth scrolling for anchor links
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
});

// Progress tracking
function initProgressTracking() {
    const sections = [
        'viticulture',
        'winemaking',
        'france',
        'italy',
        'spain',
        'germany',
        'newworld',
        'sparkling',
        'fortified',
        'tasting',
        'service'
    ];

    // Load progress from localStorage
    sections.forEach(section => {
        const checkbox = document.getElementById(`progress-${section}`);
        if (checkbox) {
            const isCompleted = localStorage.getItem(`wset-${section}`) === 'true';
            checkbox.checked = isCompleted;
            
            checkbox.addEventListener('change', function() {
                localStorage.setItem(`wset-${section}`, this.checked);
                updateOverallProgress();
            });
        }
    });

    updateOverallProgress();
}

function updateOverallProgress() {
    const checkboxes = document.querySelectorAll('[id^="progress-"]');
    const completed = Array.from(checkboxes).filter(cb => cb.checked).length;
    const total = checkboxes.length;
    const percentage = Math.round((completed / total) * 100);

    const progressBar = document.getElementById('overall-progress');
    const progressText = document.getElementById('progress-text');

    if (progressBar && progressText) {
        progressBar.style.width = `${percentage}%`;
        progressText.textContent = `${percentage}% Complete (${completed}/${total} sections)`;
    }
}

// Flashcard functionality
function initFlashcards() {
    const cards = document.querySelectorAll('.flashcard');
    
    cards.forEach(card => {
        card.addEventListener('click', function() {
            this.classList.toggle('flipped');
        });
    });
}

// Quiz functionality
function initQuiz() {
    const quizForms = document.querySelectorAll('.quiz-form');
    
    quizForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            checkQuizAnswers(this);
        });
    });
}

function checkQuizAnswers(form) {
    const questions = form.querySelectorAll('.quiz-question');
    let correct = 0;
    let total = questions.length;

    questions.forEach(question => {
        const selectedAnswer = question.querySelector('input[type="radio"]:checked');
        const correctAnswer = question.dataset.correct;
        const feedback = question.querySelector('.quiz-feedback');

        if (selectedAnswer) {
            if (selectedAnswer.value === correctAnswer) {
                correct++;
                feedback.textContent = '✓ Correct!';
                feedback.className = 'quiz-feedback correct';
            } else {
                feedback.textContent = `✗ Incorrect. The correct answer is: ${correctAnswer}`;
                feedback.className = 'quiz-feedback incorrect';
            }
            feedback.style.display = 'block';
        }
    });

    const result = form.querySelector('.quiz-result');
    if (result) {
        const percentage = Math.round((correct / total) * 100);
        result.textContent = `Score: ${correct}/${total} (${percentage}%)`;
        result.style.display = 'block';
        
        if (percentage >= 80) {
            result.style.color = 'var(--success)';
        } else if (percentage >= 55) {
            result.style.color = 'var(--warning)';
        } else {
            result.style.color = 'var(--danger)';
        }
    }
}

// Study timer
let studySeconds = 0;
let studyInterval = null;

function startStudyTimer() {
    if (!studyInterval) {
        studyInterval = setInterval(() => {
            studySeconds++;
            updateStudyTimerDisplay();
            localStorage.setItem('wset-study-time', studySeconds);
        }, 1000);
    }
}

function stopStudyTimer() {
    if (studyInterval) {
        clearInterval(studyInterval);
        studyInterval = null;
    }
}

function updateStudyTimerDisplay() {
    const hours = Math.floor(studySeconds / 3600);
    const minutes = Math.floor((studySeconds % 3600) / 60);
    const seconds = studySeconds % 60;

    const display = document.getElementById('study-timer');
    if (display) {
        display.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    }
}

function pad(num) {
    return num.toString().padStart(2, '0');
}

// Load saved study time
function loadStudyTime() {
    const saved = localStorage.getItem('wset-study-time');
    if (saved) {
        studySeconds = parseInt(saved);
        updateStudyTimerDisplay();
    }
}

// Search functionality
function initSearch() {
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');

    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const query = e.target.value.toLowerCase();
            
            if (query.length < 2) {
                searchResults.style.display = 'none';
                return;
            }

            // In a real implementation, this would search through content
            // For now, we'll show a placeholder
            searchResults.innerHTML = `<p>Searching for: ${query}</p>`;
            searchResults.style.display = 'block';
        });
    }
}

// Initialize all features when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initProgressTracking();
    initFlashcards();
    initQuiz();
    loadStudyTime();
    initSearch();
});

// Export functions for use in other scripts
window.wsetStudy = {
    startTimer: startStudyTimer,
    stopTimer: stopStudyTimer,
    updateProgress: updateOverallProgress
};
