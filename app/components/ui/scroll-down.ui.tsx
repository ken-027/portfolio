interface ScrollDownUIProps {
  className?: string;
}

export default function ScrollDownUI({ className }: ScrollDownUIProps) {
  return (
    <div className={`mouse_scroll scale-75 mt-10! ${className}`}>
      <div className="mouse">
        <div className="wheel"></div>
      </div>
      <div>
        <span className="m_scroll_arrows unu"></span>
        <span className="m_scroll_arrows doi"></span>
        <span className="m_scroll_arrows trei"></span>
      </div>
    </div>
  );
}
