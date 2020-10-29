import React from 'react';
import './Statistics.css'
import PropTypes from 'prop-types'


const Statistics = ({ title, stats }) => {
  return (
    <section class="statistics">
      <h2 class="title">{title}</h2>
      <ul class="stat-list">
      {stats.map(stat => (
        <li class="item" id={stat.id}>
          <span class="label">{stat.label}</span>
          <span class="percentage">{stat.percentage}%</span>
        </li>
      ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.string.isRequired,
}

export default Statistics;