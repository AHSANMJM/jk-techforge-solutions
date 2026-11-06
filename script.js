
const contactForm = document.getElementById("contactForm");

const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const service = document.getElementById("service").value;

    const message = document.getElementById("message").value.trim();

    if (!name || !email || !service || !message) {
        formMessage.textContent = "Please complete all fields.";
        return;
    }

    formMessage.textContent =
        "Thank you, " + name + "! Your message is ready.";

    contactForm.reset();

});
