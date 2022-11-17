import { Image } from 'src/domain/components';
import { BoxStyled } from 'src/shared/components';

function AppHeader() {
  return (
    <BoxStyled
      paddingTop={20}
      paddingLeft={15}
      paddingRight={15}
      paddingBottom={20}
      backgroundColorName='white'
      justifyContent='space-between'
    >
      <Image
        width="50"
        alternativeText='App logo'
        sharedImageFileName="logo.png"
      />
    </BoxStyled>
  );
}

export default AppHeader;