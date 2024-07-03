import { useWeather } from '@/context/useWeather';
import { DailyWeatherCardProps } from '@/types/types';
import React from 'react';
import { DailyWeatherCardContainer } from './index.styles';

const DailyWeatherCard: React.FC<DailyWeatherCardProps> = ({ forecast }) => {
  const { unitOption } = useWeather();
  const minTemp = unitOption === 'C' ? forecast.min : (forecast.min * 9) / 5 + 32;
  const maxTemp = unitOption === 'C' ? forecast.max : (forecast.max * 9) / 5 + 32;

  return (
    <DailyWeatherCardContainer>
      <p className="text">{forecast.date}</p>
      <div className="image-container">
        <img src={`path_to_icons/${forecast.condition}.png`} alt={forecast.description} className="card-image" />
      </div>
      <div className="temperature-container text">
        <p>
          {maxTemp}°{unitOption}
        </p>
        <p className="secondary-color">
          {minTemp}°{unitOption}
        </p>
      </div>
    </DailyWeatherCardContainer>
  );
};

export default DailyWeatherCard;
