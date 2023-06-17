import React from 'react';
import {
  ResumeExperienceRowStyled,
  ResumeRowStyled,
  ResumeStyled
} from './styles';
import { ColorsType } from '../../@types/colors';
import { Box, Text } from '@chakra-ui/react';

type Props = {
  colors: ColorsType;
};

{
  /* <ResumeRowStyled colors={colors}>
  <Text className="row-label"></Text>
  <Text className="row-value"></Text>
</ResumeRowStyled>; */
}

const Resume = (props: Props) => {
  const { colors } = props;
  return (
    <ResumeStyled colors={colors}>
      <ResumeRowStyled colors={colors}>
        <Text className="row-name">Sachin Bhattarai</Text>
      </ResumeRowStyled>
      <ResumeRowStyled colors={colors}>
        <Text className="row-email">sachinbhattarai55@gmail.com</Text>
      </ResumeRowStyled>
      <ResumeRowStyled colors={colors}>
        <Text className="row-label">Birth Year</Text>
        <Text className="row-value">1996</Text>
      </ResumeRowStyled>
      <ResumeRowStyled colors={colors}>
        <Text className="row-label">Gender</Text>
        <Text className="row-value">Male</Text>
      </ResumeRowStyled>
      <ResumeRowStyled colors={colors}>
        <Text className="row-label">Nationality</Text>
        <Text className="row-value">Nepalese</Text>
      </ResumeRowStyled>
      <ResumeRowStyled colors={colors}>
        <Text className="row-label">Speak</Text>
        <Text className="row-value">Nepali, English</Text>
      </ResumeRowStyled>
      <ResumeRowStyled colors={colors} className="last-child">
        <Text className="row-label">Write</Text>
        <Text className="row-value">Nepali, English</Text>
      </ResumeRowStyled>

      <Text className="bio-title">Experience</Text>
      <Text className="bio-sub-title">Internships</Text>
      <ResumeExperienceRowStyled colors={colors}>
        <li>
          Web development for 6 weeks.
          <ul>
            <li>
              <div className="list-text">
                At leapfrog technology,Kathmandu,Nepal.
              </div>
            </li>

            <li>
              <div className="list-text">
                Pixel perfect design of webpages using HTML and CSS.
              </div>
            </li>

            <li>
              <div className="list-text">
                Prepared lo-fi, estimation, and a responsive design of
                EightStages webpage from a psd template using html css and plain
                javascript.
              </div>
            </li>

            <li>
              <div className="list-text">
                Prepared lo-fi, estimation, and a responsive design of Unity
                Template webpage from a psd template using html css and plain
                javascript.
              </div>
            </li>
            <li>
              <div className="list-text">
                Developed a game of box collision using plain javascript.
              </div>
            </li>
            <li>
              <div className="list-text">
                Developed flappy bird game using ES6 javascript.
              </div>
            </li>
          </ul>
        </li>
        <li>
          Web development intern for 3 months
          <ul>
            <li>
              <div className="list-text">For a freelancer developer</div>
            </li>
            <li>
              <div className="list-text">
                Learn React and its Fundamentals from Udemy.
              </div>
            </li>
            <li>
              <div className="list-text">
                React using Class components and Functional components.
              </div>
            </li>
            <li>
              <div className="list-text">
                Created form components with validation message for error and
                success status.
              </div>
            </li>
            <li>
              <div className="list-text">
                Created form components with validation message for error and
                success status.
              </div>
            </li>
          </ul>
        </li>
      </ResumeExperienceRowStyled>
    </ResumeStyled>
  );
};

export default Resume;
