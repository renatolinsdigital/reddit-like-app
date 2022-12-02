import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { isEmpty } from 'src/shared/helpers';
import { LoadingIcon } from 'src/shared/icons';
import { PostEntryInfo } from 'src/domain/models';
import { PostEntry } from 'src/domain/components';
import { AppDispatch, setLoggedUser } from 'src/store';
import { PageContainer, BoxStyled, Button, TextStyled } from 'src/shared/components';

function AppBody() {

  // const { isLoading, originalPostsEntries, hasError, totalResults } = usePostsEntries({ hookRefresher });

  // const userDispatch: AppDispatch = useDispatch();
  // Line below represents how logged user data could be used anywhere in this application
  // const user = useSelector((state: RootState) => state.user.value)

  const onPostsRefresh = () => {

  }

  // useEffect(() => {
  //   if (!isEmpty(currentUser)) userDispatch(setLoggedUser(currentUser));
  // }, [currentUser, userDispatch]);

  return (
    <PageContainer>
      <TextStyled
        isFlexible
        minWidth="100%"
        fontSizeName='smallest'
        fontWeightName='medium'
        justifyContent='flex-end'
      >
        {/* Displaying {totalResults} posts */}
      </TextStyled>
      <BoxStyled
        isVertical
        paddingBottom={40}
        alignItems='flex-start'
        justifyContent='flex-start'
      >
        {/* {
          originalPostsEntries.map((postEntry: PostEntryInfo, index) => {

            return (
              <PostEntry
                postEntry={postEntry}
                key={`post-entry-for-${index}-${postEntry.created_at}`}
              />
            )
          })
        } */}
        <Button
          minWidth="100%"
          paddingTop={20}
          paddingBottom={20}
          fontWeightName='medium'
          onClick={onPostsRefresh}
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
            // isSpinning={isLoading}
            colorName='primaryDefault'
          />
          {/* {isLoading && !hasError && <TextStyled>Loading...</TextStyled>}
          {hasError && <TextStyled>Posts entries could not be fetched</TextStyled>}
          {!isLoading && !hasError && <TextStyled>Refresh (Reload original data)</TextStyled>} */}
        </Button>
      </BoxStyled>
    </PageContainer>
  );
}

export default AppBody;