export interface ZodiacPeriod {
  sign: string;
  start: { month: number; day: number };
  end: { month: number; day: number };
}

export interface VenueLocation {
  latitude: number;
  longitude: number;
}

export interface AstrologicalData {
  moonPhase: string;
  transits: any; // Replace with specific transit types
  venueInfluences: any; // Replace with specific influence types
}

export interface Horse {
  name: string;
  birthDate: string;
  zodiacSign?: string;
}