export interface ImageUIProps {
  className?: string;
  wrapperClassName?: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}

export default function ImageUI({
  wrapperClassName,
  className,
  src,
  alt,
  width,
  height,
}: ImageUIProps) {
  return (
    <div className={`${wrapperClassName || ""}`}>
      <img
        className={`w-full max-w-full mx-auto ${className || ""}`}
        src={src}
        alt={alt}
        height={height}
        width={width}
      />
    </div>
  );
}
