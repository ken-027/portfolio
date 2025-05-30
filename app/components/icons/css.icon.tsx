"use client";

interface CSSIconProps {
  className?: string;
}

export default function CSSIcon({ className }: CSSIconProps) {
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
        d="M28 0L25.4491 25.1971L13.9829 28L2.54817 25.201L0 0H28Z"
        fill="#264DE4"
      />
      <path
        d="M23.2653 23.5926L25.4452 2.06055H14V25.8576L23.2653 23.5926Z"
        fill="#2965F1"
      />
      <path
        d="M5.84167 11.4072L6.15584 14.498H14V11.4072H5.84167Z"
        fill="#EBEBEB"
      />
      <path
        d="M14 5.15137H13.9879H5.21033L5.52897 8.2422H14V5.15137Z"
        fill="#EBEBEB"
      />
      <path
        d="M14 22.6501V19.4344L13.9846 19.438L10.0807 18.5085L9.83116 16.0435H7.93417H6.31238L6.80347 20.8965L13.9838 22.6541L14 22.6501Z"
        fill="#EBEBEB"
      />
      <path
        d="M18.3043 14.498L17.8974 18.5065L13.9879 19.437V22.6526L21.174 20.8964L21.2267 20.3743L22.0504 12.2372L22.1359 11.4072L22.7688 5.15137H13.9879V8.2422H18.9272L18.6083 11.4072H13.9879V14.498H18.3043Z"
        fill="white"
      />
    </svg>
  );
}
