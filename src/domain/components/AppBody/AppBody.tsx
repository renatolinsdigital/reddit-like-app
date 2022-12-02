import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
// import { isEmpty } from 'src/shared/helpers';
import { LoadingIcon } from 'src/shared/icons';
import { PostEntryInfo, User } from 'src/domain/models';
import { PostEntry } from 'src/domain/components';
import { setPostEntries, setLoggedUser, RootState } from 'src/store';
import { PageContainer, BoxStyled, Button, TextStyled } from 'src/shared/components';

function AppBody() {

  const userDispatch = useDispatch();
  const postsDispatch = useDispatch();
  const [fakeUser, _] = useState<User>({
    id: -1,
    name: 'Test user',
    username: 'test_user',
    imageFileName: 'user_photo.png'
  });

  const postEntries = useSelector((state: RootState) => state.postEntries.value)

  // const { isLoading, originalPostsEntries, hasError, totalResults } = usePostsEntries({ hookRefresher });

  // Line below represents how logged user data could be used anywhere in this application
  // const user = useSelector((state: RootState) => state.user.value)

  useEffect(() => {

    const fakePosts = [
      {
        "meta": {
          "author": "Danil Ishutin",
          "title": "Font Size Idea: px at Root, rem for Components, em for Text Elements",
          "url": "css-tricks.com"
        },
        "category": "ux_ui",
        "comments": 7,
        "created_at": 1459857600,
        "upvotes": 9
      },
      {
        "meta": {
          "author": "Christopher Alesund",
          "title": "Case study: Redesigning the Folyo landing page",
          "url": "medium.com"
        },
        "category": "case_study",
        "comments": 0,
        "created_at": 1460289600,
        "upvotes": 2
      },
    ];

    userDispatch(setLoggedUser(fakeUser));
    postsDispatch(setPostEntries(fakePosts));

  }, [userDispatch, postsDispatch, fakeUser]);

  const onPostsRefresh = () => {

  }

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
        {
          postEntries.map((postEntryInfo: PostEntryInfo, index) => {

            return (
              <PostEntry
                //   Considering post entries data is not providing user ImageStyled
                //   We will provide the fake user so meta data can show at least a fake image
                postEntryInfo={{ ...postEntryInfo, user: fakeUser }}
                key={`post-entry-for-${index}-${postEntryInfo.created_at}`}
              />
            )
          })
        }
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