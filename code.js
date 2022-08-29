//увеличивание картинки по клику
//заполнение цифрами кружков
//
let number_green1 = document.querySelector(".stages_11");
let number_blue1 = document.querySelector(".stages_13");
let number_brown1 = document.querySelector(".stages_12");
let number_green2 = document.querySelector(".stages_21");
let number_blue2 = document.querySelector(".stages_23");
let number_brown2 = document.querySelector(".stages_22");
let number_green3 = document.querySelector(".stages_31");
let number_blue3 = document.querySelector(".stages_33");
let number_brown3 = document.querySelector(".stages_32");

let image1 = document.querySelector(".azat");
let even1 = true;
image1.onclick = function () {
  if (even1) {
    this.style.zoom = "2.5"; //увеличиваем картинку
    this.style.position = "absolute"; //перекрываем остальные
    number_green1.textContent = "1"; //заполняем кружки
    number_green2.textContent = "2";
    number_green3.textContent = "2";
    number_blue1.textContent = "1";
    number_blue2.textContent = "1";
    number_blue3.textContent = "0";
    number_brown1.textContent = "2";
    number_brown2.textContent = "3";
    number_brown3.textContent = "4";
    even1 = false;
  } else {
    this.style.zoom = "1";
    this.style.position = "static";
    number_green1.textContent = "";
    number_green2.textContent = "";
    number_green3.textContent = "";
    number_blue1.textContent = "";
    number_blue2.textContent = "";
    number_blue3.textContent = "";
    number_brown1.textContent = "";
    number_brown2.textContent = "";
    number_brown3.textContent = "";
    even1 = true;
  }
};
let image2 = document.querySelector(".iog");
let even2 = true;
image2.onclick = function () {
  if (even2) {
    this.style.zoom = "2.5";
    this.style.position = "absolute";
    number_green1.textContent = "0";
    number_green2.textContent = "2";
    number_green3.textContent = "3";
    number_blue1.textContent = "1";
    number_blue2.textContent = "1";
    number_blue3.textContent = "0";
    number_brown1.textContent = "2";
    number_brown2.textContent = "3";
    number_brown3.textContent = "4";
    even2 = false;
  } else {
    this.style.zoom = "1";
    this.style.position = "static";
    number_green1.textContent = "";
    number_green2.textContent = "";
    number_green3.textContent = "";
    number_blue1.textContent = "";
    number_blue2.textContent = "";
    number_blue3.textContent = "";
    number_brown1.textContent = "";
    number_brown2.textContent = "";
    number_brown3.textContent = "";
    even2 = true;
  }
};

