import React from "react";

const ApodSVG = (props) => {
  const apod = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M15 6.5C13.1682 6.5 11.5456 7.39497 10.5452 8.77368L10.3013 9.10975L9.92617 8.93178C9.34287 8.65506 8.69024 8.5 8 8.5C5.51472 8.5 3.5 10.5147 3.5 13C3.5 15.4853 5.51472 17.5 8 17.5C9.14694 17.5 10.1926 17.0716 10.9876 16.3653L11.2984 16.0891L11.6266 16.3443C12.5582 17.0688 13.728 17.5 15 17.5C18.0376 17.5 20.5 15.0376 20.5 12C20.5 8.96243 18.0376 6.5 15 6.5ZM9.98207 7.86812C11.1736 6.42274 12.979 5.5 15 5.5C18.5899 5.5 21.5 8.41015 21.5 12C21.5 15.5899 18.5899 18.5 15 18.5C13.6425 18.5 12.3812 18.0834 11.3384 17.3712C10.4128 18.0791 9.25509 18.5 8 18.5C4.96243 18.5 2.5 16.0376 2.5 13C2.5 9.96243 4.96243 7.5 8 7.5C8.69805 7.5 9.36664 7.63028 9.98207 7.86812Z"
        fill="none"
      />
    </svg>
  );
  return apod;
};

export default ApodSVG;