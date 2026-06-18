/**
 * Form Validation and Enhancement
 * Musuani Senior School Website
 */

(function() {
  'use strict';

  const FormValidator = {
    rules: {
      fullName: {
        required: true,
        minLength: 2,
        pattern: /^[a-zA-Z\s'-]+$/,
        message: 'Please enter a valid name (letters only)'
      },
      email: {
        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: 'Please enter a valid email address'
      },
      subject: {
        required: true,
        minLength: 5,
        message: 'Subject must be at least 5 characters'
      },
      message: {
        required: true,
        minLength: 10,
        message: 'Message must be at least 10 characters'
      },
      attachment: {
        maxSize: 10 * 1024 * 1024, // 10MB
        allowedTypes: ['application/pdf', 'application/msword', 'image/jpeg', 'image/png'],
        message: 'File must be PDF, DOC, JPG, or PNG (max 10MB)'
      }
    },

    validateField(fieldName, value, files = null) {
      const rule = this.rules[fieldName];
      if (!rule) return { valid: true };

      // Check required
      if (rule.required && (!value || value.trim() === '')) {
        return {
          valid: false,
          error: `${this.capitalize(fieldName)} is required`
        };
      }

      // Check min length
      if (rule.minLength && value.length < rule.minLength) {
        return {
          valid: false,
          error: `${this.capitalize(fieldName)} must be at least ${rule.minLength} characters`
        };
      }

      // Check pattern
      if (rule.pattern && !rule.pattern.test(value)) {
        return {
          valid: false,
          error: rule.message
        };
      }

      // Check file
      if (fieldName === 'attachment' && files && files.length > 0) {
        const file = files[0];
        if (file.size > rule.maxSize) {
          return {
            valid: false,
            error: 'File size exceeds 10MB limit'
          };
        }
        if (!rule.allowedTypes.includes(file.type)) {
          return {
            valid: false,
            error: rule.message
          };
        }
      }

      return { valid: true };
    },

    validateForm(form) {
      const errors = {};
      const formData = new FormData(form);

      for (let [key, value] of formData.entries()) {
        if (key === 'attachment') {
          const files = form.querySelector(`input[name="${key}"]`).files;
          const result = this.validateField(key, '', files);
          if (!result.valid) {
            errors[key] = result.error;
          }
        } else {
          const result = this.validateField(key, value);
          if (!result.valid) {
            errors[key] = result.error;
          }
        }
      }

      return {
        valid: Object.keys(errors).length === 0,
        errors: errors
      };
    },

    capitalize(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    },

    displayErrors(form, errors) {
      // Clear previous errors
      form.querySelectorAll('.error-message').forEach(el => el.remove());
      form.querySelectorAll('.is-invalid').forEach(el => el.classList.remove('is-invalid'));

      // Display new errors
      Object.entries(errors).forEach(([fieldName, error]) => {
        const field = form.querySelector(`[name="${fieldName}"]`);
        if (field) {
          field.classList.add('is-invalid');
          field.style.borderColor = '#f44336';
          field.style.borderWidth = '2px';

          const errorEl = document.createElement('div');
          errorEl.className = 'error-message';
          errorEl.textContent = error;
          errorEl.style.cssText = `
            color: #f44336;
            font-size: 12px;
            margin-top: 4px;
            padding: 4px 8px;
          `;
          field.parentNode.insertBefore(errorEl, field.nextSibling);
        }
      });
    },

    addRealTimeValidation(form) {
      form.querySelectorAll('input, textarea').forEach(field => {
        field.addEventListener('blur', () => {
          const result = this.validateField(
            field.name,
            field.value,
            field.type === 'file' ? field.files : null
          );

          if (!result.valid) {
            field.classList.add('is-invalid');
            field.style.borderColor = '#f44336';

            let errorEl = field.nextElementSibling;
            if (!errorEl || !errorEl.classList.contains('error-message')) {
              errorEl = document.createElement('div');
              errorEl.className = 'error-message';
              errorEl.style.cssText = `
                color: #f44336;
                font-size: 12px;
                margin-top: 4px;
              `;
              field.parentNode.insertBefore(errorEl, field.nextSibling);
            }
            errorEl.textContent = result.error;
          } else {
            field.classList.remove('is-invalid');
            field.style.borderColor = '';
            const errorEl = field.nextElementSibling;
            if (errorEl && errorEl.classList.contains('error-message')) {
              errorEl.remove();
            }
          }
        });
      });
    }
  };

  // Initialize on DOM ready
  document.addEventListener('DOMContentLoaded', function() {
    const contactForms = document.querySelectorAll('form');
    
    contactForms.forEach(form => {
      // Add real-time validation
      FormValidator.addRealTimeValidation(form);

      // Add form submit validation
      form.addEventListener('submit', function(e) {
        const validation = FormValidator.validateForm(this);

        if (!validation.valid) {
          e.preventDefault();
          FormValidator.displayErrors(this, validation.errors);
        }
      });
    });
  });

  // Expose for testing
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = FormValidator;
  }
  window.FormValidator = FormValidator;
})();
