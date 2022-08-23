//увеличивание картинки по клику

let image1 = document.querySelector(".image1");
let even1 = true;
image1.onclick = function () {
  if (even1) {
    this.style.zoom = "2.5";
    this.style.position = "absolute"
    even1 = false;
  } else {
    this.style.zoom = "1";
    this.style.position = "static"
    even1 = true;
  }
};
let image2 = document.querySelector(".image2");
let even2 = true;
image2.onclick = function () {
  if (even2) {
    this.style.zoom = "2.5";
    this.style.position = "absolute"
    even2 = false;
  } else {
    this.style.zoom = "1";
    this.style.position = "static"
    even2 = true;
  }
};

let image3 = document.querySelector(".image3");
let even3 = true;
image3.onclick = function () {
  if (even3) {
    this.style.zoom = "2.5";
    this.style.position = "absolute"
    even3 = false;
  } else {
    this.style.zoom = "1";
    this.style.position = "static"
    even3 = true;
  }
};
let image4 = document.querySelector(".image4");
let even4 = true;
image4.onclick = function () {
  if (even4) {
    this.style.zoom = "2.5";
    this.style.position = "absolute"
    even4 = false;
  } else {
    this.style.zoom = "1";
    this.style.position = "static"
    even4 = true;
  }
};
