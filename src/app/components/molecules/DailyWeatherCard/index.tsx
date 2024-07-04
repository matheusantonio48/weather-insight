import { useWeather } from '@/context/useWeather';
import { DailyWeatherCardProps } from '@/types/types';
import { getTemperatures } from '@/utils/getTemperatures';
import { getWeatherImage } from '@/utils/getWeatherImage';
import React from 'react';
import { DailyWeatherCardContainer } from './index.styles';

const DailyWeatherCard: React.FC<DailyWeatherCardProps> = ({ forecast }) => {
  const { unitOption } = useWeather();
  const { min, max } = getTemperatures({ min: forecast.min, max: forecast.max }, unitOption);
  const weatherImage = getWeatherImage(forecast.condition);

  return (
    <DailyWeatherCardContainer>
      <p className="text">
        {forecast.weekday}. {forecast.date}
      </p>
      <div className="image-container">
        <img src={weatherImage} alt={forecast.description} className="card-image" />
      </div>
      <div className="temperature-container text">
        <p>
          {max}°{unitOption}
        </p>
        <p className="secondary-color">
          {min}°{unitOption}
        </p>
      </div>
    </DailyWeatherCardContainer>
  );
};

export default DailyWeatherCard;
