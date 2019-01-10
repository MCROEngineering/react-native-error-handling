import styled from 'styled-components/native';
import { getFontSize } from 'src/utils/fonts';

export const Text = styled.Text`
  font-size: ${getFontSize(16)}px;
  line-height: 24px;
`;

export const CardImage = styled.Image`
  height: 240px;
  width: 100%;
`;

export const CardImageWrapper = styled.View`
  width: 100%;
  position: relative;
  overflow: hidden;
`;

export const CardAboveImageWrapper = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, .5);
`;

export const DetailsAboveImageWrapper = styled.View`
  flex: 1;
  padding: 16px;
  justify-content: flex-end;
`;

export const DropDownRowText = styled(Text)`
  margin-horizontal: 4;
  text-align-vertical: center;
`;

export const CardTitles = styled(DropDownRowText)`
  text-shadow-color: ${props => props.theme.colors.black};
  text-shadow-offset: { width: 1, height: 1 };
  text-shadow-radius: 24;
`;

export const IconsAboveImageWrapper = styled.View`
  flex: 1.5;
`;

export const IconsWrapper = styled.View`
  position: absolute;
  right: 16;
  top: 16;
  flex-direction: row;
`;
