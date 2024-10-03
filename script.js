const days = document.querySelector('.days');
const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');

const currentYear = new Date().getFullYear();

// Check if Christmas has passed this year
let christmasDay = new Date(`December 25 ${currentYear} 00:00:00`);
if (new Date() > christmasDay) {
    christmasDay.setFullYear(currentYear + 1); // Set to next year if passed
}

// Update Countdown Time
function updateCountdown() {
    const currentTime = new Date();
    const diff = christmasDay - currentTime;

    // Calculate time components
    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000) % 60;

    // Update HTML content
    days.innerHTML = d;
    hours.innerHTML = h < 10 ? '0' + h : h;
    minutes.innerHTML = m < 10 ? '0' + m : m;
    seconds.innerHTML = s < 10 ? '0' + s : s;

}

// Call updateCountdown initially and then set interval
updateCountdown(); // Initial call to display immediately
setInterval(updateCountdown, 1000);
