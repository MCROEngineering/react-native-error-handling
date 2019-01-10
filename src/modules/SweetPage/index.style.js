import { DeviceInfo } from 'react-native';
import styled from 'styled-components/native';
import { getFontSize } from 'src/utils/fonts';

export const Text = styled.Text`
  font-size: ${getFontSize(16)}px;
  line-height: 24px;
`;

export const ScreenWrapper = styled.ScrollView`
  flex: 1;
  background-color: ${props => props.theme.colors.white};
`;

export const ReadMoreWrapper = styled.View`
  margin: 16px;
`;

export const FooterRow = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  padding: 16px;
  align-items: flex-end;
`;

export const RecipeViewer = styled.View`
  background-color: ${props => props.theme.colors.white};
  border-radius: 6px;
  flex: 1;
  margin-horizontal: 8px;
  margin-top: ${(DeviceInfo && DeviceInfo.isIPhoneX_deprecated) ? '40' : '16'}px;
  margin-bottom: ${(DeviceInfo && DeviceInfo.isIPhoneX_deprecated) ? '32' : '8'}px;
  shadow-color: black;
  shadow-offset: 0px 12px;
  shadow-opacity: 0.24;
  shadow-radius: 8px;
  elevation: 5;
`;

export const RecipeScroller = styled.ScrollView`
  flex: 1;
  padding: 16px;
  padding-bottom: 46px;
`;
