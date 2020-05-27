import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

const propTypes = {
  data: PropTypes.object,
};

const WeatherDetails = ({ data }) => {

  return (
    <>
      <h1 className={styles.title}> {data[ 'city_name' ]} </h1>
      <div className={styles.flex}>
        <img src={`http://api.openweathermap.org/img/w/${data.weather.icon.slice(1)}.png`} alt='icon'/>
        <h1 className={styles.header}> Current Temperature: {data.temp}&deg;C </h1>
      </div>
    </>
  );
};

const styles = {
  flex: css({
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center'
  }),
  title: css({
    color: 'white',
    opacity: 0.87,
    fontSize: 32,
  }),
  header: css({
    color: 'white',
    opacity: 0.87,
    fontSize: 24,
    marginLeft: 16,
  })
};

WeatherDetails.propTypes = propTypes;

export default WeatherDetails;
