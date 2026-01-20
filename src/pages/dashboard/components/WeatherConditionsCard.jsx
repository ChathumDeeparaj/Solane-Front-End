import React, { useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Thermometer, Wind, Cloud, AlertCircle } from 'lucide-react';
import { useGetWeatherQuery } from '@/lib/redux/query';

// Weather Conditions Component with Real Data Integration
function WeatherConditionsCard({ latitude = 6.9355, longitude = 79.8487 }) {
  // Fetch weather data using RTK Query
  const { data: weatherData, isLoading, isError, error } = useGetWeatherQuery(
    { latitude, longitude },
    { skip: !latitude || !longitude }
  );

  // Determine solar condition color and icon
  const getSolarConditionColor = (condition) => {
    switch (condition) {
      case 'OPTIMAL':
        return 'bg-green-500/20 border-green-500/50 text-green-300';
      case 'GOOD':
        return 'bg-blue-500/20 border-blue-500/50 text-blue-300';
      case 'FAIR':
        return 'bg-yellow-500/20 border-yellow-500/50 text-yellow-300';
      case 'POOR':
        return 'bg-red-500/20 border-red-500/50 text-red-300';
      default:
        return 'bg-gray-500/20 border-gray-500/50 text-gray-300';
    }
  };

  const solarCondition = weatherData?.solar?.condition || 'N/A';
  const conditionColor = getSolarConditionColor(solarCondition);

  // Use real data if available, otherwise show loading/error state
  const temperature = weatherData?.current?.temperature ?? 12;
  const windSpeed = weatherData?.current?.windSpeed ?? 8.5;
  const cloudCover = weatherData?.current?.cloudCover ?? 0;
  const humidity = weatherData?.current?.humidity ?? 0;
  const weatherDescription = weatherData?.current?.weatherDescription ?? 'Clear Sky';

  return (
    <Card className="bg-gradient-to-br from-blue-800/40 to-blue-900/40 backdrop-blur-md border-blue-700/50 text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>

      <CardHeader className="relative z-10">
        <div className="flex justify-between items-center">
          <CardTitle className="text-2xl font-semibold">Weather Conditions</CardTitle>
          {isLoading && <span className="text-xs text-blue-300 animate-pulse">Fetching...</span>}
        </div>
      </CardHeader>

      <CardContent className="relative z-10">
        {isError && (
          <div className="mb-4 p-3 bg-red-500/20 border border-red-500/50 rounded-lg flex gap-2 items-center">
            <AlertCircle className="w-4 h-4" />
            <span className="text-sm">{error?.message || 'Failed to fetch weather data'}</span>
          </div>
        )}

        <div className="grid grid-cols-2 gap-4 mt-4">
          {/* Temperature */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="flex items-center gap-4">
              <div className="bg-white/20 p-3 rounded-xl">
                <Thermometer className="w-8 h-8" />
              </div>
              <div>
                <div className="text-4xl font-bold">
                  {isLoading ? '—' : `${temperature}°C`}
                </div>
                <div className="text-blue-200 text-sm mt-1">Temperature</div>
              </div>
            </div>
          </div>

          {/* Wind Speed */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="flex items-center gap-4">
              <div className="bg-white/20 p-3 rounded-xl">
                <Wind className="w-8 h-8" />
              </div>
              <div>
                <div className="text-4xl font-bold">
                  {isLoading ? '—' : `${windSpeed} m/s`}
                </div>
                <div className="text-blue-200 text-sm mt-1">Wind Speed</div>
              </div>
            </div>
          </div>

          {/* Cloud Cover */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="flex items-center gap-4">
              <div className="bg-white/20 p-3 rounded-xl">
                <Cloud className="w-8 h-8" />
              </div>
              <div>
                <div className="text-4xl font-bold">
                  {isLoading ? '—' : `${cloudCover}%`}
                </div>
                <div className="text-blue-200 text-sm mt-1">Cloud Cover</div>
              </div>
            </div>
          </div>

          {/* Humidity */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="flex items-center gap-4">
              <div className="bg-white/20 p-3 rounded-xl">
                <Cloud className="w-8 h-8" />
              </div>
              <div>
                <div className="text-4xl font-bold">
                  {isLoading ? '—' : `${humidity}%`}
                </div>
                <div className="text-blue-200 text-sm mt-1">Humidity</div>
              </div>
            </div>
          </div>
        </div>

        {/* Weather Description */}
        <div className="mt-4 p-3 bg-white/10 rounded-xl border border-white/20">
          <p className="text-sm text-blue-200">Current Conditions</p>
          <p className="text-lg font-semibold mt-1">
            {isLoading ? 'Loading...' : weatherDescription}
          </p>
        </div>

        {/* Solar Panel Status/Advisory */}
        {weatherData?.solar && (
          <div className={`mt-4 p-4 rounded-2xl border ${conditionColor}`}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold opacity-80">Solar Production Status</p>
                <p className="text-2xl font-bold mt-1">{solarCondition}</p>
                <p className="text-sm mt-2 opacity-90">{weatherData.solar.advice}</p>
                {weatherData.solar.solarOutput && (
                  <p className="text-xs mt-2 opacity-75">Expected Output: {weatherData.solar.solarOutput}</p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Last Updated */}
        {weatherData?.timestamp && (
          <div className="mt-4 text-xs text-blue-300 text-center">
            Last updated: {new Date(weatherData.timestamp).toLocaleTimeString()}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default WeatherConditionsCard;
