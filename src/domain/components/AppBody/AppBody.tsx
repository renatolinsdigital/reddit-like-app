import { PostEntry } from 'src/domain/components';
import { PageContainer, BoxStyled } from 'src/shared/components';

function AppBody() {
  return (
    <PageContainer>
      <BoxStyled
        isVertical
        paddingTop={40}
        paddingBottom={40}
        alignItems='flex-start'
        justifyContent='flex-start'
      >
        <PostEntry />
      </BoxStyled>
    </PageContainer>
  );
}

export default AppBody;