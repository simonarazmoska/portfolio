import { FC, useEffect, useRef, useState } from "react";

interface ImageProps {
  src: string;
  alt: string;
  loading?: "lazy" | "eager";
  className?: string;
  style?: React.CSSProperties;
}

export const Image: FC<ImageProps> = ({ src, alt, loading = "lazy", className = "", style = {} }) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const [shouldLoad, setShouldLoad] = useState(loading !== "lazy");

  useEffect(() => {
    if (typeof loading === "number" && imgRef.current) {
      const observer = new window.IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setShouldLoad(true);
        },
        {
          root: null,
          rootMargin: `${loading}px`,
          threshold: 0
        }
      );
      observer.observe(imgRef.current);
      return () => observer.disconnect();
    }
  }, [loading]);

  if (loading === "lazy" && !shouldLoad) {
    // Return img without src so the browser does not start loading it
    return (
      <img
        ref={imgRef}
        alt={alt}
        className={`tw-object-cover ${className}`}
        style={{
          maxWidth: "100%",
          height: "auto",
          display: "block",
          ...style
        }}
      />
    );
  }

  return (
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      loading={typeof loading === "string" ? loading : undefined}
      className={`tw-object-cover ${className}`}
      style={{
        maxWidth: "100%",
        height: "auto",
        display: "block",
        ...style
      }}
    />
  );
};
