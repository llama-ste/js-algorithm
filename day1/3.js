// 문제3 : 변수의 타입
// 다음 출력 값으로 올바른 것은?
const arr = [100, 200, 300];

console.log(typeof arr);
console.log(Array.isArray(arr)); // => true

// 4. object - JS의 배열은 __proto__를 타고 올라가면 Prototype Object가 prototype이다.
// 추가적으로, 배열인지 알고싶다면 Array.isArray()를 사용한다면 배열인지 아닌지 확인할 수 있다.

// 1) undefined
// 2) string
// 3) number
// 4) object (number | string)[] (혼합 배열)
