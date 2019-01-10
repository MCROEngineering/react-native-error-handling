import styled from 'styled-components/native';
import { getFontSize } from 'src/utils/fonts';

export const Text = styled.Text`
  font-size: ${getFontSize(16)}px;
  line-height: 24px;
`;

export const Section = styled.View`
  margin-vertical: ${props => props.theme.spacing.section.small / 2}px;
`;

export const Content = styled.View`
  padding: ${props => props.theme.spacing.screen.vertical}px  ${props => props.theme.spacing.screen.horizontal}px;
`;
