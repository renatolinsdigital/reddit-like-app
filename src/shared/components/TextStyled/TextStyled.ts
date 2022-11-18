import styled, { CSSObject } from 'styled-components';
import TextProps from './TextStyled.model';

const TextStyled = styled.span<TextProps>(
  ({
    theme,

    maxWidth,
    minWidth,
    maxHeight,
    minHeight,

    overflow,
    overflowX,
    overflowY,

    marginTop = 0,
    marginLeft = 0,
    marginRight = 0,
    marginBottom = 0,

    paddingTop = 8,
    paddingLeft = 12,
    paddingRight = 12,
    paddingBottom = 8,

    textAlign,
    flex = 'none',
    isFlexible = false,
    wordWrap = 'normal',
    isStretched = false,
    isInUpperCase = false,

    colorName,
    hoverColorName,
    fontSizeName = 'default',
    lineHeightName = 'small',
    fontWeightName = 'regular',
    backgroundColorName = 'transparent',
    hoverBackgroundColorName = 'transparent',

    cursor = 'inherit',
    alignItems = 'center',
    fontFamily = 'inherit',
    justifyContent = 'flex-start',
  }): CSSObject => {
    const { colors, transitions, fontSizes, lineHeights, fontWeights } = theme;

    return {
      flex,
      cursor,
      wordWrap,
      overflow,
      overflowX,
      overflowY,

      maxHeight,
      minHeight,
      alignItems,
      fontFamily,

      paddingTop,
      paddingLeft,
      paddingRight,
      paddingBottom,

      marginTop,
      marginLeft,
      marginRight,
      marginBottom,

      textAlign,
      justifyContent,
      borderRadius: 4,
      transition: transitions?.default,

      width: isStretched ? '100%' : 'auto',
      height: isStretched ? '100%' : 'auto',
      maxWidth: maxWidth ? maxWidth : '100%',
      display: isFlexible ? 'flex' : 'inline',
      fontWeight: fontWeights[fontWeightName],
      lineHeight: lineHeights[lineHeightName],
      fontSize: `${fontSizes[fontSizeName]}rem`,
      backgroundColor: colors[backgroundColorName],
      color: colorName ? colors[colorName] : 'inherit',
      minWidth: isStretched ? 'max-content' : minWidth,
      textTransform: isInUpperCase ? 'uppercase' : 'none',

      '&:hover': {
        color: hoverColorName ? colors[hoverColorName] : 'inherit',
        backgroundColor: hoverBackgroundColorName
          ? colors[hoverBackgroundColorName]
          : colors.transparent
      },
    }
  }

);


export default TextStyled;
