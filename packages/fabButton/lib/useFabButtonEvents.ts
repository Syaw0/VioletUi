import onmousedown from "./shared/onmousedown";
import onfocus from "./shared/onfocus";
import onmouseover from "./shared/onmouseover";

const useFabButtonEvents = (
  isDisabled: boolean,
  setIsClicked: (b: boolean) => void,
  isClicked: boolean,
  btn: any,
  isHover: boolean,
  setIsHover: (b: boolean) => void,
  elevationLevel: "default" | "small"
) => {
  const handleMouseDown = (e: React.MouseEvent) => {
    onmousedown(
      e,
      isDisabled,
      btn,
      setIsClicked,
      1,
      elevationLevel == "default" ? 4 : 2
    );
  };

  const handleFocus = () => {
    onfocus(
      isDisabled,
      isClicked,
      btn,
      elevationLevel == "default" ? 3 : 1,
      elevationLevel == "default" ? 3 : 1
    );
  };

  const handleHover = () => {
    onmouseover(
      isDisabled,
      isHover,
      isClicked,
      btn,
      setIsHover,
      elevationLevel == "default" ? 4 : 2,
      elevationLevel == "default" ? 3 : 1
    );
  };
  return {
    handleMouseDown,
    handleFocus,
    handleHover,
  };
};

export default useFabButtonEvents;
