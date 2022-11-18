import styled, { CSSObject } from 'styled-components';
import { TextInputContainerStyledProps, TextInputStyledProps } from './TextInput.model';

export const TextInputContainerStyled = styled.div<TextInputContainerStyledProps>((
  {
    flex,
    maxWidth,
    minWidth,
    maxHeight,
    minHeight,
    marginTop,
    marginLeft,
    marginRight,
    marginBottom,
  }
): CSSObject => {
  return {
    flex,
    maxWidth,
    minWidth,
    maxHeight,
    minHeight,
    marginTop,
    marginLeft,
    marginRight,
    marginBottom,
    width: '100%',
    display: 'flex',
    position: 'relative',

    'svg': {
      width: 18,
      height: 18
    },
  };
});

export const TextInputStyled = styled.input<TextInputStyledProps>((
  {
    flex,
    theme,

    maxWidth,
    minWidth,
    maxHeight,
    minHeight,

    paddingTop,
    paddingLeft,
    paddingRight,
    paddingBottom,

    isLeftIconRendered,
    isRightIconRendered,

    borderRadius,
    borderWidth = '1px',
    borderStyle = 'none',
    textColorName = 'dark',
    hasFocusOutline = false,
    fontSizeName = 'default',
    lineHeightName = 'default',
    fontWeightName = 'regular',
    backgroundColorName = 'white',
    placeHolderColorName = 'gray3',
    borderColorName = 'transparent'
  }
): CSSObject => {
  const { colors, fontSizes, lineHeights, fontWeights } = theme;

  const parsedPaddingLeft =
    typeof paddingLeft === 'number'
      ? `${paddingLeft}px`
      : paddingLeft;

  const parsedPaddingRight =
    typeof paddingRight === 'number'
      ? `${paddingRight}px`
      : paddingRight;

  return {
    flex,
    maxWidth,
    minWidth,
    maxHeight,
    minHeight,
    paddingTop,
    paddingBottom,

    borderStyle,
    borderWidth,
    borderRadius,
    display: 'flex',
    color: colors[textColorName],
    borderColor: colors[borderColorName],
    fontWeight: fontWeights[fontWeightName],
    fontSize: `${fontSizes[fontSizeName]}rem`,
    lineHeight: `${lineHeights[lineHeightName]}`,
    backgroundColor: colors[backgroundColorName],
    paddingLeft: isLeftIconRendered ? `calc(${parsedPaddingLeft} + 24px)` : paddingLeft,
    paddingRight: isRightIconRendered ? `calc(${parsedPaddingRight} + 22px)` : paddingRight,

    '&:focus': {
      outline: hasFocusOutline ? 'solid' : 'none',
    },

    '&::placeholder': { /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: colors[placeHolderColorName],
      opacity: 1 /* Firefox */
    },
    '&:-ms-input-placeholder': { /* Internet Explorer 10-11 */
      color: colors[placeHolderColorName],
    },
    '&::-ms-input-placeholder': { /* Microsoft Edge */
      color: colors[placeHolderColorName],
    }
  };
});





