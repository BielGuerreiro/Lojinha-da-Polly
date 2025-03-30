// transicao__________________________________________________
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", this.window.scrollY > 0);
});

// chamar a req do produto 
function abrirProduto(id) {
  // Redireciona para a pasta do produto correspondente
  window.location.href = `../PRODUTO ${id} KIT/index.html`;
}



// efeito nas img ____________________________________________________________________________
document.addEventListener('DOMContentLoaded', function () {
  ScrollReveal().reveal('.minha-imagem', {
    duration: 1000,
    origin: 'bottom',
    distance: '20px',
    easing: 'ease-in-out',
    reset: false
  });
});

// animacao do texto_________________________________________________________
const textElement = document.getElementById("dynamic-text");
const words = [
  "Body",
  "Kits Aniversário",
  "Acessórios",
  "Kits MêsVersário",
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
    setTimeout(() => (isDeleting = true), 1000);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
  }

  const typingSpeed = isDeleting ? 100 : 150;
  setTimeout(typeAnimation, typingSpeed);
}

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

// coracao ___________________________
document.addEventListener("DOMContentLoaded", () => {
  const iconesCoracao = document.querySelectorAll("[data-icon-heart]");
  const favoritosMenu = document.querySelector("#favoritos .lateral");
  const productCount = document.getElementById("product-count");

  let contador = 0;

  iconesCoracao.forEach((iconeCoracao) => {
    iconeCoracao.addEventListener("click", () => {
      const produto = iconeCoracao.closest(".fotos");
      const productId = produto.getAttribute("data-product-id");

      if (iconeCoracao.classList.contains("bx-heart")) {
        iconeCoracao.classList.remove("bx-heart");
        iconeCoracao.classList.add("bxs-heart", "preenchido");

        // Clona o produto para exibir na aba de favoritos
        const cloneProduto = produto.cloneNode(true);
        cloneProduto.setAttribute("data-clone-id", productId);

        // Encontra ou cria o ícone de coração no clone para desfavoritar
        let iconeCoracaoClone = cloneProduto.querySelector("[data-icon-heart]");
        if (!iconeCoracaoClone) {
          iconeCoracaoClone = document.createElement("i");
          iconeCoracaoClone.classList.add("bx", "bxs-heart", "remove-favorito");
          iconeCoracaoClone.setAttribute("data-icon-heart", productId);
          cloneProduto.appendChild(iconeCoracaoClone);
        }

        // Adiciona evento ao coração do clone para remover o favorito
        iconeCoracaoClone.addEventListener("click", () => {
          favoritosMenu.removeChild(cloneProduto);
          contador--;
          productCount.textContent = contador;

          // Atualiza o estado do coração no produto original
          const originalCoracao = document.querySelector(
            `[data-product-id="${productId}"] .bxs-heart`
          );
          if (originalCoracao) {
            originalCoracao.classList.remove("bxs-heart", "preenchido");
            originalCoracao.classList.add("bx-heart");
          }
        });

        // Adiciona o produto clonado à aba de favoritos
        favoritosMenu.appendChild(cloneProduto);

        contador++;
        productCount.textContent = contador;
      } else {
        iconeCoracao.classList.remove("bxs-heart", "preenchido");
        iconeCoracao.classList.add("bx-heart");

        // Remove o produto da aba de favoritos, se ele já estiver lá
        const cloneToRemove = favoritosMenu.querySelector(`[data-clone-id="${productId}"]`);
        if (cloneToRemove) {
          favoritosMenu.removeChild(cloneToRemove);
          contador--;
          productCount.textContent = contador;
        }
      }
    });
  });
});

// favoritos/pesquisar /carrinho
document.addEventListener("DOMContentLoaded", () => {
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

  document.documentElement.style.overflowX = "hidden";
  document.body.style.width = "100%";

  function closeAll() {
    favoritos.classList.remove("active");
    compras.classList.remove("active");
    searchBox.style.display = "none";
    closeSearchBox.style.display = "none";
    overlay.classList.remove("active");
    document.body.style.overflow = "auto";
    document.documentElement.style.overflowX = "hidden";
    document.body.style.width = "100%";
  }

  heartIcon.addEventListener("click", (event) => {
    event.preventDefault();
    closeAll();
    if (!favoritos.classList.contains("active")) {
      favoritos.classList.add("active");
      overlay.classList.add("active");
      document.body.style.overflow = "hidden";
    }
  });

  closeFavoritos.addEventListener("click", () => {
    closeAll();
  });

  bagIcon.addEventListener("click", (event) => {
    event.preventDefault();
    closeAll();
    if (!compras.classList.contains("active")) {
      compras.classList.add("active");
      overlay.classList.add("active");
      document.body.style.overflow = "hidden";
    }
  });

  closeCompras.addEventListener("click", () => {
    closeAll();
  });

  searchIcon.addEventListener("click", (event) => {
    event.preventDefault();
    closeAll();
    if (searchBox.style.display === "none") {
      searchBox.style.display = "block";
      closeSearchBox.style.display = "block";
      overlay.classList.add("active");
      document.body.style.overflow = "hidden";
    }
  });

  closeSearchBox.addEventListener("click", () => {
    closeAll();
  });

  overlay.addEventListener("click", () => {
    closeAll();
  });

  compras.addEventListener("wheel", (event) => {
    compras.scrollTop += event.deltaY;
  });

  favoritos.addEventListener("wheel", (event) => {
    favoritos.scrollTop += event.deltaY;
  });
});




