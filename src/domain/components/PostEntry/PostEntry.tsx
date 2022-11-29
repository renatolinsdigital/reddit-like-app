import { Meta, UpVote } from './sub-components';
import { Colors } from 'src/theme/models';
import { Badge, BoxStyled, Link } from 'src/shared/components';
import { postTypeToLabel, removeUrlProtocol, snakeCaseToCamelCase } from './utils';
import { User } from 'src/domain/models';

function PostEntry({ title }: any) {
  const post = {
    id: 0,
    upVotes: 11,
    postUrl: './',
    type: 'product_design',
    title: 'First post title',
    externalReference: 'https://medium.com'
  }

  const { id, upVotes, externalReference, postUrl, type } = post;

  const postType = postTypeToLabel(type);
  const badgeColorName = snakeCaseToCamelCase(type) as keyof Colors;
  const externalLinkLabel = removeUrlProtocol(externalReference);

  const user: User = {
    id: 1,
    name: 'Test user',
    username: 'testuser',
    imageFileName: 'user_photo.png',
  }

  const handleUpVote = (postId: number) => {
    console.log('up voted on post: ', postId);
  }

  return (
    <BoxStyled
      marginTop={30}
      marginBottom={30}
      isStretched={false}
      justifyContent='flex-start'
    >
      <UpVote
        postId={id}
        votesCount={upVotes}
        onVoted={handleUpVote}
        isVotedByCurrentUser={true}
      />
      <BoxStyled isVertical paddingLeft={20} paddingRight={20}>
        <BoxStyled isVertical alignItems='flex-start' justifyContent='flex-start'>
          <Link
            isInUpperCase
            paddingLeft={0}
            isOpeningInNewTab
            colorName='gray3'
            fontSizeName='small'
            fontWeightName='medium'
            justifyContent='flex-start'
            location={externalReference}
          >
            {externalLinkLabel}
          </Link>
          <Link
            marginTop={2}
            paddingLeft={0}
            location={postUrl}
            fontSizeName='huge'
            fontWeightName='medium'
            hoverColorName='primaryDark'
          >
            {title}
          </Link>
        </BoxStyled>
        <BoxStyled
          paddingTop={12}
          justifyContent='flex-start'
        >
          <Badge text={postType} backgroundColorName={badgeColorName} />
          <Meta user={user} />
        </BoxStyled>
      </BoxStyled>

    </BoxStyled>
  )

}

export default PostEntry;
