import type { Horse, VenueLocation, AstrologicalData } from './types';
import { getZodiacSign } from './zodiac';
import { getMoonPhase } from './moonPhase';
import { getAstrologicalTransits, analyzeVenueInfluences } from './planetaryData';

export const predictRaceWithAstrology = async (
  horses: Horse[], 
  raceDateTime: string, 
  venue: VenueLocation
): Promise<void> => {
  try {
    const [moonPhase, transits, venueInfluences] = await Promise.all([
      getMoonPhase(raceDateTime),
      getAstrologicalTransits(raceDateTime, venue),
      analyzeVenueInfluences(venue)
    ]);

    const astrologicalData: AstrologicalData = {
      moonPhase,
      transits,
      venueInfluences
    };

    horses.forEach(horse => {
      const zodiacSign = getZodiacSign(horse.birthDate);
      console.log({
        horseName: horse.name,
        zodiacSign,
        astrologicalInsights: astrologicalData
      });
    });
  } catch (error) {
    console.error('Error in astrological prediction:', error);
  }
};