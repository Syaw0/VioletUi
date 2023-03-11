import onmousedown from "./shared/onmousedown";
import onfocus from "./shared/onfocus";
import onmouseover from "./shared/onmouseover";

const useFabButtonEvents = (
  isDisabled: boolean,
  setIsClicked: (b: boolean) => void,
  isClicked: boolean,
  btn: any,
  isHover: boolean,
  setIsHover: (b: boolean) => void
) => {
  const handleMouseDown = (e: React.MouseEvent) => {
    onmousedown(e, isDisabled, btn, setIsClicked, 1, 4);
  };

  const handleFocus = () => {
    onfocus(isDisabled, isClicked, btn, 3, 3);
  };

  const handleHover = () => {
    onmouseover(isDisabled, isHover, isClicked, btn, setIsHover, 4, 3);
  };
  return {
    handleMouseDown,
    handleFocus,
    handleHover,
  };
};

export default useFabButtonEvents;
