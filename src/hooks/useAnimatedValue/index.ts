import { useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

export const useAnimatedValue = (value: number, duration: number) => {
  const [animatedValue, setAnimatedValue] = useState(0);
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { stiffness: 100, damping: 20, duration });

  useEffect(() => {
    const unsubscribe = spring.on('change', (latest) => {
      setAnimatedValue(Math.round(latest));
    });

    return () => unsubscribe();
  }, [spring]);

  useEffect(() => {
    motionValue.set(value);
  }, [value, motionValue]);

  return animatedValue;
};
