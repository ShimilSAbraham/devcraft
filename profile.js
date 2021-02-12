TweenMax.set('#circlePath', {
  attr: {
    r: document.querySelector('#mainCircle').getAttribute('r')
  }
})
MorphSVGPlugin.convertToPath('#circlePath');

var xmlns = "http://www.w3.org/2000/svg",
  xlinkns = "http://www.w3.org/1999/xlink",
  select = function(s) {
    return document.querySelector(s);
  },
  selectAll = function(s) {
    return document.querySelectorAll(s);
  },
  mainCircle = select('#mainCircle'),
  mainContainer = select('#mainContainer'),
  car = select('#car'),
  mainSVG = select('.mainSVG'),
  mainCircleRadius = Number(mainCircle.getAttribute('r')),
  //radius = mainCircleRadius,
  numDots = mainCircleRadius / 2,
  step = 360 / numDots,
  dotMin = 0,
  circlePath = select('#circlePath')

//
//mainSVG.appendChild(circlePath);
TweenMax.set('svg', {
  visibility: 'visible'
})
TweenMax.set([car], {
  transformOrigin: '50% 50%'
})
TweenMax.set('#carRot', {
  transformOrigin: '0% 0%',
  rotation:30
})

var circleBezier = MorphSVGPlugin.pathDataToBezier(circlePath.getAttribute('d'), {
  offsetX: -20,
  offsetY: -5
})



//console.log(circlePath)
var mainTl = new TimelineMax();

function makeDots() {
  var d, angle, tl;
  for (var i = 0; i < numDots; i++) {

    d = select('#puff').cloneNode(true);
    mainContainer.appendChild(d);
    angle = step * i;
    TweenMax.set(d, {
      //attr: {
      x: (Math.cos(angle * Math.PI / 180) * mainCircleRadius) + 400,
      y: (Math.sin(angle * Math.PI / 180) * mainCircleRadius) + 300,
      rotation: Math.random() * 360,
      transformOrigin: '50% 50%'
        //}
    })

    tl = new TimelineMax({
      repeat: -1
    });
    tl
      .from(d, 0.2, {
        scale: 0,
        ease: Power4.easeIn
      })
      .to(d, 1.8, {
        scale: Math.random() + 2,
        alpha: 0,
        ease: Power4.easeOut
      })

    mainTl.add(tl, i / (numDots / tl.duration()))
  }
  var carTl = new TimelineMax({
    repeat: -1
  });
  carTl.to(car, tl.duration(), {
    bezier: {
      type: "cubic",
      values: circleBezier,
      autoRotate: true
    },
    ease: Linear.easeNone
  })
  mainTl.add(carTl, 0.05)
}

makeDots();
mainTl.time(120);
TweenMax.to(mainContainer, 20, {
  rotation: -360,
  svgOrigin: '400 300',
  repeat: -1,
  ease: Linear.easeNone
});
mainTl.timeScale(1.1)
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


