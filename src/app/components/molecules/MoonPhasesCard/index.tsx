import { getMoonPhasesImages } from '@/utils/getMoonPhases';
import React from 'react';
import { MoonPhaseCardContainer } from './index.styles';

interface MoonPhaseCardProps {
  phase: string;
}

const MoonPhaseCard: React.FC<MoonPhaseCardProps> = ({ phase }) => {
  const moonPhaseImage = getMoonPhasesImages(phase);
  return (
    <MoonPhaseCardContainer>
      <h2 className="card-title">Moon Phases</h2>
      <div className="card-information">
        <img src={moonPhaseImage} alt="moon phase" className="moon-phase-image" />
      </div>
    </MoonPhaseCardContainer>
  );
};

export default MoonPhaseCard;
