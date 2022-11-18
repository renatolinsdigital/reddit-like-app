import { Image } from 'src/domain/components';
import { BoxStyled, TextInput } from 'src/shared/components';

function AppHeader() {
  return (
    <BoxStyled
      borderColorName='gray2'
      borderBottom="1px solid"
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
          paddingRight={20}
          isStretched={false}
          borderRight="1px solid"
          borderColorName='gray2'
        >
          <Image
            width='50'
            alternativeText='App logo'
            sharedImageFileName="logo.svg"
          />
        </BoxStyled>
        <BoxStyled
          paddingLeft={20}
        >
          <TextInput
            borderRadius={4}
            backgroundColorName='gray2'
            borderColorName='primaryDefault'
          ></TextInput>
        </BoxStyled>

      </BoxStyled>
    </BoxStyled>
  );
}

export default AppHeader;