// # 문제59 : 빈칸채우기

// 총 문자열의 길이는 50으로 제한하고 사용자가 문자열을 입력하면 그 문자열을
// 가운데 정렬을 해주고, 나머지 빈 부분에는 '='을 채워 넣어주세요.

function centerString(string) {
  const len = 50;
  const strLen = string.length;
  const left = (len - strLen) / 2;
  const right = strLen % 2 === 0 ? (len - strLen) / 2 : (len - strLen) / 2 + 1;

  return "=".repeat(left) + string + "=".repeat(right);
}

console.log(centerString("1hi12312d"));

function pad(string) {
  // 첫번째 인자는 목표길이고, 두번째 인자가 채워넣을 값이다.
  // 채워 넣을 값을 입력하지 않는다면 기본값은 " "로 들어간다.
  const a = string.padStart(25 + string.length / 2, "=");
  return a.padEnd(50, "=");
}

console.log(pad("llama"));
