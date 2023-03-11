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

const useElevatedEvents = (
  isDisabled: boolean,
  setIsClicked: (b: boolean) => void,
  isClicked: boolean,
  btn: any,
  isHover: boolean,
  setIsHover: (b: boolean) => void,
  hoverStateSpan: any
) => {
  const handleMouseDown = (e: React.MouseEvent) => {
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
      if (isDisabled) {
        return;
      }
      button.removeEventListener("mouseup", mouseup);
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
      button.style.boxShadow = "none";
    };
    button.addEventListener("mouseup", mouseup);
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
    if (isDisabled) {
      return;
    }
    if (isClicked || isHover) {
      return;
    }
    const span = hoverStateSpan.current as HTMLSpanElement;
    span.style.width = "200%";
    span.style.height = "200%";
    span.style.borderRadius = "0";
    span.animate(growHoverSpan, growHoverTiming);
    btn.current.style.boxShadow = "none";
    setIsHover(true);
  };
  const handleUnHover = () => {
    if (isDisabled) {
      return;
    }
    const span = hoverStateSpan.current as HTMLSpanElement;
    span.animate(fadeHoverSpan, fadeHoverTiming);
    btn.current.style.boxShadow = "none";
    setIsHover(false);
  };

  return {
    handleMouseDown,

    handleFocus,
    handleHover,
    handleUnHover,
  };
};

export default useElevatedEvents;
