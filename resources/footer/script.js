const weburl = document.getElementById('change-url');
const ticketurl = document.getElementById('url-tickets')

weburl.addEventListener('mouseover', () => {
    if (document.cookie.includes('lang=en')) {
        weburl.href = "https://www.lamlisse.nl/en/";
    } else {
        weburl.href = "http://www.lamlisse.nl/";
    }
})

ticketurl.addEventListener('mouseover', () => {
    if (document.cookie.includes('lang=en')) {
        ticketurl.href = "https://www.lamlisse.nl/en/tickets/";
    } else {
        ticketurl.href = "https://www.lamlisse.nl/tickets/";
    }
})