
    const toggle = document.getElementById('musicToggle');
    const music = document.getElementById('backgroundMusic');

    toggle.addEventListener('change', function () {
    if (this.checked) {
    music.play();
} else {
    music.pause();
}
});
