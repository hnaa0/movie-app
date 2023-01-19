import styled from "@emotion/styled";
import { useSelector } from "react-redux/es/exports";
import { RootState, useAppDispatch } from "../Store";
import { changeCategory } from "../Store/categoryTypeSlice";
import { MouseEvent } from "react";

type categoryType = {
  id: number;
  label: string;
  url: string;
};

export default function PageHeader() {
  const dispatch = useAppDispatch();
  const category = useSelector((state: RootState) => state.category.type);
  const CATEGORY_LIST = [
    { id: 0, label: "Now Playing", url: "/now_playing" },
    { id: 1, label: "Up Coming", url: "/upcoming" },
  ];

  const handleCategory = (e: any) => {
    const categoryValue = e.target.textContent;
    dispatch(changeCategory(categoryValue));
  };

  return (
    <Header>
      <Title>Movie</Title>
      <Menu>
        {CATEGORY_LIST.map((data: categoryType) => {
          return (
            <li
              style={
                category == data.label
                  ? { fontWeight: "bold" }
                  : { fontWeight: "normal" }
              }
              key={data.id}
              onClick={handleCategory}
            >
              {data.label}
            </li>
          );
        })}
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

  & li:hover {
    cursor: pointer;
  }

  & li:active {
    font-weight: bold;
  }
`;
