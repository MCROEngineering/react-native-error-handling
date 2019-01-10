import styled from 'styled-components/native';
import { getFontSize } from 'src/utils/fonts';
import { deviceIsPhone } from 'src/utils/device';

const getTextAlign = () => (deviceIsPhone
  ? 'left'
  : 'center'
);

const horizontalPadding = props => (deviceIsPhone
  ? props.theme.spacing.screen.horizontal
  : props.theme.spacing.screen.horizontalTablet
);
const verticalPadding = props => (deviceIsPhone
  ? props.theme.spacing.screen.vertical
  : props.theme.spacing.screen.verticalTablet
);

export const Text = styled.Text`
  font-size: ${getFontSize(16)}px;
  line-height: 24px;
`;

export const ScreenWrapper = styled.ScrollView`
  flex: 1;
  background-color: ${props => (deviceIsPhone ? props.theme.colors.white : props.theme.colors.lightGray)};
`;

export const Section = styled.View`
  margin-vertical: ${props => props.theme.spacing.section.small / 2}px;
`;

export const Content = styled.View`
  padding: ${props => verticalPadding(props)}px  ${props => horizontalPadding(props)}px;
`;

export const Title = styled.Text`
  font-size: ${getFontSize(27)}px;
  font-family: ${props => props.theme.font.family.primary.bold};
  text-align: ${getTextAlign()};
`;

export const Card = styled.TouchableOpacity`
  flex: 1;
  border-radius: 6;
  margin: 24px;
  background-color: ${props => props.theme.colors.white};
  shadow-color: black;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.4;
  shadow-radius: 2;
  elevation: 1;
`;

export const DropDownRowText = styled(Text)`
  margin-horizontal: 4;
  text-align-vertical: center;
`;

export const DropDownContainer = styled.View`
  width: 100%;
  margin-bottom: 8px;
`;

export const DropDownRow = styled.View`
  flexDirection: row;
  height: 40;
  alignItems: center;
`;
