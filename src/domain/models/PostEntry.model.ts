interface Meta {
  url: string;
  title: string;
  author: string;
}

export interface PostEntry {
  meta: Meta;
  upvotes: number;
  category: string;
  comments: number;
  isOwner?: boolean;
  created_at: Date | number | string;
}