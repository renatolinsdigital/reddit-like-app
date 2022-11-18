import { Image, UserInfo } from 'src/domain/components';
import { SearchIcon, MenuIcon, PlusIcon } from 'src/shared/icons';
import { BoxStyled, TextInput, Button, TextStyled } from 'src/shared/components';

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
          cursor='pointer'
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
            borderWidth='1px'
            borderStyle='solid'
            borderColorName='gray2'
            backgroundColorName='white'
            hoverBackgroundColorName='gray2'

          >
            <MenuIcon width={20} height={19} />
          </Button>
          <TextInput
            maxWidth={380}
            borderRadius={4}
            leftIcon={inputIcon}
            lineHeightName='tall'
            backgroundColorName='gray2'
            borderColorName='primaryDefault'
          ></TextInput>
        </BoxStyled>
        <BoxStyled justifyContent='flex-end' paddingRight={20}>
          <Button
            paddingTop={0}
            paddingLeft={0}
            paddingRight={10}
            paddingBottom={0}
            disabledChildBorderColorName='gray2'
            hoverChildBorderColorName='primaryDefault'
          >
            <BoxStyled
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
            <TextStyled fontWeightName='medium'>Add Post</TextStyled>
          </Button>
        </BoxStyled>

        <UserInfo />

      </BoxStyled>
    </BoxStyled >
  );
}

export default AppHeader;