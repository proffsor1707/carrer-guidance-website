
document.addEventListener('DOMContentLoaded', function() {
 
    const emailInput = document.querySelector('input[name="email"]');
    const passwordInput = document.querySelector('input[name="password"]');
    const loginButton = document.querySelector('.btnn a');
    const form = document.querySelector('.form');

    function validateForm(event) {
        event.preventDefault();  

        const email = emailInput.value;
        const password = passwordInput.value;

        if (!email || !validateEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

       
        if (!password) {
            alert('Please enter your password.');
            return;
        }

        alert('Login successful!'); 
      
    }

    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

  
    loginButton.addEventListener('click', validateForm);
});
