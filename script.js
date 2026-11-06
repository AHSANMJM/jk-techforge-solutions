
const contactForm = document.getElementById("contactForm");

const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    const submitButton = contactForm.querySelector('button[type="submit"]');
    submitButton.disabled = true;
    formMessage.textContent = "Sending your message…";

    const body = new URLSearchParams(new FormData(contactForm)).toString();

    fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body
    })
        .then(function(response) {
            if (!response.ok) {
                throw new Error("Form submission failed");
            }

            formMessage.textContent = "Thank you, " + name + "! Your message has been sent.";
            contactForm.reset();
        })
        .catch(function() {
            formMessage.textContent = "Sorry, your message could not be sent. Please try again.";
        })
        .finally(function() {
            submitButton.disabled = false;
        });

});
