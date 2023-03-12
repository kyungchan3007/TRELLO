import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import * as S from "../styleComponent/app.styled";
import { dragaable } from "../types/draggableTyps";
export function DraggablleCard(props: dragaable) {
  //해당 component의 모든 자식은 렌더링된다.
  return (
    <>
      <Draggable
        key={props.toDos}
        draggableId={props.toDos}
        index={props.index}
      >
        {/*유저가 li를 어떠한 위치에서든지 드레그해서 옮기도록 하고 싶다면 
           draggableProps,dragHandleProps , 
           key 값과 draggabledId 값이 동일해야한다*/}
        {(magic) => (
          <S.Card
            ref={magic.innerRef}
            {...magic.dragHandleProps}
            {...magic.draggableProps}
          >
            {props.toDos}
          </S.Card>
        )}
      </Draggable>
    </>
  );
}

export default React.memo(DraggablleCard);
// memo를 사용하면서 값이 값이 변경되지 않는 item들도 재랜더링이 일어나는데 불필요한
// 렌더링이기 때문에 변경된 값들만 렌더링될수 memo를 사용하여 최적화를 할수 있다.
