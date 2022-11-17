import 'styled-components';
import { Colors, FontSizeNames } from './theme/models';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Colors;
    fontSizes: FontSizeNames;
    transitions?: {
      default: string;
    };
  }
}