// JEST는 no config를 지향... 그래서 별도의 설정 없이도 쉽고 빠르게 사용이 가능하다.

// 함수 모음
const fn = require('./fn');

// 초간단 사용법 : expect에 검증할 값, 함수 등을 넣고, toBe에 기대값을 넣어준다.

// 초간단 예제 1
test('1 = 1', () => {
  expect(1).toBe(1);
});

// 초간단 예제 2 (함수검증)
test('2 + 3 = 5', () => {
  expect(fn.add(2, 3)).toBe(5);
});

// 초간단 예제 3 (함수검증 - not 사용)
test('3 + 3 !== 5', () => {
  expect(fn.add(3, 3)).not.toBe(5);
});

// toBe부분에서 사용하는 함수를 Matcher라고 한다.
// 숫자나 문자 등 기본 타입의 값을 비교하는 데에 사용함.