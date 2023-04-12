import styled from "styled-components";
import { IAreaProps } from "../types/draggableTyps";
export const Wrapper = styled.div`
  display: flex;
  max-width: 900px;
  width: 100vw;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const BoardWrapper = styled.div`
  width: 300px;
  padding-top: 20px;
  background-color: ${(props) => props.theme.boardColor};
  border-radius: 10px;
  min-height: 300px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  text-align: center;
  font-weight: 600;
  margin-bottom: 10px;
  font-size: 18px;
`;

export const Boards = styled.div`
  display: grid;
  width: 100%;
  gap: 10px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  grid-template-columns: repeat(3, 1fr);
`;

// isDraggingOver => 변경될 카드선택 여부
// isDraggingFromThis => 카드가 박스권에서 떠날때
export const Area = styled.div<IAreaProps>`
  background-color: ${(props) =>
    props.isDraggingOver
      ? "#ecf0f1"
      : props.isDraggingFromThis
      ? "#7f8c8d"
      : "transparent"};
  flex-grow: 1;
  transition: background-color 0.3s ease-in-out;
  padding: 20px;
`;

export const Board = styled.div`
  padding: 20px 10px;
  padding-top: 30px;
  background-color: ${(props) => props.theme.boardColor};
  border-radius: 5px;
  min-height: 200px;
  width: 100%;
`;

export const Card = styled.div<{ isDragging: boolean }>`
  background-color: ${(props) =>
    props.isDragging ? "#2980b9" : props.theme.cardColor};
  width: 100%;
  padding: 10px 10px;
  border-radius: 5px;
  margin-bottom: 10px;
  box-shadow: ${(props) =>
    props.isDragging ? "0px 2px 25px rgba(0, 0, 0, 0.5)" : "none"};
`;
