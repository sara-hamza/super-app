import React from 'react';
import './skeleton.css';

interface SkeletonWalletProps {
  transactionCount?: number;
  className?: string;
}

/**
 * SkeletonWallet — Wallet / payments loading placeholder.
 *
 * Shows a balance card, quick-action buttons, and a
 * transaction history list while wallet data loads.
 */
export const SkeletonWallet: React.FC<SkeletonWalletProps> = ({
  transactionCount = 5,
  className = '',
}) => {
  return (
    <div className={`skeleton-wallet ${className}`} aria-busy="true" aria-label="Loading wallet">
      {/* Balance card */}
      <div className="skeleton skeleton--shimmer skeleton-wallet__balance-card">
        <div className="skeleton skeleton--shimmer skeleton--text" style={{ width: '5rem', marginBottom: '0.75rem' }} />
        <div className="skeleton skeleton--shimmer skeleton--text" style={{ width: '10rem', height: '2rem' }} />
      </div>

      {/* Quick actions */}
      <div className="skeleton-wallet__actions">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="skeleton-wallet__action">
            <div className="skeleton skeleton--shimmer skeleton--circle skeleton-wallet__action-icon" />
            <div className="skeleton skeleton--shimmer skeleton--text skeleton-wallet__action-label" />
          </div>
        ))}
      </div>

      {/* Transaction list */}
      <div className="skeleton-wallet__transactions">
        <div className="skeleton skeleton--shimmer skeleton--text" style={{ width: '7rem', marginBottom: '1rem' }} />
        {Array.from({ length: transactionCount }).map((_, i) => (
          <div key={i} className="skeleton-wallet__tx-row">
            <div className="skeleton skeleton--shimmer skeleton--circle skeleton-wallet__tx-icon" />
            <div className="skeleton-wallet__tx-info">
              <div className="skeleton skeleton--shimmer skeleton--text" />
              <div className="skeleton skeleton--shimmer skeleton--text" style={{ width: '40%' }} />
            </div>
            <div className="skeleton skeleton--shimmer skeleton--text skeleton-wallet__tx-amount" />
          </div>
        ))}
      </div>
    </div>
  );
};

SkeletonWallet.displayName = 'SkeletonWallet';
