const person = {
  name: 'Tom',
  age: 18
};
const proxy = new Proxy(person, {
  get(target, property) {
    if (property === 'age') {
      return target[property] + 1;
    } else {
      return target[property];
    }
  },
  set(target, key, value) {
    console.log('change');
  }
});
console.log(proxy.name); // 输出 "Tom"
console.log(proxy.age); // 输出 19
