import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Thermometer, Wind} from 'lucide-react';

// Weather Conditions Component
function WeatherConditionsCard({ temperature, windSpeed }) {
  return (
    <Card className="bg-gradient-to-br from-blue-800/40 to-blue-900/40 backdrop-blur-md border-blue-700/50 text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
      
      <CardHeader className="relative z-10">
        <CardTitle className="text-2xl font-semibold">Weather Conditions</CardTitle>
      </CardHeader>
      
      <CardContent className="relative z-10">
        <div className="grid grid-cols-2 gap-4 mt-4">
          {/* Temperature */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="flex items-center gap-4">
              <div className="bg-white/20 p-3 rounded-xl">
                <Thermometer className="w-8 h-8" />
              </div>
              <div>
                <div className="text-4xl font-bold">{temperature}°C</div>
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
                <div className="text-4xl font-bold">{windSpeed} m/s</div>
                <div className="text-blue-200 text-sm mt-1">Wind Speed</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Solar Panel Image Placeholder */}
        <div className="mt-6 h-48 bg-gradient-to-b from-blue-600/20 to-blue-800/40 rounded-2xl overflow-hidden relative">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJzb2xhciIgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBwYXR0ZXJuVHJhbnNmb3JtPSJyb3RhdGUoMTUpIj48cmVjdCB3aWR0aD0iNzgiIGhlaWdodD0iNzgiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjIpIiBzdHJva2Utd2lkdGg9IjIiLz48bGluZSB4MT0iNDAiIHkxPSIwIiB4Mj0iNDAiIHkyPSI4MCIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjxsaW5lIHgxPSIwIiB5MT0iNDAiIHgyPSI4MCIgeTI9IjQwIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3NvbGFyKSIvPjwvc3ZnPg==')] opacity-60"></div>
        </div>
      </CardContent>
    </Card>
  );
};

export default (WeatherConditionsCard);