import { Link, useHref, useParams } from "react-router-dom";
import * as S from "./styles";
import { useContext } from "preact/hooks";
import { ExpiringDataContext } from "../../context/dataContext";

const BreadCrumps = () => {
  const href = useHref();
  const params = useParams();
  const products = useContext(ExpiringDataContext);

  const product = products.data.find(
    (product) => product.id === params.productId
  );

  if (product)
    return (
      <S.BreadCrumpsContainer>
        <Link to="/"> Inicio</Link>
        <span> - </span>
        <Link to={href}>{product.model}</Link>
      </S.BreadCrumpsContainer>
    );
};

export default BreadCrumps;
