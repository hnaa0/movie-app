import styled from "@emotion/styled";

export default function MovieDetail() {
  return (
    <Container>
      <ModalContainer>
        <CloseBtn>
          <svg
            width="20"
            height="20"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2 2L14 14" stroke="white" stroke-width="1.5" />
            <path d="M2 14L14 2" stroke="white" stroke-width="1.5" />
          </svg>
        </CloseBtn>
        <TitleGroup>
          <Title>라라랜드</Title>
          <OriginalTitle>La La Land</OriginalTitle>
        </TitleGroup>
        <Genre>드라마,로맨스,음악</Genre>
        <Overview>
          황홀한 사랑, 순수한 희망, 격렬한 열정... 이 곳에서 모든 감정이
          폭발한다! 꿈을 꾸는 사람들을 위한 별들의 도시 ‘라라랜드’. 재즈
          피아니스트 ‘세바스찬’과 배우 지망생 ‘미아’, 인생에서 가장 빛나는 순간
          만난 두 사람은 미완성인 서로의 무대를 만들어가기 시작한다.
        </Overview>
      </ModalContainer>
    </Container>
  );
}

const Container = styled.div``;

const ModalContainer = styled.section`
  color: #fff;
  z-index: 1000;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 650px;
  height: 400px;
  border-radius: 16px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  background-color: #252525;
  padding: 28px;
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
  margin: 32px 0;
  overflow-x: auto;
  line-height: 1.5;
`;
