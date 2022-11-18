import { ReactNode } from 'react';
import { Colors } from 'src/theme/models';
import { BoxProps, ReactActionEvent } from 'src/shared/models';

interface ButtonEvents {
  onClick?(event?: ReactActionEvent): void;
  onMouseDown?(event?: ReactActionEvent): void;
}

interface CustomButtonProps {
  isEnabled?: boolean;
  hoverChildBorderColorName?: keyof Colors;
  disabledChildBorderColorName?: keyof Colors;
}

export type ButtonProps = Omit<BoxProps, "theme"> & ButtonEvents & CustomButtonProps & {
  children: ReactNode;
};

export type ButtonStyledProps = BoxProps & ButtonEvents & CustomButtonProps;