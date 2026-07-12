import React from 'react';
import { SkeletonCard } from './SkeletonCard';
import { SkeletonChart } from './SkeletonChart';
import './skeleton.css';

interface SkeletonDashboardProps {
  metricCount?: number;
  className?: string;
}

/**
 * SkeletonDashboard — Dashboard loading placeholder.
 *
 * Composed of metric cards at the top and a chart area below.
 * Use while dashboard summary data and analytics are loading.
 */
export const SkeletonDashboard: React.FC<SkeletonDashboardProps> = ({
  metricCount = 4,
  className = '',
}) => {
  return (
    <div className={`skeleton-dashboard ${className}`} aria-busy="true" aria-label="Loading dashboard">
      {/* Page title */}
      <div className="skeleton skeleton--shimmer skeleton--text" style={{ width: '12rem', marginBottom: '1.5rem' }} />

      {/* Metric cards row */}
      <div className="skeleton-dashboard__metrics">
        {Array.from({ length: metricCount }).map((_, i) => (
          <SkeletonCard key={i} lines={2} hasImage={false} className="skeleton-dashboard__metric-card" />
        ))}
      </div>

      {/* Charts section */}
      <div className="skeleton-dashboard__charts">
        <SkeletonChart type="line" className="skeleton-dashboard__chart" />
        <SkeletonChart type="bar" className="skeleton-dashboard__chart" />
      </div>

      {/* Recent activity list preview */}
      <div className="skeleton-dashboard__activity">
        <div className="skeleton skeleton--shimmer skeleton--text" style={{ width: '8rem', marginBottom: '1rem' }} />
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="skeleton skeleton--shimmer skeleton--text" style={{ width: `${70 + (i % 3) * 10}%` }} />
        ))}
      </div>
    </div>
  );
};

SkeletonDashboard.displayName = 'SkeletonDashboard';
