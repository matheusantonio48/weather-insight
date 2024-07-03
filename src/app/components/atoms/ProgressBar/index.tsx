import React from 'react';
import { PercentagesContainer, Progress, ProgressBarContainer } from './index.styles';

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
      <Progress role="progressbar" percentage={percentage} />
    </ProgressBarContainer>
  );
};

export default ProgressBar;
