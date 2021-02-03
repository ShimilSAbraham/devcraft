let colors = ["#0CFB4F", "#0CA5FB", "#830CFB", "#FBE30C", "#FB700C"];
let filter = [
  "invert(80%) sepia(41%) saturate(6689%) hue-rotate(87deg) brightness(120%) contrast(97%)",
  "invert(50%) sepia(89%) saturate(2670%) hue-rotate(175deg) brightness(102%) contrast(97%)",
  "invert(16%) sepia(63%) saturate(6671%) hue-rotate(269deg) brightness(91%) contrast(118%)",
  "invert(80%) sepia(84%) saturate(873%) hue-rotate(350deg) brightness(101%) contrast(97%)",
  "invert(51%) sepia(40%) saturate(3868%) hue-rotate(355deg) brightness(99%) contrast(98%)"
];
let i = 0;
document.querySelector(".color-btn").addEventListener("click", () => {
  if (i > 4) i = 0;
  var color = colors[i];
  document.documentElement.style.setProperty("--color", color);
  document.querySelector(".img").style.filter = filter[i];
  i += 1;
});


var check = false ;
document.querySelector(".fa-arrow-circle-right").addEventListener("click", () => {
  let menu = document.querySelector(".menu");
  var item=document.querySelectorAll(".item-text");
  var x;
  if (check==false)
  {
    for(x of item){
      x.style.display="inline";
    }
    menu.style.left = "-5px";
    menu.style.width = "150px";
    menu.style.alignItems = "flex-end";
    menu.style.paddingRight = "20px";
    document.querySelector(".fa-arrow-circle-right").style.transform = "rotate(180deg) scale(1.6)";
    check=true;
  }
  else
  {
    for(x of item){
      x.style.display="none";
    }
    menu.style.left = "-30px";
    menu.style.width = "100px";
    menu.style.alignItems = "center";
    menu.style.paddingRight = "0";
    document.querySelector(".fa-arrow-circle-right").style.transform = "rotate(0deg) scale(1.6)";
    check=false;
  }
});


