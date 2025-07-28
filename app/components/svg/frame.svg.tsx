interface FrameSVGProps {
  className?: string;
  borderClassName?: string;
}

export default function FrameSVG({
  className,
  borderClassName,
}: FrameSVGProps) {
  return (
    <svg
      width="1937"
      height="1089"
      viewBox="0 0 1937 1089"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M47.7376 22L176.234 214.503L93.4572 554.272L185.859 886.806L47.7376 1061.52V22Z"
        className={borderClassName}
        fill="#5271FF"
      />
      <g filter="url(#filter0_d_196_603)">
        <path
          d="M179.299 886.822L972.717 1028.79L1766.31 880.565L1852.46 972.967L1901.07 1062H46.7751L112.226 968.636L179.299 886.822Z"
          className={borderClassName}
          fill="#5271FF"
        />
      </g>
      <path
        d="M1895.77 22.4805L1758.13 221.865L1861.12 538.871L1758.13 881.681L1895.77 1055.26V22.4805Z"
        className={borderClassName}
        fill="#5271FF"
      />
      <path
        d="M173.558 218.569L966.461 71.0882L1760.98 225.572L1847.15 122.141L1895.77 22.4811H41L106.468 126.99L173.558 218.569Z"
        className={borderClassName}
        fill="#5271FF"
      />
      <path
        d="M7 0.5L140.5 200.5L54.5 553.5L150.5 898.983L7 1080.5V0.5Z"
        fill="currentColor"
      />
      <g filter="url(#filter1_d_196_603)">
        <path
          d="M143.685 899L968 1046.5L1792.5 892.5L1882 988.5L1932.5 1081H6L74 984L143.685 899Z"
          fill="currentColor"
        />
      </g>
      <path
        d="M1927 1L1784 208.149L1891 537.5L1784 893.66L1927 1074V1Z"
        fill="currentColor"
      />
      <path
        d="M137.72 204.724L961.5 51.5L1786.96 212L1876.49 104.541L1927 1H0L68.0176 109.578L137.72 204.724Z"
        fill="currentColor"
      />
      <defs>
        <filter
          id="filter0_d_196_603"
          x="42.7751"
          y="880.565"
          width="1862.29"
          height="189.435"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_196_603"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_196_603"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_d_196_603"
          x="2"
          y="892.5"
          width="1934.5"
          height="196.5"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_196_603"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_196_603"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
