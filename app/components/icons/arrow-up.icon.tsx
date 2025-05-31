"use client";

interface ArrowUpIconProps {
  className?: string;
}

export default function ArrowUpIcon({ className }: ArrowUpIconProps) {
  return (
    <svg
      width="17"
      height="24"
      viewBox="0 0 17 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M13.4577 13L8.49935 7L3.54102 13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.4577 17L8.49935 11L3.54102 17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
