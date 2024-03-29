import * as React from "react";

function SvgGift(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 27 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0 11.168v15.424A3.408 3.408 0 003.418 30h19.47a3.408 3.408 0 003.408-3.408V11.168a3.419 3.419 0 00-3.409-3.418h-2.164c.299-.308.563-.647.789-1.011a4.904 4.904 0 00.121-4.815A3.823 3.823 0 0018.205.003a5.25 5.25 0 00-4.046 1.709 6.147 6.147 0 00-1.011 1.436 6.152 6.152 0 00-.96-1.436A5.25 5.25 0 008.141.002a3.843 3.843 0 00-3.44 1.912 4.905 4.905 0 00.122 4.814c.226.365.49.704.79 1.012H3.417A3.418 3.418 0 000 11.168zm24.273 0v15.424a1.386 1.386 0 01-1.386 1.385H14.16l.071-18.204h8.688a1.396 1.396 0 011.355 1.395zm-6.068-9.102a1.81 1.81 0 011.689.9 2.822 2.822 0 01-.132 2.792c-.435.758-1.578 2.022-4.328 2.022h-1.275c0-1.224.233-3.398 1.406-4.682a3.308 3.308 0 012.64-1.072v.04zM6.544 5.717a2.822 2.822 0 01-.132-2.791 1.81 1.81 0 011.679-.9 3.307 3.307 0 012.59 1.01c1.182 1.316 1.395 3.49 1.456 4.714h-1.265c-2.781 0-3.894-1.274-4.328-2.033zm-4.521 5.451a1.396 1.396 0 011.395-1.395h8.719l-.071 18.204H3.418a1.387 1.387 0 01-1.395-1.385V11.168z"
        fill="url(#Gift_svg__paint0_linear_78_77)"
      />
      <defs>
        <linearGradient
          id="Gift_svg__paint0_linear_78_77"
          x1={0}
          y1={12.8}
          x2={31.656}
          y2={20.04}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#12C2E9" />
          <stop offset={0.463} stopColor="#C471ED" />
          <stop offset={1} stopColor="#F64F59" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default SvgGift;
