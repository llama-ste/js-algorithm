// 문제56 : 객체의 함수 응용

// 다음의 객체가 주어졌을 때 입력받은 국가의 면적과 가장 비슷한 국가와 그 차이를 출력하세요.

function similarWithCountry(country) {
  const nationWidth = {
    Korea: 220877,
    Russia: 17098242,
    China: 9596961,
    France: 543965,
    Japan: 377915,
    England: 242900,
  };

  // 이유는 모르지만 Object.fromEntries 할때 키가 숫자였다면 자동정렬이 되었다.
  const widthNation = Object.fromEntries(
    // JS에서 key로 뭐가 들어오던 toString method로 형변환을 한다.
    // => 자동으로 타입캐스팅 된다.
    Object.entries(nationWidth)
      .map((arr) => arr.reverse())
      .sort((a, b) => a - b)
  );

  console.log(widthNation);

  console.log(
    Object.fromEntries([
      [3, "c"],
      [2, "b"],
      [4, "d"],
      [1, "a"],
    ])
  );

  const widths = Object.keys(widthNation);

  // key가 string이기 때문에 변환해준다.
  const targetWidth = String(nationWidth[country]);

  const targetIndex = widths.findIndex((width) => width === targetWidth);

  const prevWidth = widths[targetIndex - 1];
  const nextWidth = widths[targetIndex + 1];

  const prevDiff = prevWidth
    ? Math.abs(Number(prevWidth) - Number(targetWidth))
    : undefined;
  const nextDiff = nextWidth
    ? Math.abs(Number(nextWidth) - Number(targetWidth))
    : undefined;

  if (!prevDiff) {
    return `${widthNation[nextWidth]} ${nextDiff}`;
  }

  if (!nextDiff) {
    return `${widthNation[prevWidth]} ${prevDiff}`;
  }

  return prevDiff < nextDiff
    ? `${widthNation[prevWidth]} ${prevDiff}`
    : `${widthNation[nextWidth]} ${nextDiff}`;
}

console.log(similarWithCountry("France"));
