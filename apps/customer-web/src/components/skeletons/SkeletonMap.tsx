import React from 'react';
import './skeleton.css';

interface SkeletonMapProps {
  hasPins?: boolean;
  className?: string;
}

/**
 * SkeletonMap — Map loading placeholder.
 *
 * Simulates a map container with optional pin markers.
 * Use while map tiles or location data are loading.
 */
export const SkeletonMap: React.FC<SkeletonMapProps> = ({
  hasPins = true,
  className = '',
}) => {
  return (
    <div className={`skeleton-map ${className}`} aria-busy="true" aria-label="Loading map">
      {/* Map viewport */}
      <div className="skeleton skeleton--shimmer skeleton-map__viewport">
        {/* Grid lines to mimic map tiles */}
        <div className="skeleton-map__grid">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={`h-${i}`} className="skeleton-map__grid-line skeleton-map__grid-line--h" />
          ))}
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={`v-${i}`} className="skeleton-map__grid-line skeleton-map__grid-line--v" />
          ))}
        </div>

        {/* Map pin markers */}
        {hasPins &&
          Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="skeleton skeleton--pulse skeleton-map__pin"
              style={{
                top: `${20 + Math.random() * 60}%`,
                left: `${10 + Math.random() * 80}%`,
              }}
            />
          ))}
      </div>

      {/* Bottom address bar */}
      <div className="skeleton-map__address-bar">
        <div className="skeleton skeleton--shimmer skeleton--text" style={{ width: '40%' }} />
        <div className="skeleton skeleton--shimmer skeleton--text" style={{ width: '25%' }} />
      </div>
    </div>
  );
};

SkeletonMap.displayName = 'SkeletonMap';
