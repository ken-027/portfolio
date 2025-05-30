"use client";

interface NextJSIconProps {
  className?: string;
}

export default function NextJSIcon({ className }: NextJSIconProps) {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26Z"
        fill="black"
      />
      <path
        d="M21.5956 22.753L9.98723 7.80005H7.80005V18.1957H9.54978V10.0221L20.2221 23.811C20.7037 23.4887 21.1625 23.135 21.5956 22.753Z"
        fill="url(#paint0_linear_11_212)"
      />
      <path
        d="M18.3445 7.80005H16.6112V18.2H18.3445V7.80005Z"
        fill="url(#paint1_linear_11_212)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_11_212"
          x1="15.7445"
          y1="16.8278"
          x2="20.8723"
          y2="23.1834"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_11_212"
          x1="17.4779"
          y1="7.80005"
          x2="17.4489"
          y2="15.4376"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}
