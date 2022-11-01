import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavigationContainer = styled.nav`
  width: 100%;
  height: 80px;
  background-color: ${({ theme }) => theme.colors.gray4};
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: center;
`;

export const NavigationLogo = styled.figure``;

export const LinksContainer = styled.ul`
  display: inline-flex;
  list-style-type: none;
`;

export const NavigationLink = styled(NavLink)`
  margin: 0 0.5rem;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.smokegray};
  transition: 0.25s;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 0;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.green};
    transition: 0.3s;
  }
  &:hover {
    color: ${({ theme }) => theme.colors.green};
    &::after {
      width: 100%;
    }
  }
  &.active {
    color: ${({ theme }) => theme.colors.green};
    &::after {
      width: 100%;
    }
  }
`;
