import MetaProps from './Meta.model';
import { Image } from 'src/domain/components';
import { MessageIcon } from 'src/shared/icons';
import { BoxStyled, Link, TextStyled } from 'src/shared/components';

function Meta({ user }: MetaProps) {
  const { name: creatorName, imageFileName } = user;

  return (
    <BoxStyled
      marginLeft={15}
      paddingLeft={10}
      borderLeft='2px solid'
      borderColorName='gray2'
    >
      <Image
        width='25'
        alternativeText={creatorName}
        domainImageFileName={imageFileName}
      />
      <Link
        hasUnderline
        marginLeft={2}
        fontWeightName='medium'
        colorName='primaryDefault'
        hoverColorName='primaryDark'
      >
        {creatorName}
      </Link>
      <TextStyled
        paddingLeft={5}
        paddingRight={8}
        colorName='gray3'
        fontSizeName='small'
        hoverColorName='gray3'
      >
        2 hours ago
      </TextStyled>
      <BoxStyled
        top={1}
        minWidth={4}
        minHeight={4}
        borderRadius="50%"
        position='relative'
        isStretched={false}
        backgroundColorName='gray3'
      />
      <BoxStyled paddingLeft={10}>
        <MessageIcon
          marginTop={2}
          colorName='primaryDefault'
        />
        <Link
          hasUnderline
          marginLeft={2}
          colorName='primaryDefault'
          hoverColorName='primaryDark'
        >
          4 Comments
        </Link>
      </BoxStyled>
      <Link
        hasUnderline
        marginLeft={2}
        colorName='primaryDefault'
        hoverColorName='primaryDark'
      >
        Edit
      </Link>
    </BoxStyled>
  )
}

export default Meta;
