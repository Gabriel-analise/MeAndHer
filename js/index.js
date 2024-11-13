function startLiveCounter() {
    const element = document.getElementById('timeCounter');

    if(!element) {
        console.error('lement timeCounter not found');
    }

    setInterval(() => {
        const elapsed = calculateTimeTogetherSince();
        element.innerText = `Estamos há: ${elapsed.days} dias, ${elapsed.hours} horas, ${elapsed.minutes} minutos e ${elapsed.seconds} segundos juntos`;
    }, 1000);

}


function calculateTimeTogetherSince() {
    const now = new Date();
    const start = new Date('2019-02-07');
    const diference = now - start;

    const days = Math.floor(diference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diference / (1000 * 60)) % 60);
    const seconds = Math.floor((diference / 1000) % 60)
    
    return {days, hours, minutes, seconds};

}

startLiveCounter();