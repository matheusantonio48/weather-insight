import type { NextApiRequest, NextApiResponse } from 'next';

const buildApiUrl = (city?: string): string => {
  const baseUrl = `${process.env.NEXT_HGBRASIL_API_URL}/weather`;
  const apiKey = process.env.NEXT_HGBRASIL_API_KEY;

  if (city) {
    return `${baseUrl}?key=${apiKey}&city_name=${encodeURIComponent(city)}`;
  }
  return `${baseUrl}?key=${apiKey}&user_ip=remote`;
};

const handleApiError = (res: NextApiResponse, status: number, message: string) => {
  console.error(`Error fetching weather data: ${message}`);
  res.status(status).json({ message });
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { city } = req.query;
  const apiUrl = buildApiUrl(city as string);

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (!response.ok) {
      return handleApiError(res, response.status, data.message || response.statusText);
    }

    return res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
