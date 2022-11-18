import { ButtonProps } from "./Button.model";
import ButtonStyled from "./ButtonStyled";

function Button(
  {
    id,
    top,
    left,
    right,
    bottom,
    children,
    minWidth,
    minHeight,

    marginTop,
    marginLeft,
    marginRight,
    marginBottom,

    paddingTop,
    paddingLeft,
    paddingRight,
    paddingBottom,

    borderWidth,
    borderStyle,
    borderRadius,
    borderColorName,

    position,
    colorName,
    isEnabled = true,
    backgroundColorName,
    hoverBackgroundColorName,
    hoverChildBorderColorName,
    disabledChildBorderColorName,

    onClick,
    onMouseDown
  }: ButtonProps) {

  const handleClick = () => {
    if (onClick) onClick()
  }

  const handleMouseDown = () => {
    if (onMouseDown) onMouseDown()
  }

  return (
    <ButtonStyled
      id={id}
      top={top}
      left={left}
      right={right}
      bottom={bottom}
      position={position}
      minWidth={minWidth}
      minHeight={minHeight}
      marginTop={marginTop}
      isEnabled={isEnabled}
      disabled={!isEnabled}
      marginLeft={marginLeft}
      borderWidth={borderWidth}
      marginRight={marginRight}
      marginBottom={marginBottom}

      paddingTop={paddingTop}
      paddingLeft={paddingLeft}
      paddingRight={paddingRight}
      paddingBottom={paddingBottom}

      colorName={colorName}
      borderStyle={borderStyle}
      borderRadius={borderRadius}
      borderColorName={borderColorName}
      backgroundColorName={backgroundColorName}
      hoverBackgroundColorName={hoverBackgroundColorName}
      hoverChildBorderColorName={hoverChildBorderColorName}
      disabledChildBorderColorName={disabledChildBorderColorName}

      onClick={handleClick}
      onMouseDown={handleMouseDown}
    >
      {children}
    </ButtonStyled>
  );
}

export default Button;
