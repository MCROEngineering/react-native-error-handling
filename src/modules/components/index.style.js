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

export const OfferingCard = styled.TouchableOpacity`
  ${!deviceIsPhone && 'flex: 1;'}
  border-radius: 6;
  margin: 24px;
  background-color: ${props => props.theme.colors.white};
  shadow-color: black;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.4;
  shadow-radius: 2;
  elevation: 1;
  justify-content: space-between;
`;

export const OfferingCardImage = styled.Image`
  height: ${deviceIsPhone ? 240 : 360}px;
  width: 100%;
`;

export const OfferingCardImageWrapper = styled.View`
  width: 100%;
  position: relative;
  overflow: hidden;
`;

export const OfferingCardAboveImageWrapper = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, .5);
`;

export const OfferingDetailsAboveImageWrapper = styled.View`
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

export const OfferingsIconsAboveImageWrapper = styled.View`
  flex: 1.5;
`;

export const Description = styled(Text)`
  text-align: ${getTextAlign()};
`;

export const OfferingDetailText = styled(Description)`
  font-size: ${getFontSize(12)}px;
  letter-spacing: 0;
  line-height: 27px;
`;

export const Offer = styled.View`
  width: 0;
  background-color: transparent;
  border-style: solid;
  border-left-width: 36;
  border-top-width: 36;
  border-right-width: 36;
  border-bottom-width: 36;
  border-right-color: transparent;
  border-top-color: ${props => props.theme.colors.primary};
  border-bottom-color: transparent;
  border-left-color: ${props => props.theme.colors.primary};
  border-top-left-radius: 6;
`;

export const OfferText = styled(OfferingDetailText)`
  position: absolute;
  transform: rotate(-45deg);
  top: -24px;
  left: -30px;
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.font.family.primary.bold};
`;

export const IconsWrapper = styled.View`
  position: absolute;
  right: 16;
  top: 16;
  flex-direction: row;
`;

export const OfferingCardSellerWrapper = styled.View`
  padding-horizontal: 12px;
  padding-vertical: 8px;
  background-color: ${props => props.theme.colors.extraLightGray};
  flex-direction: row;
  align-items: center;
`;

export const SellerIcon = styled.Image`
  border-width: 2px;
  border-color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.gray};
  height: 46px;
  width: 46px;
  border-radius: 23px;
`;

export const ContactWrapper = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
`;

export const OfferingCardDescriptionWrapper = styled.View`
  padding: 16px;
`;

export const OfferingDetailsWrapper = styled.View`
  flex: 1;
  flex-direction: row;
`;
