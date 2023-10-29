import React from 'react';
import {
  ResumeExperienceRowStyled,
  ResumeRowStyled,
  ResumeSkillsAndStrengthRowStyled,
  ResumeStyled
} from './styles';
import { ColorsType } from '../../@types/colors';
import { Box, Text } from '@chakra-ui/react';

type Props = {
  colors: ColorsType;
};

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
      <Text className="bio-title">Academic Qualification</Text>
      <Box mb="10px">
        <Text className="academic-course">
          Bachelor in Computer Engineering (BCT)
        </Text>
        <Text className="academic-college">
          Himalaya College of Engineering , Chyasal, Lalitpur,
        </Text>
        <Text className="academic-year">2019 AD (2076 BS)</Text>
      </Box>
      <Box mb="10px">
        <Text className="academic-course">
          +2 (Higher Secondary Education Board)
        </Text>
        <Text className="academic-college">
          V.S. Niketan Higher Secondary School, Minbhawan, Kathmandu,
        </Text>
        <Text className="academic-year">2015 AD (2072 BS) </Text>
      </Box>
      <Box mb="40px">
        <Text className="academic-course">SLC (Grade 10)</Text>
        <Text className="academic-college">
          Vidyadayini Public Higher Secondary School, Gatthaghar, Bhaktapur,
        </Text>
        <Text className="academic-year">2013 AD (2069 BS)</Text>
      </Box>
      <Text className="bio-title">Experience</Text>
      <Text className="bio-sub-title">Internships</Text>
      <ResumeExperienceRowStyled colors={colors}>
        <li>
          Web development for 6 weeks.
          <ul>
            <li>
              <div className="list-text">
                At leapfrog technology, Kathmandu, Nepal.
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
              <div className="list-text">
                For a freelancer developer, Lalitpur, Nepal
              </div>
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
      <Text className="bio-sub-title">Works</Text>
      <ResumeExperienceRowStyled colors={colors}>
        <li>
          Revv Inc.,
          <ul>
            <li>
              <div className="list-text">
                Web Developer [2020 - 2022], worked in both frontend and
                backend.
              </div>
            </li>

            <li>
              <div className="list-text">
                Technologies used for frontend were HTML, CSS, javascript,
                react, react-toolkit, next.js,
              </div>
            </li>

            <li>
              <div className="list-text">
                Technologies used for backend were node, express, postgres,
                prisma,
              </div>
            </li>

            <li>
              <div className="list-text">
                Worked on creating advertisement deliverying delivering system,
              </div>
            </li>

            <li>
              <div className="list-text">
                Role was to create API's that are required for Frontend
                presentation. Create UI to provide system interface for
                creating, launching, managing and monitoring advertisements for
                advertisers and publishers.
              </div>
            </li>

            <li>
              <div className="list-text">
                Also created admin dashboard to monitor, control and faciliate
                functionalities for user.
              </div>
            </li>
            <li>
              <div className="list-text">
                It had functionality of creating advertisement campaigns by
                adding advertisements images and cropping it to specific images
                sizes as set from admin dashboard for different types of ads
                such as banner ads, square ads, popup ads, and selecting time
                interval till which ads runs in advertiser side. In publisher
                side, user need to register his/her website on which they wants
                to show ads and after verification they are provided with
                scripts which they need to embded in their websites.
              </div>
            </li>
          </ul>
        </li>
        <li>
          Food Buster,
          <ul>
            <li>
              <div className="list-text">Frontend Developer [2022],</div>
            </li>
            <li>
              <div className="list-text">
                It was food ordering e-commerce system, where user can order
                food from different reataurants as well as order groceries and
                items of different categories from Bhatbhateni Supermarket.
              </div>
            </li>

            <li>
              <div className="list-text">
                Technologies used for frontend were HTML, CSS, javascript,
                next.js, zustand for data flow, ,
              </div>
            </li>
            <li>
              <div className="list-text">
                It already had mobile app and backend ready, my responsibility
                was to create its frontend as per design provided in Figma.,
              </div>
            </li>
            <li>
              <div className="list-text">
                It had functions of ordering foods, adding/removing items to
                carts, applying coupons and discounts, tracking order delivery
                with Google Maps, and payment via VISA card, e-Sewa, fonepay and
                cash on delivery.
              </div>
            </li>
          </ul>
        </li>
        <li>
          Tekkon Technologies,
          <ul>
            <li>
              <div className="list-text">Frontend Developer [2022 - 2023],</div>
            </li>
            <li>
              <div className="list-text">
                Focused on developing web-app using react library, react-redux,
                socket.io, and other supporting tools,
              </div>
            </li>
            <li>
              <div className="list-text">
                Worked on developing and maintaining a social platform called
                DiGii Social, which features cyber safety and can be monitored
                by educators and guardians.
              </div>
            </li>
            <li>
              <div className="list-text">
                It have Children portal, Educators portal, Admin portal, Parents
                portal with their respective functionality,
              </div>
            </li>
            <li>
              <div className="list-text">
                Created Parents/Guardians portal, with JWT token authentication,
                via which they can monitor and control their children activity.
                Parents/Guardians could register via registration page or via
                invitation email or when user is asked to be added as a guardian
                for children,
              </div>
            </li>
            <li>
              <div className="list-text">
                Integrated Chargebee API's, to allow users to pay for
                subscription for extra functionalities like creating groups
                among parenst and their children and accessing blogs,
                educational videos.
              </div>
            </li>
          </ul>
        </li>
      </ResumeExperienceRowStyled>
      <Text className="bio-title">Skills and Strength </Text>
      <Text className="bio-sub-title">Skills </Text>
      <ResumeSkillsAndStrengthRowStyled colors={colors}>
        <li>HTML and CSS </li>
        <li> Basic Understanding of C, C++, Java, Python </li>
        <li> MySQL, Postgres, MongoDB, mongoose </li>
        <li>
          Javascript, React, NextJS, GraphQL, Socket.io, Redux, zustand,
          react-toolkit
        </li>
        <li>React-Redux, zustand, react-toolkit,</li>
        <li>Node, Express, Restful API, </li>
        <li> MaterialUI, ChakraUI, ThemeUI </li>
        <li>Knowledge of responsive design and UI/UX, </li>
        <li>Knowledge of Git, </li>
        <li>
          Knowledge of Payment gateway integration, VISA card, e-Sewa, fonepay,
        </li>
      </ResumeSkillsAndStrengthRowStyled>
      <Text className="bio-sub-title">Strength </Text>
      <ResumeSkillsAndStrengthRowStyled colors={colors}>
        <li>Ability to work as a team </li>
        <li> Quick Learner, </li>
        <li> Multitasking,</li>
        <li> Enjoy working on challenging tasks,</li>
      </ResumeSkillsAndStrengthRowStyled>
    </ResumeStyled>
  );
};

export default Resume;
