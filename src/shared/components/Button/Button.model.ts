import { ReactNode } from 'react';
import { BoxProps, ReactActionEvent } from '../../models';

interface ButtonEvents {
  onClick?(event?: ReactActionEvent): void;
  onMouseDown?(event?: ReactActionEvent): void;
}

interface CustomButtonProps {
  isEnabled?: boolean;
}

export type ButtonProps = Omit<BoxProps, "theme"> & ButtonEvents & CustomButtonProps & {
  children: ReactNode;
};

export type ButtonStyledProps = BoxProps & ButtonEvents & CustomButtonProps;