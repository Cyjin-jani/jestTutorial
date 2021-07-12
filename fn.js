const fn = {
  add: (num1, num2) => num1 + num2,
  makeUser: (name, age) => ({ name, age }),
  makeOtherUser: (name, age) => ({ name, age, gender: undefined }),
  throwErr: () => {
    throw new Error('xx');
  },
  getName: (callback) => {
    const name = 'Mike';
    setTimeout(() => {
      callback(name);
      // server 에러 시
      // throw new Err('서버 에러');
    }, 3000);
  },
  getAge: () => {
    const age = 30;
    return new Promise((res, rej) => {
      setTimeout(() => {
        // resolve 상황 테스트
        res(age);
        // reject 상황 테스트
        // rej('error');
      }, 3000);
    });
  },
};

module.exports = fn;
