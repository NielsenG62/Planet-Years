export class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.dayAge = age * 365;
  }

  mercuryAge(days) {
    let mercuryAge = Math.floor(days / 88);
    return mercuryAge;
  }

  venusAge(days) {
    let venusAge = Math.floor(days / 225);
    return venusAge;
  }

  marsAge(days) {
    let marsAge = Math.floor(days / 687);
    return marsAge;
  }

  jupiterAge(days) {
    let jupiterAge = Math.floor(days / 4307);
    return jupiterAge;
  }

  lifeExpectancy() {
    let yearsExpected = 75;
    let yearsLeft = Math.floor(yearsExpected - this.age);
    return yearsLeft;
  }
}
