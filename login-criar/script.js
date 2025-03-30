// Máscara para o campo de telefone
function maskPhone(event) {
  var input = event.target;
  var value = input.value.replace(/\D/g, "");
  if (value.length <= 2) {
    input.value = `(${value}`;
  } else if (value.length <= 13) {
    input.value = `(${value.substring(0, 2)})${value.substring(2, 13)}`;
  } else {
    input.value = `(${value.substring(0, 2)})${value.substring(2, 13)}`;
  }
}

// CAMPO DO USUARIO E SENHA
function handleLogin(event) {
  event.preventDefault();
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var phone = document.getElementById("phone").value;

  if (username === "" || email === "" || password === "" || phone === "") {
    alert("Por favor, preencha todos os campos.");
  } else {
    // Apaga os campos de usuário e senha
    document.getElementById("username").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("phone").value = "";
  }
}


// LOGAR
function handleGoogleLogin() {
  // Redirect to Google login page
  window.location.href = "https://accounts.google.com/signin";
}

function handleFacebookLogin() {
  // Redirect to Facebook login page
  window.location.href = "https://www.facebook.com/login";
}

function handleInstagramLogin() {
  // Redirect to Instagram login page
  window.location.href = "https://www.instagram.com/accounts/login";
}

document.addEventListener("DOMContentLoaded", function () {
  const togglePassword = document.querySelector("#toggle-password");
  const passwordInput = document.querySelector("#password");

  togglePassword.addEventListener("click", function () {
    const type =
      passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);
    this.classList.toggle("bx-hide");
    this.classList.toggle("bx-show");
  });
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
    event.preventDefault(); // Previne o comportamento padrão do link
    closeAll(); // Fecha todos os outros antes de abrir o atual
    if (!favoritos.classList.contains("active")) {
      favoritos.classList.add("active");
      overlay.classList.add("active"); // Exibe a sobreposição
    }
  });

  closeFavoritos.addEventListener("click", function () {
    favoritos.classList.remove("active");
    overlay.classList.remove("active"); // Oculta a sobreposição
  });

  bagIcon.addEventListener("click", function (event) {
    event.preventDefault(); // Previne o comportamento padrão do link
    closeAll(); // Fecha todos os outros antes de abrir o atual
    if (!compras.classList.contains("active")) {
      compras.classList.add("active");
      overlay.classList.add("active"); // Exibe a sobreposição
    }
  });

  closeCompras.addEventListener("click", function () {
    compras.classList.remove("active");
    overlay.classList.remove("active"); // Oculta a sobreposição
  });

  searchIcon.addEventListener("click", function (event) {
    event.preventDefault(); // Previne o comportamento padrão do link
    closeAll(); // Fecha todos os outros antes de abrir o atual
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
