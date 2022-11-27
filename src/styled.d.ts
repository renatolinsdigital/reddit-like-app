import 'styled-components';
import { Colors, FontSizes, LineHeights, FontWeights } from './theme/models';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Colors;
    fontSizes: FontSizes;
    lineHeights: LineHeights;
    fontWeights: FontWeights;
    transitions: {
      defaultAll: string;
      defaultTime: string;
    };
  }
}