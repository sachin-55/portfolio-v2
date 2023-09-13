import React from 'react';
import styled from 'styled-components';
import { PageColorsStyledType } from '../../@types/landingPage';
import { useCustomTheme } from '../../context/themeContext';
import usefulWebsites from '../../extras/usefulWebsites';

interface IWEbsiteInformationsProps {}

const WebsiteInformations = (props: IWEbsiteInformationsProps) => {
  const { colors } = useCustomTheme();
  return (
    <WebsiteInformationsStyled colors={colors}>
      <VerticalStack>
        {Array.isArray(usefulWebsites) &&
          usefulWebsites.map((websites) => (
            <div
              key={websites?.category}
              className="websites-category-container"
            >
              <div className="category-title">{websites?.category}</div>

              <VerticalStack space="14px">
                {Array.isArray(websites?.items) &&
                  websites?.items.map((wItems) => (
                    <div
                      className="items-wrapper"
                      key={wItems?.id}
                      onClick={() => window.open(wItems?.url)}
                    >
                      <div className="items-name">{wItems?.name}</div>
                      <div className="items-description">
                        {wItems?.description}
                      </div>
                    </div>
                  ))}
              </VerticalStack>
            </div>
          ))}
      </VerticalStack>
    </WebsiteInformationsStyled>
  );
};

export default WebsiteInformations;

const WebsiteInformationsStyled = styled.div<PageColorsStyledType>`
  margin-top: 60px;
  padding: 30px;
  background-color: ${(props) => props.colors.background};
  border-radius: 20px;

  & .websites-category-container {
    width: 100%;
    & .category-title {
      font-size: 1.8em;
      font-weight: 500;
      width: 100%;
      padding: 8px 0px;
      margin: 0px 0px 10px;
      border-bottom: 2px solid ${(props) => props.colors.text};
    }

    & .items-wrapper {
      width: 100%;
      padding: 20px;
      border-radius: 10px;
      background-color: ${(props) => props.colors.gray};
      cursor: pointer;

      & .items-name {
        font-size: 1.6em;
        font-weight: 500;
      }
      & .items-description {
        font-size: 1.4em;
        font-weight: 300;
      }
    }
  }
`;

export const VerticalStack = styled.div<{ space?: string }>`
  width: 100%;
  display: flex;
  align-items: start;
  flex-direction: column;
  gap: ${({ space }) => space || '30px'};
`;
