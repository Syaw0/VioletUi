import onmousedown from "../shared/onmousedown";
import onfocus from "../shared/onfocus";
import onmouseover from "../shared/onmouseover";

const useElevatedEvents = (
  isDisabled: boolean,
  setIsClicked: (b: boolean) => void,
  isClicked: boolean,
  btn: any,
  isHover: boolean,
  setIsHover: (b: boolean) => void
) => {
  const handleMouseDown = (e: React.MouseEvent) => {
    onmousedown(e, isDisabled, btn, setIsClicked, 1, 2);
  };

  const handleFocus = () => {
    onfocus(isDisabled, isClicked, btn, 1, 1);
  };

  const handleHover = () => {
    onmouseover(isDisabled, isHover, isClicked, btn, setIsHover, 2, 1);
  };
  return {
    handleMouseDown,
    handleFocus,
    handleHover,
  };
};

export default useElevatedEvents;
