import styled from 'styled-components';
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

export const ContainerStyled = styled.div`
  margin: 2rem 4rem;
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
`;
export const MenuStyled = styled.div``;
