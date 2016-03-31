import React from 'react';
import { Component } from 'react';

import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';

const App = (props) => (
  <div className="container">
    <SearchBar />
    <WeatherList />
  </div>
);


export default App;

