import UpVoteProps from './UpVote.model';
import { ChevronIcon } from 'src/shared/icons';
import { BoxStyled, Button, TextStyled } from 'src/shared/components';

function UpVote({ postId, votesCount, onVoted, isVotedByCurrentUser }: UpVoteProps) {

  const handleUpVote = () => {
    onVoted(postId);
  }

  return (
    <BoxStyled
      isVertical
      minWidth={52}
      borderRadius={4}
      overflow='hidden'
      border='1px solid'
      isStretched={false}
      borderColorName='gray3'
      backgroundColorName='white'
    >
      <Button
        minWidth="100%"
        paddingTop={10}
        paddingLeft={8}
        paddingRight={8}
        borderRadius={0}
        paddingBottom={10}
        onClick={handleUpVote}
        backgroundColorName='white'
        hoverBackgroundColorName='gray1'
        isEnabled={!isVotedByCurrentUser}
        disabledBackgroundColorName='gray2'
      >
        <ChevronIcon
          width={15}
          height={15}
          rotationDegrees={-90}
          colorName={isVotedByCurrentUser ? 'gray3' : 'primaryDefault'}
        />
      </Button>
      <TextStyled
        minWidth="100%"
        paddingTop={10}
        paddingLeft={8}
        paddingRight={8}
        paddingBottom={10}
        textAlign='center'
        fontWeightName='bold'
        borderTop='1px solid'
        borderColorName='gray3'
        fontSizeName='extraLarge'
      >
        {votesCount}
      </TextStyled>
    </BoxStyled>
  )
}

export default UpVote;
