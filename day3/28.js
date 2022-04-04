// 문제28 : 2-gram

// 2-gram이란 문자열에서 2개의 연속된 요소를 출력하는 방법입니다.

// 예를 들어 'Javascript'를 2-gram으로 반복해 본다면 다음과 같은 결과가 나옵니다.

function twoGram(string) {
  return string.split("").forEach((char, index, array) => {
    if (index === string.length - 1) {
      return; //early return
    }

    console.log(`${char} ${array[index + 1]}`);
  });
}

twoGram("llama");
word = "llama";

for (let i in word) {
  if (Number(i) === word.length - 1) {
    break;
  }
  console.log(`${word[i]} ${word[Number(i) + 1]}`);
}
