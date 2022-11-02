import { useState, useEffect } from "react";
import {
  NavigationContainer,
  NavigationLink,
  LinksContainer,
  NavigationLogo,
  LogoWrapper,
  HamburgerIcon,
} from "../../styles/Navigation.style";

const Navigation = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [screenSize, setScreenSize] = useState(null);

  const handleMenuActive = () => {
    setMenuActive((curr) => !curr);
  };

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize < 768) {
      setMenuActive(false);
    } else {
      setMenuActive(true);
    }
  }, [screenSize]);

  return (
    <NavigationContainer menuActive={menuActive}>
      <LogoWrapper to="/">
        <NavigationLogo />
        <span>Crypto Buddy</span>
      </LogoWrapper>
      <HamburgerIcon
        onClick={handleMenuActive}
        className={menuActive ? "active" : null}
      >
        <span></span>
        <span></span>
        <span></span>
      </HamburgerIcon>
      <LinksContainer className={menuActive ? "active" : null}>
        <li>
          <NavigationLink to="/" end>
            Home
          </NavigationLink>
        </li>
        <li>
          <NavigationLink to="/news">News</NavigationLink>
        </li>
        <li>
          <NavigationLink to="/cryptocurrencies">
            Cryptocurrencies
          </NavigationLink>
        </li>
        <li>
          <NavigationLink to="/favorites">Favorites</NavigationLink>
        </li>
      </LinksContainer>
    </NavigationContainer>
  );
};

export default Navigation;
