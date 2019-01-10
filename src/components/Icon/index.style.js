import styled, { css } from 'styled-components/native';

const ImageStyles = css`
  tint-color: ${props => props.theme.colors.black};
`;

const TouchableOpacityStyles = css`
  margin-right: ${props => props.theme.spacing.component.small};
`;

export const Image = styled.Image`${ImageStyles};`;
export const ImageWithoutTint = styled.Image``;
export const TouchableOpacity = styled.TouchableOpacity`${TouchableOpacityStyles};`;
