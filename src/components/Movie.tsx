import styled from "@emotion/styled";

const imgLink =
  "https://i.pinimg.com/550x/d8/73/c5/d873c5098705172190f2fdbc7e4abe72.jpg";

export default function Movie() {
  return (
    <Item>
      <Img src={imgLink} alt="포스터" />
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
