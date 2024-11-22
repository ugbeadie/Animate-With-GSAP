gsap.registerPlugin(ScrollTrigger);

// gsap.to(".square", {
//   x: 400,
//   duration: 8,
//   //   repeat: -1,
//   //   yoyo: true,
ScrollTrigger.create({
  trigger: ".square",
  start: "top 80%",
  end: "top 30%",
  scrub: 2,
  pin: true,
  toggleActions: "restart none none none",
  markers: true,
  toggleClass: "red",
  //   },
});
