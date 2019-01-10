import styled from 'styled-components/native';

export const Text = styled.Text`
  font-family: ${props => props.theme.font.family.primary.light};
  font-size: ${props => props.theme.font.size.small};
  color: ${props => props.theme.colors.blackLight};
  line-height: ${props => props.theme.lineHeight.bigger};
`;
