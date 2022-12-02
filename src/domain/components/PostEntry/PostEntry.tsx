import { Colors } from 'src/theme/models';
import { useEffect, useState } from 'react';
import { postCategoryToLabel } from './utils';
import PostEntryProps from './PostEntry.model';
import { Meta, UpVote } from './sub-components';
import { Badge, BoxStyled, Link } from 'src/shared/components';
import { User } from 'src/domain/models';

function PostEntry({ postEntryInfo }: PostEntryProps) {
  const [isVotedByCurrentUser, setIsVotedByCurrentUser] = useState(false);
  const [currentUpvotes, setCurrentUpvotes] = useState(0);
  const { meta, upvotes, created_at, category, comments, isOwner, user } = postEntryInfo;

  const postCategory = postCategoryToLabel(category);

  const handleUpVote = (postId: number) => {
    console.log(`time to send upvote for post ${postId}`);
    setCurrentUpvotes(upvotes => upvotes + 1);
    setIsVotedByCurrentUser(true);
  }

  useEffect(() => {
    // hydrates upvotes count with initial/original data
    setCurrentUpvotes(upvotes)
  }, [upvotes])

  return (
    <BoxStyled
      marginTop={30}
      marginBottom={30}
      isStretched={false}
      justifyContent='flex-start'
    >
      <UpVote
        postId={-1}
        onVoted={handleUpVote}
        votesCount={currentUpvotes}
        isVotedByCurrentUser={isVotedByCurrentUser}
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
            location={`https://${meta.url}`}
          >
            {meta.url}
          </Link>
          <Link
            marginTop={2}
            paddingLeft={0}
            location='.'
            fontSizeName='huge'
            fontWeightName='medium'
            hoverColorName='primaryDark'
          >
            {meta.title}
          </Link>
        </BoxStyled>
        <BoxStyled
          paddingTop={12}
          justifyContent='flex-start'
        >
          <Badge text={postCategory} backgroundColorName={category as keyof Colors} />
          <Meta user={user || {} as User} comments={comments} isOwner={isOwner} />
        </BoxStyled>
      </BoxStyled>

    </BoxStyled>
  )

}

export default PostEntry;
