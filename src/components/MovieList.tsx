import styled from "@emotion/styled";
import Movie from "./Movie";

export default function MovieList() {
  return (
    <List>
      {Array.from({ length: 10 }).map((_, index) => {
        return <Movie key={index} />;
      })}
    </List>
  );
}

const List = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
  padding: 32px 48px;
`;
