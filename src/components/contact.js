/**
 * Contact Form Component (Tailwind Optimized)
 * Performs clean business-field checks, toggles submission loaders, and dynamically injects toast notification nodes.
 */

export function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  // Create or select the global Toast container in DOM
  let toastContainer = document.querySelector('.toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.className = 'toast-container fixed bottom-6 right-6 z-[2000] flex flex-col gap-3';
    document.body.appendChild(toastContainer);
  }

  // Helper: Show Custom Premium Dynamic Toast
  const showToast = (message, type = 'success') => {
    const toast = document.createElement('div');
    toast.className = `toast-slide-in flex items-center gap-3 bg-brand-navy text-white px-6 py-4 rounded-premium-md shadow-premium-lg text-sm font-semibold border-l-4 ${
      type === 'success' ? 'border-brand-blue' : 'border-brand-orange'
    }`;
    
    // Inline SVG Icon assets
    const icon = type === 'success' 
      ? `<svg class="w-5 h-5 text-brand-blue flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`
      : `<svg class="w-5 h-5 text-brand-orange flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>`;

    toast.innerHTML = `${icon} <span>${message}</span>`;
    toastContainer.appendChild(toast);

    // Automatically fade out and remove after 4 seconds
    setTimeout(() => {
      toast.classList.add('opacity-0', 'translate-y-2', 'transition-all', 'duration-300');
      toast.addEventListener('transitionend', () => {
        toast.remove();
      });
    }, 4000);
  };

  // Helper: Validate email format
  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  // Helper: Remove previous validation errors
  const clearError = (input) => {
    input.classList.remove('border-red-500', 'bg-red-50/20');
    const parent = input.parentElement;
    const existingError = parent.querySelector('.form-error-msg');
    if (existingError) {
      existingError.remove();
    }
  };

  // Helper: Inject validation error message
  const showError = (input, message) => {
    clearError(input);
    input.classList.add('border-red-500', 'bg-red-50/20');
    
    const errorMsg = document.createElement('span');
    errorMsg.className = 'form-error-msg block text-xs text-red-600 mt-1 font-medium';
    errorMsg.textContent = message;
    input.parentElement.appendChild(errorMsg);
  };

  // Attach real-time clear-on-input listeners
  const inputs = form.querySelectorAll('.form-input');
  inputs.forEach(input => {
    input.addEventListener('input', () => {
      if (input.classList.contains('border-red-500')) {
        clearError(input);
      }
    });
    if (input.tagName === 'SELECT') {
      input.addEventListener('change', () => {
        if (input.classList.contains('border-red-500')) {
          clearError(input);
        }
      });
    }
  });

  // Handle Form Submission Event
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('form-name');
    const emailInput = document.getElementById('form-email');
    const subjectInput = document.getElementById('form-subject');
    const messageInput = document.getElementById('form-message');
    const submitBtn = form.querySelector('button[type="submit"]');

    let hasErrors = false;

    // Validate Name
    if (!nameInput.value.trim()) {
      showError(nameInput, 'Full Name is required');
      hasErrors = true;
    } else {
      clearError(nameInput);
    }

    // Validate Email
    if (!emailInput.value.trim()) {
      showError(emailInput, 'Email Address is required');
      hasErrors = true;
    } else if (!validateEmail(emailInput.value.trim())) {
      showError(emailInput, 'Please enter a valid business email');
      hasErrors = true;
    } else {
      clearError(emailInput);
    }

    // Validate Subject
    if (!subjectInput.value.trim()) {
      showError(subjectInput, 'Please select or enter a subject');
      hasErrors = true;
    } else {
      clearError(subjectInput);
    }

    // Validate Message
    if (!messageInput.value.trim()) {
      showError(messageInput, 'Message content cannot be blank');
      hasErrors = true;
    } else {
      clearError(messageInput);
    }

    // If validation fails, halt execution
    if (hasErrors) {
      showToast('Please correct validation highlights.', 'error');
      return;
    }

    // 2. SUCCESSFUL VALIDATION: INITIATE LOADING STATE
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <svg class="animate-spin -ml-1 mr-3 h-4 w-4 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      Processing Inquiry...
    `;
    
    // Disable inputs
    inputs.forEach(input => input.disabled = true);

    try {
      // 3. MOCK BACK-END API CALL
      await new Promise(resolve => setTimeout(resolve, 1500));

      console.log('--- JP Monks Contact Inquiry Received ---', {
        name: nameInput.value.trim(),
        email: emailInput.value.trim(),
        subject: subjectInput.value.trim(),
        message: messageInput.value.trim(),
        timestamp: new Date().toISOString()
      });

      // 4. RESTORE FORM STATE & INDICATE SUCCESS
      showToast('Thank you! Our senior strategist will contact you within 2 hours.', 'success');
      form.reset();
      
    } catch (err) {
      showToast('Transmission error. Please try again or email directly.', 'error');
    } finally {
      // Restore buttons & inputs
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;
      inputs.forEach(input => input.disabled = false);
    }
  });
}
