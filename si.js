document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Meddelandet har skickats!');
        form.reset();
    });
});
