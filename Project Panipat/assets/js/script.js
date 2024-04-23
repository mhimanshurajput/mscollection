'use strict';

/**
 * Navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");

const navElemArr = [overlay, navOpenBtn, navCloseBtn];

// Function to close the navbar
function closeNavbar() {
    navbar.classList.remove("active");
    overlay.classList.remove("active");
}

// Add event listeners to toggle navbar and overlay when navOpenBtn or navCloseBtn is clicked
for (let i = 0; i < navElemArr.length; i++) {
    navElemArr[i].addEventListener("click", function () {
        navbar.classList.toggle("active");
        overlay.classList.toggle("active");
    });
}

/**
 * Add active class on header when scrolled 200px from top
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
    window.scrollY >= 200 ? header.classList.add("active")
        : header.classList.remove("active");
})

/**
 * Close navbar when a navlink is clicked
 */
const navLinks = document.querySelectorAll('.navbar-link');

navLinks.forEach(navLink => {
    navLink.addEventListener('click', function () {
        closeNavbar();
    });
});

document.getElementById('myForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
    // Simulate form submission using fetch or XMLHttpRequest
    fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: new FormData(this)
    })
        .then(response => {
            if (response.ok) {
                // If form submission is successful, display the success message
                document.getElementById('myForm').style.display = 'none';
                document.getElementById('successMessage').style.display = 'block';
            } else {
                // If form submission fails, handle the error
                console.error('Form submission failed:', response);
                alert('Form submission failed. Please try again later.');
            }
        })
        .catch(error => {
            console.error('Error submitting form:', error);
            alert('An error occurred while submitting the form. Please try again later.');
        });
});
