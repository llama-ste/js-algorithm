// 문제27 : 객체 만들기

// 첫번째 입력에서는 학생의 이름이 공백으로 구분되어 입력되고, 두번째에는 그 학생의 수학 점수가 공백으로 구분되어 주어집니다.

// 두 개를 합쳐 학생의 이름이 key이고 value가 수학 점수인 객체를 출력해주세요.

function grade(nameStr, scoreStr) {
  const names = nameStr.split(" ");
  const scores = scoreStr.split(" ").map((num) => Number(num));

  // method 1
  return names.reduce((result, name, index) => {
    result[name] = scores[index];
    return result;
  }, {});

  // method 2
  // return Object.fromEntries(names.map((name, index) => [name, scores[index]]));
}

console.log(grade("안동현 람동현", "90 100"));
