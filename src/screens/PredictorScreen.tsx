import React, { useState } from 'react';
import { ScrollView, StackLayout, TextField, Button } from '@nativescript/core';
import { HorseForm } from '../components/HorseForm';
import { PredictionResults } from '../components/PredictionResults';
import { Horse, RaceData } from '../types/types';
import { predictRaceOutcome } from '../utils/predictions';

export function PredictorScreen() {
  const [horses, setHorses] = useState<Horse[]>([]);
  const [raceDetails, setRaceDetails] = useState({
    date: '',
    time: '',
    condition: '',
    distance: ''
  });

  const addHorse = (horse: Horse) => {
    setHorses(prev => [...prev, horse]);
  };

  const predict = () => {
    if (!raceDetails.date || !raceDetails.distance || horses.length < 2) {
      alert('Please fill all required fields');
      return;
    }

    const raceData: RaceData = {
      raceDate: raceDetails.date,
      raceTime: raceDetails.time,
      trackCondition: raceDetails.condition,
      distance: Number(raceDetails.distance),
      horses
    };

    const predictions = predictRaceOutcome(raceData);
    // Show predictions in results component
  };

  return (
    <ScrollView>
      <StackLayout class="p-20">
        <TextField
          hint="Race Date"
          text={raceDetails.date}
          onTextChange={(args) => setRaceDetails(prev => ({ ...prev, date: args.value }))}
          class="input m-b-20"
        />
        {/* Add other race detail fields */}
        <HorseForm onSubmit={addHorse} />
        <Button text="Predict" onTap={predict} class="btn btn-primary m-t-20" />
        <PredictionResults horses={horses} />
      </StackLayout>
    </ScrollView>
  );
}