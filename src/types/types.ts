export interface Horse {
  name: string;
  birthDate: string;
  pastPerformance: {
    position: number;
    date: string;
  }[];
  numerologyNumber?: number;
}

export interface RaceData {
  raceDate: string;
  raceTime: string;
  trackCondition: string;
  distance: number;
  horses: Horse[];
}

export interface Prediction {
  horseName: string;
  numerologyScore: number;
  astrologyScore: number;
  totalScore: number;
  predictedPosition: number;
}