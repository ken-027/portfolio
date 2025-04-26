"use client";

interface SkillsIconProps {
  className?: string;
}

export default function SkillsIcon({ className }: SkillsIconProps) {
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
        d="M0.626953 14.0563V12.2586L7.96398 8.53783V10.3355L0.626953 14.0563ZM7.96398 17.7771L0.626953 14.0563V12.2586L7.96398 15.9794V17.7771ZM9.11645 19.742L13.3807 5.00519H15.1366L10.8723 19.742H9.11645ZM23.621 14.0563L16.2839 10.3355V8.53783L23.621 12.2586V14.0563ZM16.2839 17.7771V15.9794L23.621 12.2586V14.0563L16.2839 17.7771Z"
        fill="currentColor"
      />
    </svg>
  );
}
