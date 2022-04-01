"use strict";
// 문제8 : 객체의 키 이름 중복
// 자바스크립트 객체를 다음과 같이 만들었다.
// 출력값을 입력하시오. (출력값은 공백을 넣지 않습니다. )

const d = {
  height: 180,
  weight: 78,
  weight: 84,
  temperature: 36,
  eyesight: 1,
};

// JS를 제외하고는 객체의 키가 겹치면 에러가 발생한다.
// 84 JS는 중복되는 키가 있다면 가장 마지막 값을 매칭 시켜준다.
console.log(d.weight);
