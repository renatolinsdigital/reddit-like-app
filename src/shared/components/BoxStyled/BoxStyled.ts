import styled, { CSSObject } from 'styled-components';
import BoxStyledProps from './BoxStyled.model';

const BoxStyled = styled.div<BoxStyledProps>(
  ({
    top,
    left,
    right,
    bottom,

    theme,
    cursor,
    flex = 1,
    maxWidth,
    maxHeight,

    overflow,
    overflowX,
    overflowY,
    transform,
    minWidth = 0,

    border,
    borderTop,
    borderLeft,
    borderRight,
    borderBottom,
    borderRadius = 0,
    minHeight = 'auto',

    paddingTop = 0,
    paddingLeft = 0,
    paddingRight = 0,
    paddingBottom = 0,

    marginTop = 0,
    marginLeft = 0,
    marginRight = 0,
    marginBottom = 0,

    isRemoved = false,
    isVertical = false,
    isStretched = true,
    position = 'relative',

    verticalBreakPoint,
    alignItems = 'center',
    isFlexWrapping = false,
    justifyContent = 'center',
    borderColorName = 'transparent',
    backgroundColorName = 'transparent',
  }: BoxStyledProps): CSSObject => {
    const { colors } = theme;

    return {
      top,
      left,
      right,
      bottom,

      border,
      borderTop,
      borderLeft,
      borderRight,
      borderBottom,

      position,
      minWidth,
      minHeight,
      paddingTop,
      paddingLeft,
      paddingRight,
      paddingBottom,

      marginTop,
      marginLeft,
      marginRight,
      marginBottom,

      cursor,
      overflow,
      overflowX,
      overflowY,
      transform,
      alignItems,
      borderRadius,
      justifyContent,
      borderColor: colors[borderColorName],

      maxWidth: maxWidth || '100%',
      maxHeight: maxHeight || 'auto',
      flex: isStretched ? flex : 'none',
      width: isStretched ? '100%' : 'auto',
      display: isRemoved ? 'none' : 'flex',
      height: isStretched ? '100%' : 'auto',
      flexDirection: isVertical ? 'column' : 'row',
      flexWrap: isFlexWrapping ? 'wrap' : 'nowrap',
      [`@media(max-width: ${verticalBreakPoint}px)`]: {
        flexDirection: 'column',
      },
      backgroundColor: colors[backgroundColorName]

    };
  },
);

export default BoxStyled;
