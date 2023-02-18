import { atom, selector } from "recoil";

export const minutesState = atom({
  key: "minutes",
  default: 0,
});

export const hoursSelector = selector({
  // 어떤값을 return 하던지 간에 그값은 hoursSelector값이 될거야
  key: "hours",
  get: ({ get }) => {
    // get함수는 atom 을 가져올수 있따.
    const minutes = get(minutesState);
    return minutes / 60;
  },
});
