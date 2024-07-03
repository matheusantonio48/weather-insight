import { Button } from '@/app/components/atoms/Button';
import Form from '@/app/components/organisms/Form';
import { useWeather } from '@/context/useWeather';
import { ResumeWeatherProps } from '@/types/types';
import { getTemperatures } from '@/utils/getTemperatures';
import { getWeatherImage } from '@/utils/getWeatherImage';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import React from 'react';
import { ActionsWeatherContainer, ImageResumeContainer, ResumeInformationContainer, ResumeWeatherContainer } from './index.styles';

type WeatherImageProps = {
  conditionSlug: string | undefined;
};

const WeatherImage: React.FC<WeatherImageProps> = ({ conditionSlug }) => {
  const imagePath = getWeatherImage(conditionSlug);
  return <img className="weather-image" src={imagePath} alt="Weather Icon" />;
};

type WeatherInfoProps = {
  currentTemp: number | null;
  unitOption: 'C' | 'F';
  weather: string | undefined;
  date: string;
  cityName: string;
};

const WeatherInfo: React.FC<WeatherInfoProps> = ({ currentTemp, unitOption, weather, date, cityName }) => (
  <ResumeInformationContainer>
    {currentTemp !== null && (
      <>
        <p className="temperature">
          {currentTemp}
          <span>°{unitOption}</span>
        </p>
        <p className="weather-text">{weather}</p>
        <div className="location-date-container">
          <p className="date-text">Today - {date}</p>
          <p className="location-text">{cityName}</p>
        </div>
      </>
    )}
  </ResumeInformationContainer>
);

const ResumeWeather: React.FC<ResumeWeatherProps> = ({ fullWeatherData, unitOption, getWeatherFunction }) => {
  const { todayWeather, toggleForm, showForm } = useWeather();
  const { temp } = todayWeather ? getTemperatures({ temp: todayWeather.temp }, unitOption) : { temp: null };

  const { date, city_name: cityName } = fullWeatherData.current;

  return (
    <ResumeWeatherContainer>
      <ActionsWeatherContainer>
        <Button color="secondary" onClick={toggleForm}>
          Search for places
        </Button>
        <Button color="secondary" rounded>
          <MyLocationIcon />
        </Button>
      </ActionsWeatherContainer>
      <ImageResumeContainer>
        <img className="background-image" src="/assets/Cloud-background.png" alt="cloud background" />
        <WeatherImage conditionSlug={todayWeather?.condition_slug} />
      </ImageResumeContainer>
      <WeatherInfo currentTemp={temp} unitOption={unitOption} weather={todayWeather?.weather} date={date} cityName={cityName} />
      {showForm && <Form isVisible={showForm} setVisible={toggleForm} getWeatherFunction={{ byName: getWeatherFunction }} />}
    </ResumeWeatherContainer>
  );
};

export default ResumeWeather;
