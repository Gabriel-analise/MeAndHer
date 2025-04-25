function startLiveCounter() {
  const el = document.getElementById('timeCounter');
  if (!el) return console.error('timeCounter not found');

  setInterval(() => {
    const now = new Date();
    const start = new Date('2019-02-08');
    const diff = now - start;

    const days    = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours   = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    el.innerText = `Desde aquele 8 de fevereiro mágico já se passaram `
      + `${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos de nós 💞`;
  }, 1000);
}

startLiveCounter();
