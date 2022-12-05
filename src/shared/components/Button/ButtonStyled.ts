import styled, { CSSObject } from 'styled-components';
import { ButtonStyledProps } from './Button.model';

const ButtonStyled = styled.button<ButtonStyledProps>(
  ({
    top,
    left,
    right,
    bottom,

    marginTop = 0,
    marginLeft = 0,
    marginRight = 0,
    marginBottom = 0,

    paddingTop = 12,
    paddingLeft = 24,
    paddingRight = 24,
    paddingBottom = 12,

    theme,
    minWidth,
    isEnabled,
    minHeight,
    colorName,
    backgroundColorName,
    hoverChildrenSvgColorName,

    isVisible = true,
    borderRadius = 4,
    position = 'static',
    borderWidth = '1px',
    borderStyle = 'none',
    hoverColorName = 'white',
    fontWeightName = 'regular',
    borderColorName = 'transparent',
    disabledBackgroundColorName = 'gray3',
    hoverBackgroundColorName = 'primaryDark',
    hoverChildBorderColorName = 'transparent',
    disabledChildBorderColorName = 'transparent'
  }): CSSObject => {
    const { colors, transitions, fontWeights } = theme;

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
      alignItems: 'center',
      justifyContent: 'center',
      transition: transitions.defaultAll,
      borderColor: colors[borderColorName],
      display: isVisible ? 'flex' : 'none',
      fontWeight: fontWeights[fontWeightName],
      cursor: isEnabled ? 'pointer' : 'default',
      color: colorName ? colors[colorName] : colors.white,
      backgroundColor: isEnabled ? enabledBackgroundColor : colors[disabledBackgroundColorName],

      ' div': {
        borderColor: isEnabled ? undefined : colors[disabledChildBorderColorName]
      },

      '&:hover': {
        color: isEnabled ? colors[hoverColorName] : colors.white,
        backgroundColor: isEnabled
          ? colors[hoverBackgroundColorName]
          : colors[disabledBackgroundColorName],
        ' *': {
          borderColor: isEnabled
            ? colors[hoverChildBorderColorName]
            : colors[disabledChildBorderColorName]
        },
        ' svg, path': {
          fill: hoverChildrenSvgColorName ? colors[hoverChildrenSvgColorName] : undefined
        }
      }
    };
  }
);

export default ButtonStyled;
