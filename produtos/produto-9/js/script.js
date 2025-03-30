// f5
window.onload = function () {
  window.scrollTo(0, 0);
};


// Quantidade de produto _____________________________________________________________
document.addEventListener("DOMContentLoaded", function () {
  const diminuirBtn = document.getElementById("diminuir-quantidade");
  const aumentarBtn = document.getElementById("aumentar-quantidade");
  const quantidadeInput = document.getElementById("quantidade");

  diminuirBtn.addEventListener("click", function () {
    let quantidade = parseInt(quantidadeInput.value);
    if (quantidade > 1) {
      quantidadeInput.value = quantidade - 1;
    }
  });

  aumentarBtn.addEventListener("click", function () {
    let quantidade = parseInt(quantidadeInput.value);
    if (quantidade < 50) {
      quantidadeInput.value = quantidade + 1;
    }
  });
});

// Detalhes textos ______________________________________________________________
document.getElementById("detalhes-titulo").addEventListener("click", () => {
  const detalhesLista = document.getElementById("detalhes-lista");
  const items = detalhesLista.querySelectorAll(".descricao-oculta");

  items.forEach((item, index) => {
    setTimeout(() => {
      item.classList.toggle("mostrar");
    }, index * 100);
  });
});

// Linha da descrição______________________________________________________________________________
function toggleDetalhes() {
  const lista = document.getElementById("detalhes-lista");
  const seta = document.getElementById("seta");
  const descricao = document.querySelector(".descricao");

  lista.classList.toggle("mostrar");
  descricao.classList.toggle("mostrar");

  if (lista.classList.contains("mostrar")) {
    seta.classList.remove("bx-chevron-down");
    seta.classList.add("bx-chevron-up");
  } else {
    seta.classList.remove("bx-chevron-up");
    seta.classList.add("bx-chevron-down");
  }
}

// linha que fica selecionada no tamanho ___________________________________________________________________
document.addEventListener("DOMContentLoaded", () => {
  const botoes = document.querySelectorAll(".sizes button");

  botoes.forEach((botao) => {
    botao.addEventListener("click", () => {
      botoes.forEach((b) => b.classList.remove("selected"));

      botao.classList.add("selected");
    });
  });
});

// guia _______________________________________________________________________
var modal = document.getElementById("sizeModal");

var btn = document.querySelector(".size-guide p");

var span = document.querySelector(".close");

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Coração ______________________________________________________________________
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

// compartilhar _________________________________________________________________________________________

document.getElementById("botao-compartilhar").onclick = function () {
  var box = document.getElementById("box-compartilhar");
  if (box.style.display === "none" || box.style.display === "") {
    box.style.display = "block";
  } else {
    box.style.display = "none";
  }
};

document.getElementById("copiar-link").onclick = function () {
  var link = window.location.href;
  navigator.clipboard
    .writeText(link)
    .then(function () {
    })
    .catch(function (err) {
      console.error("Erro ao copiar link: ", err);
    });
};

// Fecha a caixa ao clicar fora dela
document.addEventListener("click", function (event) {
  var box = document.getElementById("box-compartilhar");
  var botao = document.getElementById("botao-compartilhar");
  if (
    box.style.display === "block" &&
    !box.contains(event.target) &&
    event.target !== botao
  ) {
    box.style.display = "none";
  }
});

