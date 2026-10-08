// ==========================================
// JPCS GRAND PRIX - MAIN JS
// ==========================================

// 1. SET YOUR TARGET DATE HERE (Format: "Month Day, Year HH:MM:SS")
// Let's set it for a week from now, or you can hardcode the exact event date.
// Example: "Oct 15, 2024 09:00:00"
const countdownDate = new Date("Oct 15, 2026 09:00:00").getTime();

// 2. The main countdown function
const updateCountdown = () => {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    // If the countdown is over, write "LIGHTS OUT"
    if (distance < 0) {
        document.querySelector("header div.flex").innerHTML = `
            <div class="font-racing text-4xl text-magenta font-black tracking-widest animate-pulse">
                LIGHTS OUT AND AWAY WE GO!
            </div>
        `;
        clearInterval(timerInterval);
        return;
    }

    // Calculate Days, Hours, Minutes, Seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Update the DOM (using padStart to keep the "02" format)
    document.getElementById("days").innerText = String(days).padStart(2, '0');
    document.getElementById("hours").innerText = String(hours).padStart(2, '0');
    document.getElementById("minutes").innerText = String(minutes).padStart(2, '0');
    document.getElementById("seconds").innerText = String(seconds).padStart(2, '0');
};

// 3. Run the function immediately and then every 1 second
updateCountdown(); // Initial call so it doesn't lag 1 second
const timerInterval = setInterval(updateCountdown, 1000);


