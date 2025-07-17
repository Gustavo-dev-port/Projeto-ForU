const btnNao = document.getElementById("nao");
const btnSim = document.getElementById("sim");
const msg = document.getElementById("mensagem");
const musica = document.getElementById("musica");
const pararBtn = document.getElementById("pararMusica");
const presente = document.getElementById("presente");

btnNao.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 100);
  btnNao.style.left = `${x}px`;
  btnNao.style.top = `${y}px`;
});

btnSim.addEventListener("click", () => {
  document.getElementById("botoes").style.display = "none";
  msg.style.display = "block";
  presente.style.display = "block";
  musica.play();
  pararBtn.style.display = "inline-block";
  chuvaDeCoracoes();
});

pararBtn.addEventListener("click", () => {
  musica.pause();
  musica.currentTime = 0;
});

function chuvaDeCoracoes() {
  for (let i = 0; i < 30; i++) {
    const heart = document.createElement("div");
    heart.classList.add("coração");
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.animationDuration = `${5 + Math.random() * 5}s`;
    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 10000);
  }
}
