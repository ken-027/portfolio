"use client";

interface HTMLIconProps {
  className?: string;
}

export default function HTMLIcon({ className }: HTMLIconProps) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
    >
      <path
        d="M2.54686 25.2095L0 0H28L25.4531 25.1959L13.9768 28"
        fill="#E44D26"
      />
      <path
        d="M13.9999 25.8564V2.06934H25.4453L23.2612 23.5764"
        fill="#F16529"
      />
      <path
        d="M5.20178 5.15234H14V8.24228H9.04522L9.36937 11.4071H14V14.4902H6.15878L5.20178 5.15234ZM6.31314 16.042H9.83243L10.0794 18.5126L14 19.4382V22.6643L6.80707 20.8947"
        fill="#EBEBEB"
      />
      <path
        d="M22.7672 5.15234H13.9844V8.24228H22.443L22.7672 5.15234ZM22.1266 11.4071H13.9844V14.497H18.3063L17.8973 18.5126L13.9844 19.4382V22.6506L21.1619 20.8947"
        fill="white"
      />
    </svg>
  );
}
