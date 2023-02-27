const keyframe: Keyframe[] = [
  { width: "0", height: "0", opacity: "1" },
  { width: "100%", height: "100%", opacity: "0" },
];

// const keyframe: Keyframe[] = [
//   { width: "1px", height: "1px", opacity: "1" },
//   { transform: "scale(2)", opacity: "0" },
// ];

const timing: KeyframeAnimationOptions = {
  duration: 500,
  fill: "both",
  easing: "ease",
};

const keyframe2: Keyframe[] = [
  { width: "0", height: "0", opacity: "1" },
  { width: "100%", height: "100%", opacity: "1" },
];

const timing2: KeyframeAnimationOptions = {
  duration: 500,
  fill: "both",
  easing: "ease",
};

export { timing, keyframe, keyframe2, timing2 };
