document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signupForm');
    const emailInput = document.getElementById('email');
    
    // Form submission handling
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validateEmail(emailInput.value)) {
            // Add loading state
            const submitButton = form.querySelector('.signup-button');
            submitButton.disabled = true;
            submitButton.textContent = 'Signing up...';
            
            // Simulate API call (replace with actual API call)
            setTimeout(() => {
                console.log('Form submitted with email:', emailInput.value);
                submitButton.textContent = 'Success!';
                // Reset form after delay
                setTimeout(() => {
                    form.reset();
                    submitButton.disabled = false;
                    submitButton.textContent = 'Sign Up';
                }, 2000);
            }, 1500);
        } else {
            showError(emailInput, 'Please enter a valid email address');
        }
    });

    // Real-time email validation
    emailInput.addEventListener('input', function() {
        if (this.value.length > 0) {
            if (validateEmail(this.value)) {
                removeError(this);
            } else {
                showError(this, 'Please enter a valid email address');
            }
        } else {
            removeError(this);
        }
    });

    // Google Sign In handler
    const googleBtn = document.querySelector('.google-btn');
    googleBtn.addEventListener('click', function() {
        console.log('Google sign in clicked');
        // Implement Google Sign In logic here
    });
});

// Email validation function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
}

// Error handling functions
function showError(input, message) {
    removeError(input);
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.style.color = '#ff3333';
    errorDiv.style.fontSize = '12px';
    errorDiv.style.marginTop = '5px';
    errorDiv.textContent = message;
    input.parentNode.appendChild(errorDiv);
    input.style.borderColor = '#ff3333';
}

function removeError(input) {
    const errorDiv = input.parentNode.querySelector('.error-message');
    if (errorDiv) {
        errorDiv.remove();
    }
    input.style.borderColor = '';
}

// Responsive navigation for mobile
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop) {
            // Scrolling down
            navbar.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            navbar.style.transform = 'translateY(0)';
        }
        lastScrollTop = scrollTop;
    });
});

// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});