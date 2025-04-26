"use client";

interface DownloadImageIconProps {
  className?: string;
}

export default function DownloadImageIcon({ className }: DownloadImageIconProps) {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_67_576)">
        <path
          d="M13.75 7.5C13.75 10.4463 13.75 11.9194 12.8347 12.8347C11.9194 13.75 10.4463 13.75 7.5 13.75C4.55372 13.75 3.08058 13.75 2.16529 12.8347C1.25 11.9194 1.25 10.4463 1.25 7.5C1.25 4.55372 1.25 3.08058 2.16529 2.16529C3.08058 1.25 4.55372 1.25 7.5 1.25"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M1.25 7.81258L2.34474 6.85469C2.91429 6.35635 3.77267 6.38493 4.3078 6.92006L6.98888 9.60114C7.4184 10.0307 8.09453 10.0892 8.5915 9.73996L8.77788 9.60898C9.49302 9.10638 10.4606 9.16461 11.1103 9.74935L13.125 11.5626"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M10.625 6.875V1.25M10.625 6.875L12.5 5M10.625 6.875L8.75 5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_67_576">
          <rect width="15" height="15" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
