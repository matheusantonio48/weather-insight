import { getMoonPhasesImages } from '../index';

describe('getMoonPhasesImages', () => {
  it('should return the correct image path for each moon phase', () => {
    const moonPhases = [
      { phase: 'first_quarter', expected: '/assets/moonPhases/first_quarter.png' },
      { phase: 'full', expected: '/assets/moonPhases/full.png' },
      { phase: 'last_quarter', expected: '/assets/moonPhases/last_quarter.png' },
      { phase: 'new', expected: '/assets/moonPhases/new.png' },
      { phase: 'waning_crescent', expected: '/assets/moonPhases/waning_crescent.png' },
      { phase: 'waning_gibbous', expected: '/assets/moonPhases/waning_gibbous.png' },
      { phase: 'waxing_crescent', expected: '/assets/moonPhases/waxing_crescent.png' },
      { phase: 'waxing_gibbous', expected: '/assets/moonPhases/waxing_gibbous.png' },
    ];

    moonPhases.forEach(({ phase, expected }) => {
      expect(getMoonPhasesImages(phase)).toBe(expected);
    });
  });

  it('should return the full moon image for an unknown moon phase', () => {
    expect(getMoonPhasesImages('unknown_phase')).toBe('/assets/moonPhases/full.png');
  });

  it('should return the full moon image when conditionSlug is undefined', () => {
    expect(getMoonPhasesImages(undefined)).toBe('/assets/moonPhases/full.png');
  });

  it('should return the full moon image when conditionSlug is an empty string', () => {
    expect(getMoonPhasesImages('')).toBe('/assets/moonPhases/full.png');
  });
});
