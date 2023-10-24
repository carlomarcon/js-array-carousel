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

document.querySelector(".prev").addEventListener("click", function () {
  // index++;

  if (index === 0) {
    document.getElementsByClassName("item")[0].classList.remove("active");
    document.getElementsByClassName("item")[index + 4].classList.add("active");
    index = 4;
  } else if (index === 4) {
    document.getElementsByClassName("item")[index].classList.remove("active");
    document.getElementsByClassName("item")[index - 1].classList.add("active");
    index--;
  } else {
    document.getElementsByClassName("item")[index].classList.remove("active");
    document.getElementsByClassName("item")[index - 1].classList.add("active");
    index--;
  }
  console.log(index);
});

document.querySelector(".next").addEventListener("click", function () {
  // index--;

  if (index === 4) {
    document.getElementsByClassName("item")[index].classList.remove("active");
    document.getElementsByClassName("item")[index - 4].classList.add("active");
    index = 0;
  } else if (index === 0) {
    document.getElementsByClassName("item")[0].classList.remove("active");
    document.getElementsByClassName("item")[index + 1].classList.add("active");
    index++;
  } else {
    document.getElementsByClassName("item")[index].classList.remove("active");
    document.getElementsByClassName("item")[index + 1].classList.add("active");
    index++;
  }

  console.log(index);
});

// document.querySelector(".prev").addEventListener("click", function () {
//   for (let index = 1; index < ArrayImg.length; ++index) {
//     if (index === 1) {
//       document.getElementsByClassName("item")[index].classList.add("active");
//       document
//         .getElementsByClassName("item")
//         [index - 1].classList.remove("active");
//     } else if (index === 2) {
//       document.getElementsByClassName("item")[index].classList.add("active");
//       document
//         .getElementsByClassName("item")
//         [index - 1].classList.remove("active");
//     }
//     console.log(index);
//   }
// });

// SELEZIONARE IL DIV CON CLASSE ACTIVE

// TOGLIAMO LA CLASSE ACTIVE

// I++
// SELENEZIONO DALL'ARRAY ITEM(S) I esimo
// AGGIUNGO LA CLASSE ACTIVE

// if (i == 0) {
//   CurrentImage.classList.add(".active");
// }

console.log(ArrayImg[1]);
