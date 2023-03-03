const keyframe: Keyframe[] = [
  { width: "0", height: "0", opacity: "1" },
  { width: "100%", height: "100%", opacity: "0" },
];

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

const keyframe3: Keyframe[] = [{ opacity: "1" }, { opacity: "0" }];

const timing3: KeyframeAnimationOptions = {
  duration: 500,
  fill: "both",
  easing: "ease",
};

export { timing, keyframe, keyframe2, timing2, keyframe3, timing3 };
