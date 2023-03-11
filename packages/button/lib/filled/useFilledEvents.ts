import onmousedown from "../shared/onmousedown";
import onfocus from "../shared/onfocus";
import onmouseover from "../shared/onmouseover";

const useFilledEvents = (
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
    onmouseover(isDisabled, isHover, isClicked, btn, setIsHover, 1, 0);
  };
  return {
    handleMouseDown,
    handleFocus,
    handleHover,
  };
};

export default useFilledEvents;
