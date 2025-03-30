// transicao__________________________________________________
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", this.window.scrollY > 0);
});

// coracao___________________________________________________

document.addEventListener("DOMContentLoaded", (event) => {
  const iconesCoracao = document.querySelectorAll("[data-icon-heart]");

  iconesCoracao.forEach((iconeCoracao) => {
    iconeCoracao.addEventListener("click", () => {
      if (iconeCoracao.classList.contains("bx-heart")) {
        iconeCoracao.classList.remove("bx-heart");
        iconeCoracao.classList.add("bxs-heart", "preenchido");
      } else {
        iconeCoracao.classList.remove("bxs-heart", "preenchido");
        iconeCoracao.classList.add("bx-heart");
      }
    });
  });
});

// animacao do texto_________________________________________________________
const textElement = document.getElementById("dynamic-text");
const words = [
  "Encontre o Seu Estilo Perfeito!!!"
];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeAnimation() {
  const currentWord = words[wordIndex];
  const displayedText = isDeleting
    ? currentWord.substring(0, charIndex--)
    : currentWord.substring(0, charIndex++);

  textElement.textContent = displayedText;

  if (!isDeleting && charIndex === currentWord.length) {
    // Pausa antes de apagar
    setTimeout(() => (isDeleting = true), 500); // Pausa reduzida
  } else if (isDeleting && charIndex === 0) {
    // Trocar para a próxima palavra e começar a digitar
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length; // Vai para a próxima palavra
  }

  // Ajusta a velocidade de digitação e apagamento
  const typingSpeed = isDeleting ? 50 : 75; // Velocidade aumentada
  setTimeout(typeAnimation, typingSpeed);
}

// Inicia a animação
typeAnimation();

if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

window.onload = function () {
  window.scrollTo(0, 0);
};

// pesquisa/ coracao /carrinho_____________________________________________________________________________________________________________________________________________
document.addEventListener("DOMContentLoaded", function () {
  const heartIcon = document.getElementById("heart-icon");
  const favoritos = document.getElementById("favoritos");
  const closeFavoritos = document.getElementById("close-favoritos");
  const bagIcon = document.getElementById("bag-icon");
  const compras = document.getElementById("compras");
  const closeCompras = document.getElementById("close-compras");
  const searchIcon = document.getElementById("search-icon");
  const searchBox = document.querySelector(".search-box");
  const closeSearchBox = document.getElementById("close-search-box");
  const overlay = document.getElementById("overlay");

  function closeAll() {
    favoritos.classList.remove("active");
    compras.classList.remove("active");
    searchBox.style.display = "none";
    closeSearchBox.style.display = "none";
    overlay.classList.remove("active");
    document.body.style.overflow = "auto"; // Restaura a rolagem do corpo
  }

  heartIcon.addEventListener("click", function (event) {
    event.preventDefault();
    closeAll();
    if (!favoritos.classList.contains("active")) {
      favoritos.classList.add("active");
      overlay.classList.add("active");
      document.body.style.overflow = "hidden"; // Remove a rolagem do corpo
    }
  });

  closeFavoritos.addEventListener("click", function () {
    favoritos.classList.remove("active");
    overlay.classList.remove("active");
    document.body.style.overflow = "auto"; // Restaura a rolagem do corpo
  });

  bagIcon.addEventListener("click", function (event) {
    event.preventDefault();
    closeAll();
    if (!compras.classList.contains("active")) {
      compras.classList.add("active");
      overlay.classList.add("active");
      document.body.style.overflow = "hidden"; // Remove a rolagem do corpo
    }
  });

  closeCompras.addEventListener("click", function () {
    compras.classList.remove("active");
    overlay.classList.remove("active");
    document.body.style.overflow = "auto"; // Restaura a rolagem do corpo
  });

  searchIcon.addEventListener("click", function (event) {
    event.preventDefault();
    closeAll();
    if (searchBox.style.display === "none") {
      searchBox.style.display = "block";
      closeSearchBox.style.display = "block";
      overlay.classList.add("active");
      document.body.style.overflow = "hidden"; // Remove a rolagem do corpo
    }
  });

  closeSearchBox.addEventListener("click", function () {
    searchBox.style.display = "none";
    closeSearchBox.style.display = "none";
    overlay.classList.remove("active");
    document.body.style.overflow = "auto"; // Restaura a rolagem do corpo
  });

  overlay.addEventListener("click", function () {
    closeAll();
  });

  // Permite o scroll dentro do menu de compras
  compras.addEventListener("wheel", function (event) {
    compras.scrollTop += event.deltaY;
  });

  // Permite o scroll dentro do menu de favoritos
  favoritos.addEventListener("wheel", function (event) {
    favoritos.scrollTop += event.deltaY;
  });
});





