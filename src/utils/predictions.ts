import { Horse, RaceData, Prediction } from '../types/types';
import { calculateLifePathNumber, calculateDestinyNumber } from './numerology';
import { calculateAstrologyScore } from './astrology';

const getBarrierInfluence = (barrierNumber: number, raceDate: string): number => {
  const dateNumber = calculateLifePathNumber(raceDate);
  return (barrierNumber * dateNumber) % 15 - 7;
};

const calculateHorseEnergy = (horse: Horse, raceDate: string): number => {
  // Combine numerology and astrology scores
  const numerologyScore = calculateDestinyNumber(horse.name);
  const astrologyScore = calculateAstrologyScore(horse.birthDate, raceDate);
  
  // Calculate historical performance bonus
  const performanceBonus = horse.pastPerformance.reduce((sum, perf) => {
    return sum + (perf.position === 1 ? 15 : 
                 perf.position === 2 ? 10 : 
                 perf.position === 3 ? 5 : 0);
  }, 0) / Math.max(1, horse.pastPerformance.length);

  // Calculate barrier influence
  const barrierInfluence = getBarrierInfluence(horse.numerologyNumber || 0, raceDate);

  // Combine all factors
  const totalEnergy = (
    (numerologyScore * 2) + 
    (astrologyScore * 3) + 
    performanceBonus + 
    barrierInfluence
  ) / 7;

  return Math.min(100, Math.max(0, totalEnergy));
};

export const predictRaceOutcome = (raceData: RaceData): Prediction[] => {
  const predictions = raceData.horses.map(horse => {
    const energy = calculateHorseEnergy(horse, raceData.raceDate);
    const numerologyScore = calculateDestinyNumber(horse.name);
    const astrologyScore = calculateAstrologyScore(horse.birthDate, raceData.raceDate);

    return {
      horseName: horse.name,
      numerologyScore,
      astrologyScore,
      totalScore: energy,
      predictedPosition: 0 // Will be set after sorting
    };
  });

  // Sort by total score and assign positions
  return predictions
    .sort((a, b) => b.totalScore - a.totalScore)
    .map((pred, index) => ({
      ...pred,
      predictedPosition: index + 1
    }));
};