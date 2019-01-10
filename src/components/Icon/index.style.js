import styled from 'styled-components/native';

export const Image = styled.Image`
  tint-color: ${props => props.theme.colors.black};
`;
export const ImageWithoutTint = styled.Image`
  tint-color: ${props => props.theme.colors.black};
`;
export const TouchableOpacity = styled.TouchableOpacity`
  margin-right: ${props => props.theme.spacing.component.small};
`;
