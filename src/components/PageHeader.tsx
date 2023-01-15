import styled from "@emotion/styled";

export default function PageHeader() {
  return (
    <Header>
      <Title>Movie</Title>
      <Menu>
        <li value="nowPlaying" style={{ fontWeight: "bold" }}>
          Now Playing
        </li>
        <li value="upComing">Up Coming</li>
      </Menu>
    </Header>
  );
}

const Header = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 32px 0;

  border-bottom: 1px solid #3e3e3e;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 36px;
  color: #fff;
`;

const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 300px;
  margin-top: 16px;
  font-size: 20px;
  color: #a5a5a5;

  &:hover {
    cursor: pointer;
  }
`;
