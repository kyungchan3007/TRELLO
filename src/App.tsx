import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "react-beautiful-dnd";
import DraggablleCard from "./components/draggablleCard";
import { useRecoilState } from "recoil";
import { toDosState } from "./atoms";
import * as S from "./styleComponent/app.styled";

export default function App() {
  // const x = ["a", "b", "c", "d", "e", "f"];
  // const aaa = x.splice(0, 1);
  // console.log(aaa, x);
  // const ccc = x.splice(2, 0, "a");
  // console.log(ccc, x);

  const [toDos, setTodo] = useRecoilState(toDosState);

  // 이 함수는 드랍이 일어날때 어떤일이 일어났는지에 대한 정보로 많은 args를 준다.
  const onDragEnd = (args: DropResult) => {
    // destination이 아니라면
    if (!args.destination) return;
    setTodo((oldTodo) => {
      const copyTodo = [...oldTodo];
      //1. 값의 index 에서 아이템을 지움
      //  sourece.index 현재 item의 index!
      copyTodo.splice(args.source.index, 1);
      //  destination.index 는 바꾸고자 하는 인덱스 , draggableId는 map으로 바인딩을 해주고 있기 때문에 id가 item들이 된다.
      copyTodo.splice(Number(args.destination?.index), 0, args.draggableId);
      return copyTodo;
    });
  };
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
                    <DraggablleCard key={el} toDos={el} index={i} />
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
