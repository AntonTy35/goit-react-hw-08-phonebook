import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { WrapperStyled, UserNameStyled } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <WrapperStyled>
      <UserNameStyled>Welcome, {user.name}</UserNameStyled>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </WrapperStyled>
  );
};
