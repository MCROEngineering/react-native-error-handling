import styled  from 'styled-components/native';
import { getFontSize } from 'src/utils/fonts';

export const Button = styled.TouchableOpacity`
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

export const Text = styled.Text`
  color: ${props => props.theme.colors.textLight};
  font-size: ${props => getFontSize(props.theme.font.size.big)};
`;
