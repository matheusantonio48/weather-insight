import theme from '@/theme/theme';
import styled from 'styled-components';

export const MoonPhaseCardContainer = styled.div`
  width: 100%;
  padding: 2rem;
  background-color: ${theme.background.secondary};
  margin-bottom: 2rem;

  @media (min-width: ${theme.breakpoint.md}px) {
    width: 45%;
  }
  @media (min-width: ${theme.breakpoint.lg}px) {
    width: 48%;
  }

  & .card-title {
    font-size: ${theme.typography.variants.heading4.fontSize};
    font-weight: ${theme.typography.variants.heading4.fontWeight};
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

    & .moon-phase-image {
      width: 150px;
      height: 150px;
    }
  }
`;
