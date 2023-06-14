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
`;

export const InfoTextStyled = styled.div<PageColorsStyledType>`
  position: absolute;
  left: ${(props) => (props.colors?.textDark ? 'calc(100% - 25rem)' : '9vw')};
  bottom: ${(props) => (props.colors?.textDark ? 'calc( 39rem)' : '18rem')};
  z-index: 10;
  background: ${(props) =>
    props.colors?.textDark ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.2)'};
  padding: 8px 10px;
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
  justify-content: flex-end;

  background: rgba(255, 255, 255, 0.03);
  box-shadow: 0px 1px 1px 1px rgba(255, 255, 255, 0.07);
  padding: 2rem 3rem;
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
  width: 30rem;
  text-align: center;

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
`;
export const MenuStyled = styled.div<PageColorsStyledType>`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);

  background: ${(props) => props.colors.primary};
  color: ${(props) =>
    props.colors.name === 'main'
      ? props.colors.lightText
      : props.colors.textDark};
  padding: 2rem 3rem;
  border-radius: 20px;
  box-shadow: ${(props) =>
    `0px 0px 20px 1px ${props.colors.name === 'main' ? '#000' : '#fff'}`};
  border: 2px solid ${(props) => props.colors.highlight2};
  width: 30vw;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & a {
    font-size: 1.8rem;
    text-decoration: none;
    margin: 0px 8px;
    color: ${(props) =>
      props.colors.name === 'main'
        ? props.colors.lightText
        : props.colors.textDark};
    transition: 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    & .icon {
      height: 36px;
      width: 36px;
    }
    &:hover {
      font-weight: 700;
    }
  }
`;
