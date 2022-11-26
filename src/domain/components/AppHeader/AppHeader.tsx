import { SearchIcon, MenuIcon } from 'src/shared/icons';
import { BoxStyled, TextInput, Button } from 'src/shared/components';
import { Image, UserInfo, AddPostButton } from 'src/domain/components';

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
            alternativeText='Company logo'
            sharedImageFileName="company_logo.svg"
          />
        </BoxStyled>
        <BoxStyled
          paddingLeft={20}
          isStretched={false}
          justifyContent='flex-start'
        >
          <Button
            minWidth={52}
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
          <AddPostButton />
        </BoxStyled>

        <UserInfo />

      </BoxStyled>
    </BoxStyled >
  );
}

export default AppHeader;