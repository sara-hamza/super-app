import React from 'react';
import './skeleton.css';

interface SkeletonBookingProps {
  steps?: number;
  className?: string;
}

/**
 * SkeletonBooking — Booking flow loading placeholder.
 *
 * Mimics a multi-step booking wizard: service selector,
 * date/time picker preview, and summary panel.
 */
export const SkeletonBooking: React.FC<SkeletonBookingProps> = ({
  steps = 3,
  className = '',
}) => {
  return (
    <div className={`skeleton-booking ${className}`} aria-busy="true" aria-label="Loading booking">
      {/* Step indicator */}
      <div className="skeleton-booking__steps">
        {Array.from({ length: steps }).map((_, i) => (
          <div key={i} className="skeleton-booking__step">
            <div className={`skeleton skeleton--shimmer skeleton--circle skeleton-booking__step-dot ${i === 0 ? 'skeleton-booking__step-dot--active' : ''}`} />
            <div className="skeleton skeleton--shimmer skeleton--text skeleton-booking__step-label" />
          </div>
        ))}
      </div>

      {/* Main content: service cards */}
      <div className="skeleton-booking__content">
        <div className="skeleton skeleton--shimmer skeleton--text" style={{ width: '8rem', marginBottom: '1rem' }} />

        <div className="skeleton-booking__cards">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="skeleton-booking__card">
              <div className="skeleton skeleton--shimmer skeleton-booking__card-image" />
              <div className="skeleton skeleton--shimmer skeleton--text" />
              <div className="skeleton skeleton--shimmer skeleton--text" style={{ width: '60%' }} />
            </div>
          ))}
        </div>
      </div>

      {/* Sidebar summary */}
      <div className="skeleton-booking__summary">
        <div className="skeleton skeleton--shimmer skeleton--text" style={{ width: '60%', marginBottom: '1rem' }} />
        <div className="skeleton skeleton--shimmer skeleton--text" />
        <div className="skeleton skeleton--shimmer skeleton--text" style={{ width: '80%' }} />
        <div className="skeleton skeleton--shimmer skeleton-booking__cta" />
      </div>
    </div>
  );
};

SkeletonBooking.displayName = 'SkeletonBooking';
