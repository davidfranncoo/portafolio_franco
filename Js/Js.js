// ----------------- ANIMACION MENU ---------------------------

let menu = document.getElementById("menuu");
let menu_open = document.getElementById("menu_open");
let menu_close = document.getElementById("menu_close");

menu_open.addEventListener("click", openClose);
menu_close.addEventListener("click", openClose);

function openClose() {
  menu.classList.toggle("view-menu");
  if (menu.classList.contains("view-menu")) {
    menu_open.style.display = "none";
    menu_close.style.display = "block";
  } else {
    menu_open.style.display = "block";
    menu_close.style.display = "none";
  }
}

//--------------------------- ANIMACION CARD-----------------------
window.addEventListener("scroll", function () {
  var cards = document.querySelectorAll(".card");
  var screenHeight = window.innerHeight / 2.5;

  cards.forEach(function (card) {
    var cardPosition = card.getBoundingClientRect().top;

    if (cardPosition < screenHeight) {
      card.classList.add("show");
    }
  });
});

// ---------------- SCROLL DESPLAZAMINTO --------------------------
