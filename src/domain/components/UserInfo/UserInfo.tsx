
import { Image } from 'src/domain/components';
import { BoxStyled, TextStyled } from 'src/shared/components';

function UserInfo() {
  const notificationsCount = 5;

  return (
    <BoxStyled
      cursor='pointer'
      position='relative'
      isStretched={false}
      justifyContent='flex-end'
    >
      <TextStyled
        left={-10}
        paddingTop={4}
        paddingLeft={8}
        paddingRight={8}
        paddingBottom={4}

        colorName='white'
        position='absolute'
        hoverColorName='white'
        fontSizeName='smallest'
        fontWeightName='medium'
        backgroundColorName='primaryDefault'
        hoverBackgroundColorName='primaryDefault'
      >
        {notificationsCount}
      </TextStyled>
      <Image
        width='50'
        alternativeText='User'
        domainImageFileName="user_photo.png"
      />
    </BoxStyled>
  )
}

export default UserInfo;
