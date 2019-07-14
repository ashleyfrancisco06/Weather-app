import React, {Component} from 'react';
import './App.css';
import axios from "axios"
import WeatherForm from "./Components/WeatherForm"
import Weather from "./Components/Weather"


class App extends Component{
  constructor(){
    super()

    this.state={
      weather: null,
      init: true,
      inputFormValue: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.onFormSubmit=this.onFormSubmit.bind(this)
  }

  handleInputChange(e){
    this.setState({
      inputFormValue:e.target.value
    })
  }
  async onFormSubmit(e){
    // do not refresh page
    e.preventDefault()
    // when form is submitted, grab weather API
    const zip = this.state.inputFormValue
    const fetchWeather = await axios(`http://api.openweathermap.org/data/2.5/weather?zip=${zip},us&units=imperial&APPID=6926dffc075354ac71e2996e9bbbdc98`)
    console.log(fetchWeather)

    this.setState({
      weather: fetchWeather.data,
      init:false,
      inputFormValue: ''
    })
  }
  render(){
    return(
      <div className="App">
        <h1> Weather App</h1>
        <WeatherForm handleInputChange={this.handleInputChange} onFormSubmit={this.onFormSubmit} />

        <Weather {...this.state.weather} />

      </div>
    );
  }
}

export default App;
