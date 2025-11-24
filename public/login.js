document.getElementById("loginForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value.trim();

    try{
        const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        credentials: 'include',
        body: JSON.stringify({ email, password })
    });
    const data = await res.json();
    if (res.ok) {
        alert(data.message);
        window.location.href = 'home.html';
    } else {
        alert(data.message || 'Login failed');
    }
} catch (error) {
    console.error('Error:', error);
    alert('Could not connect to server. Try again later.');
}
});
