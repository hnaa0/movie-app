import styled from "@emotion/styled";

export default function MovieDetail(props: any) {
  const { modalClose, name, originalName, genre, overview } = props;

  interface GenreType {
    [id: number]: string;
  }

  const GENRES: GenreType = {
    10751: "가족",
    27: "공포",
    99: "다큐멘터리",
    18: "드라마",
    10749: "로맨스",
    28: "액션",
    12: "모험",
    9648: "미스터리",
    80: "범죄",
    37: "서부",
    53: "스릴러",
    16: "애니메이션",
    36: "역사",
    10402: "음악",
    10752: "전쟁",
    35: "코미디",
    14: "판타지",
    878: "SF",
    10770: "TV 영화",
  };

  return (
    <Container
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <ModalContainer>
        <CloseBtn onClick={modalClose}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2 2L14 14" stroke="white" strokeWidth="1.5" />
            <path d="M2 14L14 2" stroke="white" strokeWidth="1.5" />
          </svg>
        </CloseBtn>
        <TitleGroup>
          <Title>{name}</Title>
          <OriginalTitle>{originalName}</OriginalTitle>
        </TitleGroup>
        <Genre>
          {genre.map((id: number) => {
            if (id === genre[genre.length - 1]) {
              return GENRES[id];
            } else {
              return `${GENRES[id]}, `;
            }
          })}
        </Genre>
        <Overview>{overview}</Overview>
      </ModalContainer>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContainer = styled.section`
  z-index: 1000;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 650px;
  padding: 28px;
  border-radius: 16px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  color: #fff;
  background-color: #252525;
`;

const CloseBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  margin-left: auto;
  font-size: 28px;

  &:hover {
    filter: brightness(80%);
`;

const TitleGroup = styled.div`
  display: flex;
  align-items: baseline;
`;

const Title = styled.h1`
  font-size: 32px;
  margin: 28px 8px 12px 0;
`;

const OriginalTitle = styled.h2`
  font-style: italic;
  font-size: 16px;
  font-weight: normal;
  color: #a5a5a5;
`;

const Genre = styled.span``;

const Overview = styled.p`
  height: 180px;
  margin: 32px 0;
  padding-right: 12px;
  overflow: scroll;
  line-height: 1.5;
`;
