import React from 'react';
import './skeleton.css';

interface SkeletonProfileProps {
  extended?: boolean;
  className?: string;
}

/**
 * SkeletonProfile — Profile page loading placeholder.
 *
 * Covers the standard user profile layout: avatar, name,
 * bio text, and optional extended info (stats, settings links).
 */
export const SkeletonProfile: React.FC<SkeletonProfileProps> = ({
  extended = true,
  className = '',
}) => {
  return (
    <div className={`skeleton-profile ${className}`} aria-busy="true" aria-label="Loading profile">
      {/* Header: avatar + name + handle */}
      <div className="skeleton-profile__header">
        <div className="skeleton skeleton--shimmer skeleton--circle skeleton-profile__avatar" />
        <div className="skeleton-profile__info">
          <div className="skeleton skeleton--shimmer skeleton--text" style={{ width: '10rem' }} />
          <div className="skeleton skeleton--shimmer skeleton--text" style={{ width: '7rem' }} />
        </div>
      </div>

      {/* Bio text */}
      <div className="skeleton-profile__bio">
        <div className="skeleton skeleton--shimmer skeleton--text" />
        <div className="skeleton skeleton--shimmer skeleton--text" />
        <div className="skeleton skeleton--shimmer skeleton--text" style={{ width: '60%' }} />
      </div>

      {/* Stats row */}
      {extended && (
        <div className="skeleton-profile__stats">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="skeleton-profile__stat">
              <div className="skeleton skeleton--shimmer skeleton--text" style={{ width: '3rem', margin: '0 auto' }} />
              <div className="skeleton skeleton--shimmer skeleton--text" style={{ width: '4rem', margin: '0 auto' }} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

SkeletonProfile.displayName = 'SkeletonProfile';
