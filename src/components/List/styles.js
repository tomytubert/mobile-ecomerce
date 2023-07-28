import styled from "styled-components";

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 50px;
  list-style: none;
  padding: 50px;
  max-width: 1440px;
  margin: 0 auto;
`;
