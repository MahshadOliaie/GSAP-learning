// gsap.to(".box" , {duration: 1 , rotate: 360 , stagger: 0.2} )

gsap.to(".box", {
  duration: 1,
  delay: 1,
  repeat: -1,
  yoyo: true,
  y: 100,
  scale: 0.5,
  opacity: 0.5,
  stagger: { each: 0.1, from: "center", ease: "power2.inOut" },
});

gsap.to(".grid-box", {
  duration: 1, 
  delay: 1,
  repeat: -1,
  yoyo: true,
  y: 100,
  scale: 0.5,
  opacity: 0.5,
  stagger: { each: 0.1, from: "center", ease: "power2.inOut" , grid: 'auto' , axis: "x" },
});
