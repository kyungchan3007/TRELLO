import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import { toDosState } from "./atoms";
import * as S from "./styleComponent/app.styled";
import BoardCard from "./components/board";

export default function App() {
  // const x = ["a", "b", "c", "d", "e", "f"];
  // const aaa = x.splice(0, 1);
  // console.log(aaa, x);
  // const ccc = x.splice(2, 0, "a");
  // console.log(ccc, x);

  const [toDos, setTodo] = useRecoilState(toDosState);

  // 이 함수는 드랍이 일어날때 어떤일이 일어났는지에 대한 정보로 많은 args를 준다.
  // 드래그가 끝났을때 실행되는 함수아다.
  const onDragEnd = (args: DropResult) => {
    const { destination, draggableId, source } = args;

    // 사용자가 드랙그를 하려다가 하지 않았을때! 목적지가 없을때
    if (!destination) return;
    if (destination?.droppableId === source.droppableId) {
      //더이상 배열이 아니기 때문에 배열복사가 불가능하다
      //변화가 일어난 속성에 대해서만 복사한다.
      setTodo((oldToDos) => {
        const boardCopy = [...oldToDos[source.droppableId]]; //source.droppableId는 카드의 시작점id
        //1. 값의 index 에서 아이템을 지움
        // sourece.index 현재 item의 index!
        boardCopy.splice(source.index, 1);
        // 목적지의 index 는 바꾸고자 하는 인덱스 , draggableId는 map으로 바인딩을 해주고 있기 때문에 id가 item들이 된다.
        boardCopy.splice(Number(destination?.index), 0, args.draggableId);
        return {
          ...oldToDos,
          [source.droppableId]: boardCopy,
        };
      });
    }

    if (destination?.droppableId !== source.droppableId) {
      //source.droppableId 시작점 //destination?.droppableId 목적지
      setTodo((oldToDos) => {
        const sourcBoard = [...oldToDos[source.droppableId]]; // 시작점 보드 복사
        const destinationBoard = [...oldToDos[destination?.droppableId]]; // 목적지 보드 복사
        //시작점 board에서 인덱스를 지워주고
        sourcBoard.splice(source.index, 1);
        // 시작점 board에서 잘라준 index를 목적지 모드에 더해준다.
        destinationBoard.splice(destination?.index, 0, draggableId);
        return {
          ...oldToDos,
          [source.droppableId]: sourcBoard,
          [destination?.droppableId]: destinationBoard,
        };
      });
    }

    // setTodo((oldTodo) => {
    //   console.log(args.source.index);
    //   const copyTodo = [...oldTodo]; //이전 배열은 복사한다.

    //   //1. 값의 index 에서 아이템을 지움
    //   //  sourece.index 현재 item의 index!
    //   copyTodo.splice(args.source.index, 1);

    //   //  목적지의 index 는 바꾸고자 하는 인덱스 , draggableId는 map으로 바인딩을 해주고 있기 때문에 id가 item들이 된다.
    //   copyTodo.splice(Number(args.destination?.index), 0, args.draggableId);
    //   return copyTodo;
    // });
  };

  return (
    <>
      {/* 드래그엔 드롭을 가능하게 하고 싶다면 DragDropContext를 사용해야한다* 가능할게 할수 있는 박스를 만든다 */}
      <DragDropContext onDragEnd={onDragEnd}>
        <S.Wrapper>
          <S.Boards>
            {/*여기서 영역을 만들었고 무언가를 드래그엔 드롭을 할수 있는 박스(영역) 을 만든다*/}
            {/*atom 가져오는 객체의 속성값! 즉 키값을 가져와서 넘겨준다*/}
            {Object.keys(toDos).map((boardId) => (
              <BoardCard
                boardId={boardId}
                key={boardId}
                toDos={toDos[boardId]}
              />
            ))}
          </S.Boards>
        </S.Wrapper>
      </DragDropContext>
    </>
  );
}
