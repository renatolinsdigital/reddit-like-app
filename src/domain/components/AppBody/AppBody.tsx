import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch, setLoggedUser } from 'src/store';
import { isEmpty } from 'src/shared/helpers';
import { LoadingIcon } from 'src/shared/icons';
import { PostEntry } from 'src/domain/components';
import { PageContainer, BoxStyled, Button } from 'src/shared/components';
import { useLoggedUser, usePostsEntries } from 'src/service-hooks';

function AppBody() {
  const { isLoading, postsEntries, hasError, totalResults } = usePostsEntries();
  const { currentUser } = useLoggedUser();
  const userDispatch: AppDispatch = useDispatch();

  // Line below represents how logged user data could be used anywhere in this application
  // const user = useSelector((state: RootState) => state.user.value)

  useEffect(() => {
    if (!isEmpty(currentUser)) userDispatch(setLoggedUser(currentUser));
  }, [currentUser, userDispatch]);

  return (
    <PageContainer>
      <BoxStyled
        isVertical
        paddingBottom={40}
        alignItems='flex-start'
        justifyContent='flex-start'
      >
        {
          postsEntries.map((postEntry: any, index) => {
            const { meta, created_at } = postEntry;
            return (
              <PostEntry
                key={`post-entry-for-${index}-${created_at}`}
                title={meta.title}
              />
            )
          })
        }
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
          <LoadingIcon
            width={25}
            height={25}
            marginRight={4}
            isSpinning={isLoading}
            colorName='primaryDefault'
          />
          Refresh (Reload original data)
        </Button>
      </BoxStyled>
    </PageContainer>
  );
}

export default AppBody;