import styled, { CSSObject } from 'styled-components';
import { TextInputContainerStyledProps, TextInputStyledProps } from './TextInput.model';

export const TextInputContainerStyled = styled.div((
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
  }: TextInputContainerStyledProps
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
    fontWeight,

    paddingTop,
    paddingLeft,
    paddingRight,
    paddingBottom,

    isLeftIconRendered,
    isRightIconRendered,
    textColorName = 'dark',
    fontSizeName = 'default',
    placeHolderColorName = 'gray3',
  }
): CSSObject => {
  const { colors, fontSizes } = theme;

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
    fontWeight,
    paddingTop,
    paddingBottom,
    display: 'flex',
    color: colors[textColorName],
    fontSize: `${fontSizes[fontSizeName]}rem`,
    paddingLeft: isLeftIconRendered ? `calc(${parsedPaddingLeft} + 22px)` : paddingLeft,
    paddingRight: isRightIconRendered ? `calc(${parsedPaddingRight} + 20px)` : paddingRight,

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





