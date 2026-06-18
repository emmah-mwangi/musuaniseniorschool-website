/**
 * Musuani Senior School Website - Main JavaScript
 * Enhanced interactivity and user experience
 */

// ==================== NAVBAR ENHANCEMENT ====================
(function() {
  'use strict';
  
  // Add active class to current page link
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
      link.style.background = '#163d73';
    }
    
    // Add hover effect
    link.addEventListener('mouseenter', function() {
      if (!this.classList.contains('active')) {
        this.style.background = '#163d73';
      }
    });
    link.addEventListener('mouseleave', function() {
      if (!this.classList.contains('active')) {
        this.style.background = 'transparent';
      }
    });
  });
})();

// ==================== SMOOTH SCROLL ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ==================== FAQ ACCORDION ====================
function toggleFAQ(index) {
  const answers = document.querySelectorAll('.faq-answer');
  const icons = document.querySelectorAll('[id^="icon"]');
  
  if (answers.length === 0) return;
  
  answers.forEach((ans, i) => {
    if (i === index) {
      const isOpen = ans.style.display === 'block';
      ans.style.display = isOpen ? 'none' : 'block';
      ans.style.maxHeight = isOpen ? '0' : 'none';
      ans.style.overflow = 'hidden';
      ans.style.transition = 'all 0.3s ease';
      
      if (icons[i]) {
        icons[i].textContent = isOpen ? '+' : '−';
        icons[i].style.transform = isOpen ? 'rotate(0deg)' : 'rotate(180deg)';
        icons[i].style.transition = 'transform 0.3s ease';
      }
    } else {
      ans.style.display = 'none';
      if (icons[i]) icons[i].textContent = '+';
    }
  });
}

// ==================== FORM VALIDATION ====================
function validateContactForm() {
  const fullName = document.querySelector('input[name="fullName"]');
  const subject = document.querySelector('input[name="subject"]');
  const message = document.querySelector('textarea[name="message"]');
  const consent = document.querySelector('input[name="consent"]');
  
  let isValid = true;
  const errors = [];
  
  if (fullName && !fullName.value.trim()) {
    errors.push('Full Name is required');
    isValid = false;
  }
  
  if (subject && !subject.value.trim()) {
    errors.push('Subject is required');
    isValid = false;
  }
  
  if (message && !message.value.trim()) {
    errors.push('Message is required');
    isValid = false;
  }
  
  if (consent && !consent.checked) {
    errors.push('You must consent to data processing');
    isValid = false;
  }
  
  if (!isValid) {
    alert('Please fix the following errors:\n\n' + errors.join('\n'));
  }
  
  return isValid;
}

// ==================== CAROUSEL FUNCTIONALITY ====================
class Carousel {
  constructor(selector, options = {}) {
    this.container = document.querySelector(selector);
    if (!this.container) return;
    
    this.slides = this.container.querySelectorAll('[data-carousel-item]');
    this.currentIndex = 0;
    this.autoPlayInterval = null;
    this.autoPlayDelay = options.delay || 5000;
    this.transition = options.transition || 'fade';
    
    if (this.slides.length > 0) {
      this.init();
    }
  }
  
  init() {
    // Hide all slides except first
    this.slides.forEach((slide, index) => {
      slide.style.display = index === 0 ? 'block' : 'none';
      slide.style.opacity = index === 0 ? '1' : '0';
      slide.style.transition = 'opacity 0.5s ease-in-out';
    });
    
    this.startAutoPlay();
  }
  
  showSlide(index) {
    if (index >= this.slides.length) {
      this.currentIndex = 0;
    } else if (index < 0) {
      this.currentIndex = this.slides.length - 1;
    } else {
      this.currentIndex = index;
    }
    
    this.slides.forEach((slide, i) => {
      if (i === this.currentIndex) {
        slide.style.display = 'block';
        setTimeout(() => {
          slide.style.opacity = '1';
        }, 10);
      } else {
        slide.style.opacity = '0';
        setTimeout(() => {
          slide.style.display = 'none';
        }, 500);
      }
    });
  }
  
  nextSlide() {
    this.showSlide(this.currentIndex + 1);
  }
  
  prevSlide() {
    this.showSlide(this.currentIndex - 1);
  }
  
  startAutoPlay() {
    this.autoPlayInterval = setInterval(() => {
      this.nextSlide();
    }, this.autoPlayDelay);
  }
  
  stopAutoPlay() {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
    }
  }
}

// ==================== SCROLL ANIMATIONS ====================
function observeElements() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  document.querySelectorAll('[data-animate]').forEach(el => {
    observer.observe(el);
  });
}

// ==================== UTILITY FUNCTIONS ====================

// Debounce function for performance
function debounce(func, delay) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, delay);
  };
}

// Format date
function formatDate(date) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(date).toLocaleDateString('en-US', options);
}

// Check if element is in viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// ==================== NOTIFICATION SYSTEM ====================
function showNotification(message, type = 'info', duration = 5000) {
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 15px 20px;
    background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#2196F3'};
    color: white;
    border-radius: 4px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    z-index: 1000;
    animation: slideIn 0.3s ease;
  `;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.animation = 'slideOut 0.3s ease';
    setTimeout(() => notification.remove(), 300);
  }, duration);
}

// ==================== PAGE LOAD INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', function() {
  // Initialize scroll animations
  observeElements();
  
  // Check for form submission success
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('submitted') === '1') {
    showNotification('Your message has been sent successfully!', 'success', 5000);
  }
  
  // Add form validation
  const contactForm = document.querySelector('form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      if (!validateContactForm()) {
        e.preventDefault();
      }
    });
  }
});

// ==================== KEYBOARD ACCESSIBILITY ====================
document.addEventListener('keydown', function(e) {
  // ESC key to close modals (if any)
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal').forEach(modal => {
      modal.style.display = 'none';
    });
  }
  
  // Keyboard navigation for FAQ
  if (e.key === 'Enter' || e.key === ' ') {
    if (e.target.classList.contains('faq-toggle')) {
      e.preventDefault();
      const index = Array.from(document.querySelectorAll('.faq-toggle')).indexOf(e.target);
      toggleFAQ(index);
    }
  }
});

// ==================== WINDOW RESIZE HANDLER ====================
const handleResize = debounce(() => {
  // Re-initialize carousels on resize if needed
  document.querySelectorAll('[data-carousel]').forEach(el => {
    // Any carousel-specific resize logic
  });
}, 250);

window.addEventListener('resize', handleResize);

// ==================== EXPORT FOR TESTING ====================
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    Carousel,
    validateContactForm,
    toggleFAQ,
    showNotification,
    debounce,
    formatDate,
    isInViewport
  };
}
