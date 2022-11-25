import { User } from "src/domain/models";

interface MetaProps {
  user: User;
  createdAt?: Date | string;
}

export default MetaProps;