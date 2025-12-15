import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap } from 'lucide-react';

// Real-Time Power Component
function RealTimePowerCard({ 
    currentPower, 
    percentage, 
    avgWindSpeed, 
    avgPower, 
    peakPower, 
    totalEnergy 
  }) {
    // Calculate the circle progress
    const radius = 90;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;
  
    return (
      <Card className="bg-gradient-to-br from-blue-500 to-blue-600 border-blue-400 text-white">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold flex items-center gap-2">
            <Zap className="w-6 h-6" />
            Real-Time Power
          </CardTitle>
        </CardHeader>
        
        <CardContent>
          {/* Circular Progress */}
          <div className="flex items-center justify-center my-8">
            <div className="relative">
              <svg width="240" height="240" className="transform -rotate-90">
                {/* Background circle */}
                <circle
                  cx="120"
                  cy="120"
                  r={radius}
                  stroke="rgba(255, 255, 255, 0.2)"
                  strokeWidth="16"
                  fill="none"
                />
                {/* Progress circle */}
                <circle
                  cx="120"
                  cy="120"
                  r={radius}
                  stroke="white"
                  strokeWidth="16"
                  fill="none"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="round"
                  className="transition-all duration-1000"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="text-5xl font-bold">{currentPower}kW</div>
                <div className="text-xl mt-1">{percentage}%</div>
              </div>
            </div>
          </div>
  
          {/* Stats */}
          <div className="space-y-4 mt-8">
            <div className="flex justify-between items-center">
              <span className="text-blue-100">Avg Wind Speed (10 min)</span>
              <span className="text-2xl font-bold">{avgWindSpeed} m/s</span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-blue-100">Avg Power (10 min)</span>
              <span className="text-2xl font-bold">{avgPower} kW</span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-blue-100">Peak Power (10 min)</span>
              <span className="text-2xl font-bold">{peakPower} kW</span>
            </div>
            
            <div className="flex justify-between items-center pt-4 border-t border-white/20">
              <span className="text-blue-100">Total Energy</span>
              <span className="text-3xl font-bold">{totalEnergy} GWh</span>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  };

export default (RealTimePowerCard);

  
 