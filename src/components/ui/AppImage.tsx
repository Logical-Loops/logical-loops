import React from 'react';

interface AppImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  sizes?: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function AppImage({ src, alt, width, height, fill, className = '', style }: AppImageProps) {
  if (fill) {
    return (
      <img
        src={src}
        alt={alt}
        className={`absolute inset-0 w-full h-full ${className}`}
        style={style}
        loading="lazy"
      />
    );
  }
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      style={style}
      loading="lazy"
    />
  );
}
