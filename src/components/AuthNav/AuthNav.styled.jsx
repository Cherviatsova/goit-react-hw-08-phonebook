import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Flexbox = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;
  /* padding-right: 100px; */
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: underline;
  font-size: 20px;
  text-transform: uppercase;
  color: #35397c;

  &.active {
    font-weight: 700;
    color: #2f8897;
  }
`;
