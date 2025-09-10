// Wait until the page is fully loaded
document.addEventListener("DOMContentLoaded", () => {
        // Light/Dark Mode Toggle
        const themeButton = document.getElementById("theme-toggle");
        themeButton.addEventListener("click", () => {
                // Toggle the 'dark-mode' class on the body
                document.body.classList.toggle("dark-mode");

                // Change the button text depending on mode
                if (document.body.classList.contains("dark-mode")) {
                themeButton.textContent = "Switch to Light Mode";
                } else {
                themeButton.textContent = "Switch to Dark Mode";
                }
                });

        // Click Counter
        let count = 0;
        const counterDisplay = document.getElementById("counter");
        const countButton = document.getElementById("count-button");

        countButton.addEventListener("click", () => {
                count++; // Increase the count by 1
                counterDisplay.textContent = count; // Show the updated count
                });

        // ❓ FAQ Toggle
        const faqButtons = document.querySelectorAll(".faq-question");

        faqButtons.forEach((button) => {
                button.addEventListener("click", () => {
                        const answer = button.nextElementSibling;

                        // Toggle the display of the answer
                        if (answer.style.display === "block") {
                        answer.style.display = "none";
                        } else {
                        answer.style.display = "block";
                        }
                        });
                });

        // Form Validation
        const form = document.getElementById("signup-form");

        form.addEventListener("submit", (event) => {
                event.preventDefault(); // Stop the form from submitting

                // Get input values
                const name = document.getElementById("name").value.trim();
                const email = document.getElementById("email").value.trim();
                const password = document.getElementById("password").value;

                // Get error message elements
                const nameError = document.getElementById("name-error");
                const emailError = document.getElementById("email-error");
                const passwordError = document.getElementById("password-error");
                const formSuccess = document.getElementById("form-success");

                // Reset messages
                nameError.textContent = "";
                emailError.textContent = "";
                passwordError.textContent = "";
                formSuccess.textContent = "";

                let valid = true;

                // Validate name (should not be empty)
                if (name === "") {
                    nameError.textContent = "Name is required.";
                    valid = false;
                }

                // Validate email using simple regex
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(email)) {
                    emailError.textContent = "Enter a valid email address.";
                    valid = false;
                }

                // Validate password (min 6 characters)
                if (password.length < 6) {
                    passwordError.textContent = "Password must be at least 6 characters.";
                    valid = false;
                }

                // If everything is valid
                if (valid) {
                    formSuccess.textContent = "Form submitted successfully!";
                    form.reset(); // Clear the form
                }
        });
});

