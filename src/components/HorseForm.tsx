import React, { useState } from 'react';
import { Horse } from '../types/types';
import { PlusCircle, MinusCircle } from 'lucide-react';

interface HorseFormProps {
  onSubmit: (horse: Horse) => void;
}

export function HorseForm({ onSubmit }: HorseFormProps) {
  const [horse, setHorse] = useState<Partial<Horse>>({
    pastPerformance: []
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (horse.name && horse.birthDate) {
      onSubmit(horse as Horse);
      setHorse({ pastPerformance: [] });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Horse Name</label>
        <input
          type="text"
          value={horse.name || ''}
          onChange={e => setHorse(prev => ({ ...prev, name: e.target.value }))}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Birth Date</label>
        <input
          type="date"
          value={horse.birthDate || ''}
          onChange={e => setHorse(prev => ({ ...prev, birthDate: e.target.value }))}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
      >
        Add Horse
      </button>
    </form>
  );
}