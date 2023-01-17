import styled from "@emotion/styled";

export default function MovieDetail(props: any) {
  const { modalClose, name, originalName, overview } = props;

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
        <Genre>드라마,로맨스,음악</Genre>
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
  font-size: 20px;
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
