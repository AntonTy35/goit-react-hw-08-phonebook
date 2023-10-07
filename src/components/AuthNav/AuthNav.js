import { Button } from '@chakra-ui/react';
import { NavLinkStyled, DivStyled } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <DivStyled>
      <NavLinkStyled to="/register">
        <Button colorScheme="teal" variant="outline" type="button">
          Register
        </Button>
      </NavLinkStyled>
      <NavLinkStyled to="/login">
        <Button colorScheme="teal" variant="outline" type="button">
          Log In
        </Button>
      </NavLinkStyled>
    </DivStyled>
  );
};
