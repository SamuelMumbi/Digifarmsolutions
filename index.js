document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Get form data
        const formData = new FormData(contactForm);
        const formDataJSON = Object.fromEntries(formData.entries());

        // You can perform further actions here, such as sending the form data to a server or displaying a thank you message.
        console.log('Form submitted:', formDataJSON);
        alert('Thank you for your message. We will get back to you soon.');
        contactForm.reset(); // Reset form fields
    });
});
