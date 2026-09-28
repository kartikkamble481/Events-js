let btn1 = document.querySelector("#btn1");

btn1.onclick = () => {
  console.log("button was clicked");

  var mode = prompt("choose the mode  dark or light");
  let color;

  if (mode === "dark") {
    console.log("black");
  }

  if (mode === "light") {
    console.log("white");
  }
};

let btn2 = document.querySelector("#btn2");

btn2.ondblclick = () => {
  console.log("button was on ");
};

let btn3 = document.querySelector("#btn3");

document.querySelector("#btn3.onclick");
btn3.onclick = () => {
  console.log("ON");
};

let div1 = document.querySelector(".div1");

div1.onmouseover = () => {
  console.log("you are inside in div");
};

let div2 = document.querySelector(".div2");

div2.onmousedown = () => {
  let codes = "OVIIIXII";

  for (code in codes) {
    console.log(codes, code);
    code++;

    let names = "vaiduu";

    for (name in names) {
      console.log(name, names);
    }
  }
};
