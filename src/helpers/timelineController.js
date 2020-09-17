import gsap from "gsap";

//  this needs to support infinite images and rotation
let directions = [
  { x: 830, y: 0 },
  { x: 100, y: 650 },
  { x: 100, y: -650 },
  { x: 100, y: 700 },
  { x: 830, y: 0 },
  { x: 100, y: 670 },
  { x: 100, y: -750 },
  { x: 100, y: 600 }
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
    1,
    {
      y: -window.innerHeight,
      ease: "power2.inOut",
      stagger: 0.08,
      delay: 0.5
    },
    "intro-section"
  );

  Images.forEach((image, index) => {
    index !== Images.length - 1 &&
      tl.to(
        image,
        0.4,
        {
          x: directions[index].x,
          y: directions[index].y,
          rotationZ: 5,
          delay: index * 0.3,
          ease: "power2.inOut",
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
      1,
      {
        y: -window.innerHeight,
        autoAlpha: 0,
        ease: "power3.inOut"
      },
      "move-section"
    )
    .from(
      Section2,
      1,
      {
        y: window.innerHeight,
        ease: "power3.inOut"
      },
      "move-section"
    )
    .to(
      HeaderTitle1,
      0.5,
      {
        y: "-100%",
        autoAlpha: 0,
        delay: 0.3,
        ease: "power3.inOut"
      },
      "move-section"
    )
    .from(
      HeaderTitle2,
      0.5,
      {
        y: "100%",
        delay: 0.3,
        ease: "power3.inOut"
      },
      "move-section"
    );

  return tl;
};

export default timelineController;
