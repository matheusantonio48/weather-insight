import theme from '@/theme/theme';
import { motion } from 'framer-motion';
import styled from 'styled-components';

interface ProgressProps {
  percentage: number;
}

export const ProgressBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const PercentagesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 8px;

  p {
    color: ${theme.colors.primary};
    font-size: 12px;
    font-weight: 700;
  }
`;

export const Progress = styled.div`
  width: 100%;
  height: 8px;
  background-color: ${theme.colors.primary};
  border-radius: 10px;
  position: relative;
`;

export const AnimatedProgress = styled(motion.div)<ProgressProps>`
  background: ${theme.colors.accent};
  height: 100%;
  border-radius: 6px;
`;
