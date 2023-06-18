import { styled } from 'styled-components';
import { PageColorsStyledType } from '../../@types/landingPage';

export const TitleHeaderStyled = styled.div`
  font-size: 2.4rem;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const TitleBannerStyled = styled.div<PageColorsStyledType>`
  background: linear-gradient(
    ${(props) => props.colors.gray},
    ${(props) => props.colors.background}
  );
  padding: 20px 10px;
  border-radius: 10px;
  border: 1px solid ${(props) => props.colors.secondary};
  margin-bottom: 30px;

  & .description {
    font-size: 1.6rem;
    font-weight: 300;
  }
`;
