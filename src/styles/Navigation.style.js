import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/icons/logo.svg";

export const NavigationContainer = styled.nav`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.gray4};
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 1rem;
  @media ${({ theme }) => theme.mediaQuery.tablet} {
    padding: 1rem 5vw;
  }
`;

export const LinksContainer = styled.ul`
  display: block;
  list-style-type: none;
  flex-basis: 100%;
  max-height: 1px;
  padding: 0;
  margin: 0;
  overflow: hidden;
  transition: 0.4s linear;
  li {
    margin-bottom: 1.5rem;
    text-align: center;
  }
  &.active {
    max-height: 100vh;
    padding: 2rem 0 0 0;
  }
  @media ${({ theme }) => theme.mediaQuery.tablet} {
    display: inline-flex;
    flex-basis: auto;
    padding: 0;
    margin: 1rem 0;
    overflow: visible;
    li {
      margin-bottom: 0;
      text-align: unset;
    }
    &.active {
      padding: 0 0 0 2rem;
    }
  }
`;

export const NavigationLink = styled(NavLink)`
  margin: 0 0.5rem;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.smokegray};
  transition: 0.25s;
  position: relative;
  width: 100%;
  @media ${({ theme }) => theme.mediaQuery.tablet} {
    width: auto;
    padding: 0;
  }
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

export const NavigationLogo = styled(Logo)`
  height: 30px;
  @media ${({ theme }) => theme.mediaQuery.tablet} {
    height: 50px;
  }
`;

export const LogoWrapper = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  span {
    display: none;
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
    @media ${({ theme }) => theme.mediaQuery.tablet} {
      margin-left: 0.5rem;
      display: block;
      font-family: "Rubik", sans-serif;
      font-size: 1.3rem;
    }
  }
`;

export const HamburgerIcon = styled.button`
  background-color: transparent;
  border: 0;
  @media ${({ theme }) => theme.mediaQuery.tablet} {
    display: none;
  }
  span {
    width: 30px;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.green};
    display: block;
    margin: 6px auto;
    transition: 0.3s ease-in-out;
  }
  &.active span:nth-child(2) {
    opacity: 0;
  }
  &.active span:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }
  &.active span:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
  }
`;
