import ProgressBar from '@/app/components/atoms/ProgressBar';
import { useAnimatedValue } from '@/hooks/useAnimatedValue';
import { HightLigthsCardProps } from '@/types/types';
import React from 'react';
import { CardFooter, CardFooterText, CardInformation, CardTitle, HightLightCardContainer, RotatingImage } from './index.styles';

const Title: React.FC<{ title: string }> = ({ title }) => <CardTitle>{title}</CardTitle>;

const Information: React.FC<{ animatedValue: number | string; unit?: string }> = ({ animatedValue, unit }) => (
  <CardInformation>{`${animatedValue}${unit}`}</CardInformation>
);

const WindSpeed: React.FC<{ windSpeed: string }> = ({ windSpeed }) => <CardInformation>{windSpeed}</CardInformation>;

const WindDirectionFooter: React.FC<{ windDir?: number; windDirText?: string }> = ({ windDir, windDirText }) =>
  windDirText ? (
    <CardFooter windDir={windDir}>
      <RotatingImage
        src="/assets/wind-direction.svg"
        alt="wind"
        animate={{ rotate: windDir }}
        transition={{ duration: 1 }}
        initial={{ rotate: 0 }}
        className="card-footer-image"
      />
      <CardFooterText>{windDirText}</CardFooterText>
    </CardFooter>
  ) : null;

const HightLigthsCard: React.FC<HightLigthsCardProps> = ({ hightLight }) => {
  const { windDir, value, title = '', unit, windDirText, windSpeed } = hightLight;
  const animatedValue = useAnimatedValue(value ?? 0, 2);

  return (
    <HightLightCardContainer>
      <Title title={title} />
      {value !== undefined && <Information animatedValue={animatedValue} unit={unit} />}
      {windSpeed && <WindSpeed windSpeed={windSpeed} />}
      <WindDirectionFooter windDir={windDir} windDirText={windDirText} />
      {value !== undefined && <ProgressBar percentage={value} />}
    </HightLightCardContainer>
  );
};

export default HightLigthsCard;
