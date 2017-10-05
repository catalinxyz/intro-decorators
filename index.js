function superHero(name) {
  return function superHeroDecorator(constructor) {
    Object.defineProperty(
      constructor.prototype,
      'superHeroName', {
        value: name
      });
  };
}

function log(target, name, descriptor) {
  const fn = descriptor.value;
  descriptor.value = function (...args) {
    const v = fn.call(target, ...args);
    console.log(`${name}()`, v);
    return v;
  }
}

function time(label) {
  return function timeDecorator(target, name, descriptor) {
    const fn = descriptor.value;
    descriptor.value = function (...args) {
      console.time(label);
      const v = fn.call(target, ...args);
      console.timeEnd(label);

      return v;
    }
  };
}

@superHero('Doctor Strange')
class User {
  @log
  name() {
    return "catalin";
  }

  @time('Calculate total price:')
  totalPrice() {
    let sum = 0;
    for (let i = 0; i < 1000000000; i++) {
      sum += i;
    }
    return sum;
  }
}

const user = new User();

console.log(user.name());
console.log(user.totalPrice());