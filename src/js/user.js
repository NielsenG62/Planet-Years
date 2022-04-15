export class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.dayAge = age * 365;
  }

  earthAge(days) {
    let earthAge = Math.floor(days / 365);
    if (earthAge < 0) {
      let expectancy =
        "You are " +
        Math.abs(earthAge) +
        " years over the average life expectancy on this planet.";
      return expectancy;
    }
    return earthAge;
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
    let daysExpected = 27375;
    let daysLeft = Math.floor(daysExpected - this.dayAge);
    return daysLeft;
  }
}
