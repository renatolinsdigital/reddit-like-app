import { ReactNode } from 'react';
import { DefaultTheme } from 'styled-components';
import { ColorNames, FontSizeNames } from 'src/theme/models';
import { BoxProps, ReactInputEvent } from 'src/shared/models';

// For the React component

type InputEvents = {
  onENTERKeyPress?(): void;
  onKeyUp?(event?: ReactInputEvent): void;
  onChange?(event?: ReactInputEvent): void;
  onKeyDown?(event?: ReactInputEvent): void;
  onKeyPress?(event?: ReactInputEvent): void;
}

type CustomInputProps = {
  name?: string;
  flex?: number;
  value?: string;
  maxLength?: number;
  textColor?: string;
  isReadOnly?: boolean;
  leftIcon?: ReactNode;
  placeHolder?: string;
  isDisabled?: boolean;
  rightIcon?: ReactNode;
  placeHolderColor?: string;
  fontWeight?: string | number;
  textColorName?: keyof ColorNames;
  fontSizeName?: keyof FontSizeNames;
  placeHolderColorName?: keyof ColorNames;
}

export type TextInputProps = Omit<BoxProps, "theme"> & InputEvents & CustomInputProps;

// For Styled components

export interface CommonStyledProps {
  theme: DefaultTheme;
  flex?: number | string;
  maxWidth?: number | string;
  minWidth?: number | string;
  maxHeight?: number | string;
  minHeight?: number | string;

  textColorName?: keyof ColorNames;
  placeHolderColorName?: keyof ColorNames;
}

export type TextInputContainerStyledProps = CommonStyledProps & {
  marginTop?: string | number;
  marginLeft?: string | number;
  marginRight?: string | number;
  marginBottom?: string | number;
}

export type TextInputStyledProps = CommonStyledProps & {
  paddingTop?: string | number;
  paddingLeft?: string | number;
  paddingRight?: string | number;
  paddingBottom?: string | number;

  placeHolderColor?: string;
  fontWeight: string | number;
  isLeftIconRendered?: boolean;
  isRightIconRendered?: boolean;
  fontSizeName?: keyof FontSizeNames;
}


