import React from 'react';
import { useInView } from '../hooks/useInView';

export default function LazyWhenVisible({ children, className = '', minHeight }) {
  const [ref, inView] = useInView('160px');

  return (
    <div
      ref={ref}
      className={className}
      style={!inView && minHeight ? { minHeight } : undefined}
    >
      {inView ? children : null}
    </div>
  );
}
