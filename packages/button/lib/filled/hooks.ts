import {
  fadeHoverTiming,
  fadePressSpan,
  fadePressTiming,
  growPressSpan,
  growPressTiming,
} from "../animations";

const useElevatedEvents = (
  isDisabled: boolean,
  setIsClicked: (b: boolean) => void,
  isClicked: boolean,
  pressStateSpan: any,
  btn: any,
  isHover: boolean,
  setIsHover: (b: boolean) => void
) => {
  const handleMouseDown = (e: React.MouseEvent) => {
    if (isDisabled) {
      return;
    }
    setIsClicked(true);
    const span = pressStateSpan.current as HTMLSpanElement;
    const { top, left } = e.currentTarget.getBoundingClientRect();
    span.style.left = e.clientX - left + "px";
    span.style.top = e.clientY - top + "px";
    span.style.borderRadius = "50%";
    span.style.width = "100%";
    span.style.height = "100%";
    span.style.transition = "width 1s ,height 1s";
    span.animate(growPressSpan, growPressTiming);
    btn.current.style.boxShadow = "none";
  };
  const handleMouseUp = () => {
    if (isDisabled) {
      return;
    }
    const span = pressStateSpan.current as HTMLSpanElement;
    span.style.borderRadius = "50%";
    span.animate(fadePressSpan, fadeHoverTiming);
    btn.current.style.boxShadow = "var(--shadow1dp)";
    btn.current.blur();
    setIsClicked(false);
  };
  const handleFocus = () => {
    if (isDisabled) {
      return;
    }
    if (isClicked) {
      return;
    }
    const span = pressStateSpan.current as HTMLSpanElement;
    span.style.borderRadius = "50%";
    span.style.width = "100%";
    span.style.height = "100%";
    span.style.transition = "width 1s ,height 1s";
    span.animate(growPressSpan, growPressTiming);
    btn.current.style.boxShadow = "none";
  };
  const handleBlur = () => {
    if (isDisabled) {
      return;
    }
    if (isClicked) {
      return;
    }
    const span = pressStateSpan.current as HTMLSpanElement;
    span.style.borderRadius = "50%";
    span.animate(fadePressSpan, fadePressTiming);
  };
  const handleHover = () => {
    if (isDisabled) {
      return;
    }
    if (isClicked || isHover) {
      return;
    }
    btn.current.style.boxShadow = "var(--shadow1dp)";
    setIsHover(true);
  };
  const handleUnHover = () => {
    if (isDisabled) {
      return;
    }
    btn.current.style.boxShadow = "none";
    setIsHover(false);
  };
  return {
    handleMouseDown,
    handleMouseUp,
    handleBlur,
    handleFocus,
    handleHover,
    handleUnHover,
  };
};

export default useElevatedEvents;
