import theme from '@/theme/theme';
import styled from 'styled-components';

export const DetailWeatherContainer = styled.div`
  width: 100%;
  background-color: ${theme.background.primary};
  z-index: 10;

  @media (min-width: ${theme.breakpoint.md}px) {
    width: 70%;
  }
  @media (min-width: ${theme.breakpoint.lg}px) {
    width: 75%;
  }
`;

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding-top: 2rem;

  @media (min-width: ${theme.breakpoint.md}px) {
    width: 85%;
  }

  & .temperature-units-options {
    display: none;

    @media (min-width: ${theme.breakpoint.md}px) {
      display: flex;
      justify-content: flex-end;
      margin-bottom: 2rem;
    }
  }
  & .daily-weather-container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 2rem 2rem 0;
    margin-bottom: 2rem;

    & .fake-card {
      display: none;
    }

    @media (min-width: ${theme.breakpoint.md}px) {
      padding: 0;

      & div:nth-of-type(3) {
        margin-right: 0;
      }
      & div:nth-of-type(4) {
        margin-right: 10px;
      }
      & div:nth-of-type(5) {
        margin-right: 0;
      }
      & .fake-card {
        display: block;
        width: 30%;
        margin-bottom: 10px;
        margin-right: 10px;
      }
    }
    @media (min-width: ${theme.breakpoint.lg}px) {
      & div:nth-of-type(3) {
        margin-right: 10px;
      }
      & .fake-card {
        display: none;
      }
    }
  }
  & .today-hightlights-title {
    text-align: center;
    color: ${theme.colors.primary};
    font-size: ${theme.typography.variants.heading2.fontSize};
    margin-top: 0;
    margin-bottom: 2rem;

    @media (min-width: ${theme.breakpoint.md}px) {
      text-align: start;
    }
  }
  & .today-hightlights-container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 1.3rem;
    margin-bottom: 2rem;

    @media (min-width: ${theme.breakpoint.md}px) {
      padding: 0;
    }
  }
  & .info-container {
    margin-bottom: 2rem;

    & p {
      text-align: center;
      color: ${theme.colors.secondary};
    }
  }
`;
