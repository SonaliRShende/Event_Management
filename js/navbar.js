function loadNavbar() {
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar').innerHTML = data;
            updateLoginStatus(); // Call this after loading navbar
        })
        .catch(error => console.error('Error loading navbar:', error));
}

function updateLoginStatus() {
    const loginLink = document.querySelector('.nav-links a[href="/components/login.html"]');
    const homeLink = document.querySelector('.nav-links a[href="/components/home.html"]'); // Reference to home link
    
    if (localStorage.getItem('loggedIn') === 'true') {
        loginLink.textContent = 'Logout';
        loginLink.href = '/components/home.html'; 
        homeLink.href = '/components/events.html'; // Change link to Events page
        
        loginLink.addEventListener('click', function () {
            localStorage.removeItem('loggedIn');
            window.location.reload(); // Reload the page to reflect changes
        });
    } else {
        loginLink.textContent = 'Login';
        loginLink.href = '/components/login.html'; // Set login link
        homeLink.textContent = 'Home'; // Revert back to "Home"
        homeLink.href = '/components/home.html'; // Revert back to Home page
    }
}

document.addEventListener('DOMContentLoaded', loadNavbar);
