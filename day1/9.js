//문제9 : concat을 활용한 출력 방법
//다음 소스 코드를 완성하여 날짜와 시간을 출력하시오.

// 데이터
const year = "2019";
const month = "04";
const day = "26";
const hour = "11";
const minute = "34";
const second = "27";

// concat()은 배열의 뒷부분에 인자로 전달받은 데이터를 합쳐서 새로운 배열로 반환한다. (문자열은 문자열)
// 중첩된 배열을 넣는다면 중첩된 배열은 배열 자체가 들어간다.
const result = year.concat(
  "/",
  month,
  "/",
  day,
  " ",
  hour,
  ":",
  minute,
  ":",
  second
);

console.log(result);

// 출력
//2019/04/26 11:34:27
