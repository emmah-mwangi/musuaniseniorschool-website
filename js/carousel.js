/**
 * Advanced Carousel System for Musuani Senior School Website
 * Supports multiple independent carousels with auto-play and controls
 */

(function() {
  'use strict';

  class AdvancedCarousel {
    constructor(containerSelector, options = {}) {
      this.container = document.querySelector(containerSelector);
      if (!this.container) {
        console.warn(`Carousel container not found: ${containerSelector}`);
        return;
      }

      this.slides = Array.from(this.container.querySelectorAll('[data-slide]'));
      if (this.slides.length === 0) {
        // Fallback for older structure
        this.slides = Array.from(this.container.querySelectorAll('img'));
      }

      this.currentIndex = 0;
      this.autoPlayEnabled = options.autoPlay !== false;
      this.autoPlayInterval = options.interval || 8000;
      this.transitionSpeed = options.transitionSpeed || 500;
      this.onSlideChange = options.onSlideChange || null;

      if (this.slides.length > 0) {
        this.initialize();
      }
    }

    initialize() {
      // Set up styles
      this.slides.forEach((slide, index) => {
        slide.style.position = 'absolute';
        slide.style.top = '0';
        slide.style.left = '0';
        slide.style.width = '100%';
        slide.style.height = '100%';
        slide.style.opacity = index === 0 ? '1' : '0';
        slide.style.transition = `opacity ${this.transitionSpeed}ms ease-in-out`;
        slide.style.display = 'block';
      });

      this.container.style.position = 'relative';

      if (this.autoPlayEnabled) {
        this.startAutoPlay();
      }

      // Pause on hover
      this.container.addEventListener('mouseenter', () => this.pause());
      this.container.addEventListener('mouseleave', () => this.play());
    }

    goToSlide(index) {
      if (index >= this.slides.length) {
        this.currentIndex = 0;
      } else if (index < 0) {
        this.currentIndex = this.slides.length - 1;
      } else {
        this.currentIndex = index;
      }

      this.updateSlides();

      if (this.onSlideChange) {
        this.onSlideChange(this.currentIndex);
      }
    }

    updateSlides() {
      this.slides.forEach((slide, index) => {
        slide.style.opacity = index === this.currentIndex ? '1' : '0';
        slide.style.zIndex = index === this.currentIndex ? '10' : '0';
      });
    }

    nextSlide() {
      this.goToSlide(this.currentIndex + 1);
    }

    prevSlide() {
      this.goToSlide(this.currentIndex - 1);
    }

    startAutoPlay() {
      if (this.slides.length <= 1) return;

      this.autoPlayTimer = setInterval(() => {
        this.nextSlide();
      }, this.autoPlayInterval);
    }

    pause() {
      if (this.autoPlayTimer) {
        clearInterval(this.autoPlayTimer);
      }
    }

    play() {
      if (this.autoPlayEnabled) {
        this.startAutoPlay();
      }
    }

    destroy() {
      this.pause();
      this.slides = [];
    }
  }

  // Global carousel manager
  window.CarouselManager = {
    carousels: {},

    init(selector, options = {}) {
      const carousel = new AdvancedCarousel(selector, options);
      if (carousel.slides.length > 0) {
        this.carousels[selector] = carousel;
      }
      return carousel;
    },

    getCarousel(selector) {
      return this.carousels[selector];
    },

    destroyAll() {
      Object.values(this.carousels).forEach(carousel => carousel.destroy());
      this.carousels = {};
    }
  };

  // Initialize on DOM ready
  document.addEventListener('DOMContentLoaded', function() {
    // Auto-initialize carousels with data-carousel attribute
    document.querySelectorAll('[data-carousel]').forEach(element => {
      const selector = `[data-carousel="${element.dataset.carousel}"]`;
      const options = {
        interval: parseInt(element.dataset.interval) || 8000,
        autoPlay: element.dataset.autoPlay !== 'false'
      };
      window.CarouselManager.init(selector, options);
    });
  });

  // Expose for testing
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { AdvancedCarousel, CarouselManager: window.CarouselManager };
  }
})();
