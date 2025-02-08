function startElapsedTimeCounter(startDate) {
    function updateCounter() {
        const now = new Date().getTime();
        const timePassed = now - startDate;

        const days = Math.floor(timePassed / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timePassed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timePassed % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timePassed % (1000 * 60)) / 1000);

        // Exibe o tempo passado
        document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }

    updateCounter();
    setInterval(updateCounter, 1000);
}

const startDate = new Date("2024-12-20T16:09:00").getTime();
startElapsedTimeCounter(startDate);