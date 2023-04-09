export interface dragaable {
  index: number;
  toDos: string;
}

export interface IBoard {
  toDos: string[];
  boardId: string;
}

//타입을 추가하는 이유는 이후에 유저가 추가할수도 있는 요소들을 인지 하기위해 추가한다.
export interface IToDoState {
  [key: string]: string[];
}

export interface IAreaProps {
  isDraggingFromThis: boolean;
  isDraggingOver: boolean;
}
