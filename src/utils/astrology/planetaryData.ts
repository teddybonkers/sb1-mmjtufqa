import type { VenueLocation } from './types';

export const getAstrologicalTransits = async (
  raceDateTime: string, 
  { latitude, longitude }: VenueLocation
) => {
  try {
    const response = await fetch(
      `https://astrology-api.com/transits?datetime=${raceDateTime}&lat=${latitude}&lon=${longitude}`
    );
    return await response.json();
  } catch (error) {
    console.error('Error fetching astrological transits:', error);
    return null;
  }
};

export const analyzeVenueInfluences = async ({ latitude, longitude }: VenueLocation) => {
  try {
    const response = await fetch(
      `https://astrology-api.com/localized?lat=${latitude}&lon=${longitude}`
    );
    return await response.json();
  } catch (error) {
    console.error('Error analyzing venue influences:', error);
    return null;
  }
};