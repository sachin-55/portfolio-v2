import { styled } from 'styled-components';
import { PageColorsStyledType } from '../../@types/landingPage';

export const MainLayoutStyled = styled.div<PageColorsStyledType>`
  min-height: 100vh;
  background: ${(props) => props.colors.background2};
  color: ${(props) => props.colors.text};
  padding: 80px 50px 150px;
  padding-bottom: 150px;
`;

export const LandingPageLayoutStyled = styled.div`
  height: 100vh;
  overflow: hidden;
`;

export const MenuStyled = styled.div<PageColorsStyledType>`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;

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
  display: flex;
  align-items: center;
  justify-content: space-between;

  & a {
    text-decoration: none;
    margin: 0px 10px;
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
    & .icon-text {
      font-size: 1.8rem;
    }
    &:hover {
      font-weight: 700;
    }
  }
`;

export const InfoTextStyled = styled.div<PageColorsStyledType>`
  padding: 5px 8px;
  border-radius: 5px;
  transition: 0.3s;
  .name {
    font-size: 2.7rem;
    font-weight: 600;
    color: ${(props) => props.colors.secondary};
    text-shadow: 0px 1px 2px #000;
    transition: 0.3s;
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
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;

  background: ${(props) => props.colors.primary};
  box-shadow: 0px 1px 1px 1px rgba(255, 255, 255, 0.3);
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
