"use client";

interface ViewIconProps {
  className?: string;
}

export default function ViewIcon({ className }: ViewIconProps) {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M2.04681 9.55979C1.5156 8.86967 1.25 8.52461 1.25 7.5C1.25 6.47539 1.5156 6.13033 2.04681 5.44021C3.10748 4.06222 4.88632 2.5 7.5 2.5C10.1137 2.5 11.8925 4.06222 12.9532 5.44021C13.4844 6.13033 13.75 6.47539 13.75 7.5C13.75 8.52461 13.4844 8.86967 12.9532 9.55979C11.8925 10.9378 10.1137 12.5 7.5 12.5C4.88632 12.5 3.10748 10.9378 2.04681 9.55979Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M9.375 7.5C9.375 8.53553 8.53553 9.375 7.5 9.375C6.46447 9.375 5.625 8.53553 5.625 7.5C5.625 6.46447 6.46447 5.625 7.5 5.625C8.53553 5.625 9.375 6.46447 9.375 7.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}
