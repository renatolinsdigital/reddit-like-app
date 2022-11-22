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
    borderWidth = '1px',
    borderStyle = 'none',
    hoverColorName = 'white',
    borderColorName = 'transparent',
    disabledBackgroundColorName = 'gray3',
    hoverBackgroundColorName = 'primaryDark',
    hoverChildBorderColorName = 'transparent',
    disabledChildBorderColorName = 'transparent'

  }): CSSObject => {
  const { colors, transitions } = theme;

  const enabledBackgroundColor = backgroundColorName
    ? colors[backgroundColorName]
    : colors.primaryDefault;

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
    borderStyle,
    borderWidth,
    borderRadius,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: transitions?.default,
    borderColor: colors[borderColorName],
    cursor: isEnabled ? 'pointer' : 'default',
    color: colorName ? colors[colorName] : colors.white,
    backgroundColor: isEnabled ? enabledBackgroundColor : colors[disabledBackgroundColorName],

    ' div': {
      borderColor: isEnabled ? undefined : colors[disabledChildBorderColorName],
    },

    '&:hover': {
      color: isEnabled ? colors[hoverColorName] : colors.white,
      backgroundColor: isEnabled ? colors[hoverBackgroundColorName] : colors[disabledBackgroundColorName],
      ' *': {
        borderColor: isEnabled ? colors[hoverChildBorderColorName] : colors[disabledChildBorderColorName],
      }
    },
  }

});

export default ButtonStyled;