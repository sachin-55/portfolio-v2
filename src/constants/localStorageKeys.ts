function appendKeyword(text: string): string {
  const key = 'pa-v2-';
  return key + text;
}

export const SELECTED_WEATHER_LOCATION = appendKeyword('weather-location-key');
export const SELECTED_CURRENT_CONDITIONS = appendKeyword(
  'weather-current-conditions'
);
