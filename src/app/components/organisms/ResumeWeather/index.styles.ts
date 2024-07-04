import theme from '@/theme/theme';
import styled from 'styled-components';

export const ResumeWeatherContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.active};
  position: relative;

  @media (min-width: ${theme.breakpoint.md}px) {
    width: 30%;
  }
  @media (min-width: ${theme.breakpoint.lg}px) {
    width: 25%;
  }
`;

export const ActionsWeatherContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  position: absolute;
  width: 100%;
  z-index: 5;

  @media (min-width: ${theme.breakpoint.md}px) {
    padding: 2rem 1rem;
  }
`;

export const ImageResumeContainer = styled.div`
  width: 100%;
  position: relative;
  margin-top: 5rem;

  @media ${theme.breakpoint.md} {
    height: 100vh;
  }

  & .background-image {
    top: 0;
    left: -20%;
    opacity: 0.1;
    position: absolute;
    width: 147%;
    z-index: 1;
  }
  & .weather-image {
    width: 40%;
    display: block;
    margin: 4rem auto 3rem;

    @media ${theme.breakpoint.md} {
      width: 30%;
      margin-bottom: 4rem;
    }
    @media ${theme.breakpoint.lg} {
      margin-bottom: 5rem;
    }
  }
`;

export const ResumeInformationContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 2rem;

  @media ${theme.breakpoint.md} {
    padding-top: 0;
  }

  & p {
    text-align: center;
    color: ${theme.colors.secondary};
  }

  & .temperature {
    font-size: 85px;
    margin-bottom: 1rem;
    color: ${theme.colors.primary};
    font-weight: 500;

    @media ${theme.breakpoint.lg} {
      font-size: 100px;
      margin-bottom: 6rem;

      & span {
        font-size: 50px;
      }
    }
  }
  & .temperature span {
    font-size: 35px;
    font-weight: 300;
  }

  & .weather-text {
    font-size: 25px;
    font-weight: 700;
    margin-bottom: 5rem;

    @media ${theme.breakpoint.lg} {
      font-size: 36px;
      margin-bottom: 6rem;
    }
  }
  & .location-date-container {
    width: 100%;
    margin-top: ${theme.spacing.spacing5xl};
    bottom: 1rem;

    & .date-text,
    & .location-text {
      font-size: 14px;

      @media ${theme.breakpoint.lg} {
        font-size: 18px;
      }
    }
  }
`;
