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

  test("should return the user's age in Mercury years", () => {
    expect(user.mercuryAge()).toEqual(103);
  });

  test("should return the user's age in Venus years", () => {
    expect(user.venusAge()).toEqual(40);
  });

  test("should return the user's age in Mars years", () => {
    expect(user.marsAge()).toEqual(13);
  });

  test("should return the user's age in Jupiter years", () => {
    expect(user.jupiterAge()).toEqual(2);
  });

  test("should calculate the life expectancy of the user", () => {
    expect(user.lifeExpectancy()).toEqual(50);
  });
});
