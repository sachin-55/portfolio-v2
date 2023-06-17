import { styled } from 'styled-components';
import { PageColorsStyledType } from '../../@types/landingPage';

export const MyBioStyled = styled.div<PageColorsStyledType>`
  & .bio-title {
    font-size: 2.4rem;
    font-weight: 700;
    margin-bottom: 10px;
  }
`;

export const BioTopBannerStyled = styled.div<PageColorsStyledType>`
  background: linear-gradient(
    ${(props) => props.colors.gray},
    ${(props) => props.colors.background}
  );
  padding: 20px 10px;
  border-radius: 10px;
  border: 1px solid ${(props) => props.colors.secondary};
  margin-bottom: 30px;

  & .bio-description {
    font-size: 1.6rem;
    font-weight: 300;
  }
`;

export const ResumeStyled = styled.div<PageColorsStyledType>`
  padding: 30px 30px;
  border-radius: 10px;
  border: 1px solid ${(props) => props.colors.secondary};

  & .bio-title {
    font-size: 1.8rem;
    font-weight: 700;
  }
  & .bio-sub-title {
    font-size: 1.6rem;
    font-weight: 500;
    margin-bottom: 10px;
  }
`;

export const ResumeRowStyled = styled.div<PageColorsStyledType>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 5px;

  &.last-child {
    margin-bottom: 30px;
  }

  & .row-name {
    width: 150px;
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: -5px;
  }
  & .row-email {
    width: 150px;
    font-size: 1.8rem;
    font-weight: 300;
    margin-bottom: 15px;
  }

  & .row-label {
    width: 130px;
    font-size: 1.4rem;
    font-weight: 400;
  }

  & .row-value {
    flex: 1;
    font-size: 1.4rem;
    font-weight: 300;

    &::before {
      content: ': ';
      font-size: 1.6rem;
    }
  }
`;

export const ResumeExperienceRowStyled = styled.ol<PageColorsStyledType>`
  list-style-position: inside;

  ul {
    margin-left: 4rem;
    & li {
      text-indent: -2rem;
    }
    & li .list-text {
      display: inline;
      font-size: 1.4rem;
    }
  }

  & li {
    font-size: 1.4rem;
    &:last-child {
      margin-bottom: 30px;
    }
  }
`;
