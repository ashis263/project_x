import * as React from "react";

function Icon(props) {
  return (
    <svg
      width={55}
      height={52}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M53.285 28.582c-3.301-1.345-9.42-6.675-20.183 1.336-2.83-1.57-8.073-5.34-16.147 1.335-.943-3.813-1.131-12.491 0-20.026.471-1.122 2.414-1.916 8.074 4.005l6.727-6.675c-.47-2.916-4.037-6.676-14.8-6.676-4.037 0-7.721 3.425-9.42 9.346-2.121 6.054-5.381 20.026-5.381 28.036 0 2.467 3.363 8.01 16.146 8.01 2.69 0 10.562.3 20.183-4.005l8.073 6.675"
        stroke="#DA2348"
        strokeWidth={3.068}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Icon;