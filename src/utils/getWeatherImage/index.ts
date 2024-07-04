export const getWeatherImage = (conditionSlug: string | undefined): string => {
  const weatherImages: { [key: string]: string } = {
    clear_day: '/assets/clear_day.svg',
    clear_night: '/assets/clear_night.svg',
    cloud: '/assets/cloud.svg',
    cloudly_day: '/assets/cloudly_day.svg',
    cloudly_night: '/assets/cloudly_night.svg',
    fog: '/assets/fog.svg',
    hail: '/assets/hail.svg',
    none_day: '/assets/none_day.svg',
    none_night: '/assets/none_night.svg',
    rain: '/assets/rain.svg',
    snow: '/assets/snow.svg',
    storm: '/assets/storm.svg',
  };

  return weatherImages[conditionSlug ?? ''] ?? '/assets/cloudly_day.svg';
};
