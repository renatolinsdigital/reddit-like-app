import { ReactNode } from 'react';
import { BoxProps } from 'src/shared/models';

type LinkProps = Omit<BoxProps, "theme"> & {
  label?: string;
  location?: string;
  children?: ReactNode;
  isTextBold?: boolean;
  fontSize?: string | number;
  isOpeningInNewTab?: boolean;
}

export default LinkProps;
