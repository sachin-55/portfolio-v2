import React from 'react';
import { useCustomTheme } from '../../context/themeContext';
import { ContactInfoStyled } from './styles';
import { Box, Button, Flex, Text, useClipboard } from '@chakra-ui/react';
import { TitleBanner, TitleHeader } from '../../components/TitleAndBanner';
import {
  FaCopy,
  FaGithub,
  FaLinkedin,
  FaPhone,
  FaCheck,
  FaFacebookMessenger,
  FaSlack
} from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { IoOpenOutline } from 'react-icons/io5';

type Props = {};

const LinkedInURL = 'https://www.linkedin.com/in/sachin-b-a690ab73/';
const GithubURL = 'https://github.com/sachin-55';
const EmailAddress = 'sachinbhattarai55@gmail.com';
const PhoneNumber = 'On Request';
const Facebook = 'sachinbhattarai2';
// const FacebookMessenger = 'https://www.messenger.com/t/100001681403627';

const ContactInfo = (props: Props) => {
  const { colors } = useCustomTheme();
  const { onCopy: onCopyLinkedIn, hasCopied: hasCopiedLinkedIN } =
    useClipboard(LinkedInURL);
  const { onCopy: onCopyEmail, hasCopied: hasCopiedEmail } =
    useClipboard(EmailAddress);
  const { onCopy: onCopyGithub, hasCopied: hasCopiedGithub } =
    useClipboard(GithubURL);
  const { onCopy: onCopyPhone, hasCopied: hasCopiedPhone } =
    useClipboard(PhoneNumber);
  // const { onCopy: onCopyMessenger, hasCopied: hasCopiedMessenger } =
  //   useClipboard(FacebookMessenger);
  return (
    <ContactInfoStyled colors={colors}>
      <TitleHeader title="Contact Me" />
      <TitleBanner>
        <Text className="description">
          Below are different ways to contact me. I will make sure to contact
          back within 24 Hrs, on maximum one week if I got out of range to
          access these mediums.
        </Text>
      </TitleBanner>

      <Flex className="contact-info-row">
        <Flex alignItems="center">
          <Box className="social-image">
            <FaLinkedin size="36px" color="#0077b5" />
          </Box>
          <Text className="social-title linkedIn">
            LinkedIn <span className="username">[sachin-b-a690ab73]</span>
          </Text>
        </Flex>
        <Flex className="button-wrapper">
          <Button mb="5px" onClick={onCopyLinkedIn}>
            <FaCopy size="18px" />
            {hasCopiedLinkedIN && <FaCheck size="16px" color="green" />}
          </Button>
          <Button
            onClick={() => {
              window.open(LinkedInURL);
            }}
            mb="5px"
            ml="10px"
            formTarget="_blank"
          >
            <IoOpenOutline size="20px" />
          </Button>
        </Flex>
      </Flex>

      <Flex className="contact-info-row">
        <Flex alignItems="center">
          <Box className="social-image">
            <MdEmail size="36px" color="#D54337" />
          </Box>
          <Text className="social-title mail">
            Gmail <span className="username">[{EmailAddress}]</span>
          </Text>
        </Flex>
        <Flex className="button-wrapper">
          <Button onClick={onCopyEmail} mb="5px">
            <FaCopy size="18px" />
            {hasCopiedEmail && <FaCheck size="16px" color="green" />}
          </Button>
          <Button
            mb="5px"
            ml="10px"
            onClick={() => {
              window.open(`mailto:${EmailAddress}`);
            }}
            formTarget="_blank"
          >
            <IoOpenOutline size="20px" />
          </Button>
        </Flex>
      </Flex>

      <Flex className="contact-info-row">
        <Flex alignItems="center">
          <Box className="social-image">
            <FaGithub
              size="36px"
              color={colors.name === 'main' ? '#010409' : '#fcfcfc'}
            />
          </Box>
          <Text className="social-title github">
            Github <span className="username">[sachin-55]</span>
          </Text>
        </Flex>
        <Flex className="button-wrapper">
          <Button mb="5px" onClick={onCopyGithub}>
            <FaCopy size="18px" />{' '}
            {hasCopiedGithub && <FaCheck size="16px" color="green" />}
          </Button>
          <Button
            onClick={() => {
              window.open('https://github.com/sachin-55');
            }}
            mb="5px"
            ml="10px"
            formTarget="_blank"
          >
            <IoOpenOutline size="20px" />
          </Button>
        </Flex>
      </Flex>

      <Flex className="contact-info-row">
        <Flex alignItems="center">
          <Box className="social-image">
            <FaPhone size="36px" color="#19aa11" />
          </Box>
          <Text className="social-title phone">
            Phone <span className="username">[On Request Available]</span>
          </Text>
        </Flex>
        <Flex className="button-wrapper">
          <Button mb="5px" onClick={onCopyPhone}>
            <FaCopy size="18px" />
            {hasCopiedPhone && <FaCheck size="16px" color="green" />}
          </Button>
        </Flex>
      </Flex>

      {/* <Flex className="contact-info-row">
        <Flex alignItems="center">
          <Box className="social-image">
            <FaSlack
              size="36px"
              color={colors.name === 'main' ? '#481449' : '#34BFE8'}
            />
          </Box>
          <Text className="social-title slack">
            Slack <span className="username">[ Use above email address.]</span>
          </Text>
        </Flex>
      </Flex> */}
    </ContactInfoStyled>
  );
};

export default ContactInfo;
