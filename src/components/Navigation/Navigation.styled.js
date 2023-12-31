import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavStyled = styled.nav`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-left: 12px;
`;

export const NavLinkStyled = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  font-weight: 700;
  font-size: 24px;
  padding: 12px 12px;

  transition: transform 350ms cubic-bezier(0.65, 0.05, 0.36, 1),
    color 350ms cubic-bezier(0.65, 0.05, 0.36, 1);

  &.active {
    color: teal;
  }

  &:hover,
  &:focus {
    color: teal;
    transform: scale(1.05);
  }
`;
