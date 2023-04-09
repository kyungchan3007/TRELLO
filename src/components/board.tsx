import { Droppable } from "react-beautiful-dnd";
import DraggablleCard from "./draggablleCard";
import * as S from "../styleComponent/app.styled";
import { IBoard } from "../types/draggableTyps";

export default function BoardCard(props: IBoard) {
  //부모에서 객체의 프로퍼티를 물려받는다
  //물려받은 프로퍼티는 카드의 Id값이다. DraggableCard key갑과 Id 값은 동일하기만 하면된다.
  //그래야지만 현재 유저가 어떤 board에 있는지 알수있다.
  return (
    <S.BoardWrapper>
      <S.Title>{props.boardId}</S.Title>
      <Droppable droppableId={props.boardId}>
        {/* magic은 Droppable 에 주는 provided다 뭐.. 변수이름은 개발자 마음대로 해도상관없다*/}
        {(magic, info) => (
          <S.Area
            isDraggingOver={info.isDraggingOver}
            isDraggingFromThis={Boolean(info.draggingFromThisWith)}
            ref={magic.innerRef}
            {...magic.droppableProps}
          >
            {/*Droppable 영역에서 드래그 하는박스(영역)*/}
            {props.toDos.map((el, i) => (
              <DraggablleCard key={el} toDos={el} index={i} />
            ))}
            {magic.placeholder}
          </S.Area>
        )}
      </Droppable>
    </S.BoardWrapper>
  );
}
