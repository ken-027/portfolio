"use client";

interface GmailIconProps {
  className?: string;
}

export default function GmailIcon({ className }: GmailIconProps) {
  return (
    <svg
      width="23"
      height="23"
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_48_3623)">
        <path
          d="M19.55 0H3.45C1.54462 0 0 1.54462 0 3.45V19.55C0 21.4554 1.54462 23 3.45 23H19.55C21.4554 23 23 21.4554 23 19.55V3.45C23 1.54462 21.4554 0 19.55 0Z"
          fill="white"
        />
        <path
          d="M7.09766 17.5645V11.1855L3.41406 8.35547V16.2168C3.41406 17.1152 3.86328 17.5645 4.76172 17.5645"
          fill="#4285F4"
        />
        <path
          d="M6.91797 11.1406L11.5 14.5996L16.082 11.1406V6.73828L11.5 10.1973L6.91797 6.73828"
          fill="#EA4335"
        />
        <path
          d="M15.9023 17.5645V11.1855L19.5859 8.35547V16.2168C19.5859 17.1152 19.1367 17.5645 18.2383 17.5645"
          fill="#34A853"
        />
        <path
          d="M3.41406 8.44537L7.09766 11.2754V6.8731L5.75 5.8399C4.53711 4.89654 3.41406 5.8399 3.41406 7.00787"
          fill="#C5221F"
        />
        <path
          d="M19.5859 8.44537L15.9023 11.2754V6.8731L17.25 5.8399C18.4629 4.89654 19.5859 5.8399 19.5859 7.00787"
          fill="#FBBC04"
        />
      </g>
      <defs>
        <clipPath id="clip0_48_3623">
          <rect width="23" height="23" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
