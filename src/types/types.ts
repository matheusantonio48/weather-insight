export interface Forecast {
  date: string;
  weekday: string;
  max: number;
  min: number;
  cloudiness: number;
  rain: number;
  rain_probability: number;
  wind_speedy: string;
  description: string;
  condition: string;
}

export interface ForecastImage {
  condition: string;
}

export interface HightLight {
  value?: number;
  title?: string;
  unit?: string;
  windDir?: number;
  windDirText?: string;
  windSpeed?: string;
}

export interface FullWeatherData {
  temp: number;
  date: string;
  time: string;
  condition_code: string;
  description: string;
  currently: string;
  city: string;
  img_id: string;
  humidity: number;
  cloudiness: number;
  rain: number;
  wind_speedy: string;
  wind_direction: number;
  wind_cardinal: string;
  sunrise: string;
  sunset: string;
  moon_phase: string;
  condition_slug: string;
  city_name: string;
  timezone: string;
  forecast: Forecast[];
}

export interface DetailWeatherProps {
  fullWeatherData: FullWeatherData;
  unitOption: 'C' | 'F';
  setUnitOption: (unit: 'C' | 'F') => void;
}

export interface DailyWeatherCardProps {
  forecast: Forecast;
  unitOption: 'C' | 'F';
}

export interface TodayWeather {
  condition_slug: string;
  weather: string;
  temp: number;
}

export interface ResumeWeatherProps {
  fullWeatherData: FullWeatherData;
  unitOption: 'C' | 'F';
  getWeatherFunction: (city: string) => void;
}

export interface HightLigthsCardProps {
  hightLight: HightLight;
}

export interface WeatherContextProps {
  defaultCity: string;
  setDefaultCity: (city: string) => void;
  previousSearches: string[];
  addPreviousSearch: (city: string) => void;
  unitOption: 'C' | 'F';
  setUnitOption: (unit: 'C' | 'F') => void;
  fullWeatherData: FullWeatherData | null;
  todayWeather: TodayWeather | null;
  showForm: boolean;
  toggleForm: () => void;
  getWeatherByNameOrIp: (city?: string) => void;
}
