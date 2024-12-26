import { Horse, RaceData, Prediction } from '../../types/types';
import { calculateDestinyNumber } from './numerology';
import { calculateAstrologyScore } from './astrology';

const calculateHorseEnergy = (horse: Horse, raceDate: string): number => {
  const numerologyScore = calculateDestinyNumber(horse.name);
  const astrologyScore = calculateAstrologyScore(horse.birthDate, raceDate);
  
  const performanceBonus = calculatePerformanceBonus(horse);
  const barrierInfluence = calculateBarrierInfluence(horse.numerologyNumber || 0, raceDate);

  const totalEnergy = (
    (numerologyScore * 2) + 
    (astrologyScore * 3) + 
    performanceBonus + 
    barrierInfluence
  ) / 7;

  return Math.min(100, Math.max(0, totalEnergy));
};

const calculatePerformanceBonus = (horse: Horse): number => {
  return horse.pastPerformance.reduce((sum, perf) => {
    return sum + (perf.position === 1 ? 15 : 
                 perf.position === 2 ? 10 : 
                 perf.position === 3 ? 5 : 0);
  }, 0) / Math.max(1, horse.pastPerformance.length);
};

const calculateBarrierInfluence = (barrierNumber: number, raceDate: string): number => {
  const dateSum = raceDate.split('-').reduce((sum, part) => sum + parseInt(part), 0);
  return (barrierNumber * dateSum) % 15 - 7;
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
      predictedPosition: 0
    };
  });

  return predictions
    .sort((a, b) => b.totalScore - a.totalScore)
    .map((pred, index) => ({
      ...pred,
      predictedPosition: index + 1
    }));
};