export const getMoonPhasesImages = (conditionSlug: string | undefined): string => {
  const moonImages: { [key: string]: string } = {
    first_quarter: '/assets/moonPhases/first_quarter.png',
    full: '/assets/moonPhases/full.png',
    last_quarter: '/assets/moonPhases/last_quarter.png',
    new: '/assets/moonPhases/new.png',
    waning_crescent: '/assets/moonPhases/waning_crescent.png',
    waning_gibbous: '/assets/moonPhases/waning_gibbous.png',
    waxing_crescent: '/assets/moonPhases/waxing_crescent.png',
    waxing_gibbous: '/assets/moonPhases/waxing_gibbous.png',
  };

  return moonImages[conditionSlug ?? ''] ?? '/assets/moonPhases/full.png';
};
