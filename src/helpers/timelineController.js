import gsap from "gsap";

let directions = [
  { x: '120%', y: '0%', rotation: 5 },
  { x: '10%', y: '115%', rotation: 3 },
  { x: '10%', y: '-115%', rotation: 5 },
  { x: '10%', y: '115%', rotation: 5 },
  { x: '128%', y: '0%', rotation: 5 },
  { x: '10%', y: '125%', rotation: 0 },
  { x: '10%', y: '-117%', rotation: 10 }
];

const resetIndexes = (Images) => {
  Images.forEach((image, index) => {
    image.style.zIndex = Images.length + 1 - index;
  });
};

const timelineController = (
  Section1,
  Section2,
  TextLinks,
  Images,
  HeaderTitle1,
  HeaderTitle2
) => {
  let tl = gsap.timeline({ paused: true });
  let zIndex = Images.length + 1;

  resetIndexes(Images);

  tl.addLabel("intro-section");

  tl.to(
    TextLinks,
    {
      y: -window.innerHeight,
      ease: "power2.inOut",
      duration: 1,
      stagger: 0.08,
      delay: 0.5
    },
    "intro-section"
  );

  Images.forEach((image, index) => {
    index !== Images.length - 1 &&
      tl.to(
        image,
        {
          x: directions[index].x,
          y: directions[index].y,
          duration: 0.4,
          rotationZ: directions[index].rotation,
          delay: index * 0.4,
          ease: "power1.inOut",
          onReverseComplete: () => {
            if (index > 0) {
              zIndex++;
              image.previousElementSibling.style.zIndex = zIndex;
              if (index === 1) {
                resetIndexes(Images);
                zIndex = Images.length + 1;
              }
            }
          },
          onComplete: () => {
            if (Images.length - 2 !== index) {
              zIndex++;
              image.nextElementSibling.style.zIndex = zIndex;
            }
          }
        },
        "intro-section"
      );
  });

  tl.addLabel("move-section")
    .to(
      Section1,
      {
        y: -window.innerHeight,
        autoAlpha: 0,
        duration: 1,
        ease: "power3.inOut"
      },
      "move-section"
    )
    .from(
      Section2,
      {
        y: window.innerHeight,
        duration: 1,
        ease: "power3.inOut"
      },
      "move-section"
    )
    .to(
      HeaderTitle1,
      {
        y: "-100%",
        autoAlpha: 0,
        duration: 0.5,
        delay: 0.3,
        ease: "power3.inOut"
      },
      "move-section"
    )
    .from(
      HeaderTitle2,
      {
        y: "100%",
        duration: 0.5,
        delay: 0.3,
        ease: "power3.inOut"
      },
      "move-section"
    );

  return tl;
};

export default timelineController;
