import theme from '@/theme/theme';
import { motion } from 'framer-motion';
import styled from 'styled-components';

interface CardFooterProps {
  windDir?: number;
}

export const HightLightCardContainer = styled.div`
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
`;

export const CardTitle = styled.h2`
  font-size: ${theme.typography.variants.heading4.fontSize};
  font-weight: ${theme.typography.variants.heading4.fontWeight};
  text-align: center;
  color: ${theme.colors.primary};
  margin-bottom: 1rem;
  margin-top: 0;
`;

export const CardInformation = styled.p`
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
`;

export const CardFooter = styled.div<CardFooterProps>`
  display: flex;
  justify-content: center;
  padding-top: 1rem;
`;

export const CardFooterText = styled.p`
  font-size: ${theme.typography.variants.heading4.fontSize};
  font-weight: ${theme.typography.variants.heading4.fontWeight};
  text-align: center;
  color: ${theme.colors.primary};
  margin-left: 1rem;
`;

export const RotatingImage = styled(motion.img)`
  width: 17px;
  margin-right: 0.5rem;
  transition: transform 1s ease;
`;
