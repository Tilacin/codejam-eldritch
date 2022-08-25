//увеличивание картинки по клику

//const cthulhu = document.querySelector(".cthulthu");
//const iogSothoth = document.querySelector(".iog");
const shubNiggurat = document.querySelector(".shub");
let number_green1 = document.querySelector(".stages_11")
let number_blue1 = document.querySelector(".stages_13")
let number_brown1 = document.querySelector(".stages_12")
let number_green2 = document.querySelector(".stages_21")
let number_blue2 = document.querySelector(".stages_23")
let number_brown2 = document.querySelector(".stages_22")
let number_green3 = document.querySelector(".stages_31")
let number_blue3 = document.querySelector(".stages_33")
let number_brown3 = document.querySelector(".stages_32")

let image1 = document.querySelector(".azat");
let even1 = true;
image1.onclick = function () {
  if (even1) {
    this.style.zoom = "2.5";
    this.style.position = "absolute"
    number_green1.textContent = "1"
    number_green2.textContent = "2"
    number_green3.textContent = "2"
    number_blue1.textContent = "1"
    number_blue2.textContent = "1"
    number_blue3.textContent = "0"
    number_brown1.textContent = "2"
    number_brown2.textContent = "3"
    number_brown3.textContent = "4"
    even1 = false;
  } else {
    this.style.zoom = "1";
    this.style.position = "static"
    number_green1.textContent = ""
    number_green2.textContent = ""
    number_green3.textContent = ""
    number_blue1.textContent = ""
    number_blue2.textContent = ""
    number_blue3.textContent = ""
    number_brown1.textContent = ""
    number_brown2.textContent = ""
    number_brown3.textContent = ""
    even1 = true;
  }
};
let image2 = document.querySelector(".iog");
let even2 = true;
image2.onclick = function () {
  if (even2) {
    this.style.zoom = "2.5";
    this.style.position = "absolute"
    number_green1.textContent = "0"
    number_green2.textContent = "2"
    number_green3.textContent = "3"
    number_blue1.textContent = "1"
    number_blue2.textContent = "1"
    number_blue3.textContent = "0"
    number_brown1.textContent = "2"
    number_brown2.textContent = "3"
    number_brown3.textContent = "4"
    even2 = false;
  } else {
    this.style.zoom = "1";
    this.style.position = "static"
    number_green1.textContent = ""
    number_green2.textContent = ""
    number_green3.textContent = ""
    number_blue1.textContent = ""
    number_blue2.textContent = ""
    number_blue3.textContent = ""
    number_brown1.textContent = ""
    number_brown2.textContent = ""
    number_brown3.textContent = ""
    even2 = true;
  }
};

let image3 = document.querySelector(".cthulthu");
let even3 = true;
image3.onclick = function () {
  if (even3) {
    this.style.zoom = "2.5";
    this.style.position = "absolute"
    number_green1.textContent = "0"
    number_green2.textContent = "1"
    number_green3.textContent = "3"
    number_blue1.textContent = "2"
    number_blue2.textContent = "0"
    number_blue3.textContent = "0"
    number_brown1.textContent = "2"
    number_brown2.textContent = "3"
    number_brown3.textContent = "4"
    even3 = false;
  } else {
    this.style.zoom = "1";
    this.style.position = "static"
    number_green1.textContent = ""
    number_green2.textContent = ""
    number_green3.textContent = ""
    number_blue1.textContent = ""
    number_blue2.textContent = ""
    number_blue3.textContent = ""
    number_brown1.textContent = ""
    number_brown2.textContent = ""
    number_brown3.textContent = ""
    even3 = true;
  }
};
let image4 = document.querySelector(".shub");
let even4 = true;
image4.onclick = function () {
  if (even4) {
    this.style.zoom = "2.5";
    this.style.position = "absolute"
    number_green1.textContent = "1"
    number_green2.textContent = "3"
    number_green3.textContent = "2"
    number_blue1.textContent = "1"
    number_blue2.textContent = "1"
    number_blue3.textContent = "0"
    number_brown1.textContent = "2"
    number_brown2.textContent = "2"
    number_brown3.textContent = "4"
    even4 = false;
  } else {
    this.style.zoom = "1";
    this.style.position = "static"
    number_green1.textContent = ""
    number_green2.textContent = ""
    number_green3.textContent = ""
    number_blue1.textContent = ""
    number_blue2.textContent = ""
    number_blue3.textContent = ""
    number_brown1.textContent = ""
    number_brown2.textContent = ""
    number_brown3.textContent = ""
    even4 = true;
  }
};
//------------------------------------------



/*

const shuffle = (deck) => [...deck].sort(() => Math.random() - 0.5);//сортировка
//для эстетов есть алгоритм фишера - ейтца
const shuffleArray = array => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}
*/