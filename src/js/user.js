export class User {
  constructor(age) {
    this.age = age;
    this.dayAge = age * 365;
  }

  planetAge(planet, days) {
    let planetAge;
    if (planet === "earth") {
      planetAge = Math.floor(days / 365);
    } else if (planet === "mercury") {
      planetAge = Math.floor(days / 88);
    } else if (planet === "venus") {
      planetAge = Math.floor(days / 225);
    } else if (planet === "mars") {
      planetAge = Math.floor(days / 687);
    } else {
      planetAge = Math.floor(days / 4307);
    }
    return planetAge;
  }

  lifeExpectancy(planet) {
    let daysExpected = 27375;
    let daysLeft = Math.floor(daysExpected - this.dayAge);
    let planetDaysLeft = this.planetAge(planet, daysLeft);
    if (planetDaysLeft < 0) {
      let expectancy =
        "You are " +
        Math.abs(planetDaysLeft) +
        " years over the average life expectancy on this planet.";
      return expectancy;
    }
    return planetDaysLeft;
  }
}
