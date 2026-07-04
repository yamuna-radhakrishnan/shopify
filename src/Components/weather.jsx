/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
// FIX: Removed invalid `import { ReactDOM } from "react"` — ReactDOM is from 'react-dom', not needed here
import axios from "axios";
import TextField from "@mui/material/TextField";
import '../Styles/web.css';

const WeatherStat = ({ label, value }) => (
  <div className="weather-stat">
    <p className="weather-stat-label">{label}</p>
    <p className="weather-stat-value">{value}</p>
  </div>
);

function Weather() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const apiKey = `9e1cc598ba727f4f1d13fe0507b64cb8`;

  useEffect(() => {
    if (city.trim() === '') return;
    setLoading(true);
    setError(null);

    // Debounce: only fetch after user stops typing for 600ms
    const timer = setTimeout(() => {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
        )
        .then((response) => {
          setWeatherData(response.data);
          setLoading(false);
        })
        .catch(() => {
          setError('City not found. Please check the spelling and try again.');
          setWeatherData(null);
          setLoading(false);
        });
    }, 600);

    return () => clearTimeout(timer);
  }, [city, apiKey]);

  let sunriseTime = '—';
  let sunsetTime = '—';
  let visibility = '—';

  if (weatherData) {
    const sunriseDate = new Date(weatherData.sys?.sunrise * 1000);
    const sunsetDate = new Date(weatherData.sys?.sunset * 1000);
    sunriseTime = sunriseDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    sunsetTime = sunsetDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    visibility = `${((weatherData.visibility || 0) / 1000).toFixed(1)} km`;
  }

  return (
    <main id="main-content" className="weather-page">
      <div className="weather-bg" aria-hidden="true" />

      <div style={{ textAlign: 'center', marginBottom: '2rem', position: 'relative' }}>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', color: '#fff', marginBottom: '0.5rem' }}>
          Weather Forecast
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 'var(--text-base)' }}>
          Know the weather before you plan your harvest
        </p>
      </div>

      <TextField
        label="Enter city name"
        variant="outlined"
        color="success"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        inputProps={{
          'aria-label': 'City name',
          autoComplete: 'address-level2',
        }}
        sx={{
          '& .MuiOutlinedInput-root': {
            bgcolor: 'rgba(255,255,255,0.15)',
            color: '#fff',
            backdropFilter: 'blur(8px)',
            borderRadius: '50px',
            '& fieldset': { borderColor: 'rgba(255,255,255,0.3)', borderRadius: '50px' },
            '&:hover fieldset': { borderColor: 'rgba(255,255,255,0.6)' },
            '&.Mui-focused fieldset': { borderColor: '#3d9e6e' },
          },
          '& .MuiInputLabel-root': { color: 'rgba(255,255,255,0.7)' },
          '& .MuiInputLabel-root.Mui-focused': { color: '#3d9e6e' },
          mb: 4,
          width: '100%',
          maxWidth: '360px',
        }}
      />

      {/* Loading state */}
      {loading && (
        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 'var(--text-lg)' }}>
          Loading weather data&#8230;
        </p>
      )}

      {/* Error state */}
      {error && !loading && (
        <div role="alert" aria-live="polite" style={{
          background: 'rgba(229,57,53,0.15)',
          border: '1px solid rgba(229,57,53,0.4)',
          borderRadius: 'var(--radius-lg)',
          padding: 'var(--space-4) var(--space-6)',
          color: '#ffcdd2',
          fontSize: 'var(--text-base)',
        }}>
          {error}
        </div>
      )}

      {/* Empty state */}
      {!weatherData && !loading && !error && city === '' && (
        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 'var(--text-xl)', textAlign: 'center' }}>
          Enter a city name to see the weather forecast
        </p>
      )}

      {/* Weather data */}
      {weatherData && !loading && city !== '' && (
        <div className="weather-card">
          <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.7)', fontSize: 'var(--text-sm)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            {weatherData.name}, {weatherData.sys?.country}
          </p>
          <p className="weather-temp">
            {Math.round(weatherData.main?.temp)}&deg;C
          </p>
          <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.85)', fontSize: 'var(--text-lg)', textTransform: 'capitalize', marginBottom: 'var(--space-4)' }}>
            {weatherData.weather[0]?.description}
          </p>

          <div className="weather-stats-grid">
            <WeatherStat label="Feels like" value={`${Math.round(weatherData.main?.feels_like)}°C`} />
            <WeatherStat label="Humidity" value={`${weatherData.main?.humidity}%`} />
            <WeatherStat label="Visibility" value={visibility} />
            <WeatherStat label="Wind" value={`${weatherData.wind?.speed} m/s`} />
            <WeatherStat label="Sunrise" value={sunriseTime} />
            <WeatherStat label="Sunset" value={sunsetTime} />
          </div>
        </div>
      )}
    </main>
  );
}

export default Weather;