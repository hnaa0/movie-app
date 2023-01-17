import styled from "@emotion/styled";
import { ChangeEvent, useState } from "react";
import MovieDetail from "./MovieDetail";

interface MovieProps {
  image: string;
  name: string;
  originalName: string;
  overview: string;
}

export default function Movie(props: MovieProps) {
  const [modal, setModal] = useState(false);

  const handleModal = () => {
    if (modal === false) {
      setModal(true);
      document.body.style.overflow = "hidden";
    } else {
      setModal(false);
      document.body.style.overflow = "unset";
    }
  };

  return (
    <Item onClick={handleModal}>
      <Img
        src={`https://image.tmdb.org/t/p/w500${props.image}`}
        alt={props.name}
      />
      {modal && (
        <MovieDetail
          modalClose={handleModal}
          name={props.name}
          originalName={props.originalName}
          overview={props.overview}
        />
      )}
    </Item>
  );
}

const Item = styled.li`
  width: 250px;
  height: 350px;
  border-radius: 16px;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 16px;

  &:hover {
    cursor: pointer;
    filter: brightness(80%);
    transition: filter 0.2s ease-in-out;
  }
`;
