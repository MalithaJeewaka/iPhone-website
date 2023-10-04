//pin the first page
const tlIntro = gsap.timeline({
  scrollTrigger: {
    trigger: ".first-page",
    start: "0%",
    end: "100%",
    pin: true,
    pinSpacing: false,
  },
});

//text highlight

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".second-page",
    start: "-20%",
    end: "60%",
    scrub: true,
    // markers: { startColor: "blue", endColor: "blue" },
  },
});

tl.fromTo(
  ".highlight",
  { color: "rgba(255,255,255,0.6)" },
  { color: "rgba(255,255,255,1)", stagger: 1 }
);

const tlRemove = gsap.timeline({
  scrollTrigger: {
    trigger: ".second-page",
    start: "0%",
    end: "80%",
    scrub: true,
    // markers: { startColor: "pink", endColor: "pink" },
  },
});

tlRemove.to(".highlight", { color: "rgba(255,255,255,0.6)", stagger: 1 });

//////////////////////////

//page3
const tlSplit = gsap.timeline({
  scrollTrigger: {
    trigger: ".third-page",
    // markers: { startColor: "red", endColor: "red" },
    start: "-30%",
    end: "5%",
    scrub: true,
  },
});

tlSplit
  .to(".large-phone", { x: "20%" })
  .to(".small-phone", { x: "-20%" }, "<")
  .from(".product-text-left", { x: -50, opacity: 0 })
  .from(".product-text-right", { x: 50, opacity: 0 }, "<");

//pin page 3

const tlSplitPin = gsap.timeline({
  scrollTrigger: {
    trigger: ".third-page",
    start: "0%",
    end: "100%",
    pin: true,
    pinSpacing: false,
  },
});

///

//swatches

const swatches = document.querySelectorAll(".swatches img");
const gallery = document.querySelector(".phone-gallery");
const slides = document.querySelectorAll(".phone-gallery-container");

let currentSwatch = "blue";
let closeUpIndex = 1;

swatches.forEach((swatch, index) => {
  // this index gives the index of the swatch.we can use this index to select the selected slide in slides of each swatch. slides[index] = meken apita slides ganna puluwan

  //get the coordinate of slide
  const coord = slides[index].getBoundingClientRect().left;

  swatch.addEventListener("click", (e) => {
    let swatchName = e.target.getAttribute("swatch");
    let closeUp = document.querySelector(`.${swatchName}`);

    if (swatchName == currentSwatch) {
      return;
    } else {
      gsap.fromTo(
        closeUp,
        { zIndex: closeUpIndex, opacity: 0 },
        { opacity: 1, duration: 1 }
      );
      //increment zIndex
      currentSwatch = swatchName;
      closeUpIndex++;

      //gallery
      gsap.to(gallery, { x: -coord + 50, duration: 1 });
    }
  });
});

//page 5 video on scroll
const tlvideo = gsap.timeline({
  scrollTrigger: {
    trigger: ".fifth-page",
    start: "-20%",
    end: "100%",
    scrub: true,
  },
});

tlvideo.to(".product-video", { currentTime: 3 });

//page 5 pin
const tlpgpin = gsap.timeline({
  scrollTrigger: {
    trigger: ".fifth-page",
    start: "0%",
    end: "100%",
    pin: true,
    // markers: { startColor: "yellow", endColor: "yellow" },
    scrub: true,
  },
});

tlpgpin
  .fromTo(
    ".left-info h3",
    { opacity: 0, x: -50 },
    { opacity: 1, x: 0, stagger: 1 }
  )
  .fromTo(
    ".right-info h3",
    { opacity: 0, x: 50 },
    { opacity: 1, x: 0, stagger: 1 }
  );

//sixth page paralax

const tlParallax = gsap.timeline({
  scrollTrigger: {
    trigger: ".sixth-page",
    start: "-35%",
    end: "20%",
    scrub: true,
    // markers: { startColor: "green", endColor: "green" },
  },
});

tlParallax
  .fromTo(".photo-description", { y: 200 }, { y: 0 })
  .fromTo(".portrait-container", { y: 250 }, { y: 0 }, "<20%")
  .fromTo(".phone-video", { y: 100 }, { y: 0 }, "<");
