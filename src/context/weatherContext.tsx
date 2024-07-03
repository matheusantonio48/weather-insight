import { WeatherContextProps } from '@/types/types';
import { createContext } from 'react';

const WeatherContext = createContext<WeatherContextProps | undefined>(undefined);

export default WeatherContext;
