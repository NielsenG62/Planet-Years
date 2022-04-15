import { User } from "./../src/js/user.js";
describe("User", () => {
  let user;
  beforeEach(() => {
    user = new User("Gabe", 25);
  });

  test("should correctly create a user object with their age", () => {
    expect(user.name).toEqual("Gabe");
    expect(user.age).toEqual(25);
  });

  // planet ages
  test("should return the user's age in Earth years", () => {
    expect(user.earthAge(user.dayAge)).toEqual(25);
  });
  test("should return the user's age in Mercury years", () => {
    expect(user.mercuryAge(user.dayAge)).toEqual(103);
  });
  test("should return the user's age in Venus years", () => {
    expect(user.venusAge(user.dayAge)).toEqual(40);
  });
  test("should return the user's age in Mars years", () => {
    expect(user.marsAge(user.dayAge)).toEqual(13);
  });
  test("should return the user's age in Jupiter years", () => {
    expect(user.jupiterAge(user.dayAge)).toEqual(2);
  });

  // lifeExpectancy
  test("should calculate the life expectancy of the user in earth years", () => {
    expect(user.earthAge(user.lifeExpectancy())).toEqual(50);
  });
  test("should calculate the life expectancy of the user in Jupiter years", () => {
    expect(user.jupiterAge(user.lifeExpectancy())).toEqual(4);
  });
  test("should calculate how many years over the life expectancy is, if age is above it", () => {
    user = new User("Gabe", 90);
    expect(user.lifeExpectancyCalc()).toEqual("You are 15 years over the average age");
  });
});