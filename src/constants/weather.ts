export const ACCU_WEATHER = 'https://dataservice.accuweather.com/';

export const ACCU_WEATHER_SEARCH_BY_TEXT =
  'locations/v1/cities/autocomplete?q={{QUERY}}&apikey={{APIKEY}}';
export const ACCU_WEATHER_SEARCH_BY_POSTAL_CODE =
  'locations/v1/search?q={{POSTAL_CODE}}&apikey={{APIKEY}}';
export const ACCU_WEATHER_SEARCH_BY_GEO_POSITION =
  'locations/v1/search?q={{GEO_POSITION}}&apikey={{APIKEY}}';

export const ACCU_WEATHER_CURRENT_CONDITIONS =
  'currentconditions/v1/{{LOCATION_KEY}}?apikey={{APIKEY}}&details=true';

export const ACCU_WEATHER_FORECAST_BY_DAY =
  'forecasts/v1/daily/{{DAYS_COUNT}}day/{{LOCATION_KEY}}?apikey={{APIKEY}}&details=true';

export const ACCU_WEATHER_FORECAST_BY_HOURS =
  'forecasts/v1/hourly/{{HOURS_COUNT}}hour/{{LOCATION_KEY}}?apikey={{APIKEY}}&details=true';

export const ACCU_WEATHER_INDICES_BY_DAY =
  'indices/v1/daily/{{DAYS_COUNT}}day/{{LOCATION_KEY}}?apikey={{APIKEY}}&details=true';

export const API_KEY = 'BZQtC5C1vAP4T9P7kt7JKICQiTkxstMA';

export const DAYS = {
  '1Day': '1',
  '5Day': '5',
  '10Day': '10',
  '15Day': '15'
};

export const HOURS = {
  '1HOUR': '1',
  '12HOUR': '12',
  '24HOUR': '24',
  '72HOUR': '72',
  '120HOUR': '120'
};
