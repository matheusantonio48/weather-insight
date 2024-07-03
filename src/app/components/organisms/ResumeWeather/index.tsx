import { Button } from '@/app/components/atoms/Button';
import Form from '@/app/components/organisms/Form';
import { useWeather } from '@/context/useWeather';
import { ResumeWeatherProps } from '@/types/types';
import React from 'react';
import { ActionsWeatherContainer, ImageResumeContainer, ResumeInformationContainer, ResumeWeatherContainer } from './index.styles';

const ResumeWeather: React.FC<ResumeWeatherProps> = ({ fullWeatherData, unitOption, getWeatherFunction }) => {
  const { todayWeather, toggleForm, showForm } = useWeather();

  const currentTemp = todayWeather ? todayWeather[`temp${unitOption}` as 'tempC' | 'tempF'] : null;

  return (
    <ResumeWeatherContainer>
      <ActionsWeatherContainer>
        <Button type="button" className="search-button" onClick={toggleForm}>
          Search for places
        </Button>
        <Button type="button" className="rounded">
          <img src="/img/location.svg" alt="location button" />
        </Button>
      </ActionsWeatherContainer>
      <ImageResumeContainer>
        <img className="background-image" src="/vercel.svg" alt="cloud background" />
        <img className="weather-image" src="/next.svg" alt="Weather Icon" />
      </ImageResumeContainer>
      <ResumeInformationContainer>
        {currentTemp !== null && (
          <>
            <p className="temperature">
              {currentTemp}
              <span>°{unitOption}</span>
            </p>
            <p className="weather-text">{todayWeather?.weather}</p>
            <div className="location-date-container">
              <p className="date-text">Today - </p>
              <p className="location-text">{fullWeatherData.current.city_name}</p>
            </div>
          </>
        )}
      </ResumeInformationContainer>
      {showForm && <Form isVisible={showForm} setVisible={toggleForm} getWeatherFunction={{ byName: getWeatherFunction }} />}
    </ResumeWeatherContainer>
  );
};

export default ResumeWeather;
