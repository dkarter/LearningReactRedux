import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Chart from '../components/chart';


class WeatherList extends Component {
  renderWeather(cityData) {
    const temps = cityData.list.map(({ main }) => main.temp - 273.15);
    const pressures = cityData.list.map(({ main }) => main.pressure);
    const humidities = cityData.list.map(({ main }) => main.humidity);
    return (
      <tr key={cityData.city.name}>
        <td>{cityData.city.name}</td>
        <td>
          <Chart data={temps} unit="C" />
        </td>
        <td>
          <Chart data={pressures} unit="hPa" />
        </td>
        <td>
          <Chart data={humidities} unit="%" />
        </td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead className="centered">
          <tr>
            <th>City</th>
            <th>Temperature (C)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

WeatherList.propTypes = {
  weather: PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(WeatherList);
