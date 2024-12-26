import React from 'react';
import { Link } from 'react-router-dom';
import { HorseshoeIcon, Code2Icon } from 'lucide-react';

export function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-md mx-auto space-y-6">
        <div className="text-center">
          <HorseshoeIcon className="h-16 w-16 mx-auto text-indigo-600" />
          <h1 className="mt-4 text-2xl font-bold text-gray-900">Horse Racing Predictor</h1>
        </div>

        <div className="space-y-4">
          <Link
            to="/predictor"
            className="block w-full p-4 bg-indigo-600 text-white rounded-lg text-center font-medium hover:bg-indigo-700"
          >
            Race Predictor
          </Link>
          
          <Link
            to="/editor"
            className="block w-full p-4 bg-white border-2 border-gray-200 text-gray-700 rounded-lg text-center font-medium hover:bg-gray-50"
          >
            <Code2Icon className="inline-block h-5 w-5 mr-2" />
            Code Editor
          </Link>
        </div>
      </div>
    </div>
  );
}