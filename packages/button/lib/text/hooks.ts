import {
  fadeHoverSpan,
  fadeHoverTiming,
  fadePressSpan,
  fadePressTiming,
  growHoverSpan,
  growHoverTiming,
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
  setIsHover: (b: boolean) => void,
  hoverStateSpan: any
) => {
  const handleMouseDown = (e: React.MouseEvent) => {
    if (isDisabled) {
      return;
    }

    const span = pressStateSpan.current as HTMLSpanElement;
    const { top, left } = e.currentTarget.getBoundingClientRect();
    span.style.left = e.clientX - left + "px";
    span.style.top = e.clientY - top + "px";
    span.style.borderRadius = "50%";
    span.style.width = "100%";
    span.style.height = "100%";
    span.animate(growPressSpan, growPressTiming);
    btn.current.style.boxShadow = "none";
    setIsClicked(true);
  };
  const handleMouseUp = () => {
    if (isDisabled) {
      return;
    }
    const span = pressStateSpan.current as HTMLSpanElement;
    span.style.borderRadius = "50%";
    span.animate(fadePressSpan, fadePressTiming);
    btn.current.style.boxShadow = "none";
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
    setIsHover(true);
    const span = hoverStateSpan.current as HTMLSpanElement;
    span.style.width = "200%";
    span.style.height = "200%";
    span.style.borderRadius = "0";
    span.animate(growHoverSpan, growHoverTiming);
    btn.current.style.boxShadow = "none";
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
    handleMouseUp,
    handleBlur,
    handleFocus,
    handleHover,
    handleUnHover,
  };
};

export default useElevatedEvents;
