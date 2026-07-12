import React from 'react';
import './skeleton.css';

interface SkeletonOrderProps {
  itemCount?: number;
  className?: string;
}

/**
 * SkeletonOrder — Order details loading placeholder.
 *
 * Represents an order summary page: item list with
 * quantities, pricing breakdown, and status timeline.
 */
export const SkeletonOrder: React.FC<SkeletonOrderProps> = ({
  itemCount = 3,
  className = '',
}) => {
  return (
    <div className={`skeleton-order ${className}`} aria-busy="true" aria-label="Loading order">
      {/* Order header */}
      <div className="skeleton-order__header">
        <div>
          <div className="skeleton skeleton--shimmer skeleton--text" style={{ width: '8rem' }} />
          <div className="skeleton skeleton--shimmer skeleton--text" style={{ width: '5rem', marginTop: '0.5rem' }} />
        </div>
        <div className="skeleton skeleton--shimmer skeleton-order__status-badge" />
      </div>

      {/* Order items */}
      <div className="skeleton-order__items">
        {Array.from({ length: itemCount }).map((_, i) => (
          <div key={i} className="skeleton-order__item">
            <div className="skeleton skeleton--shimmer skeleton--rounded skeleton-order__item-image" />
            <div className="skeleton-order__item-info">
              <div className="skeleton skeleton--shimmer skeleton--text" />
              <div className="skeleton skeleton--shimmer skeleton--text" style={{ width: '4rem' }} />
            </div>
            <div className="skeleton skeleton--shimmer skeleton--text skeleton-order__item-price" />
          </div>
        ))}
      </div>

      {/* Price breakdown */}
      <div className="skeleton-order__breakdown">
        {['Subtotal', 'Delivery', 'Tax', 'Total'].map((label, i) => (
          <div key={label} className="skeleton-order__breakdown-row">
            <div
              className="skeleton skeleton--shimmer skeleton--text"
              style={{ width: i === 3 ? '4rem' : '5rem' }}
            />
            <div
              className="skeleton skeleton--shimmer skeleton--text"
              style={{ width: '5rem' }}
            />
          </div>
        ))}
      </div>

      {/* Delivery timeline */}
      <div className="skeleton-order__timeline">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="skeleton-order__timeline-step">
            <div className="skeleton skeleton--shimmer skeleton--circle skeleton-order__timeline-dot" />
            <div className="skeleton skeleton--shimmer skeleton--text skeleton-order__timeline-label" />
          </div>
        ))}
      </div>
    </div>
  );
};

SkeletonOrder.displayName = 'SkeletonOrder';
