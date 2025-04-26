"use client";

interface ShareIconProps {
  className?: string;
}

export default function ShareIcon({ className }: ShareIconProps) {
  return (
    <svg
      width="23"
      height="21"
      viewBox="0 0 23 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_48_3654)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.35425 18.4158C9.35425 18.4158 7.76104 14.4068 7.33519 13.1013L18.3703 4.46073L9.35425 18.4158ZM2.61877 9.43818L17.7432 3.90066L6.76876 12.406C6.76649 12.4032 2.61877 9.43818 2.61877 9.43818ZM20.5022 1.61602C19.7414 1.90076 0.106398 9.18977 0.106398 9.18977C0.106398 9.18977 6.04636 13.651 6.01734 13.6104C6.00783 13.5973 9.1076 20.9489 9.1076 20.9489C9.1076 20.9489 20.8808 2.61249 21.0686 2.31139C21.2447 1.9292 20.9925 1.46502 20.5022 1.61602Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_48_3654">
          <rect width="23" height="21" fill="currentColor" />
        </clipPath>
      </defs>
    </svg>
  );
}
