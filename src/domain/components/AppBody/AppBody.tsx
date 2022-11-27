import { useEffect } from 'react';
import { User } from 'src/domain/models';
import { useDispatch, useSelector } from 'react-redux';
import { setLoggedUser } from 'src/store';
import { Button } from 'src/shared/components';
import { LoadingIcon } from 'src/shared/icons';
import { PostEntry } from 'src/domain/components';
import { PageContainer, BoxStyled } from 'src/shared/components';

function AppBody() {
  const user = useSelector((state: any) => state.user);
  const userDispatch = useDispatch();

  useEffect(() => {
    const loggedInUser: User = {
      id: 1,
      name: 'Test User',
      username: 'testuser',
      imageFileName: 'user_photo.png'
    }

    userDispatch(setLoggedUser(loggedInUser));
  }, [userDispatch]);

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