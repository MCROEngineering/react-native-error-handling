import styled from 'styled-components/native';

export const Heading = styled.Text`
  font-family: ${props => props.theme.font.family.primary.bold};
  font-size: ${props => props.theme.font.size.bigger};
  letter-spacing: -0.5px;
  text-align: center;
  line-height: ${props => props.theme.lineHeight.big};
`;
