import { Button } from '@/app/components/atoms/Button';
import DailyWeatherCard from '@/app/components/molecules/DailyWeatherCard';
import HightLigthsCard from '@/app/components/molecules/HightlightsCard';
import { DetailWeatherProps } from '@/types/types';
import React from 'react';
import { Container, DetailWeatherContainer } from './index.styles';

const DetailWeather: React.FC<DetailWeatherProps> = ({ fullWeatherData, unitOption, setUnitOption }) => {
  const { current, forecast } = fullWeatherData;
  const { city_name } = current;

  return (
    <DetailWeatherContainer>
      <Container>
        <div className="temperature-units-options">
          <Button
            type="button"
            className={`rounded text-bold ${unitOption === 'C' ? 'active' : ''} margin-right`}
            onClick={() => setUnitOption('C')}
          >
            °C
          </Button>
          <Button type="button" className={`rounded text-bold ${unitOption === 'F' ? 'active' : ''}`} onClick={() => setUnitOption('F')}>
            °F
          </Button>
        </div>
        <div className="daily-weather-container">
          {forecast.slice(0, 5).map((forecast, index) => (
            <DailyWeatherCard key={index} forecast={forecast} unitOption={unitOption} />
          ))}
          <div className="fake-card"></div>
        </div>
        <div>
          <h1 className="today-hightlights-title">{city_name}, Today&apos;s Highlights</h1>
          <div className="today-hightlights-container">
            <HightLigthsCard
              hightLight={{
                data: current.humidity,
                showBar: false,
                title: 'Humidity',
                showWind: false,
                unit: '%',
              }}
            />
            <HightLigthsCard
              hightLight={{
                data: parseFloat(current.wind_speedy),
                showBar: false,
                title: 'Wind Speed',
                showWind: true,
                unit: current.wind_speedy,
                windDir: current.wind_direction,
                windDirText: current.wind_cardinal,
              }}
            />
          </div>
        </div>
      </Container>
    </DetailWeatherContainer>
  );
};

export default DetailWeather;
