const growPressSpan: Keyframe[] = [
  {
    width: "0px",
    height: "0px",
    opacity: "0",
    transform: "translate(-50%,-50%)",
  },
  { opacity: "12%", transform: "translate(-50%,-50%) scale(2)" },
];

const growFocusSpan: Keyframe[] = [
  {
    width: "0px",
    height: "0px",
    opacity: "0",
    transform: "translate(-50%,-50%)",
  },
  { opacity: "12%", transform: "translate(-50%,-50%) scale(2)" },
];
const growFocusSpan2: Keyframe[] = [
  {
    transform: "translate(-50%,-50%) scale(2.2)",
  },
  { opacity: "12%", transform: "translate(-50%,-50%) scale(2)" },
  { opacity: "12%", transform: "translate(-50%,-50%) scale(2.2)" },
];

const fadePressSpan: Keyframe[] = [{ opacity: "12%" }, { opacity: 0 }];

const growHoverSpan: Keyframe[] = [{ opacity: "0" }, { opacity: "8%" }];

const fadeHoverSpan: Keyframe[] = [{ opacity: "8%" }, { opacity: "0" }];

const growFocusTiming: KeyframeAnimationOptions = {
  duration: 400,
  fill: "both",
  easing: "ease",
};
const growFocusTiming2: KeyframeAnimationOptions = {
  duration: 1500,
  fill: "both",
  easing: "ease",
  iterations: 10 ** 20,
};

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
  duration: 1000,
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
  growFocusSpan,
  growFocusTiming,
  growFocusSpan2,
  growFocusTiming2,
};
