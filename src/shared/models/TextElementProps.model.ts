
import { DefaultTheme } from "styled-components";
import { BoxStyledProps } from 'src/shared/models';
import { FontSizes, LineHeights } from "src/theme/models";

type TextElementProps = BoxStyledProps & {
  isBold?: boolean;
  alignItems?: string;
  fontFamily?: string;
  theme?: DefaultTheme;
  isFlexible?: boolean;
  isStretched?: boolean;
  flex?: number | string;
  justifyContent?: string;
  isInUpperCase?: boolean;
  fontWeight?: string | number;
  fontSizeName?: keyof FontSizes;
  lineHeightName?: keyof LineHeights;

  wordWrap?:
  'normal'
  | 'break-word'
  | 'initial'
  | 'inherit';

  textAlign?:
  'left'
  | 'end'
  | 'start'
  | 'right'
  | 'unset'
  | 'center'
  | 'justify'
  | 'inherit'
  | 'initial'
  | 'match-parent'
};

export default TextElementProps;
