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
