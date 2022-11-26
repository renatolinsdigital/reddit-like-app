import { PostEntry } from 'src/domain/components';
import { PageContainer, BoxStyled } from 'src/shared/components';
import { Button } from 'src/shared/components';
import { LoadingIcon } from 'src/shared/icons';

function AppBody() {
  return (
    <PageContainer>
      <BoxStyled
        isVertical
        paddingBottom={40}
        alignItems='flex-start'
        justifyContent='flex-start'
      >
        <PostEntry />
        <PostEntry />
        <PostEntry />
        <PostEntry />
        <PostEntry />
        <PostEntry />
        <PostEntry />
        <PostEntry />
        <Button
          minWidth="100%"
          paddingTop={20}
          paddingBottom={20}
          fontWeightName='medium'
          colorName="primaryDefault"
          backgroundColorName='gray2'
          hoverColorName='primaryDark'
          hoverBackgroundColorName='gray2'
          hoverChildrenSvgColorName='primaryDark'
        >
          <LoadingIcon width={30} marginRight={4} colorName='primaryDefault' />
          Load more
        </Button>
      </BoxStyled>
    </PageContainer>
  );
}

export default AppBody;