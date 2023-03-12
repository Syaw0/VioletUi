import {
  fadePressSpan,
  fadePressTiming,
  growPressSpan,
  growPressTiming,
} from "../animations";
import makeBubbleSpan from "./makeBubbleSpan";

const onmousedown = (
  e: React.MouseEvent,
  isDisabled: boolean,
  btn: any,
  setIsClicked: (b: boolean) => void
) => {
  if (isDisabled) {
    return;
  }
  setIsClicked(true);
  const button = btn.current as HTMLButtonElement;
  const { top, left } = e.currentTarget.getBoundingClientRect();
  const span = makeBubbleSpan(e.clientX, e.clientY, left, top);
  button.appendChild(span);
  span.animate(growPressSpan, growPressTiming);
  button.style.boxShadow = "none";
  const mouseup = () => {
    button.removeEventListener("mouseup", mouseup);
    button.style.boxShadow = "none";
    if (isDisabled) {
      return;
    }
    const fadeBubbleAnimation = new Animation(
      new KeyframeEffect(span, fadePressSpan, fadePressTiming),
      document.timeline
    );

    fadeBubbleAnimation.addEventListener("finish", () => {
      button.removeChild(span);
      setIsClicked(false);
      button.blur();
    });
    fadeBubbleAnimation.play();
  };
  button.addEventListener("mouseup", mouseup);
};

export default onmousedown;
