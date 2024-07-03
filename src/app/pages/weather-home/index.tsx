import Container from '@/app/components/molecules/Container';
import DetailWeather from '@/app/components/organisms/DetailWeather';
import ResumeWeather from '@/app/components/organisms/ResumeWeather';
import { useWeather } from '@/context/useWeather';
import React from 'react';

export const WeatherHome: React.FC = () => {
  const { fullWeatherData, unitOption, getWeatherByName, setUnitOption } = useWeather();

  return (
    <div>
      <Container>
        {fullWeatherData && (
          <>
            <ResumeWeather fullWeatherData={fullWeatherData} unitOption={unitOption} getWeatherFunction={getWeatherByName} />
            <DetailWeather fullWeatherData={fullWeatherData} setUnitOption={setUnitOption} unitOption={unitOption} />
          </>
        )}
      </Container>
    </div>
  );
};
