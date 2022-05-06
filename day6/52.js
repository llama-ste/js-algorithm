// 문제52 : quick sort

// 다음 빈 칸을 채워 퀵 정렬을 완성해주세요.

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    // 조건문 조건을 채워주세요.
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  console.log(`left: ${left}, pivot: ${pivot}, right: ${right}`);
  // 반환값을 넣어주세요.
  return quickSort(left).concat(pivot, quickSort(right));
}

console.log(quickSort([30, 3, 28, 4, 14, 24, 8, 9, 12, 19]));
