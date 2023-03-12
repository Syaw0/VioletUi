import {
  fadePressSpan,
  fadePressTiming,
  growFocusSpan2,
  growFocusTiming2,
  growPressSpan,
  growPressTiming,
} from "../animations";
import makeBubbleSpan from "./makeBubbleSpan";

const onfocus = (isDisabled: boolean, isClicked: boolean, btn: any) => {
  if (isDisabled || isClicked) {
    return;
  }
  const button = btn.current as HTMLButtonElement;
  button.style.boxShadow = "none";
  const span = makeBubbleSpan(0, 0, "50%", "50%");
  button.appendChild(span);
  span.style.borderRadius = "30px";
  span.style.width = "37%";
  span.style.height = "30px";
  span.animate(growPressSpan, growPressTiming);
  span.animate(growFocusSpan2, growFocusTiming2);
  const blur = () => {
    button.removeEventListener("blur", blur);
    button.style.boxShadow = "none";
    if (isDisabled || isClicked) {
      return;
    }
    const fadeBubbleAnimation = new Animation(
      new KeyframeEffect(span, fadePressSpan, fadePressTiming),
      document.timeline
    );
    fadeBubbleAnimation.play();
    fadeBubbleAnimation.addEventListener("finish", () => {
      button.removeChild(span);
    });
  };
  button.addEventListener("blur", blur);
};

export default onfocus;
