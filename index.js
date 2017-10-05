function superHero(name) {
  return function superHeroDecorator(constructor) {
    Object.defineProperty(
      constructor.prototype,
      'superHeroName', {
        value: name
      });
  };
}

@superHero('Doctor Strange')
class User {
  name() {
    return "catalin";
  }

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