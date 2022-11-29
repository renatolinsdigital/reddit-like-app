interface Meta {
  url: string;
  title: string;
  author: string;
}

export interface PostEntryInfo {
  meta: Meta;
  upvotes: number;
  category: string;
  comments: number;
  isOwner?: boolean;
  created_at: Date | number | string;
}

export interface PostsEntriesResponse {
  links: PostEntryInfo[];
};