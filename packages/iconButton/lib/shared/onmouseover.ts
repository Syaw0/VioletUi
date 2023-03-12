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
  setIsHover: (b: boolean) => void
) => {
  if (isDisabled || isClicked || isHover) {
    return;
  }

  const span = makeBubbleSpan(0, 0, 0, 0);
  const button = btn.current as HTMLButtonElement;
  button.style.boxShadow = "none";
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
    button.style.boxShadow = "none";
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
