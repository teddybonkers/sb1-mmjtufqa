import React from 'react';
import { Prediction } from '../types/types';
import { Trophy, Medal } from 'lucide-react';

interface PredictionResultsProps {
  predictions: Prediction[];
}

export default function PredictionResults({ predictions }: PredictionResultsProps) {
  const getPositionIcon = (position: number) => {
    switch (position) {
      case 1:
        return <Trophy className="text-yellow-500" size={24} />;
      case 2:
        return <Medal className="text-gray-400" size={24} />;
      case 3:
        return <Medal className="text-amber-600" size={24} />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-900">Race Predictions</h2>
      <div className="grid gap-4">
        {predictions.map((prediction) => (
          <div
            key={prediction.horseName}
            className="bg-white p-4 rounded-lg shadow-md border-l-4 border-indigo-500"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                {getPositionIcon(prediction.predictedPosition)}
                <h3 className="text-lg font-semibold">
                  {prediction.horseName}
                </h3>
              </div>
              <span className="text-2xl font-bold text-indigo-600">
                {prediction.predictedPosition}
              </span>
            </div>
            
            <div className="mt-2 grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Numerology Score</p>
                <div className="flex items-center">
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-purple-500 rounded-full h-2"
                      style={{ width: `${prediction.numerologyScore}%` }}
                    />
                  </div>
                  <span className="ml-2 text-sm font-medium">
                    {Math.round(prediction.numerologyScore)}%
                  </span>
                </div>
              </div>
              
              <div>
                <p className="text-sm text-gray-500">Astrology Score</p>
                <div className="flex items-center">
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-500 rounded-full h-2"
                      style={{ width: `${prediction.astrologyScore}%` }}
                    />
                  </div>
                  <span className="ml-2 text-sm font-medium">
                    {Math.round(prediction.astrologyScore)}%
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-2">
              <p className="text-sm text-gray-500">Total Score</p>
              <div className="flex items-center">
                <div className="flex-1 bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-indigo-600 rounded-full h-3"
                    style={{ width: `${prediction.totalScore}%` }}
                  />
                </div>
                <span className="ml-2 font-medium">
                  {Math.round(prediction.totalScore)}%
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}