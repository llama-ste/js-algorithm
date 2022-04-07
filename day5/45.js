// 문제45 : getTime()함수 사용하기

// Date객체의 메소드 중 하나인 getTime()은 1970년 1월 1일 0시 0분 0초 이후로부터 지금까지 흐른 시간을 천분의 1초 단위(ms)로 반환합니다.

// 이를 이용하여 현재 연도(2019)를 출력해보세요.
// getTime은 1970년 01월 01일 자정을 기준으로 현재까지 흐른 시간을 밀리초로 보여준다.
// 3600 * 24 * 365 * 1000으로 1년의 시간을 밀리세컨드로 바꿔서 getTime 시간을 나눠준다.
// 결과로 나온 연수 + 1970을 하면 올해를 구할 수 있다.

function getThisYear() {
  const today = new Date();
  return Math.floor(today.getTime() / (3600 * 24 * 365 * 1000)) + 1970;
}

console.log(getThisYear());
