"use client";

interface FigmaIconProps {
  className?: string;
}

export default function FigmaIcon({ className }: FigmaIconProps) {
  return (
    <svg
      width="27"
      height="27"
      viewBox="0 0 27 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.5 13.5C13.5 11.6361 15.0111 10.125 16.875 10.125C18.7389 10.125 20.25 11.6361 20.25 13.5C20.25 15.3639 18.7389 16.875 16.875 16.875C15.0111 16.875 13.5 15.3639 13.5 13.5Z"
        fill="#1ABCFE"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.75 20.25C6.75 18.3861 8.26104 16.875 10.125 16.875H13.5V20.25C13.5 22.1139 11.9889 23.625 10.125 23.625C8.26104 23.625 6.75 22.1139 6.75 20.25Z"
        fill="#0ACF83"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.5 3.375V10.125H16.875C18.7389 10.125 20.25 8.61393 20.25 6.75C20.25 4.88604 18.7389 3.375 16.875 3.375H13.5Z"
        fill="#FF7262"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.75 6.75C6.75 8.61393 8.26104 10.125 10.125 10.125H13.5V3.375H10.125C8.26104 3.375 6.75 4.88604 6.75 6.75Z"
        fill="#F24E1E"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.75 13.5C6.75 15.3639 8.26104 16.875 10.125 16.875H13.5V10.125H10.125C8.26104 10.125 6.75 11.6361 6.75 13.5Z"
        fill="#A259FF"
      />
    </svg>
  );
}
