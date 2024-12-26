import { Horse, RaceData, Prediction } from './types';

export interface HorseEnergy {
  chaldeanEnergy: number;
  pythagoreanEnergy: number;
  combinedEnergy: number;
  barrierInfluence: number;
}

export interface HorseWithEnergy extends Horse {
  energy: HorseEnergy;
  predictedPosition: number;
}