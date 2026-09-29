let btn1 = document.querySelector("#btn1");

btn1.onclick = () => {
  console.log("mode = dark ");

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

    // let names = "ka";

    // for (name of names) {
    //   console.log(name);
    // }
  }
};

let div3 = document.createElement("div");

div3.innerText = "WELCOME";

let hr1 = document.createElement("hr");

document.querySelector("body").append(hr1);

document.querySelector("body").append(div3);

div3.style.color = "green";
div3.style.backgroundColor = "orange";
div3.style.height = "100px";
div3.style.width = "100px";
div3.style.border = "2px solid black";
div3.style.display = "flex";
div3.style.justifyContent = "center";
div3.style.alignItems = "center";
div3.style.alignContent = "center";

div3.onmousedown = () => {
  console.log("welcome to div3");
};
