import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavLinkStyled = styled(NavLink)`
  &.link {
    display: inline-block;
    text-decoration: none;
    padding: 12px;
    font-weight: 700;
    color: #2a363b;
  }

  &.link.active {
    color: teal;
    text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.55);
  }
  &.link:focus,
  .link:hover {
    color: #8b0000;
    text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.55);
  }
`;

export const DivStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-right: 12px;
`;
