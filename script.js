let megaIndex = 0;
const slides = document.querySelectorAll('.mega-slide');
const track = document.getElementById('megaTrack');

function moveMega(direction) {
    megaIndex += direction;

    // Loop logic
    if (megaIndex < 0) megaIndex = slides.length - 1;
    if (megaIndex >= slides.length) megaIndex = 0;

    /* Logic: Move by 60% (slide width) + 20px (gap).
       We adjust the starting position so the active slide is always centered.
    */
    const moveAmount = megaIndex * 62; 
    track.style.transform = `translateX(-${moveAmount}%)`;
    
    // Optional: Make the active slide look "zoomed in"
    slides.forEach((s, i) => {
        s.style.opacity = (i === megaIndex) ? "1" : "0.5";
        s.style.transform = (i === megaIndex) ? "scale(1)" : "scale(0.9)";
        s.style.transition = "0.6s";
    });
}

// Initialize the first look
moveMega(0);

let megaIndex2 = 0;
const slides2 = document.querySelectorAll('.mega-slide-2');
const track2 = document.getElementById('megaTrack2');

function moveMega2(direction) {
    megaIndex2 += direction;

    if (megaIndex2 < 0) megaIndex2 = slides2.length - 1;
    if (megaIndex2 >= slides2.length) megaIndex2 = 0;

    // Movement calculation for 70% width slides
    const movePercentage = megaIndex2 * 72; // Width + Gap
    track2.style.transform = `translateX(-${movePercentage}%)`;

    // Visual feedback for active slide
    slides2.forEach((s, i) => {
        if (i === megaIndex2) {
            s.style.filter = "grayscale(0%)";
            s.style.transform = "scale(1)";
        } else {
            s.style.filter = "grayscale(80%)";
            s.style.transform = "scale(0.95)";
        }
    });
}

// Set initial state
moveMega2(0);
let currentIndex5 = 0;
const slides5 = document.querySelectorAll('.mega-item');
const track5 = document.getElementById('megaTrack5');

function shiftMega5(dir) {
    // Remove active class from current
    slides5[currentIndex5].classList.remove('active');

    // Update index
    currentIndex5 += dir;
    if (currentIndex5 >= slides5.length) currentIndex5 = 0;
    if (currentIndex5 < 0) currentIndex5 = slides5.length - 1;

    // Add active class to new slide
    slides5[currentIndex5].classList.add('active');

    // Calculate movement (70% slide width + gap)
    // We adjust the percentage to keep the active slide roughly centered
    const offset = currentIndex5 * 72.5; 
    track5.style.transform = `translateX(-${offset}%)`;
}

// Set initial state
shiftMega5(0);
