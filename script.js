// Simple client-side validation for the Aroma Cafe contact form
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("fullName").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value;
        const message = document.getElementById("message").value.trim();

        document.getElementById("nameError").textContent = "";
        document.getElementById("emailError").textContent = "";
        document.getElementById("subjectError").textContent = "";
        document.getElementById("messageError").textContent = "";

        let isValid = true;

        if (name.length < 2) {
            document.getElementById("nameError").textContent = "Please enter at least 2 characters.";
            isValid = false;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            document.getElementById("emailError").textContent = "Please enter a valid email address.";
            isValid = false;
        }

        if (!subject) {
            document.getElementById("subjectError").textContent = "Please choose a subject.";
            isValid = false;
        }

        if (message.length < 10) {
            document.getElementById("messageError").textContent = "Message must be at least 10 characters.";
            isValid = false;
        }

        const status = document.getElementById("formStatus");
        if (isValid) {
            status.textContent = "Thank you! Your message has been checked successfully.";
            contactForm.reset();
        } else {
            status.textContent = "Please correct the highlighted fields.";
        }
    });
}
