function scrollToContent() {
    const nextSection = document.getElementById('nextSection');
    nextSection.scrollIntoView({ behavior: 'smooth' });
}

// Get popup elements
const popup = document.getElementById('popup');
const popupImg = document.getElementById('popup-img');
const closeBtn = document.querySelector('.close');

// Add click event for all images with class 'clickable-img'
document.querySelectorAll('.clickable-img').forEach(img => {
    img.addEventListener('click', function() {
        popup.style.display = 'flex'; // Show the popup
        popupImg.src = this.src; // Set the clicked image in the popup
    });
});

// Close the popup when the close button is clicked
closeBtn.addEventListener('click', function() {
    popup.style.display = 'none';
});

// Close the popup when clicked outside the image
popup.addEventListener('click', function(event) {
    if (event.target !== popupImg) {
        popup.style.display = 'none';
    }
});

const playPauseBtn = document.getElementById('playPauseBtn');
const backgroundMusic = document.getElementById('backgroundMusic');

// Default music is playing
let isPlaying = true;

// Toggle play/pause music
playPauseBtn.addEventListener('click', function() {
    if (isPlaying) {
        backgroundMusic.pause(); // Pause the music
        playPauseBtn.innerHTML = '<i class="fa-solid fa-play"></i>'; // Change button text
    } else {
        backgroundMusic.play(); // Play the music
        playPauseBtn.innerHTML = '<i class="fa-solid fa-pause"></i>'; // Change button text
    }
    isPlaying = !isPlaying; // Toggle state
});

