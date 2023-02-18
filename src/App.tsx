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
  const [minutes, setMinutes] = useRecoilState(minutesState); //atom의 값을 더해서 atom을 수정할 함수까지 준다
  const hours = useRecoilValue(hoursSelector);
  const onMinutesChange = (e: React.FormEvent<HTMLInputElement>) => {
    setMinutes(+e.currentTarget.value); // atom에서 주는값은 숫자값인데 input 에서 넘겨주는값은 스트링이기 때문에 형변환을 해줘야한다.
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
      <input type={"number"} value={hours} placeholder="Hourse"></input>
    </>
  );
}