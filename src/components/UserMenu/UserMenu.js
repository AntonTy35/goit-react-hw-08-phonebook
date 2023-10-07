import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { WrapperStyled } from './UserMenu.styled';
import { Button } from '@chakra-ui/react';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <WrapperStyled>
      <p>
        <b>Welcome</b>,
      </p>
      <div>
        <p>{user.name}</p>
        <p>{user.email}</p>
      </div>

      <Button
        colorScheme="teal"
        variant="outline"
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </WrapperStyled>
  );
};
