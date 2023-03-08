import styled from "styled-components";

export const Board = styled.div`
  background-color: ${(props) => props.theme.boardColor};
  padding: 2% 2%;
  padding-top: 3%;
  border-radius: 5px;
  min-height: 200px;
`;

export const Boards = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(1, 1fr);
`;

export const Card = styled.div`
  background-color: ${(props) => props.theme.cardColor};
  width: 100%;
  padding: 10px 10px;
  border-radius: 5px;
  margin-bottom: 10px;
`;

export const Warapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  height: 100vh;
`;
