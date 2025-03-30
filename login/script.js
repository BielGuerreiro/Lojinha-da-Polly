function toggleForgotPasswordBox(event) {
  event.preventDefault();
  var box = document.getElementById('forgotPasswordBox');
  if (box.style.display === "none") {
      box.style.display = "block";
  } else {
      box.style.display = "none";
  }
}

window.onclick = function(event) {
  var box = document.getElementById('forgotPasswordBox');
  if (event.target !== box && !box.contains(event.target) && box.style.display === "block" && !event.target.classList.contains('forgot-password')) {
      box.style.display = "none"; 
  }
}




function handleLogin(event) {
  event.preventDefault();
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username === "" || password === "") {
    alert("Por favor, preencha todos os campos.");
  } else {
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
  }
}

function handleGoogleLogin() {
  window.location.href = "https://accounts.google.com/signin";
}

function handleFacebookLogin() {
  window.location.href = "https://www.facebook.com/login";
}

function handleInstagramLogin() {
  window.location.href = "https://www.instagram.com/accounts/login";
}

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

// olhinho da senha __________________________________________________________________
document.getElementById("toggle-password").addEventListener("click", function() {
  var passwordField = document.getElementById("password");
  var passwordIcon = document.getElementById("toggle-password");

  if (passwordField.type === "password") {
    passwordField.type = "text"; 
    passwordIcon.classList.remove("bx-hide");
    passwordIcon.classList.add("bx-show"); 
  } else {
    passwordField.type = "password"; 
    passwordIcon.classList.remove("bx-show");
    passwordIcon.classList.add("bx-hide"); 
  }
});
