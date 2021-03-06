import { User } from "./../src/js/user.js";
describe("User", () => {
  let user;
  beforeEach(() => {
    user = new User(25);
  });

  test("should correctly create a user object with their age", () => {
    expect(user.age).toEqual(25);
  });

  // planet ages
  test("should return the user's age in Earth years", () => {
    expect(user.planetAge("earth", user.dayAge)).toEqual(25);
  });

  test("should return the user's age in Mercury years", () => {
    expect(user.planetAge("mercury", user.dayAge)).toEqual(103);
  });

  test("should return the user's age in Venus years", () => {
    expect(user.planetAge("venus", user.dayAge)).toEqual(40);
  });

  test("should return the user's age in Mars years", () => {
    expect(user.planetAge("mars", user.dayAge)).toEqual(13);
  });

  test("should return the user's age in Jupiter years", () => {
    expect(user.planetAge("jupiter", user.dayAge)).toEqual(2);
  });

  // lifeExpectancy
  test("should calculate the life expectancy of the user in earth years", () => {
    expect(user.lifeExpectancy("earth")).toEqual(50);
  });

  test("should calculate the life expectancy of the user in Jupiter years", () => {
    expect(user.lifeExpectancy("jupiter")).toEqual(4);
  });

  test("should calculate how many years over the life expectancy is, if age is above it", () => {
    const user = new User(90);
    expect(user.lifeExpectancy("earth")).toEqual(
      "You are 15 years over the average life expectancy on this planet."
    );
  });

  test("should calculate how many years over the life expectancy on Mercury is, if age is above it", () => {
    const user = new User(90);
    expect(user.lifeExpectancy("mercury")).toEqual(
      "You are 63 years over the average life expectancy on this planet."
    );
  });

  test("should give special message if lifeExpectancy is 0", () => {
    const user = new User(75);
    expect(user.lifeExpectancy("earth")).toEqual(
      "You are at the average life expectancy on this planet."
    );
  });

  // date based age
  test("should calculate age in days based on full birthday", () => {
    const date1 = new Date("07/07/1996");
    const date2 = new Date("04/15/2022");
    expect(
      user.planetAge("earth", user.accuratePlanetAge(date1, date2))
    ).toEqual(25);
  });
});
