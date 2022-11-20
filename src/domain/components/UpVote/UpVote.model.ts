interface UpVoteProps {
  postId: number;
  votesCount: number;
  onVoted(postId: number): void;
}

export default UpVoteProps;