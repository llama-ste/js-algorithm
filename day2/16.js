// 문제16 : 로꾸거

// 문장이 입력되면 거꾸로 출력하는 프로그램을 만들어 봅시다.

function reverseString(str) {
  const res = str.split("").reverse();
  console.log(res.join(""));
}

reverseString("llama");
