import styled, { CSSObject } from 'styled-components';
import { ButtonStyledProps } from './Button.model';

const ButtonStyled = styled.button<ButtonStyledProps>((
  {
    top,
    left,
    right,
    bottom,

    theme,
    minWidth,
    isEnabled,
    minHeight,
    colorName,
    borderRadius = 4,
    backgroundColorName,

    marginTop = 0,
    marginLeft = 0,
    marginRight = 0,
    marginBottom = 0,

    paddingTop = 12,
    paddingLeft = 24,
    paddingRight = 24,
    paddingBottom = 12,
    position = 'static',
    hoverColorName = 'white',
    hoverBackgroundColorName = 'primaryDark',
  }): CSSObject => {
  const { colors, transitions } = theme;

  const enabledBackgroundColor = backgroundColorName
    ? colors[backgroundColorName]
    : colors.primaryDefault;

  const disabledBackgroundColor = colors.gray3;

  return {
    top,
    left,
    right,
    bottom,
    position,

    marginTop,
    marginLeft,
    marginRight,
    marginBottom,

    paddingTop,
    paddingLeft,
    paddingRight,
    paddingBottom,

    minWidth,
    minHeight,
    borderRadius,
    transition: transitions?.default,
    cursor: isEnabled ? 'pointer' : 'default',
    color: colorName ? colors[colorName] : colors.white,
    backgroundColor: isEnabled ? enabledBackgroundColor : disabledBackgroundColor,

    '&:hover': {
      color: isEnabled ? colors[hoverColorName] : colors.white,
      backgroundColor: isEnabled ? colors[hoverBackgroundColorName] : disabledBackgroundColor
    },
  }

});

export default ButtonStyled;