import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { WeatherData } from './models/weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private weatherService: WeatherService) { }

  cityName: string = 'kochi';
  weatherData?: WeatherData

  ngOnInit(): void {
    this.getWeatherData(this.cityName)
  }
  kelvinToCelsius(kelvin: number): number {
    return kelvin - 273.15;
  }

  onSubmit() {
    this.getWeatherData(this.cityName);
  }

  getWeatherData(cityName: string) {
    this.weatherService.getWeatherData(cityName).subscribe({
      next: (response) => {
        this.weatherData = response;
        console.log(response);
      }
    })
  }

}
