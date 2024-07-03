import ProgressBar from '@/app/components/atoms/ProgressBar';
import { HightLigthsCardProps } from '@/types/types';
import React from 'react';
import { CardFooter, HightLightCardContainer } from './index.styles';

const HightLigthsCard: React.FC<HightLigthsCardProps> = ({ hightLight }) => {
  const { windDir, data, showBar, title, showWind, unit, windDirText } = hightLight;
  return (
    <HightLightCardContainer>
      <h2 className="card-title">{title}</h2>
      <p className="card-information">
        <span>{unit}</span>
      </p>
      {showWind && (
        <CardFooter windDir={windDir}>
          <img src="/img/wind-direction.svg" alt="wind" className="card-footer-image" />
          <p className="card-footer-text">{windDirText}</p>
        </CardFooter>
      )}
      {showBar && <ProgressBar percentage={data} />}
    </HightLightCardContainer>
  );
};

export default HightLigthsCard;
