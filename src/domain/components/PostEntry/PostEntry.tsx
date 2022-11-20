
import { UpVote } from 'src/domain/components';
import { BoxStyled, Link } from 'src/shared/components';

function PostEntry() {

  const handleUpVote = (postId: number) => {
    console.log('up voted on post: ', postId);
  }

  return (
    <BoxStyled>
      <UpVote
        postId={1}
        votesCount={11}
        onVoted={handleUpVote}
      />
      <BoxStyled>
        <Link
          isInUpperCase
          colorName='gray3'
          fontSizeName='small'
          fontWeightName='medium'
        >
          medium.com
        </Link>
      </BoxStyled>
    </BoxStyled>
  )

}

export default PostEntry;
