export class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.dayAge = age * 365;
  }

  mercuryAge() {
    let mercuryAge = Math.floor(this.dayAge / 88);
    return mercuryAge;
  }

  venusAge() {
    let venusAge = Math.floor(this.dayAge / 225);
    return venusAge;
  }

  marsAge() {
    let marsAge = Math.floor(this.dayAge / 687);
    return marsAge;
  }

  jupiterAge() {}
}
