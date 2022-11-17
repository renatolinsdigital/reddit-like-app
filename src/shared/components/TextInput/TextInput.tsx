import { BoxStyled } from 'src/shared/components';
import { TextInputProps } from './TextInput.model';
import { KeyboardKeys, ReactInputEvent } from 'src/shared/models';
import { TextInputStyled, TextInputContainerStyled } from './TextInput.styled';

function TextInput(
  {
    id,
    name,
    value,
    flex = 1,
    maxWidth,
    minWidth,
    maxHeight,
    minHeight,

    onKeyUp,
    onChange,
    onKeyDown,
    onKeyPress,
    onENTERKeyPress,

    leftIcon,
    rightIcon,
    maxLength,
    isDisabled,

    marginTop = 0,
    marginLeft = 0,
    marginRight = 0,
    marginBottom = 0,

    paddingTop = 10,
    paddingLeft = 12,
    paddingRight = 12,
    paddingBottom = 10,

    isReadOnly,
    fontSizeName,
    textColorName,
    fontWeight = 'normal', // TODO: This can be lifted to a theme
    placeHolderColorName,
    placeHolder = 'Type here',
  }: TextInputProps) {

  const handleOnChange = (event: ReactInputEvent) => {
    if (onChange) onChange(event);
  }

  const handleKeyUp = (event: ReactInputEvent) => {
    if (onKeyUp) onKeyUp(event);
  }

  const handleKeyDown = (event: ReactInputEvent) => {
    if (onKeyDown) onKeyDown(event);
  }

  const handleKeyPress = (event: ReactInputEvent) => {
    if (onKeyPress) onKeyPress(event);
    const key = event.key || event.keyCode || event.which;
    if ((key === 'Enter' || key === KeyboardKeys.ENTER) && onENTERKeyPress) {
      event.stopPropagation();
      event.preventDefault();
      onENTERKeyPress();
    }
  }

  return (
    <TextInputContainerStyled
      flex='none'
      maxWidth={maxWidth}
      minWidth={minWidth}
      maxHeight={maxHeight}
      minHeight={minHeight}
      marginTop={marginTop}
      marginLeft={marginLeft}
      marginRight={marginRight}
      marginBottom={marginBottom}
    >
      <BoxStyled
        left={10}
        position='absolute'
        isStretched={false}
        top="calc(50% - 10px)"
      >
        {leftIcon}
      </BoxStyled>
      <TextInputStyled
        id={id}
        type="text"
        flex={flex}
        name={name}
        value={value}
        maxWidth={maxWidth}
        minWidth={minWidth}
        readOnly={isReadOnly}
        maxHeight={maxHeight}
        minHeight={minHeight}
        maxLength={maxLength}
        onKeyUp={handleKeyUp}
        disabled={isDisabled}
        fontWeight={fontWeight}
        paddingTop={paddingTop}
        onKeyDown={handleKeyDown}
        onChange={handleOnChange}
        paddingLeft={paddingLeft}
        placeholder={placeHolder}
        fontSizeName={fontSizeName}
        paddingRight={paddingRight}
        onKeyPress={handleKeyPress}
        textColorName={textColorName}
        paddingBottom={paddingBottom}
        placeHolderColorName={placeHolderColorName}
        isLeftIconRendered={leftIcon !== undefined}
        isRightIconRendered={rightIcon !== undefined}
      />
      <BoxStyled
        right={10}
        position='absolute'
        isStretched={false}
        top="calc(50% - 10px)"
      >
        {rightIcon}
      </BoxStyled>
    </TextInputContainerStyled>
  )
}

export default TextInput;
