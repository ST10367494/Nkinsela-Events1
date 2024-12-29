function sendToWhatsApp() {
    const tentType = document.getElementById('tentType').value;
    const tentLength = document.getElementById('tentLength').value;
    const phone = "0615862377";
    const message = `Hello, I would like to book a ${tentLength}m ${tentType}.`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}
