import { User } from "src/domain/models";

interface MetaProps {
  user: User;
  isOwner?: boolean;
  comments?: number;
  createdAt?: Date | string;
}

export default MetaProps;