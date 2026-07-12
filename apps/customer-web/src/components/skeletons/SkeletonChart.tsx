import React from 'react';
import './skeleton.css';

interface SkeletonChartProps {
  type?: 'bar' | 'line' | 'pie';
  className?: string;
}

/**
 * SkeletonChart — Chart loading placeholder.
 *
 * Renders a skeleton placeholder that mimics bar, line, or pie charts.
 * Use while chart data is being fetched or computed.
 */
export const SkeletonChart: React.FC<SkeletonChartProps> = ({
  type = 'bar',
  className = '',
}) => {
  const barHeights = [60, 80, 45, 90, 55, 70, 40, 85, 50, 65];

  return (
    <div className={`skeleton-chart ${className}`} aria-busy="true" aria-label="Loading chart">
      {/* Chart title */}
      <div className="skeleton skeleton--shimmer skeleton--text" style={{ width: '30%', marginBottom: '1rem' }} />

      <div className="skeleton-chart__container">
        {type === 'bar' && (
          <div className="skeleton-chart__bars">
            {barHeights.map((h, i) => (
              <div key={i} className="skeleton-chart__bar-wrapper">
                <div
                  className="skeleton skeleton--shimmer skeleton-chart__bar"
                  style={{ height: `${h}%` }}
                />
              </div>
            ))}
          </div>
        )}

        {type === 'line' && (
          <div className="skeleton-chart__line-area">
            {/* SVG line simulation via divs */}
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="skeleton skeleton--shimmer skeleton-chart__line-segment"
                style={{
                  top: `${20 + (i % 3) * 25}%`,
                  width: `${25}%`,
                  left: `${i * 22}%`,
                }}
              />
            ))}
          </div>
        )}

        {type === 'pie' && (
          <div className="skeleton skeleton--shimmer skeleton-chart__pie" />
        )}
      </div>

      {/* X-axis labels */}
      <div className="skeleton-chart__axis">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="skeleton skeleton--shimmer skeleton--text" style={{ width: '3rem' }} />
        ))}
      </div>
    </div>
  );
};

SkeletonChart.displayName = 'SkeletonChart';
