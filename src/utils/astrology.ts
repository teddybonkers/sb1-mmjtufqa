export const calculateAstrologyScore = (birthDate: string, raceDate: string): number => {
  const birthDateTime = new Date(birthDate);
  const raceDateTime = new Date(raceDate);
  
  // Calculate moon phase compatibility (simplified)
  const moonPhaseScore = calculateMoonPhaseScore(birthDateTime, raceDateTime);
  
  // Calculate planetary positions (simplified)
  const planetaryScore = calculatePlanetaryScore(birthDateTime, raceDateTime);
  
  return (moonPhaseScore + planetaryScore) / 2;
};

const calculateMoonPhaseScore = (birthDate: Date, raceDate: Date): number => {
  // Simplified moon phase calculation
  const daysSinceBirth = Math.floor((raceDate.getTime() - birthDate.getTime()) / (1000 * 60 * 60 * 24));
  const moonCycle = daysSinceBirth % 29.5; // Lunar cycle is approximately 29.5 days
  
  // Score based on moon phase (0-10)
  return Math.abs(Math.sin((moonCycle / 29.5) * Math.PI * 2) * 10);
};

const calculatePlanetaryScore = (birthDate: Date, raceDate: Date): number => {
  // Simplified planetary alignment score
  const monthDiff = (raceDate.getMonth() - birthDate.getMonth() + 12) % 12;
  return Math.abs(Math.sin((monthDiff / 12) * Math.PI * 2) * 10);
};