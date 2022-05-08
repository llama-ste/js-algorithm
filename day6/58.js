// 문제58 : 콤마 찍기

// 원범이는 편의점 아르바이트가 끝난 후 정산을 하고자 합니다.
// 정산을 빨리하고 집에 가고 싶은 원범이는 프로그램을 만들려고 합니다.

// 숫자를 입력받고 천 단위로 콤마(,)를 찍어주세요.

// 예를 들어, 123456789를 입력받았으면 123,456,789를 출력해야 합니다.

function thousandCommas(num) {
  return num.toLocaleString("ko-KR");
}

console.log(thousandCommas(100002131230));
