// ----------------- ANIMACION MENU ---------------------------

let menu = document.getElementById("menu");
let menu_open = document.getElementById("open");
let menu_close = document.getElementById("close");

menu_open.addEventListener("click", openClose);
menu_close.addEventListener("click", openClose);

function openClose() {
  menu.classList.toggle("show_menu");
  if (menu.classList.contains("show_menu")) {
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
