import { AlignItems, BoxProps, JustifyContent } from '.';

type BoxStyledProps = BoxProps & {
  border?: string;
  borderTop?: string;
  borderLeft?: string;
  borderRight?: string;
  isVertical?: boolean;
  borderBottom?: string;
  isStretched?: boolean;
  flex?: number | string;
  alignItems?: AlignItems;
  isFlexWrapping?: boolean;
  minWidth?: string | number;
  maxWidth?: string | number;
  minHeight?: string | number;
  maxHeight?: string | number;
  verticalBreakPoint?: number;
  justifyContent?: JustifyContent;
};

export default BoxStyledProps;
