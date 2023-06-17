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
  height: 100%;
  transition: background 1s;
  color: ${(props) => props?.colors.text};
`;

export const ContainerStyled = styled.div<PageColorsStyledType>`
  margin: 2rem 4rem;
  background: ${(props) =>
    ` url(${props.colors?.textDark ? ShirtSide : DenimShirt}) no-repeat ${
      props?.colors?.textDark ? 'calc(100% + 5px)  0px' : 'calc(0% - 5px) 20vh'
    }`};
  background-size: contain;
  height: 100%;
  position: relative;
  transition: 0.3s;
`;

export const InfoTextStyled = styled.div<PageColorsStyledType>`
  // position: absolute;
  // left: ${(props) =>
    props.colors?.textDark ? 'calc(100% - 25rem)' : '9vw'};
  // bottom: ${(props) => (props.colors?.textDark ? 'calc( 39rem)' : '18rem')};
  // z-index: 10;
  // background: ${(props) =>
    props.colors?.textDark ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.2)'};
  padding: 5px 8px;
  border-radius: 5px;
  transition: 0.5s;
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
`;

export const HeaderStyled = styled.div<PageColorsStyledType>`
  display: flex;
  align-items: center;
  justify-content: space-between;

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
`;
