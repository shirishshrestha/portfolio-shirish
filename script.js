function handleSubmit(event) {
  event.preventDefault();
  const form = document.getElementById("contactForm");

  const formData = new FormData(form);
  const formDataObject = {};
  formData.forEach((value, key) => {
    formDataObject[key] = value;
  });

  axios
    .post(
      "https://formsubmit.co/ajax/79770d6565ab4456c115c312d18b0761",
      {
        name: formDataObject.name,
        email: formDataObject.email,
        message: formDataObject.message,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    )
    .then(() => {
      form.style.display = "none";
      const success = document.getElementById("successMessage");
      success.style.display = "block";
      form.reset();
    })
    .catch((error) => console.log(error));
}

Shery.mouseFollower({
  skew: true,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

Shery.makeMagnet(".logo a, .scroll, .project__github--button .button", {
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

var tl = gsap.timeline();

gsap.to(".loader", {
  x: "-102%",
  // y: "100%",
  duration: 1.5,
  ease: "easeOut",
});
gsap.to(".loader__two", {
  x: "102%",
  // y: "-100%",
  duration: 1.5,
  ease: "easeOut",
});

tl.to(".hero__image, .hero__image img", {
  // opacity: 0,
  y: "55%",
  x: "125%",
  opacity: 0.8,
  height: "2rem",
  width: "2rem",
  delay: 1.7,
  duration: 1,
  ease: "expo.out",
  borderRadius: "50%",
});

tl.from(".hero__title h2:first-child", {
  x: -200,
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

gsap.registerPlugin(ScrollTrigger);
const splitTypes = document.querySelectorAll(".reveal--para");

splitTypes.forEach((char, i) => {
  const text = new SplitType(char, { types: "chars" });

  gsap.from(text.chars, {
    scrollTrigger: {
      trigger: char,
      start: "top 50%",
      end: "top 30%",
      scrub: 4,
    },
    opacity: 0.2,
    stagger: 0.1,
    duration: 1,
  });
});

// gsap.from(".stripe > p", {
//   opacity: 0,
//   y: "-60%",
//   duration: 0.6,
//   stagger: 0.4,
//   scrollTrigger: {
//     trigger: ".about__desc",
//     start: "top 65%",
//   },
// });

// document.querySelectorAll(".stripe").forEach(function (stripe) {
//   stripe.addEventListener("mousemove", function () {
//     gsap.to(this.children[0], {
//       height: "100%",
//       ease: "ease",
//       duration: 0.5,
//     });

//     gsap.to(this.children[1], {
//       color: "#080808",
//     });
//   });

//   stripe.addEventListener("mouseleave", function () {
//     gsap.to(this.children[0], {
//       height: 0,
//       ease: "expo",
//       duration: 1,
//     });

//     gsap.to(this.children[1], {
//       color: "#e9f1f3",
//     });
//   });
// });

gsap.to(".desc__elem", {
  scrollTrigger: {
    trigger: ".project__content",
    pin: true,
    start: "top top",
    end: "bottom bottom",
    endTrigger: ".desc__last",
    scrub: 1,
  },
  y: "-300%",
  ease: "power1.in",
});

let description = document.querySelectorAll(".desc__elem");
Shery.imageEffect(".pimages", {
  style: 4,
  config: { onMouse: { value: 1 } },
  slideStyle: (setScroll) => {
    description.forEach(function (description, index) {
      ScrollTrigger.create({
        trigger: description,
        start: "50% 5%",
        scrub: 1,
        end: "110%",
        onUpdate: function (prog) {
          setScroll(prog.progress + index);
        },
      });
    });
  },
});

gsap.from(".tech__stack--left .stack__images", {
  x: "100%",
  opacity: 0,
  duration: 1.5,
  stagger: 0.5,
  scrollTrigger: {
    trigger: ".project__github--button",
    endTrigger: ".tech__third",
    scrub: 3,
    start: "top 15%",
    end: "bottom 60%",
  },
});
gsap.from(".tech__stack--right .stack__images", {
  x: "-100%",
  opacity: 0,
  duration: 1.5,
  stagger: 0.5,
  scrollTrigger: {
    trigger: ".project__github--button",
    endTrigger: ".tech__third",
    scrub: 3,
    start: "top 15%",
    end: "bottom 60%",
  },
});
