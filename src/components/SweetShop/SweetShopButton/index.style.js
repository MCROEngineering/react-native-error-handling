import styled, { css } from 'styled-components/native';
import { getFontSize } from 'src/utils/fonts';

export const TextStyles = css`
  color: ${props => props.theme.colors.textLight};
  font-size: ${props => getFontSize(props.theme.font.size.big)};
`;

export const ButtonStyles = css`
  align-items: center;
  background-color: #a89300;
  border-radius: 25;
  display: flex;
  elevation: 1;
  flex-direction: row;
  min-height: ${props => props.theme.size.component.default}px;
  justify-content: center;
  padding-left: ${props => props.theme.spacing.component.bigger2}px;
  padding-right: ${props => props.theme.spacing.component.bigger2}px;
  shadow-color: black;
  shadow-offset: 1px 1px;
  shadow-opacity: 0.4;
  shadow-radius: 2;
`;

export const TitleStyles = css`
  color: ${props => props.theme.colors.textLight};
  font-size: 16px;
`;

export const Button = styled.TouchableOpacity`${ButtonStyles};`;
export const Title = styled.TouchableOpacity`${TitleStyles};`;
export const Text = styled.Text`${TextStyles}`;
