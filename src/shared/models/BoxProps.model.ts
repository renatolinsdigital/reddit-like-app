import Colors from './Colors.model';
import Cursor from './Cursor.model';
import BoxPositions from './BoxPositions.model';
import { DefaultTheme } from "styled-components";

interface BoxProps {
  id?: string;
  transform?: string;
  theme: DefaultTheme;
  top?: number | string;
  left?: number | string;
  right?: number | string;
  position?: BoxPositions;
  bottom?: number | string;
  borderRadius?: number | string;

  maxWidth?: number | string;
  minWidth?: number | string;
  maxHeight?: number | string;
  minHeight?: number | string;

  marginTop?: number | string;
  marginLeft?: number | string;
  marginRight?: number | string;
  marginBottom?: number | string;

  paddingTop?: number | string;
  paddingLeft?: number | string;
  paddingRight?: number | string;
  paddingBottom?: number | string;

  colorName?: keyof Colors;
  hoverColorName?: keyof Colors;
  borderColorName?: keyof Colors;
  backgroundColorName?: keyof Colors;
  hoverBackgroundColorName?: keyof Colors;

  cursor?: Cursor;

  overflow?: 'visible' | 'hidden' | 'scroll' | 'auto';
  overflowX?: 'visible' | 'hidden' | 'scroll' | 'auto';
  overflowY?: 'visible' | 'hidden' | 'scroll' | 'auto';
}

export default BoxProps;