import theme from '@/theme/theme';
import styled from 'styled-components';

export const DailyWeatherCardContainer = styled.div`
  height: 200px;
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.dark};
  width: 45%;
  margin-bottom: ${theme.spacing.spacingMd};
  padding: ${theme.spacing.spacingXs};

  @media (min-width: ${theme.breakpoint.md}px) {
    width: 30%;
    margin-bottom: ${theme.spacing.spacingSm};
    margin-right: ${theme.spacing.spacingSm};
  }
  @media (min-width: ${theme.breakpoint.lg}px) {
    width: 18%;
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
    display: flex;
    justify-content: space-between;

    & .secondary-color {
      color: ${theme.colors.gray};
    }
  }
`;
