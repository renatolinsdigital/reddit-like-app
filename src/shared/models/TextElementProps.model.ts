
import { DefaultTheme } from "styled-components";
import { BoxStyledProps } from 'src/shared/models';
import { FontSizes, LineHeights, FontWeights } from "src/theme/models";

type TextElementProps = BoxStyledProps & {
  alignItems?: string;
  fontFamily?: string;
  theme?: DefaultTheme;
  isFlexible?: boolean;
  isStretched?: boolean;
  flex?: number | string;
  justifyContent?: string;
  isInUpperCase?: boolean;
  fontSizeName?: keyof FontSizes;
  lineHeightName?: keyof LineHeights;
  fontWeightName?: keyof FontWeights;

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
