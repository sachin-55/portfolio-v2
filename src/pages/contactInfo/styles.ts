import { styled } from 'styled-components';
import { PageColorsStyledType } from '../../@types/landingPage';

export const ContactInfoStyled = styled.div<PageColorsStyledType>`
  & .contact-info-row {
    align-items: center;
    justify-content: space-between;
    max-width: 620px;
    margin-bottom: 20px;
    padding-bottom: 5px;
    border-bottom: 1px solid #fcfcfc;
  }

  & .button-wrapper {
    align-items: center;
    justify-content: flex-end;

    @media (max-width: 450px) {
      flex-direction: column;
      align-items: flex-end;
    }
  }
  & .social-image {
    margin-right: 5px;
    img {
    }
  }
  & .social-title {
    font-size: 3.2rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    & .username {
      font-size: 1.4rem;
      font-weight: 300;
      margin-left: 5px;
    }
  }

  & .linkedIn {
    color: #0077b5;
  }

  & .github {
    color: ${(props) => (props.colors.name === 'main' ? '#010409' : '#fcfcfc')};
  }

  & .phone {
    color: #19aa11;
  }
  & .mail {
    color: #d54337;
  }

  & .messenger {
    color: #027df1;
  }

  & .slack {
    color: ${(props) => (props.colors.name === 'main' ? '#481449' : '#34BFE8')};
  }

  & button {
    background: ${(props) => props.colors.highlight};
    border: 1px solid ${(props) => props.colors.highlight2};
    border-radius: 10px;
    padding: 5px 15px;
    cursor: pointer;

    & span {
      font-size: 1.6rem;
      margin-right: 5px;
    }
  }
`;
