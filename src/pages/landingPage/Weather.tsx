import React, { useState, useEffect } from 'react';
import { WeatherStyled } from './styles';
import { useCustomTheme } from '../../context/themeContext';
import {
  Box,
  Flex,
  Input,
  Spinner,
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
  const locationsRef = React.useRef<HTMLDivElement>(null);

  useOutsideClick({
    ref: locationsRef,
    handler: () => {
      clearSearchLocations();
    }
  });
  const delayedSearch = debounce(async (text) => {
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
  }, 1500);

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
      console.log({ result });
    } catch (error) {
      console.log({ CURRENT_CONDITIONS: error });
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

  const handleSelectLocation = (locKey: object) => {
    setSelectedLocation(locKey);
    clearSearchLocations();
  };

  return (
    <WeatherStyled colors={colors}>
      <Flex justifyContent="space-between" alignItems="center" w="100%">
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
                maxH="250px"
                overflowY="scroll"
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
    </WeatherStyled>
  );
};

export default Weather;
