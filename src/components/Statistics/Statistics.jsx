import style from './statistics.module.css';

import PropTypes from 'prop-types';

function setBackgroundColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const Statistics = ({ data }) => {
  const statElement = data.map(el => (
    <li
      className={style.item}
      key={el.id}
      style={{ backgroundColor: `${setBackgroundColor()}` }}
    >
      <span className={style.label}>{el.label}</span>
      <span className={style.percentage}>{el.percentage}</span>
    </li>
  ));

  return (
    <section className={style.statistics}>
      <h2 className={style.title}>Upload stats</h2>

      <ul className={style.statList}>{statElement}</ul>
    </section>
  );
};

export default Statistics;

Statistics.defaultProps = {
  data: [],
};

Statistics.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
