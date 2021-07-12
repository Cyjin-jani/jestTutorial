// 비동기 코드 테스트

const fn = require('./fn');

// promise를 사용하지 않은 callback 함수를 테스트 하는 경우 (done 필요)
// test('3초 후에 받아온 이름은 Mike', (done) => {
//   function callback(name) {
//     try {
//       expect(name).toBe('Mike');
//       done();
//     } catch (err) {
//       done();
//     }
//     // 이 done이라는 인자는 jest에서 제공하는 비동기 체크용 인자.
//     // done이 호출되기 전까지는 테스트가 종료되지 않음.
//     // done();
//   }
//   fn.getName(callback);
// });

// promise 함수를 테스트 하는 경우
test('3초 후에 받아온 나이는 30', () => {
  // promise를 사용하는 경우,  return 을 무조건 해줘야 함... (return이 없으면 걍 모든 테스트 경우 통과 되어버림...)
  return fn.getAge().then((age) => {
    expect(age).toBe(30);
  });
});

// resolves를 활용하는 경우
// test('[resolve] 3초 후에 받아온 나이는 30', () => {
//   return expect(fn.getAge()).resolves.toBe(30);
// });

// reject를 활용하는 경우
// test('[rejects] 3초 후에 받아온 나이는 30', () => {
//   // return expect(fn.getAge()).rejects.toBe(30);
//   return expect(fn.getAge()).rejects.toMatch('error');
// });

// async await 활용하는 경우
test('[async-await] 3초 후에 받아온 나이는 30', async () => {
  const age = await fn.getAge();
  expect(age).toBe(30);
});

// async를 쓰면서 resolve도 쓰고 싶은 경우.
test('[resolve] 3초 후에 받아온 나이는 30', async () => {
  await expect(fn.getAge()).resolves.toBe(30);
});
