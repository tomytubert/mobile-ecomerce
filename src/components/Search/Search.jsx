import * as S from "./styles";

const Search = ({ handleChange, value }) => {
  return (
    <S.Input
      type="text"
      name="filter"
      onChange={handleChange}
      value={value}
      placeholder="Busca por marca o modelo..."
    />
  );
};

export default Search;
