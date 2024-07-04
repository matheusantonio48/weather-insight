import theme from '@/theme/theme';
import styled from 'styled-components';

export const DailyWeatherCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${theme.background.secondary};
  margin-bottom: ${theme.spacing.spacingMd};
  padding: ${theme.spacing.spacingXs};
  height: 200px;
  width: 100%;
  max-width: 200px;
  box-sizing: border-box;

  @media (min-width: ${theme.breakpoint.md}px) {
    height: 150px;
    max-width: 150px;
  }

  @media (min-width: ${theme.breakpoint.lg}px) {
    height: 180px;
    max-width: 180px;
  }

  & .text {
    height: 25%;
    color: ${theme.colors.primary};
    margin: 0;
    text-align: center;
  }
  & .image-container {
    height: 50%;

    & .card-image {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }
  & .temperature-container {
    height: 25%;
    display: flex;
    justify-content: space-between;

    & .secondary-color {
      color: ${theme.colors.secondary};
    }
  }
`;
