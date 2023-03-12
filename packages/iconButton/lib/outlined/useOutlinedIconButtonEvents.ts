import onmousedown from "../shared/onmousedown";
import onfocus from "../shared/onfocus";
import onmouseover from "../shared/onmouseover";

const useOutlinedIconButtonEvents = (
  isDisabled: boolean,
  setIsClicked: (b: boolean) => void,
  isClicked: boolean,
  btn: any,
  isHover: boolean,
  setIsHover: (b: boolean) => void
) => {
  const handleMouseDown = (e: React.MouseEvent) => {
    onmousedown(e, isDisabled, btn, setIsClicked);
  };

  const handleFocus = () => {
    onfocus(isDisabled, isClicked, btn);
  };

  const handleHover = () => {
    onmouseover(isDisabled, isHover, isClicked, btn, setIsHover);
  };
  return {
    handleMouseDown,
    handleFocus,
    handleHover,
  };
};

export default useOutlinedIconButtonEvents;
