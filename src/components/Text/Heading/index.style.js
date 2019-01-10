import styled, { css } from 'styled-components/native';

const HeadingStyles = css`
  font-family: ${props => props.theme.font.family.primary.bold};
  font-size: ${props => props.theme.font.size.bigger};
  letter-spacing: -0.5px;
  text-align: center;
  line-height: ${props => props.theme.lineHeight.big};
`;

export const Heading = styled.Text`${HeadingStyles};`;
