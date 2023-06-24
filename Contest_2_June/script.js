const navbarLinks = document.querySelectorAll('.navbar a');

for (const link of navbarLinks) {
    link.addEventListener('click', smoothScroll);
}

function smoothScroll(event) {
    event.preventDefault();

    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    const navbarHeight = document.querySelector('.navbar').offsetHeight;

    window.scrollTo({
        top: targetElement.offsetTop - navbarHeight,
        behavior: 'smooth'
    });
}