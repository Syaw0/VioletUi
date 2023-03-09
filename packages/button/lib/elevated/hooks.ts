import {
  fadeHoverSpan,
  fadeHoverTiming,
  fadePressSpan,
  fadePressTiming,
  growHoverSpan,
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
    setIsClicked(true);
    const span = pressStateSpan.current as HTMLSpanElement;
    const { top, left } = e.currentTarget.getBoundingClientRect();
    span.style.left = e.clientX - left + "px";
    span.style.top = e.clientY - top + "px";
    span.style.borderRadius = "50%";
    span.style.width = "100%";
    span.style.height = "100%";
    span.animate(growPressSpan, growPressTiming);
    btn.current.style.boxShadow = "var(--shadow1dp)";
  };

  const handleMouseUp = () => {
    if (isDisabled) {
      return;
    }
    const span = pressStateSpan.current as HTMLSpanElement;
    span.style.borderRadius = "50%";
    span.animate(fadePressSpan, fadePressTiming);
    btn.current.style.boxShadow = "var(--shadow2dp)";
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
    btn.current.style.boxShadow = "var(--shadow1dp)";
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
    btn.current.style.boxShadow = "var(--shadow1dp)";
  };
  const handleHover = (e: React.MouseEvent) => {
    if (isDisabled) {
      return;
    }
    if (isClicked || isHover) {
      return;
    }
    const span = hoverStateSpan.current as HTMLSpanElement;
    const { top, left } = e.currentTarget.getBoundingClientRect();
    console.log(e.pageX, e.pageY, e.pageY - top, e.pageX - left);
    span.style.width = "200%";
    span.style.height = "200%";
    span.style.borderRadius = "0";
    span.animate(growHoverSpan, growPressTiming);
    btn.current.style.boxShadow = "var(--shadow2dp)";
    setIsHover(true);
  };
  const handleUnHover = () => {
    if (isDisabled) {
      return;
    }
    const span = hoverStateSpan.current as HTMLSpanElement;
    span.animate(fadeHoverSpan, fadeHoverTiming);
    console.log("no hover");
    btn.current.style.boxShadow = "var(--shadow1dp)";
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
