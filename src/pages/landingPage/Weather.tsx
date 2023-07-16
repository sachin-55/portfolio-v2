import React, { useState, useEffect, useCallback } from 'react';
import { WeatherStyled } from './styles';
import { useCustomTheme } from '../../context/themeContext';
import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  Text,
  useOutsideClick
} from '@chakra-ui/react';
import { debounce } from 'lodash';
import axios from 'axios';
import {
  ACCU_WEATHER,
  ACCU_WEATHER_CURRENT_CONDITIONS,
  ACCU_WEATHER_SEARCH_BY_TEXT,
  API_KEY
} from '../../constants/weather';
import { Loader } from '../../components/Loader';
import {
  SELECTED_CURRENT_CONDITIONS,
  SELECTED_WEATHER_LOCATION
} from '../../constants/localStorageKeys';
import { HiOutlineRefresh } from 'react-icons/hi';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';
type Props = {};

const Weather = (props: Props) => {
  const { colors } = useCustomTheme();
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState({
    fetchingLocations: false,
    gettingForecast: false,
    gettingCurrent: false
  });
  const [searchLocation, setSearchLocation] = useState('');
  const [selectedLocation, setSelectedLocation] = useState<any>({});
  const [currentConditions, setCurrentConditions] = useState<any>([]);
  const locationsRef = React.useRef<HTMLDivElement>(null);
  const [showAllCurrentCondition, setShowAllCurrentConditions] =
    useState(false);

  useOutsideClick({
    ref: locationsRef,
    handler: () => {
      clearSearchLocations();
    }
  });

  const delayedSearch = useCallback(
    debounce(async (text) => {
      try {
        setLoading((prev) => ({ ...prev, fetchingLocations: true }));
        setLocations([]);
        const URL =
          ACCU_WEATHER +
          ACCU_WEATHER_SEARCH_BY_TEXT.replaceAll(/{{QUERY}}/g, text).replaceAll(
            /{{APIKEY}}/g,
            API_KEY
          );
        const result = await axios(URL);
        if (result?.data && result?.data?.length > 0) {
          setLocations(result.data);
        }
      } catch (error) {
        console.log({ GET_LOCATIONS: error });
      } finally {
        setLoading((prev) => ({ ...prev, fetchingLocations: false }));
      }
    }, 1500),
    []
  );

  useEffect(() => {
    if (localStorage && localStorage.getItem(SELECTED_WEATHER_LOCATION)) {
      const wLocation = localStorage.getItem(SELECTED_WEATHER_LOCATION);
      if (wLocation) {
        setSelectedLocation(JSON.parse(wLocation));
      }
    }
  }, []);

  useEffect(() => {
    if (searchLocation?.length > 2) {
      delayedSearch(searchLocation);
    }
  }, [searchLocation]);

  useEffect(() => {
    if (selectedLocation && selectedLocation?.Key) {
      fetchCurrentConditions(selectedLocation);
    }
  }, [selectedLocation]);

  const fetchCurrentConditions = async (location: any) => {
    try {
      setLoading((prev) => ({ ...prev, gettingCurrent: true }));
      const URL =
        ACCU_WEATHER +
        ACCU_WEATHER_CURRENT_CONDITIONS.replaceAll(
          /{{LOCATION_KEY}}/g,
          location?.Key
        ).replaceAll(/{{APIKEY}}/g, API_KEY);
      const result = await axios(URL);
      if (result && result?.data) {
        setCurrentConditions(result?.data);
        localStorage.setItem(
          SELECTED_CURRENT_CONDITIONS,
          JSON.stringify(result?.data)
        );
      }
    } catch (error) {
      console.log({ CURRENT_CONDITIONS: error });
      const data = localStorage.getItem(SELECTED_CURRENT_CONDITIONS);
      if (data) {
        setCurrentConditions(JSON.parse(data));
      }
    } finally {
      setLoading((prev) => ({ ...prev, gettingCurrent: false }));
    }
  };

  const handleSearchLocation = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;

    setSearchLocation(value);
    if (value.length === 0) {
      setLocations([]);
    }
  };

  const clearSearchLocations = () => {
    setLocations([]);
    setSearchLocation('');
  };

  const handleSelectLocation = (loc: object) => {
    setSelectedLocation(loc);
    localStorage.setItem(SELECTED_WEATHER_LOCATION, JSON.stringify(loc));
    clearSearchLocations();
  };

  const getIcon = () => {
    if (
      !currentConditions ||
      currentConditions.length === 0 ||
      !currentConditions[0]?.WeatherIcon
    )
      return;
    return require(`../../assets/weatherIcons/${currentConditions[0]?.WeatherIcon}-s.png`);
  };

  return (
    <WeatherStyled colors={colors}>
      <Flex justifyContent="space-between" alignItems="center">
        <Text align="left" fontSize="3rem" fontWeight="bold">
          Weather Info
        </Text>
        <Button
          onClick={() => fetchCurrentConditions(selectedLocation)}
          variant="unstyled"
          border="none"
          bg="none"
          cursor="pointer"
          padding="0px"
        >
          <HiOutlineRefresh size="24px" color={colors?.text} />
        </Button>
      </Flex>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        w="100%"
        wrap="wrap-reverse"
      >
        <Text className="title">Today</Text>
        <Box position="relative" ref={locationsRef}>
          <Flex position="relative">
            <Input
              type="text"
              value={searchLocation}
              onChange={handleSearchLocation}
              placeholder="Search todays weather."
            />
            {loading?.fetchingLocations && (
              <Box position="absolute" top="3px" right="3px">
                <Loader type="tiny" />
              </Box>
            )}
          </Flex>

          {!loading.fetchingLocations &&
            locations &&
            Array.isArray(locations) &&
            locations.length > 0 && (
              <Box
                position="absolute"
                top="23px"
                width="100%"
                bg={colors.background}
                borderRadius="10px"
                p="10px"
              >
                {locations.map((val: any, index) => (
                  <Box
                    key={val?.Key}
                    my="5px"
                    borderBottom={`1px solid ${colors.highlight2}`}
                    p="3px"
                    cursor="pointer"
                    _hover={{
                      bg: colors.highlight2
                    }}
                    onClick={() => handleSelectLocation(val)}
                  >
                    <Text align="left" fontWeight="600">
                      {val?.LocalizedName}
                    </Text>
                    <Flex align="center" justifyContent="space-between">
                      <Text>{val?.AdministrativeArea?.LocalizedName}</Text>
                      <Text fontWeight="500">
                        {val?.Country?.LocalizedName}
                      </Text>
                    </Flex>
                  </Box>
                ))}
              </Box>
            )}
        </Box>
      </Flex>
      {selectedLocation && selectedLocation?.Key && (
        <Flex direction="column" alignItems="start" mt="20px">
          <Text fontWeight="500">Type : {selectedLocation?.Type}</Text>
          <Flex alignItems="start">
            <Text fontWeight="700" fontSize="1.8rem" align="left" noOfLines={2}>
              {selectedLocation?.LocalizedName},&nbsp;
              {selectedLocation?.AdministrativeArea?.LocalizedName},&nbsp;{' '}
              {selectedLocation?.Country?.LocalizedName}
            </Text>
          </Flex>
        </Flex>
      )}
      {loading.gettingCurrent && (
        <Flex
          alignItems="center"
          justifyContent="center"
          w="100%"
          bg={
            colors.name === 'main'
              ? 'rgba(255, 255, 255, 0.25)'
              : 'rgba(0, 0, 0, 0.5)'
          }
          marginTop="10px"
          padding="10px"
          borderRadius="10px"
        >
          <Loader type="large" />
        </Flex>
      )}
      {!loading.gettingCurrent &&
        currentConditions &&
        currentConditions?.length > 0 && (
          <Flex
            w="100%"
            bg={
              colors.name === 'main'
                ? 'rgba(255, 255, 255, 0.25)'
                : 'rgba(0, 0, 0, 0.5)'
            }
            marginTop="10px"
            padding="10px"
            borderRadius="10px"
            // alignItems="center"
            justifyContent="center"
            direction="column"
          >
            <Box
              flex="1"
              paddingRight={showAllCurrentCondition ? '10px' : '0px'}
              maxH={showAllCurrentCondition ? '300px' : '200px'}
              overflowY={showAllCurrentCondition ? 'scroll' : 'hidden'}
            >
              <Flex w="100%" alignItems="center" justifyContent="space-between">
                <Image src={`${getIcon()}`} />
                <Text fontSize={14}>{currentConditions[0]?.WeatherText}</Text>
                <Text fontSize={30} fontWeight="500">
                  {currentConditions[0]?.Temperature.Metric.Value}&deg;
                  {currentConditions[0]?.Temperature.Metric.Unit}
                </Text>
              </Flex>
              <Flex className="weatherDataRow">
                <Text className="weatherTitle">Real Feel</Text>
                <Text className="weatherValue">
                  {currentConditions[0]?.RealFeelTemperature.Metric.Value}
                  &deg;
                  {currentConditions[0]?.RealFeelTemperature.Metric.Unit}
                </Text>
              </Flex>
              <Flex className="weatherDataRow">
                <Text className="weatherTitle">Real Feel Shade</Text>
                <Text className="weatherValue">
                  {currentConditions[0]?.RealFeelTemperatureShade.Metric.Value}
                  &deg;
                  {currentConditions[0]?.RealFeelTemperatureShade.Metric.Unit}
                </Text>
              </Flex>
              <Flex className="weatherDataRow">
                <Text className="weatherTitle">Has Precipitation</Text>
                <Text className="weatherValue">
                  {currentConditions[0]?.HasPrecipitation ? 'Yes' : 'No'}
                </Text>
              </Flex>
              <Flex className="weatherDataRow">
                <Text className="weatherTitle">UV Index</Text>
                <Text className="weatherValue">
                  {currentConditions[0]?.UVIndex}
                </Text>
              </Flex>
              <Flex className="weatherDataRow">
                <Text className="weatherTitle">UV Index Text</Text>
                <Text className="weatherValue">
                  {currentConditions[0]?.UVIndexText}
                </Text>
              </Flex>
              <Flex className="weatherDataRow">
                <Text className="weatherTitle">Wind Direction</Text>
                <Text className="weatherValue">
                  {currentConditions[0]?.Wind.Direction.Degrees}
                  {currentConditions[0]?.Wind.Direction.Localized}
                </Text>
              </Flex>
              <Flex className="weatherDataRow">
                <Text className="weatherTitle">Wind Speed</Text>
                <Text className="weatherValue">
                  {currentConditions[0]?.Wind.Speed.Metric.Value}
                  {currentConditions[0]?.Wind.Speed.Metric.Unit}
                </Text>
              </Flex>

              <Flex className="weatherDataRow">
                <Text className="weatherTitle">Relative Humidity</Text>
                <Text className="weatherValue">
                  {currentConditions[0]?.RelativeHumidity}
                </Text>
              </Flex>
              <Flex className="weatherDataRow">
                <Text className="weatherTitle">Indoor Relative Humidity</Text>
                <Text className="weatherValue">
                  {currentConditions[0]?.IndoorRelativeHumidity}
                </Text>
              </Flex>
              <Flex className="weatherDataRow">
                <Text className="weatherTitle">Dew Point</Text>
                <Text className="weatherValue">
                  {currentConditions[0]?.DewPoint.Metric.Value}
                  &deg;
                  {currentConditions[0]?.DewPoint.Metric.Unit}
                </Text>
              </Flex>

              <Flex className="weatherDataRow">
                <Text className="weatherTitle">Wind Gust</Text>
                <Text className="weatherValue">
                  {currentConditions[0]?.WindGust.Speed.Metric.Value}
                  {currentConditions[0]?.WindGust.Speed.Metric.Unit}
                </Text>
              </Flex>

              <Flex className="weatherDataRow">
                <Text className="weatherTitle">Visibility</Text>
                <Text className="weatherValue">
                  {currentConditions[0]?.Visibility.Metric.Value}
                  {currentConditions[0]?.Visibility.Metric.Unit}
                </Text>
              </Flex>
              <Flex className="weatherDataRow">
                <Text className="weatherTitle">Cloud Cover</Text>
                <Text className="weatherValue">
                  {currentConditions[0]?.CloudCover}
                </Text>
              </Flex>
              <Flex className="weatherDataRow">
                <Text className="weatherTitle">Ceiling</Text>
                <Text className="weatherValue">
                  {currentConditions[0]?.Ceiling.Metric.Value}
                  {currentConditions[0]?.Ceiling.Metric.Unit}
                </Text>
              </Flex>
              <Flex className="weatherDataRow">
                <Text className="weatherTitle">Pressure</Text>
                <Text className="weatherValue">
                  {currentConditions[0]?.Pressure.Metric.Value}
                  {currentConditions[0]?.Pressure.Metric.Unit}(
                  {currentConditions[0]?.PressureTendency.LocalizedText})
                </Text>
              </Flex>
            </Box>
            <Button
              onClick={() => setShowAllCurrentConditions((prev) => !prev)}
              border="none"
              bg="none"
              cursor="pointer"
              padding="0px"
              width="20px"
              my="10px"
              alignSelf="center"
            >
              {!showAllCurrentCondition ? (
                <FaArrowDown size="14px" color={colors?.text} />
              ) : (
                <FaArrowUp size="14px" color={colors?.text} />
              )}
            </Button>
          </Flex>
        )}
      <Text>Powered by Accu Weather.</Text>
    </WeatherStyled>
  );
};

export default Weather;
