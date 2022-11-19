import { PlusIcon } from "src/shared/icons";
import { BoxStyled, Button, TextStyled } from "src/shared/components";

function AddPostButton() {
  return (
    <Button
      minWidth={155}
      paddingTop={0}
      paddingLeft={0}
      paddingRight={10}
      paddingBottom={0}
      disabledChildBorderColorName='gray2'
      hoverChildBorderColorName='primaryDefault'
    >
      <BoxStyled
        minWidth={50}
        minHeight={44}
        marginRight={5}
        paddingTop={10}
        paddingLeft={15}
        paddingRight={14}
        paddingBottom={10}
        borderRight="1px solid"
        borderColorName='primaryDark'
      >
        <PlusIcon width={15} height={15} colorName='white' />
      </BoxStyled>
      <TextStyled
        colorName='white'
        hoverColorName='white'
        fontWeightName='medium'
      >
        Add Post
      </TextStyled>
    </Button>
  )
}

export default AddPostButton;