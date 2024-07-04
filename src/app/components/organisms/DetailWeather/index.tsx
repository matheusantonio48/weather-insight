import { Button } from '@/app/components/atoms/Button';
import DailyWeatherCard from '@/app/components/molecules/DailyWeatherCard';
import HightLigthsCard from '@/app/components/molecules/HightlightsCard';
import MoonPhaseCard from '@/app/components/molecules/MoonPhasesCard';
import { useDetailWeather } from '@/hooks/useDetailWeather';
import { DetailWeatherProps } from '@/types/types';
import React from 'react';
import { Container, DetailWeatherContainer } from './index.styles';

const DetailWeather: React.FC<DetailWeatherProps> = (props) => {
  const { cityName, forecast, hightlights, moonPhase, unitOption } = useDetailWeather(props);

  return (
    <DetailWeatherContainer>
      <Container>
        <div className="temperature-units-options">
          <Button color="secondary" rounded isSelected={unitOption === 'C'} onClick={() => props.setUnitOption('C')}>
            °C
          </Button>
          <Button color="secondary" rounded isSelected={unitOption === 'F'} onClick={() => props.setUnitOption('F')}>
            °F
          </Button>
        </div>
        <div className="daily-weather-container">
          {forecast?.map((dayForecast, index) => (
            <DailyWeatherCard key={index} forecast={dayForecast} unitOption={unitOption} />
          ))}
        </div>
        <div>
          <h1 className="today-hightlights-title">{cityName}, Today&apos;s Highlights</h1>
          <div className="today-hightlights-container">
            {hightlights.map((hightLight, index) => (
              <HightLigthsCard hightLight={hightLight} key={index} />
            ))}
            <MoonPhaseCard phase={moonPhase} />
          </div>
        </div>
      </Container>
    </DetailWeatherContainer>
  );
};

export default DetailWeather;
