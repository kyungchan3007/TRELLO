import { useRecoilState, useRecoilValue } from "recoil";
import { createGlobalStyle } from "styled-components";
import { hoursSelector, minutesState } from "./atoms";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Andika&family=Inter:wght@300;400&family=Mukta&display=swap');
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
* {
  box-sizing: border-box;
}
 body{
  font-family:'Andika', sans-serif;
  background-color:${(props) => props.theme.bgColor};
  color:${(props) => props.theme.textColor}
 }
 a {
    text-decoration: none;
    color: inherit; /* 부모로부터 가져옴*/ 
 }
`;

export default function App() {
  const [minutes, setMinutes] = useRecoilState(minutesState); //atom의 값을 더해서 atom을 수정할 함수까지 준다 // 인풋에서 입력되는 값을 atom으로 전달한다.
  //recoilState결과로 array를 주는데 첫번째 값은 atom에서 주는값이고 두번째는 atom을 수정하는 함수이다.
  const [hours, setHours] = useRecoilState(hoursSelector); // atom에서 수정된 값을 가져온다.
  //REcoilSelector도 State와 똑같이 수정을 할수가 있다. state를 recoilSelector로 사용하고 있다면 결과값으로 array를 받게 된다.
  //첫번째 요소(hours)는 seltor에서 get함수에 return한 값이된다
  //두번째는 set함수를 부르는 함수가 될거다.
  //recoilstate는 atom으로 쓸수도 있고 selector로 쓸수도 있다.
  //recoilstate를 selector로 사용할때 첫번째요소의값은 atom의값이거나 get함수의 값이다.
  const onMinutesChange = (e: React.FormEvent<HTMLInputElement>) => {
    setMinutes(+e.currentTarget.value); // input 에서 넘겨주는값은 스트링이기 때문에 형변환을 해줘야한다.
  };

  const onHoursChange = (e: React.FormEvent<HTMLInputElement>) => {
    setHours(+e.currentTarget.value); // input 에서 넘겨주는값은 스트링이기 때문에 형변환을 해줘야한다.
  };

  return (
    <>
      <GlobalStyle />
      <input
        type={"number"}
        value={minutes}
        onChange={onMinutesChange}
        placeholder="Minutes"
      ></input>
      <input
        type={"number"}
        onChange={onHoursChange}
        value={hours}
        placeholder="Hourse"
      ></input>
    </>
  );
}
