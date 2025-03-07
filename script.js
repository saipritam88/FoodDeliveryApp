// Add event listener to handle form submissions
document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.querySelector("form");
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent the default form submission

        // Get form input values
        const name = document.querySelector("input[placeholder='Your Name']").value;
        const email = document.querySelector("input[placeholder='Your Email']").value;
        const message = document.querySelector("textarea[placeholder='Your Message']").value;

        // Simple validation
        if (name && email && message) {
            console.log("Form Submitted!");
            console.log(`Name: ${name}`);
            console.log(`Email: ${email}`);
            console.log(`Message: ${message}`);
            alert("Thank you for contacting us! We will get back to you soon.");
        } else {
            alert("Please fill out all the fields!");
        }
    });
});

