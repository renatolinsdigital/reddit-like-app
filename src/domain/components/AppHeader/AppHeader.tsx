import { Image } from 'src/domain/components';
import { BoxStyled, TextInput, TextStyled, TitleStyled } from 'src/shared/components';

function AppHeader() {
  return (
    <BoxStyled
      borderBottom="1px solid"
      borderColorName='gray2'
    >
      <BoxStyled
        maxWidth={1600}
        paddingTop={20}
        paddingLeft={15}
        paddingRight={15}
        paddingBottom={20}
        justifyContent="flex-start"
      >
        <BoxStyled
          isStretched={false}
          borderRight="1px solid"
          borderColorName='gray2'
          paddingRight={15}
        >
          <Image
            width='50'
            alternativeText='App logo'
            sharedImageFileName="logo.svg"
          />
        </BoxStyled>
        <TextInput fontWeight="normal"></TextInput>
        <TitleStyled fontSizeName='jumbo'>Title text</TitleStyled>
        <TextStyled fontSizeName='jumbo'>Normal text</TextStyled>
      </BoxStyled>
    </BoxStyled>
  );
}

export default AppHeader;