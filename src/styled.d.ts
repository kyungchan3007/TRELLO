import "styled-components";

// and extend them!
// 테마 설정하는곳
declare module "styled-components" {
  export interface DefaultTheme {
    bgColor: string;
    boardColor: string;
    cardColor: string;
  }
}
