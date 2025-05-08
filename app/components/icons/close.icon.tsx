interface CloseIconProps {
  className?: string;
}

export default function CloseIcon({ className }: CloseIconProps) {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M17.9999 1.00007L1 18M0.999928 1L17.9999 17.9999"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
