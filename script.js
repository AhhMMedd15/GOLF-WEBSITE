// function scroll(){
//   gsap.registerPlugin(ScrollTrigger);

// const locoScroll = new LocomotiveScroll({
//   el: document.querySelector(".main"),
//   smooth: true
// });

// locoScroll.on("scroll", ScrollTrigger.update);

// ScrollTrigger.scrollerProxy(".main", {
//   scrollTop(value) {
//     return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//   }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//   getBoundingClientRect() {
//     return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//   },
//   pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
// });

// }
// scroll();

var crsr = document.querySelector(".cursor");
var blur = document.querySelector(".cursor-blur");

document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px";
  blur.style.left = dets.x - 90 + "px";
  blur.style.top = dets.y - 90 + "px";
})



var swiper = new Swiper(".swiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    // el: ".swiper-pagination",
    clickable: true,
    // dynamicBullets:true,
    bulletClass: `swiper-pagination-bullet swiper-pagination-testClass`
  },
});


function gsapper() {

  gsap.to(".main-animation .anime>h1",{
    y:"0",

  })

  gsap.to(".nav", {

    backgroundColor: "#000",
    height: "100px",
    duration: 0.5,
    scrollTrigger: {
      trigger: ".nav",
      scroller: "body",
      start: "top -10%",
      end: "top -11%",
      scrub: 1,
    }

  })

  gsap.to(".main", {

    backgroundColor: "#000",
    scrollTrigger: {
      trigger: ".main",
      scroller: "body",
      start: "top -60%",
      end: "top -76%",
      scrub: 2,
    }

  })

  // gsap.to(".about-us img",{
  //     x:0,
  //     duration:2,
  //     ease: Expo.easeInOut,
  //     delay:3,
  //     stagger:0.3,

  // })

  gsap.to(".comas-left>img", {
    x: 60,
    y: 10,
    duration: 2,
    delay: 3,
    ease: Expo.easeInOut,
    stagger: 0.3,
    scrollTrigger: {
      scroll: "body",
      trigger: ".content-container",
      // markers:true,
      start: "top 30%",
      end: "top 50%",
      scrub: 1,
    }
  })

  gsap.to(".comas-right>img", {
    x: -80,
    y: -10,
    scrollTrigger: {
      scroll: "body",
      trigger: ".content-container",
      // markers:true,
      start: "top 30%",
      end: "top 50%",
      scrub: 1,
    }
  })

  gsap.to(".bg-content>h1", {
    y: "15%",
    scrollTrigger: {
      scroll: "body",
      trigger: ".bg-content",
      // markers:true,
      start: "top 40%",
      end: "top 50%",
      scrub: 1,
    }
  })

  gsap.from(".about-us>img,.about-us .content", {
    y: "40%",
    duration: 1,
    delay: 1,
    scale: 0.9,
    opacity: 0,
    scrollTrigger: {
      scroll: "body",
      trigger: ".about-us",
      // markers:true,
      start: "top 30%",
      end: "top 40%",
      scrub: 4,
    }
  })




  gsap.from(".swiper-content .swiper-content-left", {
    x: "-30%",
    ease: Expo.easeInOut,
    duration: 2,
    delay: 2,
    opacity: 0,
    scrollTrigger: {
      scroll: "body",
      trigger: ".swiper-content",
      // markers:true,
      start: "top 20%",
      end: "top 40%",
      scrub: 5,
    }
  })



}
gsapper();





// MenuBAR
// MenuBAR
// MenuBAR

  var menubar = document.querySelector(".main-bar")
  var menu = document.querySelector(".menu>h3");
  var check = 0;
 menu.addEventListener("click", function(){
   if (check == 0) {
     menubar.style.display = "block";
     check = 1;
   } else {
     menubar.style.display = "none";
     check = 0;
   }
 })


//HoverEFFECT
//HoverEFFECT
//HoverEFFECT
var color=document.querySelector(".bg-content>h1");
var hover=document.querySelector(".bg-content-img");
hover.addEventListener("mouseenter",function(){
    color.style.color="white";
})
hover.addEventListener("mouseleave",function(){
  color.style.color="transparent";
})

//MAINANIMATION
//MAINANIMATION
//MAINANIMATION
var animate= document.querySelector(".main-animation");
setTimeout(function(){
    animate.style.transform = "translateY(-100%)";
},4000)