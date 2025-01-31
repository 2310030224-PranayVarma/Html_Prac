// Optional: Simple validation on form submission
document.getElementById('registration-form').addEventListener('submit', function(event) {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const interested = document.getElementById('interested').checked;

    if (!name || !phone || !email) {
        alert("Please fill out all required fields.");
        event.preventDefault();
    } else {
        alert(`Thank you for registering, ${name}!`);
    }
});
