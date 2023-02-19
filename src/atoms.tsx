import { atom, selector } from "recoil";

export const minutesState = atom({
  key: "minutes",
  default: 0,
});

export const hoursSelector = selector<number>({
  // 어떤값을 return 하던지 간에 그값은 hoursSelector값이 될거야
  key: "hours",
  get: ({ get }) => {
    // get함수는 atom 을 가져올수 있따.
    const minutes = get(minutesState); // input에서 값을 받아 온다.
    return minutes / 60;
  },
  set: ({ set }, newValue) => {
    // set 함수는 원하는 state가 어떤 것이던지 그걸로 수정할수 있게 해준다.
    const minutes = Number(newValue) * 60;
    set(minutesState, minutes); // atom에서 받아 오는 값을 10으로 수정하겠다는 말이다.
  },
});
