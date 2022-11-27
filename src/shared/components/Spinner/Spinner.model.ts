import { IconProps } from "src/shared/models";

type SpinnerProps =
  Omit<IconProps, 'rotationDegrees'> & {
    rotationSpeed?: number;
  }

export default SpinnerProps;
