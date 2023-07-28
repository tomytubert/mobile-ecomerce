import { Link, useLocation, useHref } from "react-router-dom";
import * as S from "./styles";
import Bag from "../Icons/Bag/Bag";

const Header = () => {
  const location = useLocation();
  const href = useHref();

  return (
    <S.Nav>
      <div>
        <Link to="/">
          <p>TT </p>
        </Link>
        <Bag />
      </div>
    </S.Nav>
  );
};

export default Header;
