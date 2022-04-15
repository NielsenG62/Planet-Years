export class User {
  constructor(name, age) {
    this.name = name;
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

// earthAge(days) {
//   let earthAge = Math.floor(days / 365);
//   if (earthAge < 0) {
//     let expectancy =
//       "You are " +
//       Math.abs(earthAge) +
//       " years over the average life expectancy on this planet.";
//     return expectancy;
//   }
//   return earthAge;
// }

// mercuryAge(days) {
//   let mercuryAge = Math.floor(days / 88);
//   if (mercuryAge < 0) {
//     let expectancy =
//       "You are " +
//       Math.abs(mercuryAge) +
//       " years over the average life expectancy on this planet.";
//     return expectancy;
//   }
//   return mercuryAge;
// }

// venusAge(days) {
//   let venusAge = Math.floor(days / 225);
//   if (venusAge < 0) {
//     let expectancy =
//       "You are " +
//       Math.abs(venusAge) +
//       " years over the average life expectancy on this planet.";
//     return expectancy;
//   }
//   return venusAge;
// }

// marsAge(days) {
//   let marsAge = Math.floor(days / 687);
//   if (marsAge < 0) {
//     let expectancy =
//       "You are " +
//       Math.abs(marsAge) +
//       " years over the average life expectancy on this planet.";
//     return expectancy;
//   }
//   return marsAge;
// }

// jupiterAge(days) {
//   let jupiterAge = Math.floor(days / 4307);
//   if (jupiterAge < 0) {
//     let expectancy =
//       "You are " +
//       Math.abs(jupiterAge) +
//       " years over the average life expectancy on this planet.";
//     return expectancy;
//   }
//   return jupiterAge;
// }
