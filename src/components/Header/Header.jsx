import { Link } from "react-router-dom";
import * as S from "./styles";
import Cart from "../Cart/Cart";
import BreadCrumps from "../Breadcrumps/BreadCrumps";

const Header = () => {
  return (
    <S.Nav>
      <div>
        <Link to="/">
          <p>TT </p>
        </Link>
        <BreadCrumps />
        <Cart />
      </div>
    </S.Nav>
  );
};

export default Header;
