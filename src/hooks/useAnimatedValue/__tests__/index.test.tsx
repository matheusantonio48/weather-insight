import { act, renderHook } from '@testing-library/react';
import { useAnimatedValue } from '../index';

jest.mock('framer-motion', () => {
  const originalModule = jest.requireActual('framer-motion');
  return {
    ...originalModule,
    useSpring: jest.fn((value) => value),
  };
});

describe('useAnimatedValue', () => {
  jest.setTimeout(10000);

  it('should initialize with 0 and animate to the given value', async () => {
    const { result, rerender } = renderHook(({ value, duration }) => useAnimatedValue(value, duration), {
      initialProps: { value: 0, duration: 2 },
    });

    expect(result.current).toBe(0);

    rerender({ value: 50, duration: 2 });

    await act(async () => {
      await new Promise((r) => setTimeout(r, 2500));
    });

    expect(result.current).toBe(50);
  });

  it('should update animated value when the input value changes', async () => {
    const { result, rerender } = renderHook(({ value, duration }) => useAnimatedValue(value, duration), {
      initialProps: { value: 50, duration: 2 },
    });

    await act(async () => {
      await new Promise((r) => setTimeout(r, 2500));
    });

    expect(result.current).toBe(50);

    rerender({ value: 100, duration: 2 });

    await act(async () => {
      await new Promise((r) => setTimeout(r, 2500));
    });

    expect(result.current).toBe(100);
  });
});
