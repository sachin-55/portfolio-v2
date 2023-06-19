import styled from 'styled-components';

import ShirtSide from '../../assets/snaps/shirt-side-foto.png';
import DenimShirt from '../../assets/snaps/denim-foto.png';

import {
  PageColorsStyledType,
  PageTimeStyledType
} from '../../@types/landingPage';

export const LandingPageStyled = styled.div<
  PageColorsStyledType & PageTimeStyledType
>`
  background-image: ${(props) =>
    props?.colors?.textDark
      ? `linear-gradient(180deg,${props.colors.primary} ,${props.colors.secondary} )`
      : `linear-gradient(60deg,${props.colors.primary},${props.colors.secondary})`};
  min-height: 100vh;
  transition: background 1s;
  color: ${(props) => props?.colors.text};
`;

export const ContainerStyled = styled.div<PageColorsStyledType>`
  margin: 0rem 4rem 0rem;
  padding: 110px 1rem;
  background: ${(props) =>
    ` url(${
      props.colors?.name !== 'main' ? ShirtSide : DenimShirt
    }) no-repeat ${
      props?.colors?.name !== 'main'
        ? 'calc(100% - 35px)  90px'
        : 'calc(0% + 40px) 35vh'
    }`};
  background-size: contain;
  background-attachment: fixed;

  min-height: 100vh;
  position: relative;
  transition: 0.3s;

  @media (max-width: 400px) {
    margin: 0rem 1rem 0rem;
  }
`;

export const InfoTextStyled = styled.div<PageColorsStyledType>`
  display: flex;
  align-items: center;
  padding: 5px 8px;
  border-radius: 5px;
  transition: 0.5s;

  .text-wrapper {
    .name {
      font-size: 2.7rem;
      font-weight: 600;
      color: ${(props) => props.colors.text};
      text-shadow: 0px 1px 2px #000;
      transition: 1.3s;
    }
    .sub-text {
      font-size: 1.4rem;
      font-weight: 500;
    }
  }

  @media (max-width: 400px) {
    padding: 0px 5px;
    .text-wrapper {
      .name {
        font-size: 2.2rem;
      }
      .sub-text {
        font-size: 1.2rem;
      }
    }
  }
`;

export const HeaderStyled = styled.div<PageColorsStyledType>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  z-index: 100;

  background: rgba(255, 255, 255, 0.03);
  box-shadow: 0px 1px 1px 1px rgba(255, 255, 255, 0.07);
  padding: 1rem 4rem;
  font-size: 3rem;
  font-weight: 600;
  color: ${(props) =>
    props?.colors?.lightText
      ? props?.colors?.lightText
      : props?.colors?.textDark};
  text-shadow: 1px 1px 5px ${(props) => props?.colors?.text};

  & button {
    outline: none;
    border: none;
    background: none;
    color: yellow;
    cursor: pointer;

    & .icon {
      height: 36px;
      width: 36px;
    }
  }

  @media (max-width: 400px) {
    padding: 1rem 1rem;
    & button {
      & .icon {
        height: 24px;
        width: 24px;
      }
    }
  }
`;
export const WeatherStyled = styled.div<PageColorsStyledType>`
  padding: 20px;
  border: 1px solid ${(props) => props?.colors?.gray};
  border-radius: 10px;
  width: 35rem;
  text-align: center;
  margin-left: ${(props) => (props.colors.name === 'main' ? '100%' : '0%')};
  transform: ${(props) =>
    props.colors.name === 'main' ? 'translatex(-100%)' : 'translatex(0%)'};
  transition: 0.3s;

  .title {
    font-size: 2rem;
    font-weight: bold;
    color: ${(props) => props?.colors?.text};
  }

  & input[type='text'] {
    font-size: 1.4rem;
    margin: 0px;
    padding: 2px 5px;
    border-radius: 5px;
    border: none;
  }

  & .weatherDataRow {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  & .weatherTitle {
    font-weight: bold;
    font-size: 1.4rem;
  }
  & .weatherValue {
    font-weight: 500;
    font-size: 1.6rem;
  }

  /* width */
  & ::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */
  & ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  & ::-webkit-scrollbar-thumb {
    background: #888;
  }

  /* Handle on hover */
  & ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  @media (max-width: 400px) {
    margin-left: 50%;
    transform: translatex(-50%);
    width: 100%;
  }
`;
