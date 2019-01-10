import styled, { css } from 'styled-components/native';

const TextStyles = css`
  font-family: ${props => props.theme.font.family.primary.light};
  font-size: ${props => props.theme.font.size.small};
  color: ${props => props.theme.colors.blackLight};
  line-height: ${props => props.theme.lineHeight.bigger};
`;

export const Text = styled.Text`${TextStyles};`;
