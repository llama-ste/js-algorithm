// 문제43 : 10진수를 2진수로

// 우리가 흔히 사용하는 숫자 1, 8, 19, 28893 등등...은 10진수 체계입니다.
// 이를 컴퓨터가 알아 들을 수 있는 2진수로 바꾸려고 합니다. 어떻게 해야할까요?

// 사용자에게 숫자를 입력받고 이를 2진수를 바꾸고 그 값을 출력해주세요.

// 10진수 => 2진수 num.toString(2)
// 10진수 => 8진수 num.toString(8)
// 10진수 => 16진수 num.toString(16)
// 2,8,16진수 => 10진수 parseInt(binary, 2)  8,16진수도 똑같다.

function decimalToBinary(num) {
  return num.toString(2);
}

console.log(decimalToBinary(30));
