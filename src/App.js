import React from 'react';
import { fetchData, fetchForecast } from './actions/';
import { css } from 'emotion';
import { connect } from 'react-redux';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import WeatherDetails from './components/WeatherDetails';
import WeatherDetailsHourly from './components/WeatherDetailsHourly';

const App = (props) => {

  const [ firstSlideToSlice, setFirstSlideToSlice ] = React.useState(0);
  const [ lastSlideToSlice, setLastSlideToSlice ] = React.useState(3);

  React.useEffect(() => {
    props.fetchData();
    props.fetchForecast();
  }, []);

  if ( props.loader ) {
    return <CircularProgress />
  }
  return (
    <Paper elevation={1}
           className={styles.paper}>
      {
        props.data && props.data.map((city,key) => {
          return (
            <WeatherDetails key={key} data={city}/>
          );
        })
      }
      <h1 className={styles.title}> Hourly </h1>
      <div className={styles.flex}>
          <ChevronLeftIcon
          className={styles.icon({ disabled: firstSlideToSlice === 0 })}
            onClick={() => {
            setFirstSlideToSlice(firstSlideToSlice - 3);
            setLastSlideToSlice(lastSlideToSlice - 3);
          }}> See Earlier
          </ChevronLeftIcon>
        {
          props.forecast && props.forecast.slice(firstSlideToSlice, lastSlideToSlice).map((city, key) => {
            return (
              <WeatherDetailsHourly key={key} data={city}/>
            );
          })
        }
        <ChevronRightIcon
          className={styles.icon({ disabled: lastSlideToSlice === (props.forecast && props.forecast.length) })}
          onClick={() => {
          setFirstSlideToSlice(firstSlideToSlice + 3);
          setLastSlideToSlice(lastSlideToSlice + 3);
        }}> See Later
        </ChevronRightIcon>
      </div>
    </Paper>
  );
};

const styles = {
  paper: css({
    '&.MuiPaper-root': {
      backgroundColor: '#1d1d1d',
      display: 'flex',
      width: '100%',
      alignItems: 'center',
      flexDirection: 'column',
      height: '100vh'
    }
  }),
  flex: css({
    display: 'flex',
    alignItems: 'center',
    width: '100%'
  }),
  icon: ({ disabled }) => css({
    '&.MuiSvgIcon-root': {
      color: 'white',
      opacity: disabled ? 0.3 : 1,
      fontSize: '3.5rem',
      cursor: 'pointer',
      pointerEvents: disabled ? 'none' : 'auto',
    }
  }),
  title: css({
    color: 'white',
    opacity: 0.87,
    fontSize: 32,
  }),
};

const mapStateToProps = state => {
  return {
    data: state.data.data,
    loader: state.data.loader,
    forecast: state.forecast.forecast
  };
};

export default connect(
  mapStateToProps,
  { fetchData, fetchForecast },
)
(App);
