import {
  NavigationContainer,
  NavigationLink,
  LinksContainer,
} from "../../styles/Navigation.style";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";

const Navigation = () => {
  return (
    <NavigationContainer>
      <Logo />
      <LinksContainer>
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