// deixar a o texto selecionado onde estiver na pagina____________________________________________________
const sections = document.querySelectorAll("section");
const menuLinks = document.querySelectorAll(".menu li a");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.id;
      const menuLink = document.querySelector(`.menu a[href="#${id}"]`);

      if (entry.isIntersecting) {
        menuLinks.forEach((link) => link.classList.remove("active"));
        menuLink.classList.add("active");
      }
    });
  },
  { threshold: 0.4 }
);

sections.forEach((section) => {
  observer.observe(section);
});

sections.forEach((section) => {
  observer.observe(section);
});


// Carrossel Automático _________________________________________________________________________
document.addEventListener("DOMContentLoaded", function () {
  const imagens = document.querySelectorAll(".carrossel-container img");
  const bolinhas = document.querySelectorAll(".carrossel-container .bolinha");
  let indiceAtual = 0;
  let intervalo;
  let isTransitioning = false;

  function trocarImagem(proximo = true, indice = null) {
    if (isTransitioning) return;
    isTransitioning = true;

    const imagemAtual = imagens[indiceAtual];
    imagemAtual.classList.remove("ativo");
    imagemAtual.classList.add(proximo ? "saindo" : "voltando");

    const bolinhaAtual = bolinhas[indiceAtual];
    bolinhaAtual.classList.remove("ativo");

    if (indice !== null) {
      indiceAtual = indice;
    } else if (proximo) {
      indiceAtual = (indiceAtual + 1) % imagens.length;
    } else {
      indiceAtual = (indiceAtual - 1 + imagens.length) % imagens.length;
    }

    const novaImagem = imagens[indiceAtual];
    if (!proximo) {
      novaImagem.classList.add("entrando");
    }
    novaImagem.classList.add("ativo");

    const novaBolinha = bolinhas[indiceAtual];
    novaBolinha.classList.add("ativo");

    setTimeout(() => {
      imagemAtual.classList.remove("saindo", "voltando");
      if (!proximo) {
        novaImagem.classList.remove("entrando");
      }
      isTransitioning = false;
    }, 1000);
  }

  function iniciarCarrossel() {
    if (!intervalo) {
      intervalo = setInterval(trocarImagem, 3000);
    }
  }

  function pararCarrossel() {
    clearInterval(intervalo);
    intervalo = null;
  }

  iniciarCarrossel();

  document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
      pararCarrossel();
    } else {
      iniciarCarrossel();
    }
  });

  let startX,
    isDragging = false,
    isHolding = false,
    timeoutId;

  imagens.forEach((imagem) => {
    imagem.addEventListener("dragstart", function (e) {
      e.preventDefault();
    });
  });

  document
    .querySelector(".carrossel-container")
    .addEventListener("mousedown", function (e) {
      startX = e.pageX;
      isDragging = true;
      isHolding = true;
      pararCarrossel();
      clearTimeout(timeoutId);
    });

  document.addEventListener("mousemove", function (e) {
    if (isDragging) {
      const moveX = e.pageX - startX;
      if (moveX > 50) {
        trocarImagem(false);
        isDragging = false;
      } else if (moveX < -50) {
        trocarImagem();
        isDragging = false;
      }
    }
  });

  document.addEventListener("mouseup", function () {
    if (isHolding) {
      timeoutId = setTimeout(iniciarCarrossel, 3000);
      isHolding = false;
    }
    isDragging = false;
  });

  document.addEventListener("mouseleave", function () {
    if (isHolding) {
      timeoutId = setTimeout(iniciarCarrossel, 3000);
      isHolding = false;
    }
    isDragging = false;
  });

  bolinhas.forEach((bolinha, index) => {
    bolinha.addEventListener("click", () => {
      pararCarrossel();
      trocarImagem(true, index);
      timeoutId = setTimeout(iniciarCarrossel, 3000);
    });
  });
});


// responsivo ______________________________________________
document.addEventListener("DOMContentLoaded", function () {
  var menu = document.getElementById("responsive-menu");
  var menuIcon = document.getElementById("menus");

  menuIcon.addEventListener("click", function (event) {
    menu.classList.toggle("ativo");

    var icon = menuIcon.querySelector("i");
    if (menu.classList.contains("ativo")) {
      icon.className = "bx bx-x";
      icon.style.color = "#000";
    } else {
      icon.className = "bx bx-menu";
      icon.style.color = "";
    }

    event.stopPropagation();
  });

  // Fecha o menu ao clicar fora
  document.addEventListener("click", function (event) {
    if (!menu.contains(event.target) && !menuIcon.contains(event.target)) {
      menu.classList.remove("ativo");

      var icon = menuIcon.querySelector("i");
      icon.className = "bx bx-menu";
      icon.style.color = "";
    }
  });
});

const lateral = document.querySelector('.lateral');

lateral.addEventListener('wheel', (e) => {
  const atTop = lateral.scrollTop === 0;
  const atBottom = lateral.scrollHeight - lateral.scrollTop === lateral.clientHeight;

  if ((atTop && e.deltaY < 0) || (atBottom && e.deltaY > 0)) {
    e.preventDefault();
  }
});








