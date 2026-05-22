import React from 'react';

export default function OptimizedImage({
  src,
  alt = '',
  className = '',
  priority = false,
  width,
  height,
  sizes,
  ...props
}) {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
      className={className}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      fetchPriority={priority ? 'high' : 'low'}
      {...props}
    />
  );
}
