import makeBubbleSpan from "../shared/makeBubbleSpan";
import {
  fadeHoverSpan,
  fadeHoverTiming,
  growHoverSpan,
  growHoverTiming,
} from "../animations";
import onmousedown from "../shared/onmousedown";
import onfocus from "../shared/onfocus";

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
    onfocus(isDisabled, isClicked, btn, 0, 0);
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
