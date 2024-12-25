const botao = document.body.querySelector(".botao");
const card = document.body.querySelector(".card");

addEventListener("click", surpresa);

let primeiraVez = true;

function surpresa() {
  if (primeiraVez) {
    card.innerHTML =
      "<h1>Feliz Natal 🎄✨</h1><p>Neste Natal, desejo que a luz de Jesus Cristo encha seu coração de paz, amor e esperança. Que a celebração do nascimento do Salvador renove sua fé e fortaleça seus sonhos. <br><br><cite>Porque um menino nos nasceu, um filho nos foi dado, e o governo está sobre os seus ombros. E ele será chamado Maravilhoso Conselheiro, Deus Poderoso, Pai Eterno, Príncipe da Paz. Isaías 9:6</cite><br><br>Lembre-se de que cada novo dia é uma oportunidade para recomeçar. Que você tenha coragem para enfrentar os desafios, sabedoria para tomar decisões e gratidão para celebrar as pequenas bênçãos. Que neste Natal, o amor transborde em sua vida e a esperança brilhe como as estrelas que anunciaram o nascimento de Jesus. <br>Você é capaz de realizar grandes coisas, pois Deus caminha ao seu lado em cada passo da jornada. Boas festas! Que 2025 seja um ano de conquistas e muitas alegrias! ❤️</p>";

    card.innerHTML += "<audio src='musica.mp3' loop autoplay></audio>";

    nevarOn(true);
    primeiraVez = false;
  } else {
    nevarOn(false);
  }
}

function nevarOn(grau) {
  const body = document.body;

  let neveContainer = document.querySelector(".nev-container");
  if (!neveContainer) {
    neveContainer = document.createElement("div");
    neveContainer.classList.add("nev-container");
    document.body.appendChild(neveContainer);
  }

  let numeroFlocos = grau ? 450 : 30;
  let duracaoAnimacao = grau ? 3 : 6;

  for (let i = 0; i < numeroFlocos; i++) {
    const nevar = document.createElement("div");
    nevar.style.position = "absolute";
    nevar.style.top = `${Math.random() * 100}vh`;
    nevar.style.left = `${Math.random() * 100}vw`;
    nevar.style.width = `${Math.random() * 5 + 2}px`;
    nevar.style.height = nevar.style.width;
    nevar.style.background = "white";
    nevar.style.borderRadius = "50%";
    nevar.style.opacity = `${Math.random()}`;
    nevar.style.animation = `fall ${
      Math.random() * duracaoAnimacao + 2
    }s linear infinite`;
    neveContainer.appendChild(nevar);
  }

  const style = document.createElement("style");
  style.innerHTML = `@keyframes fall {
    
        0% { transform : translateY(0); }
        100% { transform: translateY(100vh);}

        .nev-container {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
        overflow: hidden;
        
        }

       
    }`;
  document.head.appendChild(style);
}
