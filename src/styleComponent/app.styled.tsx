import styled from "styled-components";

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
  padding: 20px 10px;
  padding-top: 10px;
  background-color: ${(props) => props.theme.boardColor};
  border-radius: 10px;
  min-height: 300px;
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

export const Board = styled.div`
  padding: 20px 10px;
  padding-top: 30px;
  background-color: ${(props) => props.theme.boardColor};
  border-radius: 5px;
  min-height: 200px;
  width: 100%;
`;

export const Card = styled.div`
  background-color: ${(props) => props.theme.cardColor};
  width: 100%;
  padding: 10px 10px;
  border-radius: 5px;
  margin-bottom: 10px;
`;
