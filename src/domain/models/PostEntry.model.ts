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
  createdAt: Date | number | string;
}