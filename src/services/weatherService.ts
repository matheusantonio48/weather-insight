const buildApiUrl = (city?: string): string => {
  return city ? `/api/weather?city=${encodeURIComponent(city)}` : '/api/weather';
};

const handleResponseError = async (response: Response) => {
  const errorData = await response.json();
  throw new Error(errorData.message || 'Failed to fetch weather data');
};

export const fetchWeatherByCity = async (city?: string) => {
  try {
    const url = buildApiUrl(city);
    const response = await fetch(url);

    if (!response.ok) {
      await handleResponseError(response);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};
