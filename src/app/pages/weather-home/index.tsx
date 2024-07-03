import Container from '@/app/components/molecules/Container';
import DetailWeather from '@/app/components/organisms/DetailWeather';
import ResumeWeather from '@/app/components/organisms/ResumeWeather';
import { useWeather } from '@/context/useWeather';
import React, { useEffect } from 'react';

export const WeatherHome: React.FC = () => {
  const { fullWeatherData, unitOption, getWeatherByName, setUnitOption } = useWeather();

  const setError = (error: boolean) => {
    // @to-do
    // Implementar lógica para lidar com erros
  };

  useEffect(() => {
    console.log(fullWeatherData);
  }, []);

  return (
    <div>
      <Container>
        {fullWeatherData && (
          <>
            <ResumeWeather
              fullWeatherData={fullWeatherData}
              unitOption={unitOption}
              getWeatherFunction={getWeatherByName}
              setError={setError}
            />
            <DetailWeather fullWeatherData={fullWeatherData} setUnitOption={setUnitOption} unitOption={unitOption} />
          </>
        )}
      </Container>
    </div>
  );
};
