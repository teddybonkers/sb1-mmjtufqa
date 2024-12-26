import { ZODIAC_SIGNS } from './constants';
import type { ZodiacPeriod } from './types';

export const getZodiacSign = (birthDate: string): string => {
  const date = new Date(birthDate);
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const zodiacSign = ZODIAC_SIGNS.find(({ start, end }: ZodiacPeriod) => 
    (month === start.month && day >= start.day) || 
    (month === end.month && day <= end.day)
  );

  return zodiacSign?.sign || "Unknown";
};