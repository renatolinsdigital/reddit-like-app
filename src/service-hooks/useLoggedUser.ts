import { User } from 'src/domain/models';
import { useEffect, useState } from 'react';

function useLoggedUser() {
  const [currentUser, setCurrentUser] = useState<User>({} as User);

  useEffect(() => {
    const fakeUser = {
      id: 1,
      name: 'Test User',
      username: 'testuser',
      imageFileName: 'user_photo.png'
    }
    setCurrentUser(fakeUser);
  }, []);
  return { currentUser };

}

export default useLoggedUser;
