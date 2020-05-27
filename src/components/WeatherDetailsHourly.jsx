import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';
import moment from 'moment';

const propTypes = {
  data: PropTypes.object,
};

const WeatherDetailsHourly = ({ data }) => {
  return (
    <>
      <div className={styles.flexCol}>
        <h1 className={styles.header}> {moment(data.timestamp_local).format('LT')} </h1>
        <img src={`http://api.openweathermap.org/img/w/${data.weather.icon.slice(1)}.png`} alt='icon'/>
        <h1 className={styles.header}> {data.temp}&deg;C </h1>
      </div>
    </>
  );
};

const styles = {
  flexCol: css({
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
    flexDirection: 'column'
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

WeatherDetailsHourly.propTypes = propTypes;

export default WeatherDetailsHourly;