let image3 = document.querySelector(".cthulthu");
let even3 = true;
image3.onclick = function () {
  if (even3) {
    this.style.zoom = "2.5";
    this.style.position = "absolute";
    number_green1.textContent = "0";
    number_green2.textContent = "1";
    number_green3.textContent = "3";
    number_blue1.textContent = "2";
    number_blue2.textContent = "0";
    number_blue3.textContent = "0";
    number_brown1.textContent = "2";
    number_brown2.textContent = "3";
    number_brown3.textContent = "4";
    even3 = false;
  } else {
    this.style.zoom = "1";
    this.style.position = "static";
    number_green1.textContent = "";
    number_green2.textContent = "";
    number_green3.textContent = "";
    number_blue1.textContent = "";
    number_blue2.textContent = "";
    number_blue3.textContent = "";
    number_brown1.textContent = "";
    number_brown2.textContent = "";
    number_brown3.textContent = "";
    even3 = true;
  }
};
let image4 = document.querySelector(".shub");
let even4 = true;
image4.onclick = function () {
  if (even4) {
    this.style.zoom = "2.5";
    this.style.position = "absolute";
    number_green1.textContent = "1";
    number_green2.textContent = "3";
    number_green3.textContent = "2";
    number_blue1.textContent = "1";
    number_blue2.textContent = "1";
    number_blue3.textContent = "0";
    number_brown1.textContent = "2";
    number_brown2.textContent = "2";
    number_brown3.textContent = "4";
    even4 = false;
  } else {
    this.style.zoom = "1";
    this.style.position = "static";
    number_green1.textContent = "";
    number_green2.textContent = "";
    number_green3.textContent = "";
    number_blue1.textContent = "";
    number_blue2.textContent = "";
    number_blue3.textContent = "";
    number_brown1.textContent = "";
    number_brown2.textContent = "";
    number_brown3.textContent = "";
    even4 = true;
  }
};
//замешиваем колоду
let arr_brown = [
  ["./MythicCards/brown/brown1.png"],
  ["./MythicCards/brown/brown2.png"],
  ["./MythicCards/brown/brown3.png"],
  ["./MythicCards/brown/brown4.png"],
  ["./MythicCards/brown/brown5.png"],
  ["./MythicCards/brown/brown6.png"],
  ["./MythicCards/brown/brown7.png"],
  ["./MythicCards/brown/brown8.png"],
  ["./MythicCards/brown/brown9.png"],
  ["./MythicCards/brown/brown10.png"],
  ["./MythicCards/brown/brown11.png"],
  ["./MythicCards/brown/brown12.png"],
  ["./MythicCards/brown/brown13.png"],
  ["./MythicCards/brown/brown14.png"],
  ["./MythicCards/brown/brown15.png"],
  ["./MythicCards/brown/brown16.png"],
  ["./MythicCards/brown/brown17.png"],
  ["./MythicCards/brown/brown18.png"],
  ["./MythicCards/brown/brown19.png"],
  ["./MythicCards/brown/brown20.png"],
  ["./MythicCards/brown/brown21.png"],
];
let arr_blue = [
  ["./MythicCards/blue/blue1.png"],
  ["./MythicCards/blue/blue2.png"],
  ["./MythicCards/blue/blue3.png"],
  ["./MythicCards/blue/blue4.png"],
  ["./MythicCards/blue/blue5.png"],
  ["./MythicCards/blue/blue6.png"],
  ["./MythicCards/blue/blue7.png"],
  ["./MythicCards/blue/blue8.png"],
  ["./MythicCards/blue/blue9.png"],
  ["./MythicCards/blue/blue10.png"],
  ["./MythicCards/blue/blue11.png"],
  ["./MythicCards/blue/blue12.png"],
];
let arr_green = [
  ["./MythicCards/green/green1.png"],
  ["./MythicCards/green/green2.png"],
  ["./MythicCards/green/green3.png"],
  ["./MythicCards/green/green4.png"],
  ["./MythicCards/green/green5.png"],
  ["./MythicCards/green/green6.png"],
  ["./MythicCards/green/green7.png"],
  ["./MythicCards/green/green8.png"],
  ["./MythicCards/green/green9.png"],
  ["./MythicCards/green/green10.png"],
  ["./MythicCards/green/green11.png"],
  ["./MythicCards/green/green12.png"],
  ["./MythicCards/green/green13.png"],
  ["./MythicCards/green/green14.png"],
  ["./MythicCards/green/green15.png"],
  ["./MythicCards/green/green16.png"],
  ["./MythicCards/green/green17.png"],
  ["./MythicCards/green/green18.png"],
];
//перемешиваем карты
let shuffle_random = document.querySelector(".shuffle");
function shuffle(n) {
  n.sort(() => Math.random() - 0.5);
}
shuffle(arr_green);
shuffle(arr_blue);
shuffle(arr_brown);
shuffle_random.onclick = function () {
  last.style.opacity = "1";
  deck.style.opacity = "1";
};
//набираем стейджи
//АЗАТОТ

let arr_stage1 = arr_blue
  .slice(0, 1)
  .concat(arr_brown.slice(0, 2), arr_green.slice(0, 1));

let arr_stage2 = arr_blue
  .slice(1, 2)
  .concat(arr_brown.slice(2, 5), arr_green.slice(1, 3));

let arr_stage3 = arr_brown.slice(5, 9).concat(arr_green.slice(3, 5));

//выводим карты на экран
let deck = document.querySelector(".deck");
let last = document.querySelector(".last_card");

deck.onclick = function () {
  let next;

  if (arr_stage1.length > 0) {
    next = arr_stage1.pop();
      if(number_green1.textContent != 0){
        number_green1.textContent--
      }else if(number_brown1.textContent != 0){
        number_brown1.textContent--
      }else if(number_blue1.textContent != 0){
        number_blue1.textContent--
      }
  } else if (arr_stage2.length > 0) {
    next = arr_stage2.pop();
      if(number_green2.textContent != 0){
        number_green2.textContent--
      }else if(number_brown2.textContent != 0){
        number_brown2.textContent--
      }else if(number_blue2.textContent != 0){
        number_blue2.textContent--
      }
   
  } else if (arr_stage3.length > 0) {
    next = arr_stage3.pop();
        if(number_green3.textContent != 0){
          number_green3.textContent--
        }else if(number_brown3.textContent != 0){
          number_brown3.textContent--
        }else if(number_blue3.textContent != 0){
          number_blue3.textContent--
        }
    
  } else next = "pic/mythicCardBackground.6cfef7456fa52cb3c0c7.png";
  
  last.style.background = `url(${next})`;
 
  console.log(next)

};
console.log(
  "Каждую новую игру колода перемешивается\nУровень только один -'средний'\nДревний один - 'Азатот'"
);

