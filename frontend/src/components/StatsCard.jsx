import React from 'react';
import './StatsCard.css';

const StatsCard = ({ title, value, subtitle, trend }) => {
  const getTrendClass = () => {
    if (!trend) return '';
    return trend > 0 ? 'positive' : 'negative';
  };

  return (
    <div className="stats-card">
      <h4 className="stats-title">{title}</h4>
      <div className="stats-value">{value}</div>
      {subtitle && <p className="stats-subtitle">{subtitle}</p>}
      {trend !== undefined && (
        <div className={`stats-trend ${getTrendClass()}`}>
          {trend > 0 ? '↑' : '↓'} {Math.abs(trend)}%
        </div>
      )}
    </div>
  );
};

export default StatsCard;

