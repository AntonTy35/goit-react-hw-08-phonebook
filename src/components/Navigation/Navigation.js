// import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import { NavLinkStyled } from 'components/AuthNav/AuthNav.styled';
// import css from './Navigation.module.css';
// NavLinkStyled

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLinkStyled to="/">Home</NavLinkStyled>
      {isLoggedIn && <NavLinkStyled to="/contacts">Contacts</NavLinkStyled>}
    </nav>
  );
};
