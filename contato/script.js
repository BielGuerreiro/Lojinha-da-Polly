document.addEventListener("DOMContentLoaded", function () {
  const searchIcon = document.getElementById("search-icon");
  const searchBox = document.getElementById("search-box");
  const searchInput = document.getElementById("search-input");
  const searchBtn = document.getElementById("search-btn");
  const closeSearchBox = document.getElementById("close-search-box");
  const overlay = document.getElementById("overlay");

  searchIcon.addEventListener("click", function (event) {
    event.preventDefault(); 

    if (searchBox.style.display === "none" || searchBox.style.display === "") {
      searchBox.style.display = "block";
      overlay.style.display = "block";
      closeSearchBox.style.display = "block"; 
      searchInput.focus(); 
    } else {
      searchBox.style.display = "none";
      overlay.style.display = "none"; 
      closeSearchBox.style.display = "none"; 
    }
  });

  closeSearchBox.addEventListener("click", function () {
    searchBox.style.display = "none";
    overlay.style.display = "none"; 
    closeSearchBox.style.display = "none"; 
  });

  searchBtn.addEventListener("click", function () {
    performSearch();
  });

  searchInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      performSearch();
    }
  });

  function performSearch() {
    const query = searchInput.value;
    if (query) {
      window.location.href = `https://www.google.com/search?q=${query}`;
      searchInput.value = ""; 
      searchBox.style.display = "none"; 
      overlay.style.display = "none"; 
      closeSearchBox.style.display = "none"; 
    }
  }
});

// __________________________________________________________________________
document.addEventListener("DOMContentLoaded", function () {
  const heartIcon = document.getElementById("heart-icon");
  const heartBox = document.getElementById("heart-box");
  const closeHeartBox = document.getElementById("close-heart-box");
  const overlay = document.getElementById("overlay");

  heartIcon.addEventListener("click", function (event) {
    event.preventDefault(); 

    if (heartBox.classList.contains("active")) {
      heartBox.classList.remove("active");
      overlay.classList.remove("active");
    } else {
      heartBox.classList.add("active");
      overlay.classList.add("active");
    }
  });

  closeHeartBox.addEventListener("click", function () {
    heartBox.classList.remove("active");
    overlay.classList.remove("active"); 
  });

  overlay.addEventListener("click", function () {
    heartBox.classList.remove("active");
    overlay.classList.remove("active"); 
  });
});
