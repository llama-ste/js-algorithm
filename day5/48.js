// 문제48 : 대소문자 바꿔서 출력하기

// 문자열이 주어지면 대문자와 소문자를 바꿔서 출력하는 프로그램을 작성하세요.

function reverseCase(string) {
  let str = "";
  string.split("").forEach((char) => {
    char === char.toUpperCase()
      ? (str += char.toLowerCase())
      : (str += char.toUpperCase());
  });

  return str;
}

console.log(reverseCase("AAABBBcccddd"));
