import styled from 'styled-components/native';
import { getPaddingSize } from 'src/utils/fonts';

export const ScreenWrapperCustom = styled.TouchableOpacity`
  flex: 1;
  padding-vertical: ${props => getPaddingSize(props.theme.spacing.screen.vertical)}px;
  padding-horizontal: ${props => getPaddingSize(props.theme.spacing.screen.horizontal)}px;
  justify-content: center;
  background-color: ${props => props.theme.colors.lightYellow};
`;
