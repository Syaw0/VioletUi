import React from "react";

const IconClose = ({ ...props }: React.ComponentPropsWithoutRef<"svg">) => (
  <svg {...props} viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M400 447.147L588.56 635.71C601.577 648.727 622.683 648.727 635.7 635.71C648.717 622.69 648.717 601.587 635.7 588.567L447.14 400.007L635.7 211.445C648.717 198.428 648.717 177.322 635.7 164.305C622.683 151.287 601.577 151.287 588.56 164.305L400 352.867L211.437 164.304C198.419 151.287 177.314 151.287 164.296 164.304C151.279 177.322 151.279 198.427 164.296 211.445L352.857 400.007L164.296 588.57C151.279 601.587 151.279 622.69 164.296 635.71C177.314 648.727 198.419 648.727 211.437 635.71L400 447.147Z"
    />
  </svg>
);

export default IconClose;