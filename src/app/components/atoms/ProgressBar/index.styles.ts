import theme from '@/theme/theme';
import styled from 'styled-components';

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

interface ProgressProps {
  percentage: number;
}

export const Progress = styled.div<ProgressProps>`
  width: 100%;
  height: 8px;
  background-color: ${theme.colors.primary};
  border-radius: 10px;
  position: relative;

  &::after {
    content: '';
    display: block;
    background: ${theme.colors.accent};
    width: ${({ percentage }) => `${percentage}%`};
    height: 100%;
    border-radius: 6px;
    transition: width 1s ease;
  }

  &::before {
    content: '%';
    color: ${theme.colors.primary};
    font-size: 12px;
    font-weight: 700;
    position: absolute;
    top: 10px;
    right: 0;
  }
`;
