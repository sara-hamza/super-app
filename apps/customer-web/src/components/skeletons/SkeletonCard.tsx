import React from 'react';
import './skeleton.css';

interface SkeletonCardProps {
  lines?: number;
  hasImage?: boolean;
  className?: string;
}

/**
 * SkeletonCard — Card-shaped loading placeholder.
 *
 * Mimics the structure of a content card with an optional image area
 * and configurable number of text lines.
 */
export const SkeletonCard: React.FC<SkeletonCardProps> = ({
  lines = 3,
  hasImage = true,
  className = '',
}) => {
  return (
    <div className={`skeleton-card ${className}`} aria-busy="true" aria-label="Loading card content">
      {hasImage && (
        <div className="skeleton skeleton--rounded skeleton-card__image" />
      )}
      <div className="skeleton-card__body">
        {Array.from({ length: lines }).map((_, i) => (
          <div
            key={i}
            className="skeleton skeleton--shimmer skeleton--text"
            style={{ width: i === 0 ? '60%' : i === lines - 1 ? '80%' : '100%' }}
          />
        ))}
      </div>
    </div>
  );
};

SkeletonCard.displayName = 'SkeletonCard';
