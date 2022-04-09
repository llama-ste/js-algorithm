// 문제50 : 버블정렬 구현하기

// 버블정렬은 두 인접한 원소를 검사하여 정렬하는 방법을 말합니다.
// 간 복잡도는 느리지만 코드가 단순하기 때문에 자주 사용됩니다.
// 아래 코드의 빈 칸을 채워 버블 정렬을 완성해 봅시다.

function bubble(arr) {
  const array = arr.split(" ").map((num) => Number(num));

  let result = array.slice();

  for (let i = 0; i < result.length - 1; i++) {
    // 빈칸을 채워주세요. - for 조건문
    for (let j = 0; j < result.length - i; j++) {
      if (result[j] > result[j + 1]) {
        [result[j], result[j + 1]] = [result[j + 1], result[j]];
      }
    }
  }
  return result;
}

console.log(bubble("5 2 4 9 8"));
