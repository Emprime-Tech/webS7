import React from 'react';
import { ACCENT } from './constants';

export default function PackageDots() {
  return (
    <div className="flex flex-col gap-2 mr-4 shrink-0 self-center">
      {[0, 1, 2, 3].map((i) => (
        <span
          key={i}
          className="w-2 h-2 rounded-full"
          style={{ backgroundColor: ACCENT }}
        />
      ))}
    </div>
  );
}
