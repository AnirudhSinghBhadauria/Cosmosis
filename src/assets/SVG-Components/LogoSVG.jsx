import React, { memo } from "react";

const LogoSVG = (props) => {
  const logo = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      viewBox="0 0 24 24"
      fill="none"
      className={props.className}
      onClick={props.onClick}
    >
      <path
        d="M21.5 4.5V19.5H17.77L12 12.7683L6.22997 19.5H2.5V4.5H6.22997L12 11.2317L17.77 4.5H21.5ZM12.6585 12L17 17.065V6.93496L12.6585 12ZM18 5.7683L18 18.2317L18.23 18.5H20.5V5.5H18.23L18 5.7683ZM6 5.76829L5.77004 5.5H3.5V18.5H5.77004L6 18.2317V5.76829ZM7 6.93496V17.065L11.3415 12L7 6.93496Z"
        fill="white"
      />
    </svg>
  );

  return logo;
};

export default memo(LogoSVG);
