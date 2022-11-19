import { PostEntry } from 'src/domain/components';
import { PageContainer, BoxStyled } from 'src/shared/components';

function AppBody() {
  return (
    <PageContainer>
      <BoxStyled
        paddingTop={40}
        paddingBottom={40}
      >
        <PostEntry />
      </BoxStyled>
    </PageContainer>
  );
}

export default AppBody;