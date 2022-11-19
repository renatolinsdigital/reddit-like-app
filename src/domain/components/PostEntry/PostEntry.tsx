
import { UpVote } from 'src/domain/components';
import { BoxStyled } from 'src/shared/components';

function PostEntry() {
  const handleUpVote = (postId: number) => {
    console.log('post id', postId);
  }

  return (
    <BoxStyled><UpVote votesCount={11} /></BoxStyled>
  )
}

export default PostEntry;
