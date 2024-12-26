export const getMoonPhase = async (raceDate: string): Promise<string> => {
  try {
    const response = await fetch(`https://api.farmsense.net/v1/moonphases/?d=${raceDate}`);
    const data = await response.json();
    return data[0]?.Phase || "Unknown";
  } catch (error) {
    console.error('Error fetching moon phase:', error);
    return "Unknown";
  }
};