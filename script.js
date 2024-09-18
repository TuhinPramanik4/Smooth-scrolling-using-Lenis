const lenis = new Lenis();
lenis.on('scroll', (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

gsap.registerPlugin(ScrollTrigger)

document.querySelectorAll(".grid > div").forEach(elem => {
  let image = elem.querySelector("img");
  let tl = gsap.timeline();
  
  
  let xTransform = gsap.utils.random(-100, 100);

  tl.set(image, {
    transformOrigin: `${xTransform < 0 ? '0%' : '100%'}`  // Proper transform origin
  },"start")
  .to(image, {
    scale: 0,  
    ease: "none",  
    scrollTrigger: {
      trigger: image,  
      start: "top top",  
      end: "bottom top",  
      scrub: true  
    }
  },"start")
  .to(elem,{
    xpercent: xTransform,
    ease: "power4.easeInOut",
    scrollTrigger: {
      trigger: image,  
      start: "top bottom",  
      end: "bottom top",  
      scrub: true  
    }
  })
});
