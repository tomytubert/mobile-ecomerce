import { Link, useHref, useParams } from "react-router-dom";
import * as S from "./styles";
import { useData } from "../../context/dataContext";

const BreadCrumps = () => {
  const href = useHref();
  const params = useParams();
  const { data } = useData();

  const product = data.find((product) => product.id === params.productId);

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
