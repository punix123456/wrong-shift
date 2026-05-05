const featureVideos = document.querySelectorAll('.feature-video');

featureVideos.forEach((video) => {
    const card = video.closest('.feature-card');

    // hover na karcie odpala wideo
    card.addEventListener('mouseenter', () => video.play().catch(() => {}));
    card.addEventListener('mouseleave', () => {
        video.pause();
        video.currentTime = 0;
    });

    // klik otwiera modal z pełnym wideo
    video.parentElement.addEventListener('click', () => {
        const modal = document.getElementById('videoModal');
        const modalVideo = document.getElementById('modalVideo');
        modal.style.display = 'flex';
        modalVideo.src = video.querySelector('source').src;
        modalVideo.play();
    });
});

document.querySelector('.close-modal').addEventListener('click', () => {
    document.getElementById('videoModal').style.display = 'none';
    document.getElementById('modalVideo').pause();
});

// akordeony faq
document.querySelectorAll('.accordion-header').forEach((btn) => {
    btn.addEventListener('click', () => {
        const content = btn.nextElementSibling;
        content.style.maxHeight = content.style.maxHeight ? '' : content.scrollHeight + 'px';
    });
});

// tło hero
const heroImages = ['assets/photos/photo1.jpg'];
const slider = document.getElementById('heroSlider');

heroImages.forEach((img) => {
    const slide = document.createElement('div');
    slide.className = 'hero-slide';
    slide.style.backgroundImage = `linear-gradient(rgba(15, 13, 9, 0.6), rgba(15, 13, 9, 0.8)), url('${img}')`;
    slider.appendChild(slide);
});
