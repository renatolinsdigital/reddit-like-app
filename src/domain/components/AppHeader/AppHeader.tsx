import { Image } from 'src/domain/components';
import { SearchIcon, MenuIcon } from 'src/shared/icons';
import { BoxStyled, TextInput, Button } from 'src/shared/components';

function AppHeader() {
  const inputIcon = <SearchIcon colorName='gray3' />;

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
        paddingBottom={25}
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
          justifyContent='flex-start'
        >
          <Button
            marginRight={15}
            paddingLeft={15}
            paddingRight={15}
            borderWidth='2px'
            borderStyle='solid'
            borderColorName='gray2'
            backgroundColorName='white'
            hoverBackgroundColorName='gray2'

          >
            <MenuIcon width={20} height={21} />
          </Button>
          <TextInput
            maxWidth={380}
            borderRadius={4}
            leftIcon={inputIcon}
            lineHeightName='taller'
            backgroundColorName='gray2'
            borderColorName='primaryDefault'
          ></TextInput>
        </BoxStyled>

      </BoxStyled>
    </BoxStyled>
  );
}

export default AppHeader;