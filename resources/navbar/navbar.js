const navbarLanguageButton = document.getElementById('navbar-language-button');

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