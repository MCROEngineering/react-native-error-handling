import { StyleSheet } from 'react-native';
import styled, { css } from 'styled-components/native';

const TextInputStyles = css`
  background-color: ${props => props.theme.colors.white};
  border: 2px solid ${props => props.theme.colors.border};
  border-radius: 5;
  color: ${props => props.theme.colors.black};
  font-size: ${props => props.theme.font.size.normal};
  font-family: ${props => props.theme.font.family.primary.regular};
  height: ${props => props.theme.size.component.default};
  padding-left: 10;
  padding-right: 10;
`;

const TouchableIconStyles = css`
  ${props => (props.rightIconAlignmentTop ? 'top: 0' : 'bottom: 0')};
  height: 50;
  text-align: center;
  justify-content: center;
  padding-left: 6;
  padding-right: 6;
  position: absolute;
  right: 0;
`;

const IconStyles = css`
  height: ${props => props.theme.size.icon.small};
  justify-content: center;
  position: relative;
  width: ${props => props.theme.size.icon.small};
`;

const ViewStyles = css`
  margin-bottom: ${props => props.theme.spacing.component.small};
`;

const TextStyles = css`
  margin-bottom: ${props => props.theme.spacing.component.small};
`;

export const Icon = styled.Image`${IconStyles};`;
export const TextInput = styled.TextInput`${TextInputStyles};`;
export const TouchableText = styled.TouchableOpacity`
  ${TextInputStyles};
  justify-content: center;
`;
export const TouchableIcon = styled.TouchableOpacity`${TouchableIconStyles};`;
export const View = styled.View`${ViewStyles};`;
export const Text = styled.Text`${TextStyles};`;

export const styles = StyleSheet.create({
  redBorder: {
    borderColor: 'red',
  },
});
