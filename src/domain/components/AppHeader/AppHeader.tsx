import { Image } from 'src/domain/components';
import { BoxStyled } from 'src/shared/components';

function AppHeader() {
  return (
    <BoxStyled
      borderBottom="1px solid"
      borderColorName='gray2'
    >
      <BoxStyled
        maxWidth={1600}
        paddingTop={15}
        paddingLeft={15}
        paddingRight={15}
        paddingBottom={15}
        justifyContent="flex-start"
      >
        <BoxStyled
          isStretched={false}
          borderRight="1px solid"
          borderColorName='gray2'
          paddingRight={10}
        >
          <Image
            width='50'
            alternativeText='App logo'
            sharedImageFileName="logo.png"
          />
        </BoxStyled>
      </BoxStyled>
    </BoxStyled>
  );
}

export default AppHeader;