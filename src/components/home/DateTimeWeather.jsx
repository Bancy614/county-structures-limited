import React, { useState, useEffect } from 'react';
import { Sun, CloudSun, Cloud, CloudRain, CloudFog, CloudLightning, Snowflake, CloudDrizzle, MapPin } from 'lucide-react';

const WEATHER_CODES = {
  0: { label: 'Clear sky', icon: Sun },
  1: { label: 'Mainly clear', icon: CloudSun },
  2: { label: 'Partly cloudy', icon: CloudSun },
  3: { label: 'Overcast', icon: Cloud },
  45: { label: 'Fog', icon: CloudFog },
  48: { label: 'Rime fog', icon: CloudFog },
  51: { label: 'Light drizzle', icon: CloudDrizzle },
  53: { label: 'Drizzle', icon: CloudDrizzle },
  55: { label: 'Dense drizzle', icon: CloudDrizzle },
  61: { label: 'Slight rain', icon: CloudRain },
  63: { label: 'Rain', icon: CloudRain },
  65: { label: 'Heavy rain', icon: CloudRain },
  71: { label: 'Slight snow', icon: Snowflake },
  73: { label: 'Snow', icon: Snowflake },
  75: { label: 'Heavy snow', icon: Snowflake },
  80: { label: 'Rain showers', icon: CloudRain },
  81: { label: 'Rain showers', icon: CloudRain },
  82: { label: 'Violent rain', icon: CloudRain },
  95: { label: 'Thunderstorm', icon: CloudLightning },
  96: { label: 'Thunderstorm', icon: CloudLightning },
  99: { label: 'Thunderstorm', icon: CloudLightning },
};

export default function DateTimeWeather() {
  const [now, setNow] = useState(new Date());
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    fetch('https://api.open-meteo.com/v1/forecast?latitude=-1.5167&longitude=37.2667&current_weather=true')
      .then((res) => res.json())
      .then((data) => setWeather(data.current_weather))
      .catch(() => {});
  }, []);

  const dateStr = now.toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' });
  const timeStr = now.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

  const weatherInfo = weather ? WEATHER_CODES[weather.weathercode] || { label: '—', icon: Cloud } : null;
  const WeatherIcon = weatherInfo?.icon;

  return (
    <div className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-1.5 rounded-full glass text-white/80 text-[10px] sm:text-xs font-mono uppercase tracking-widest mb-6 flex-wrap">
      <span className="w-2 h-2 rounded-full bg-primary animate-pulse shrink-0" />
      <span>{dateStr}</span>
      <span className="w-px h-3 bg-white/20" />
      <span className="tabular-nums">{timeStr}</span>
      {weather && WeatherIcon && (
        <>
          <span className="w-px h-3 bg-white/20" />
          <WeatherIcon className="w-3.5 h-3.5 shrink-0" />
          <span>{Math.round(weather.temperature)}°C {weatherInfo.label}</span>
        </>
      )}
      <span className="w-px h-3 bg-white/20 hidden sm:inline" />
      <span className="hidden sm:inline-flex items-center gap-1"><MapPin className="w-3 h-3" /> Machakos</span>
    </div>
  );
}