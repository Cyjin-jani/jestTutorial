
// 함수 모음
const fn = require('./fn');

/**
 *  유용한 Matchers - toEqual()
 * 
 * */

// 일반적인 기본 타입의 값은 큰 차이가 없이 모두 가능...
test('2 + 3 = 5', () => {
  expect(fn.add(2, 3)).toBe(5);
});

test('2 + 3 = 5', () => {
  expect(fn.add(2, 3)).toEqual(5);
});

// test 결과 fail.
// fail 이유: 객체나 배열은 재귀적으로 돌면서 값을 확인해야 되기 때문에 toBe로는 검증이 불가능.
test('이름가 나이를 전달받아서 객체를 반환함', () => {
  expect(fn.makeUser('john', 30)).toBe({
    name: 'john',
    age: 30,
  })
});

// 올바른 방법 (basic)
test('이름가 나이를 전달받아서 객체를 반환함', () => {
  expect(fn.makeUser('john', 30)).toEqual({
    name: 'john',
    age: 30,
  })
});

// toStrictEqual (equal과 동일한 결과)
test('이름가 나이를 전달받아서 객체를 반환함', () => {
  expect(fn.makeUser('john', 30)).toStrictEqual({
    name: 'john',
    age: 30,
  })
});

/**
 *  유용한 Matchers - toStrictEqual() : 보다 엄격한 테스트
 * 
 * */

// toStrictEqual이 필요한 경우: 객체에 undefined등이 있는 경우.

// test passed! (하지만 올바르지 않음)
test('이름가 나이를 전달받아서 객체를 반환함', () => {
  expect(fn.makeOtherUser('john', 30)).toEqual({
    name: 'john',
    age: 30,
  })
});

// 올바르고 적절한 테스트 (보다 엄격한 테스트이므로, 이걸 사용하는 것이 좋음)
test('이름가 나이를 전달받아서 객체를 반환함', () => {
  expect(fn.makeOtherUser('john', 30)).toStrictEqual({
    name: 'john',
    age: 30,
    // gender: undefined, -> test 통과를 위해 필요함
  })
});


/**
 *  유용한 Matchers
 *  - toBeNull : null인지 검사
 *  - toBeUndefined : undefined인지 검사
 *  - toBeDefined : defined (값이 할당된 상태)인지 검사
 * 
 * */

// 사용 예
test('null is null', () => {
  expect(null).toBeNull();
});


/**
 *  유용한 Matchers
 *  - toBeTruthy : true인지 검사
 *  - toBeFalsy : false인지 검사
 * 
 * */

// 사용 예
test('0은 false 다.', () => {
  expect(fn.add(1, -1)).toBeFalsy();
});

// 사용 예
test('string + string = string이다.', () => {
  expect(fn.add('hello', 'world')).toBeTruthy();
});


/**
 *  유용한 Matchers
 *  - toBeGreaterThan 크다
 *  - toBeGreaterThanOrEqual 크거나 같다
 *  - toBeLessThan 작다
 *  - toBeLessThanOrEqual 작거나 같다
 * 
 * */

//주로 숫자 비교에 사용.
// 사용자의 작성글 길이 체크, 파일 업로드 시 파일 크기 등을 체크할 때 사용할 수 있음.

// 사용 예 - 테스트 불합격 예시
test('Id는 10자 이하여야 한다.', () => {
  const id = 'INFINITY_STONE_TIME_STONE';
  expect(id.length).toBeLessThanOrEqual(10);
});

// 정확하게 특정 자리수까지인지 비교하는 경우? toBe, toEqual을 쓰면 된다!
// ex 비번 자리수

test('비밀번호는 4자리여야 합니다.', () => {
  const pw = '1234';
  expect(pw.length).toBe(4);
});

// **** 숫자를 다룰 때 조심해야 하는 부분 => 소수점! (이진법으로 사용하니, 무한소수가 표현되므로..)
test('0.1 + 0.2 = 0.3', () => {
  expect(fn.add(0.1, 0.2)).toBe(0.3);
});

// 이런 경우에 toBeCloseTo를 사용할 수 있다! (값이 근사치인지 판단)
test('0.1 + 0.2 = 0.3', () => {
  expect(fn.add(0.1, 0.2)).toBeCloseTo(0.3);
});


/**
 *  유용한 Matchers
 *  toMatch를 이용하여 정규표현식을 점검 가능!
 * 
 * */
test('Hello world에 a라는 글자가 있나?', () => {
  expect('Hello world').toMatch(/a/);
});

/**
 *  유용한 Matchers
 *  - toContain : 배열 내부에 요소 있는지 검사
 * 
 * */

 test('유저 리스트에 Tom가 있니?', () => {
   const user = "Tom";
   const userList = ["Tom", 'Michele', "Harry"]
  expect(userList).toContain(user);
});


/**
 *  유용한 Matchers
 *  - toThrow : 예외가 발생하는 경우를 확인
 *    인자값으로 에러 메세지를 넣어서 메세지가 일치하는 지 여부도 확인 가능
 * 
 * */

// 단순 예외 발생 확인
 test('error가 발생하는지?', () => {
 expect(() => fn.throwErr()).toThrow();
});

// error 메세지 일치 여부 확인 (true: xx 이므로 아래는 false(비통과))
test('error 메세지 ooo 가 발생하는지?', () => {
  expect(() => fn.throwErr()).toThrow('ooo');
 });