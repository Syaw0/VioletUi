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
  setIsHover: (b: boolean) => void
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
    if (isDisabled || isClicked || isHover) {
      return;
    }

    const span = makeBubbleSpan(0, 0, 0, 0);
    const button = btn.current as HTMLButtonElement;
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
