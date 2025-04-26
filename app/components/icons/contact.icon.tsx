"use client";

interface ContactIconProps {
  className?: string;
}

export default function ContactIcon({ className }: ContactIconProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M18 6.10168C19.3001 6.22957 20.1752 6.51858 20.8284 7.17176C22 8.34334 22 10.229 22 14.0002C22 17.7714 22 19.657 20.8284 20.8286C19.6569 22.0002 17.7712 22.0002 14 22.0002H10C6.22876 22.0002 4.34315 22.0002 3.17157 20.8286C2 19.657 2 17.7714 2 14.0002C2 10.229 2 8.34334 3.17157 7.17176C3.82475 6.51858 4.69989 6.22957 6 6.10168"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M10 6H14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M11 9H13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M8.1589 11.7991L7.43926 11.1994C6.73152 10.6096 6.37764 10.3147 6.18882 9.91156C6 9.50842 6 9.04778 6 8.1265V7C6 4.64298 6 3.46447 6.73223 2.73223C7.46447 2 8.64298 2 11 2H13C15.357 2 16.5355 2 17.2678 2.73223C18 3.46447 18 4.64298 18 7V8.1265C18 9.04778 18 9.50842 17.8112 9.91156C17.6224 10.3147 17.2685 10.6096 16.5607 11.1994L15.8411 11.7991C14.0045 13.3296 13.0861 14.0949 12 14.0949C10.9139 14.0949 9.99553 13.3296 8.1589 11.7991Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M6 10L8.1589 11.7991C9.99553 13.3296 10.9139 14.0949 12 14.0949C13.0861 14.0949 14.0045 13.3296 15.8411 11.7991L18 10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
