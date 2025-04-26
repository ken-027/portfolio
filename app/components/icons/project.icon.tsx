"use client";

interface ProjectIconProps {
  className?: string;
}

export default function ProjectIcon({ className }: ProjectIconProps) {
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
        d="M6.28711 11.4424V10.6185L9.64992 8.91314V9.73707L6.28711 11.4424ZM9.64992 13.1478L6.28711 11.4424V10.6185L9.64992 12.3238V13.1478ZM10.1781 14.0484L12.1326 7.29401H12.9374L10.9829 14.0484H10.1781ZM16.826 11.4424L13.4632 9.73707V8.91314L16.826 10.6185V11.4424ZM13.4632 13.1478V12.3238L16.826 10.6185V11.4424L13.4632 13.1478Z"
        fill="currentColor"
      />
      <path
        d="M3 9C3 6.17157 3 4.75736 3.87868 3.87868C4.75736 3 6.17157 3 9 3H15C17.8284 3 19.2426 3 20.1213 3.87868C21 4.75736 21 6.17157 21 9V14C21 15.8856 21 16.8284 20.4142 17.4142C19.8284 18 18.8856 18 17 18H7C5.11438 18 4.17157 18 3.58579 17.4142C3 16.8284 3 15.8856 3 14V9Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M22 21H2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
