import {
  fadeHoverSpan,
  fadeHoverTiming,
  growHoverSpan,
  growHoverTiming,
} from "../animations";
import makeBubbleSpan from "./makeBubbleSpan";

const onmouseover = (
  isDisabled: boolean,
  isHover: boolean,
  isClicked: boolean,
  btn: any,
  setIsHover: (b: boolean) => void,
  preElevation: number,
  nextElevation: number
) => {
  if (isDisabled || isClicked || isHover) {
    return;
  }

  const span = makeBubbleSpan(0, 0, 0, 0);
  const button = btn.current as HTMLButtonElement;
  button.style.boxShadow =
    preElevation == 0 ? "none" : `var(--shadow${preElevation}dp`;
  button.appendChild(span);
  span.style.width = "100%";
  span.style.height = "100%";
  span.style.borderRadius = "0";
  span.animate(growHoverSpan, growHoverTiming);
  setIsHover(true);
  const mouseleave = () => {
    button.removeEventListener("mouseleave", mouseleave);

    if (isDisabled) {
      return;
    }
    button.style.boxShadow =
      nextElevation == 0 ? "none" : `var(--shadow${nextElevation}dp`;
    const fadeBubbleAnimation = new Animation(
      new KeyframeEffect(span, fadeHoverSpan, fadeHoverTiming),
      document.timeline
    );
    fadeBubbleAnimation.play();
    fadeBubbleAnimation.addEventListener("finish", () => {
      button.removeChild(span);
    });
    setIsHover(false);
  };
  button.addEventListener("mouseleave", mouseleave);
};
export default onmouseover;
