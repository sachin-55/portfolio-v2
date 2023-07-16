import React from 'react';
import { MyBioStyled } from './styles';
import { useCustomTheme } from '../../context/themeContext';
import { Button, Flex, Text, useMediaQuery } from '@chakra-ui/react';
import Resume from './Resume';
import { TitleBanner, TitleHeader } from '../../components/TitleAndBanner';
import { FcPrint } from 'react-icons/fc';

type Props = {};

const MyBio = (props: Props) => {
  const { colors } = useCustomTheme();
  const [printScreen] = useMediaQuery('print');

  return (
    <MyBioStyled colors={colors}>
      <Flex alignItems="center" justifyContent="space-between">
        <TitleHeader title="Bio-data" />
        <Button
          borderRadius="10px"
          background={colors.background}
          border={`2px solid ${colors.primary}`}
          padding="5px 10px"
          cursor="pointer"
          onClick={() => {
            window.print();
          }}
          display={printScreen ? 'none' : 'flex'}
          zIndex="10"
        >
          <span
            style={{
              fontSize: '1.6rem',
              marginRight: '5px',
              color: colors.text
            }}
          >
            Print
          </span>
          <FcPrint size="20px" color={colors.highlight2} />
        </Button>
      </Flex>
      <TitleBanner>
        <Text className="description">
          Hey there! I'm a super motivated individual with a diverse range of
          skills and experiences. I absolutely love learning new things and
          thrive in situations that push me to think outside the box and solve
          problems.I demonstrate strong dedication and a relentless drive to
          achieve my goals. Can't wait to use my skills to make a significant
          impact!
        </Text>
      </TitleBanner>

      <Resume colors={colors} />
    </MyBioStyled>
  );
};

export default MyBio;
