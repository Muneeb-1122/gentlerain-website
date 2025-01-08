UnicornStudio.addScene({
  elementId: "unicorn", // id of the HTML element to render your scene in (the scene will use its dimensions)
  fps: 60, // frames per second (0-120) [optional]
  scale: 1, // rendering scale, use smaller values for performance boost (0.25-1) [optional]
  dpi: 1, // pixel ratio [optional]

  lazyLoad: true, // will not initialize the scene until it scrolls into view
  filePath: "effect.json", // if youre hosting your own exported json code, point to it here (do not use both filePath and projectId, only one is required)
  altText: "Welcome to Unicorn Studio", // optional text for SEO, going inside the <canvas> tag
  ariaLabel: "This is a canvas scene", // optional text for the aria-label attribute on the <canvas> element
  production: false, // when true, will hit the global edge CDN, learn more in the help docs
  interactivity: {
    // [optional]
    mouse: {
      disableMobile: true, // disable touch movement on mobile
    },
  },
})
  .then((scene) => {
    // scene is ready
    // To remove a scene, you can use:
    // scene.destroy()
  })
  .catch((err) => {
    console.error(err);
  });

var videoContainer = document.querySelector(".section-2");
var blob = document.querySelector(".blob");

videoContainer.addEventListener("mousemove", function (event) {
  const x = event.clientX * 0.1; // Horizontal movement (scaled)
  const y = event.clientY * 0.1; // Vertical movement (scaled)

  blob.style.transform = `translate(${x}px, ${y}px)`;
});

document.addEventListener("DOMContentLoaded", (event) => {
  var part1 = gsap.timeline({
    scrollTrigger: {
      trigger: "#section2-1",
      start: "8% 100%",
      end: "90% 0%",
      // markers: true,
      scrub: true,
      duration: 1,
    },
  });
  part1.to(
    "#top-nav-section-2",
    {
      backgroundColor: "#FD7024",
    },
    "a"
  );
  part1.from(
    "#section2-1 h1, #section2-1 p, #section2-1 img",
    {
      y: -850,
      opacity: 0,
    },
    "a"
  );
  part1.to("#section2-1 h1, #section2-1 p, #section2-1 img", {
    y: 850,
    opacity: 0,
  });


  var part2 = gsap.timeline({
    scrollTrigger: {
      trigger: "#section2-2",
      start: "8% 100%",
      end: "90% 0%",
      // markers: true,
      scrub: true,
      duration: 1,
    },
  });
  part2.to(
    "#top-nav-section-2",
    {
      backgroundColor: "#FD7024",
    },
    "a"
  );
  part2.from(
    "#section2-2 h1, #section2-2 p, #section2-2 img",
    {
      y: -850,
      opacity: 0,
    },
    "a"
  );
  part2.to("#section2-2 h1, #section2-2 p, #section2-2 img", {
    y: 850,
    opacity: 0,
  });

});
