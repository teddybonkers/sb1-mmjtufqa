export const calculateLifePathNumber = (birthDate: string): number => {
  const numbers = birthDate.replace(/\D/g, '').split('').map(Number);
  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  return reduceToSingleDigit(sum);
};

export const calculateDestinyNumber = (name: string): number => {
  const numerologyValues: Record<string, number> = {
    'a': 1, 'j': 1, 's': 1,
    'b': 2, 'k': 2, 't': 2,
    'c': 3, 'l': 3, 'u': 3,
    'd': 4, 'm': 4, 'v': 4,
    'e': 5, 'n': 5, 'w': 5,
    'f': 6, 'o': 6, 'x': 6,
    'g': 7, 'p': 7, 'y': 7,
    'h': 8, 'q': 8, 'z': 8,
    'i': 9, 'r': 9
  };

  const sum = name.toLowerCase()
    .replace(/[^a-z]/g, '')
    .split('')
    .reduce((acc, char) => acc + (numerologyValues[char] || 0), 0);

  return reduceToSingleDigit(sum);
};

const reduceToSingleDigit = (num: number): number => {
  if (num === 11 || num === 22 || num === 33) return num;
  while (num > 9) {
    num = num.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
  }
  return num;
};