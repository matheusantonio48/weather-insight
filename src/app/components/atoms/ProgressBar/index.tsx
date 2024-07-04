import React from 'react';
import { AnimatedProgress, PercentagesContainer, Progress, ProgressBarContainer } from './index.styles';

export interface ProgressBarProps {
  percentage: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ percentage }) => {
  return (
    <ProgressBarContainer>
      <PercentagesContainer>
        <p>0</p>
        <p>50</p>
        <p>100</p>
      </PercentagesContainer>
      <Progress role="progressbar">
        <AnimatedProgress
          percentage={percentage}
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1 }}
        />
      </Progress>
    </ProgressBarContainer>
  );
};

export default ProgressBar;
