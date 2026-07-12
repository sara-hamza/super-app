import React from 'react';
import './skeleton.css';

interface SkeletonListProps {
  rows?: number;
  columns?: number;
  className?: string;
}

/**
 * SkeletonList — List / table row loading placeholder.
 *
 * Renders a vertical stack of skeleton rows, each with multiple
 * column-shaped blocks. Useful for lists, tables, or feed loading states.
 */
export const SkeletonList: React.FC<SkeletonListProps> = ({
  rows = 5,
  columns = 3,
  className = '',
}) => {
  return (
    <div className={`skeleton-list ${className}`} aria-busy="true" aria-label="Loading list">
      {Array.from({ length: rows }).map((_, rowIdx) => (
        <div key={rowIdx} className="skeleton-list__row">
          {/* Leading avatar placeholder */}
          <div className="skeleton skeleton--shimmer skeleton--circle skeleton-list__avatar" />

          {/* Text columns */}
          <div className="skeleton-list__content">
            {Array.from({ length: columns }).map((_, colIdx) => (
              <div
                key={colIdx}
                className="skeleton skeleton--shimmer skeleton--text"
                style={{ width: `${70 + Math.random() * 30}%` }}
              />
            ))}
          </div>

          {/* Trailing action placeholder */}
          <div className="skeleton skeleton--shimmer skeleton-list__action" />
        </div>
      ))}
    </div>
  );
};

SkeletonList.displayName = 'SkeletonList';
