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