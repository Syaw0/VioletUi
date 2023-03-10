const growPressSpan: Keyframe[] = [
  { width: "0px", height: "0px", opacity: "0" },
  { transform: "scale(3)", opacity: "12%" },
];
const fadePressSpan: Keyframe[] = [{ opacity: "12%" }, { opacity: 0 }];

const growHoverSpan: Keyframe[] = [{ opacity: "0" }, { opacity: "8%" }];

const fadeHoverSpan: Keyframe[] = [{ opacity: "8%" }, { opacity: "0" }];

const growHoverTiming: KeyframeAnimationOptions = {
  duration: 400,
  fill: "both",
  easing: "ease",
};

const fadeHoverTiming: KeyframeAnimationOptions = {
  duration: 500,
  fill: "both",
  easing: "ease",
};
const growPressTiming: KeyframeAnimationOptions = {
  duration: 900,
  fill: "both",
  easing: "ease",
};

const fadePressTiming: KeyframeAnimationOptions = {
  duration: 800,
  fill: "both",
  easing: "ease",
};

export {
  fadeHoverSpan,
  fadePressSpan,
  growHoverSpan,
  growPressSpan,
  fadeHoverTiming,
  growHoverTiming,
  fadePressTiming,
  growPressTiming,
};
