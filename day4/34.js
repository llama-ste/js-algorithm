// 문제34 : sort 구현하기

// 민주는 체육부장으로 체육시간이 되면 반 친구들이 제대로 키 순서대로 모였는지를 확인해야 한다. 그런데 요즘 민주는 그것이 너무 번거롭게 느껴져 한 번에 확인하고 싶어한다.

// 민주를 위해 키가 주어지면 순서대로 제대로 섰는지 확인하는 프로그램을 작성해보자.
// (키는 공백으로 구분하여 입력됩니다.)

function checkSorted(list) {
  const input = list.split(" ").map((num) => Number(num));
  let res = true;

  for (let i = 0; i < input.length - 1; i++) {
    if (input[i] > input[i + 1]) {
      res = false;
      break;
    }
  }

  return res ? "YES" : "NO";
}

console.log(checkSorted("90 80 200 300"));
console.log(checkSorted("90 100 200 300"));

// function foo(str) {
//   return str
//     .split(" ")
//     .map((num) => Number(num))
//     .map((item, index, arr) => {
//       if (index === arr.length - 1) {
//         return true;
//       }

//       const nextItem = arr[index + 1];

//       return item <= nextItem;
//     })
//     .reduce((acc, bool) => acc && bool);
// }
