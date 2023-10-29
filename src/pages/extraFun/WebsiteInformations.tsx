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

              <GridStack space="20px">
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
              </GridStack>
            </div>
          ))}
      </VerticalStack>
    </WebsiteInformationsStyled>
  );
};

export default WebsiteInformations;

const WebsiteInformationsStyled = styled.div<PageColorsStyledType>`
  padding: 30px;
  background-color: ${(props) => props.colors.background};
  border-radius: 20px;
  width: 100%;

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
      height: 100%;
      padding: 20px;
      border-radius: 10px;
      background-color: ${(props) => props.colors.gray};
      cursor: pointer;

      & .items-name {
        font-size: 1.6em;
        font-weight: 500;
        text-align: center;
        margin-bottom: 12px;
      }
      & .items-description {
        font-size: 1.4em;
        font-weight: 300;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
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

export const GridStack = styled.div<{ minWidth?: string; space?: string }>`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: minmax(150px, 2fr);
  gap: ${({ space }) => space || '30px'};
  justify-items: center;
`;
