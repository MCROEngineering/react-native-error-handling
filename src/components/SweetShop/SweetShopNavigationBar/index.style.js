import styled from 'styled-components/native';
import { deviceIsPhone } from 'src/utils/device';

export const Text = styled.Text`
  font-size: 12px;
  color: #a89300;
  font-family: ${props => props.theme.font.family.primary.bold};
  letter-spacing: 0;
  text-align: center;
  line-height: 14px;
  ${!deviceIsPhone ? 'margin-right: 8px;' : ''}
`;

export const Text2 = styled.Text`
  font-size: 26px;
  color: #a89300;
  font-family: ${props => props.theme.font.family.primary.bold};
  letter-spacing: 0;
  text-align: center;
  line-height: 26px;
  ${!deviceIsPhone ? 'margin-right: 8px;' : ''}
`;

export const View = styled.View`
  flex-direction: ${deviceIsPhone ? 'column' : 'row'};
  align-items: flex-end;
  margin: 12px;
`;
