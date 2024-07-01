'use client';
import { WeatherHome } from '@/app/pages/weather-home';
import { HomeContainer } from './page.style';

export default function Home() {
  return (
    <HomeContainer>
      <WeatherHome />
    </HomeContainer>
  );
}
