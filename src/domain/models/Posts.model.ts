import { User } from 'src/domain/models';

// In my opinion, meta information could be on PostEntryInfo
// as post entry data (what we are fetching) is already a set of meta data
// In this case, the only field to be an object would be 'user' (with User model)

// The field comments would be an array with comments ids. This would allow
// us to fetch(when user wants to see / add) comments as a simple id + description object)

//TODO: Connect this application to an API that better describes the relation between meta, user and comments

interface Meta {
  url: string;
  title: string;
  author: string;
}

export interface PostEntryInfo {
  user?: User; // This field is added by us so a temporary image is displayed within posts entries loop
  meta: Meta;
  upvotes: number;
  category: string;
  comments: number;
  isOwner?: boolean;
  created_at: Date | number | string;
}