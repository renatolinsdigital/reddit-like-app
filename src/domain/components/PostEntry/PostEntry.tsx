
import { UpVote } from 'src/domain/components';
import { BoxStyled, Link } from 'src/shared/components';

function PostEntry() {
  const post = {
    id: 0,
    upVotes: 11,
    postLink: './',
    title: 'First post title',
    externalReference: 'https://medium.com'
  }

  const { id, upVotes, title, externalReference } = post;

  const externalLinkLabel =
    externalReference.substring(externalReference.indexOf(":") + 3);

  const handleUpVote = (postId: number) => {
    console.log('up voted on post: ', postId);
  }

  return (
    <BoxStyled
      isStretched={false}
      justifyContent='flex-start'
    >
      <UpVote
        postId={id}
        votesCount={upVotes}
        onVoted={handleUpVote}
      />
      <BoxStyled paddingLeft={20} paddingRight={20}>
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
            fontSizeName='huge'
            fontWeightName='medium'
            hoverColorName='primaryDark'
          >
            {title}
          </Link>
        </BoxStyled>
      </BoxStyled>
    </BoxStyled>
  )

}

export default PostEntry;
