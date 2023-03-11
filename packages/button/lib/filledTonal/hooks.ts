import makeBubbleSpan from "../shared/makeBubbleSpan";
import {
  fadeHoverSpan,
  fadeHoverTiming,
  fadePressSpan,
  fadePressTiming,
  growFocusSpan2,
  growFocusTiming2,
  growHoverSpan,
  growHoverTiming,
  growPressSpan,
  growPressTiming,
} from "../animations";
import onmousedown from "../shared/onmousedown";

const useElevatedEvents = (
  isDisabled: boolean,
  setIsClicked: (b: boolean) => void,
  isClicked: boolean,
  btn: any,
  isHover: boolean,
  setIsHover: (b: boolean) => void
) => {
  const handleMouseDown = (e: React.MouseEvent) => {
    onmousedown(e, isDisabled, btn, setIsClicked, 0, 1);
  };

  const handleFocus = () => {
    if (isDisabled || isClicked) {
      return;
    }
    const button = btn.current as HTMLButtonElement;
    const span = makeBubbleSpan(0, 0, "50%", -20);
    button.appendChild(span);
    span.style.borderRadius = "30px";
    span.style.width = "37%";
    span.style.height = "30px";
    span.animate(growPressSpan, growPressTiming);
    span.animate(growFocusSpan2, growFocusTiming2);
    const blur = () => {
      button.removeEventListener("blur", blur);
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

  const handleHover = () => {
    if (isDisabled || isClicked || isHover) {
      return;
    }

    const span = makeBubbleSpan(0, 0, 0, 0);
    const button = btn.current as HTMLButtonElement;
    button.style.boxShadow = "var(--shadow1dp)";
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
  return {
    handleMouseDown,
    handleFocus,
    handleHover,
  };
};

export default useElevatedEvents;
