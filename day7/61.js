// 문제61 : 문자열 압축하기

// 문자열을 입력받고 연속되는 문자열을 압축해서 표현하고 싶습니다.

function stringCompression(string) {
  const a = new Set(string);
  const arr = Array.from(a);
  let res = "";

  arr.forEach((str) => {
    // match에서 변수를 사용할 수 없기 때문에 RegExp로 패턴을 만들어서 넣었다.
    const pattern = new RegExp(str, "g");
    const count = string.match(pattern).length;
    res += `${str}${count}`;
  });

  return res;
}

console.log(stringCompression("aaabbbbcdddd"));
