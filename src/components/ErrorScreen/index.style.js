import styled from 'styled-components/native';
import { getPaddingSize } from 'src/utils/fonts';
import { deviceIsPhone } from 'src/utils/device';

const horizontalPadding = props => (deviceIsPhone
  ? props.theme.spacing.screen.horizontal
  : props.theme.spacing.screen.horizontalTablet
);
const verticalPadding = props => (deviceIsPhone
  ? props.theme.spacing.screen.vertical
  : props.theme.spacing.screen.verticalTablet
);

export const ScreenWrapperCustom = styled.TouchableOpacity`
  flex: 1;
  padding-vertical: ${props => getPaddingSize(verticalPadding(props))}px;
  padding-horizontal: ${props => getPaddingSize(horizontalPadding(props))}px;
  justify-content: center;
  background-color: ${props => props.theme.colors.lightYellow};
`;
