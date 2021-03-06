// 문제64 : 이상한 엘레베이터

// 정량 N에 정확히 맞춰야만 움직이는 화물용 엘리베이터가 있습니다.
// 화물은 7kg, 3kg 두 가지이며 팔이 아픈 은후는 가장 적게 화물을 옮기고 싶습니다.

// 예를 들어 정량이 24kg이라면 3kg 8개를 옮기는 것보다는
// 7kg 3개, 3kg 1개 즉 4개로 더 적게 옮길 수 있습니다.

// 입력
// 정량 N이 입력됩니다.

// 출력
// 가장 적게 옮길 수 있는 횟수를 출력합니다.
// 만약 어떻게 해도 정량이 N이 되지 않는다면 -1을 출력합니다.

function times(num) {
  let time = 0;

  while (1) {
    if (time % 7 === 0) {
      res += num / 7;
      break;
    }

    // num % 7이 될 때까지 3의 배수만큼 빼면서 횟수를 추가한다.
    num -= 3;
    time += 1;

    // num % 3와 num % 7을 단계별로 진행하였지만 어떻게 해도 정량이 되지 않기 때문에
    // -1을 반환한다.
    if (num < 0) {
      time = -1;
      break;
    }
  }

  return time;
}

console.log(times(36));
