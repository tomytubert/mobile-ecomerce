import { Link, useLocation,useHref } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const href = useHref();

  console.log("location :>> ", location);
  console.log('useHref :>> ', href);

  return (
    <header>
      <nav>
        <Link to="/">
          <p>T.T Market</p>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
