function startElapsedTimeCounter(startDate) {
    function updateCounter() {
        const now = new Date().getTime();
        const timePassed = now - startDate;

        const days = Math.floor(timePassed / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timePassed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timePassed % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timePassed % (1000 * 60)) / 1000);

        // Atualiza o contador no formato de relógio
        document.getElementById("countdown").innerHTML = `
            <div class="countdown-item">
                <span>${days}</span>
                <small>Dias</small>
            </div>
            <div class="countdown-item">
                <span>${hours}</span>
                <small>Horas</small>
            </div>
            <div class="countdown-item">
                <span>${minutes}</span>
                <small>Minutos</small>
            </div>
            <div class="countdown-item">
                <span>${seconds}</span>
                <small>Segundos</small>
            </div>
        `;
    }

    updateCounter();
    setInterval(updateCounter, 1000);
}

const startDate = new Date("2024-12-20T16:09:00").getTime();
startElapsedTimeCounter(startDate);
