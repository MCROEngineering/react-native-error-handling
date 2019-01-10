import styled from 'styled-components/native';
import { getFontSize } from 'src/utils/fonts';

export const Heading = styled.Text`
  font-size: ${getFontSize(36)}px;
  line-height: 48px;
  text-align: center;
  letter-spacing: 0;
  text-align: center;
  color: ${props => props.theme.colors.darkYellow};
`;

export const SweetCard = styled.TouchableOpacity`
  margin: 16px;
  border-radius: 4px;
  shadow-color: ${props => props.theme.colors.mediumGray || '#000'};
  shadow-offset: 0px 15px;
  shadow-opacity: 0.2;
  shadow-radius: 17px;
  background-color: ${props => props.theme.colors.white};
  padding: 4px;
`;

export const SweetCardHeader = styled.View`
  flex-direction: row;
  align-items: center;
  height: ${props => props.height}px;
`;

export const HatIconWrapper = styled.View`
  margin: 8px;
  align-items: center;
  justify-content: center;
`;

export const ArrowIconWrapper = styled(HatIconWrapper)`
  align-items: flex-end;
  flex-grow: 1;
`;

export const SweetCardTitle = styled.Text`
  font-size: ${getFontSize(20)}px;
  color: ${props => props.theme.colors.blackLight};
  letter-spacing: 0;
  line-height: 32px;
`;

export const SweetCardHeaderMain = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex: 2;
`;

export const SweetImage = styled.Image`
  height: ${props => props.theme.size.cards.image.small}px;
  width: 100%;
  background-color: ${props => props.theme.colors.lightGray};
`;

export const MatchingPropertiesText = styled.Text`
  position: absolute;
  font-size: ${getFontSize(12)}px;
`;
