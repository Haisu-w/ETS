function setRandomBackground() {
    var images = [
        '../images/background1.jpg',
        // '../images/background2.png',
        '../images/background3.jpg',
    ];
    var randomIndex = Math.floor(Math.random() * images.length);
    var randomImage = images[randomIndex];
    document.body.style.backgroundImage = "url('" + randomImage + "')";
}