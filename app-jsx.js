import React from 'react';
import BaselineModel from './components/BaselineModel';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Baseline Revenue Tracker
        </h1>
        <BaselineModel />
      </div>
    </div>
  );
}

export default App;