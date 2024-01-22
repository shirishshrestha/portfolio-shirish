var tl = gsap.timeline();

gsap.to(".loader", {
  x: "-102%",
  // y: "100%",
  duration: 2,
  ease: "easeOut",
});
gsap.to(".loader__two", {
  x: "102%",
  // y: "-100%",
  duration: 2,
  ease: "easeOut",
});

tl.from(".hero__title h2:first-child", {
  x: -200,
  delay: 1.8,
  opacity: 0,
  duration: 0.5,
  ease: "power1.inOut",
});

tl.from(".hero__title h2:last-child", {
  x: 200,
  opacity: 0,
  duration: 0.5,
  ease: "power1.inOut",
});

tl.from(".hero__title div h5", {
  y: 100,
  opacity: 0,
  duration: 0.5,
  ease: "power1.inOut",
  stagger: 0.4,
});

gsap.to(".scroll__icon", {
  y: "20px",
  ease: "power2.inOut",
  duration: 1,
  yoyo: true,
  repeat: -1,
});

document.querySelectorAll(".stripe").forEach(function (stripe) {
  stripe.addEventListener("mousemove", function () {
    gsap.to(this.children[0], {
      height: "100%",
      ease: "expo",
      duration: 0.5,
    });

    gsap.to(this.children[1], {
      color: "#080808",
    });
  });

  stripe.addEventListener("mouseleave", function () {
    gsap.to(this.children[0], {
      height: 0,
      ease: "expo",
      duration: 0.5,
    });

    gsap.to(this.children[1], {
      color: "#e9f1f3",
    });
  });
});
