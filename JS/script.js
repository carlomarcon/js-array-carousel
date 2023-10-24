const buttonUp = document.querySelector(".prev");
const buttonDown = document.querySelector(".next");
let ImgDiv = document.querySelector(".items");

console.log(ImgDiv);
const ArrayImg = [
  "img/01.jpg",
  "img/02.jpg",
  "img/03.jpg",
  "img/04.jpg",
  "img/05.jpg",
];

let Insert = "";

// class='item'
// IMETTO TUTTE LE IMG NELL'HTML DEL DIV

for (let i = 0; i < ArrayImg.length; i++) {
  let CurrentImage =
    "<div class='item'> <img  src='" + ArrayImg[i] + "' /></div>";
  Insert += "<div class='item'> <img  src='" + ArrayImg[i] + "' /></div>";
}

ImgDiv.innerHTML += Insert;
document.getElementsByClassName("item")[0].classList.add("active");
let index = 0;

buttonUp.addEventListener("click", function () {
  // SELEZIONARE IL DIV CON CLASSE ACTIVE

  // TOGLIAMO LA CLASSE ACTIVE

  // I++
  // SELENEZIONO DALL'ARRAY ITEM(S) I esimo
  // AGGIUNGO LA CLASSE ACTIVE

  if (i == 0) {
    CurrentImage.classList.add(".active");
  }
});

console.log(ArrayImg[1]);
