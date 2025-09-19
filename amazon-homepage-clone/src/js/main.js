// This file contains the JavaScript functionality for the Amazon homepage clone.
// It may include event listeners for user interactions, dynamic content loading, and any other interactive features.

document.addEventListener('DOMContentLoaded', () => {
    // Search functionality
    const searchButton = document.getElementById('search-button');
    if (searchButton) {
        searchButton.addEventListener('click', () => {
            const searchInput = document.getElementById('search-input').value;
            alert(`Searching for: ${searchInput}`);
        });
    }

    // Navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            alert(`Navigating to: ${link.textContent}`);
        });
    });

    // Account dropdown (placeholder)
    const account = document.querySelector('.header-account');
    if (account) {
        account.addEventListener('click', () => {
            alert('Account & Lists dropdown (not implemented)');
        });
    }

    // Cart click
    const cart = document.querySelector('.header-cart');
    if (cart) {
        cart.addEventListener('click', () => {
            alert('Cart page (not implemented)');
        });
    }

    // Add to Cart buttons
    const addToCartButtons = document.querySelectorAll('.product-item button');
    addToCartButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            alert('Added to cart!');
        });
    });

    // Hero carousel functionality
    const heroImages = document.querySelectorAll('.hero-img');
    const leftArrow = document.querySelector('.carousel-arrow.left');
    const rightArrow = document.querySelector('.carousel-arrow.right');
    let currentSlide = 0;
    let carouselInterval;

    function showSlide(idx) {
        heroImages.forEach((img, i) => {
            img.classList.toggle('active', i === idx);
        });
        currentSlide = idx;
    }

    function nextSlide() {
        let next = (currentSlide + 1) % heroImages.length;
        showSlide(next);
    }

    function prevSlide() {
        let prev = (currentSlide - 1 + heroImages.length) % heroImages.length;
        showSlide(prev);
    }

    if (leftArrow && rightArrow && heroImages.length > 0) {
        leftArrow.addEventListener('click', () => {
            prevSlide();
            resetCarouselInterval();
        });
        rightArrow.addEventListener('click', () => {
            nextSlide();
            resetCarouselInterval();
        });
        function resetCarouselInterval() {
            clearInterval(carouselInterval);
            carouselInterval = setInterval(nextSlide, 4000);
        }
        carouselInterval = setInterval(nextSlide, 4000);
        showSlide(0);
    }
});