document.getElementById('signupBtn').addEventListener('click', function() {
    window.location.href = 'signup.html'; 
});

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();  
    localStorage.setItem('loggedIn', 'true');  
    window.location.href = 'events.html'; 
});