// imagem fica seleciona na area que estiver___________________________________________________________________________
document.addEventListener("DOMContentLoaded", function () {
  const imagensGrandes = document.querySelectorAll(".grande img");
  const imagensMenores = document.querySelectorAll(".menores img");

  function verificarImagemVisivel() {
    imagensGrandes.forEach((imgGrande) => {
      const rect = imgGrande.getBoundingClientRect();
      const index = imgGrande.getAttribute("data-index");

      if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
        imagensMenores.forEach((imgMenor) =>
          imgMenor.classList.remove("selecionada")
        );

        const imgMenorCorrespondente = document.querySelector(
          `.menores img[data-index="${index}"]`
        );
        if (imgMenorCorrespondente) {
          imgMenorCorrespondente.classList.add("selecionada");
        }
      }
    });
  }

  function scrollToImagemGrande(index) {
    const imgGrande = document.querySelector(
      `.grande img[data-index="${index}"]`
    );
    if (imgGrande) {
      window.scrollTo({
        top: imgGrande.offsetTop,
        behavior: "smooth",
      });
    }
  }

  imagensMenores.forEach((imgMenor) => {
    imgMenor.addEventListener("click", () => {
      const index = imgMenor.getAttribute("data-index");
      scrollToImagemGrande(index);
    });
  });

  window.addEventListener("scroll", verificarImagemVisivel);
  verificarImagemVisivel();
});

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
  }

  heartIcon.addEventListener("click", function (event) {
    event.preventDefault();
    closeAll();
    if (!favoritos.classList.contains("active")) {
      favoritos.classList.add("active");
      overlay.classList.add("active");
    }
  });

  closeFavoritos.addEventListener("click", function () {
    favoritos.classList.remove("active");
    overlay.classList.remove("active");
  });

  bagIcon.addEventListener("click", function (event) {
    event.preventDefault();
    closeAll();
    if (!compras.classList.contains("active")) {
      compras.classList.add("active");
      overlay.classList.add("active");
    }
  });

  closeCompras.addEventListener("click", function () {
    compras.classList.remove("active");
    overlay.classList.remove("active");
  });

  searchIcon.addEventListener("click", function (event) {
    event.preventDefault();
    closeAll();
    if (searchBox.style.display === "none") {
      searchBox.style.display = "block";
      closeSearchBox.style.display = "block";
      overlay.classList.add("active");
    }
  });

  closeSearchBox.addEventListener("click", function () {
    searchBox.style.display = "none";
    closeSearchBox.style.display = "none";
    overlay.classList.remove("active");
  });

  overlay.addEventListener("click", function () {
    closeAll();
  });
});



// resposivo trocar as img ____________________________________________________________________
function exibirImagem(index, imagens, numberBox) {
  imagens.forEach((img, i) => {
    img.classList.remove('imagem-principal');
    if (i === index) {
      img.classList.add('imagem-principal');
    }
  });
  if (numberBox) {
    numberBox.textContent = `${index + 1}`;
  }
}

// Configuração das setas grandes
const setaEsquerda = document.querySelector('.seta-esquerda');
const setaDireita = document.querySelector('.seta-direita');
const imagensGrandes = document.querySelectorAll('.grande img');
const numberBoxGrandes = document.querySelector('.numero-imagem');
const totalImagensGrandes = imagensGrandes.length;
let imagemAtualGrande = 0;

// Função para exibir a imagem correta
function exibirImagem(indice, total) {
  imagensGrandes.forEach((img, i) => {
    if (window.innerWidth <= 926) {
      img.style.display = i === indice ? 'block' : 'none';
    } else {
      img.style.display = 'block';
    }
  });
  if (window.innerWidth <= 926) {
    numberBoxGrandes.textContent = `${indice + 1}/${total}`;
  } else {
    numberBoxGrandes.textContent = '';
  }
}

// Inicializa a exibição da primeira imagem
exibirImagem(imagemAtualGrande, totalImagensGrandes);

// Verifica se a tela é menor ou igual a 926px (típico de dispositivos móveis)
if (window.innerWidth <= 926) {
  setaEsquerda.addEventListener('click', () => {
    if (imagemAtualGrande > 0) {
      imagemAtualGrande--;
      exibirImagem(imagemAtualGrande, totalImagensGrandes);
    }
  });

  setaDireita.addEventListener('click', () => {
    if (imagemAtualGrande < totalImagensGrandes - 1) {
      imagemAtualGrande++;
      exibirImagem(imagemAtualGrande, totalImagensGrandes);
    }
  });
}

// Adicionar um evento de redimensionamento para ajustar a visibilidade das imagens em tempo real
window.addEventListener('resize', () => {
  exibirImagem(imagemAtualGrande, totalImagensGrandes);
});














