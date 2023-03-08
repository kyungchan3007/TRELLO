import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import * as S from "./styleComponent/app.styled";

export default function App() {
  const toDos = ["a", "b", "e", "f"];
  const onDragEnd = () => {};
  return (
    <>
      {/* 드래그엔 드롭을 가능하게 하고 싶다면 DragDropContext를 사용해야한다* 가능할게 할수 있는 박스를 만든다 */}
      <DragDropContext onDragEnd={onDragEnd}>
        <S.Warapper>
          <S.Boards>
            {/*여기서 영역을 만들었고 무언가를 드래그엔 드롭을 할수 있는 박스(영역) 을 만든다*/}
            <Droppable droppableId="one">
              {/* magic은 Droppable 에 주는 provided다 뭐.. 변수이름은 개발자 마음대로 해도상관없다*/}
              {(magic) => (
                <S.Board ref={magic.innerRef} {...magic.droppableProps}>
                  {/*Droppable 영역에서 드래그 하는박스(영역)*/}
                  {toDos.map((el, i) => (
                    <Draggable key={i} draggableId={el} index={i}>
                      {/*유저가 li를 어떠한 위치에서든지 드레그해서 옮기도록 하고 싶다면 draggableProps,dragHandleProps */}
                      {(magic) => (
                        <S.Card
                          ref={magic.innerRef}
                          {...magic.dragHandleProps}
                          {...magic.draggableProps}
                        >
                          {el}
                        </S.Card>
                      )}
                    </Draggable>
                  ))}
                  {magic.placeholder}
                </S.Board>
              )}
            </Droppable>
          </S.Boards>
        </S.Warapper>
      </DragDropContext>
    </>
  );
}
