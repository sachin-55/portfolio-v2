import React from 'react';
import { BioTopBannerStyled, MyBioStyled } from './styles';
import { useCustomTheme } from '../../context/themeContext';
import { Text } from '@chakra-ui/react';
import Resume from './Resume';

type Props = {};

const MyBio = (props: Props) => {
  const { colors } = useCustomTheme();

  return (
    <MyBioStyled colors={colors}>
      <Text className="bio-title">Biodata</Text>
      <BioTopBannerStyled colors={colors}>
        <Text className="bio-description">
          Hey there! I'm a super motivated individual with a diverse range of
          skills and experiences. I absolutely love learning new things and
          thrive in situations that push me to think outside the box and solve
          problems.I demonstrate strong dedication and a relentless drive to
          achieve my goals. Can't wait to use my skills to make a significant
          impact!
        </Text>
      </BioTopBannerStyled>

      <Resume colors={colors} />
    </MyBioStyled>
  );
};

export default MyBio;
