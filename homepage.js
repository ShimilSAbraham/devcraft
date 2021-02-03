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


