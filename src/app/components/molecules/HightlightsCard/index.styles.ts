import theme from '@/theme/theme';
import styled from 'styled-components';

interface CardFooterProps {
  windDir?: number;
}

export const HightLightCardContainer = styled.div`
  width: 100%;
  padding: 2rem;
  background-color: ${theme.colors.active};
  margin-bottom: 2rem;

  @media (min-width: ${theme.breakpoint.md}px) {
    width: 45%;
  }
  @media (min-width: ${theme.breakpoint.lg}px) {
    width: 48%;
  }

  & .card-title {
    font-size: ${theme.typography.variants.body1.fontSize};
    font-weight: ${theme.typography.variants.body1.fontWeight};
    text-align: center;
    color: ${theme.colors.primary};
    margin-bottom: 1rem;
    margin-top: 0;
  }
  & .card-information {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    font-size: 64px;
    font-weight: 700;
    text-align: center;
    color: ${theme.colors.primary};
    margin: 0 0 1.5rem;

    & span {
      font-size: 36px;
      font-weight: 500;
    }
  }
`;

export const CardFooter = styled.div<CardFooterProps>`
  display: flex;
  justify-content: center;
  padding-top: 1rem;

  & .card-footer-text {
    font-size: ${theme.typography.variants.body2.fontSize};
    font-weight: ${theme.typography.variants.body2.fontWeight};
    text-align: center;
    color: ${theme.colors.primary};
    margin-left: 1rem;
  }
  & .card-footer-image {
    width: 17px;
    margin-right: 0.5rem;
    transition: transform 1s ease;
    transform: ${({ windDir }) => (windDir ? `rotate(${windDir}deg)` : 'none')};
  }
`;
