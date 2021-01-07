const navbarLanguageButton = document.getElementById('navbar-language-button');
const navbarTicketButton = document.getElementById('navbar-ticket-button');
const navbarLogo = document.getElementById('navbar-logo');

navbarLanguageButton.addEventListener('click', () => {
    let lang;

    let today = new Date();
    let expire = new Date();
    expire.setTime(today.getTime() + 604800000);

    if(document.cookie.includes('lang=en')) {
        lang = 'nl';
    } else {
        lang = 'en';
    }

    document.cookie = `lang=${lang};expires=${expire.toUTCString()};path=/`;

    location.reload();
});

navbarTicketButton.addEventListener('click', () => {
    if(document.cookie.includes('lang=en')) {
        window.location.href = 'https://www.lamlisse.nl/en/tickets/';
    } else {
        window.location.href = 'https://www.lamlisse.nl/tickets/';
    }
});

navbarLogo.addEventListener("click", () => {
    window.location.href = '/';
});