import { Link } from "react-router-dom";
import * as S from "./styles";
import Cart from "../Cart/Cart";

const Header = () => {
  return (
    <S.Nav>
      <div>
        <Link to="/">
          <p>TT </p>
        </Link>
        <Cart />
      </div>
    </S.Nav>
  );
};

export default Header;
