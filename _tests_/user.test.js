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
    let date1 = new Date("1996-07-07");
    let date2 = new Date("2022-4-15");
    expect(user.lifeExpectancy("earth", date1, date2)).toEqual(49);
  });

  test("should calculate the life expectancy of the user in Jupiter years", () => {
    let date1 = new Date("1996-07-07");
    let date2 = new Date("2022-4-15");
    expect(user.lifeExpectancy("jupiter", date1, date2)).toEqual(4);
  });

  test("should calculate how many years over the life expectancy is, if age is above it", () => {
    let date1 = new Date("1932-07-07");
    let date2 = new Date("2022-4-15");
    expect(user.lifeExpectancy("earth", date1, date2)).toEqual(
      "You are 15 years over the average life expectancy on this planet."
    );
  });

  test("should calculate how many years over the life expectancy on Mercury is, if age is above it", () => {
    let date1 = new Date("1932-07-07");
    let date2 = new Date("2022-4-15");
    const user = new User(90);
    expect(user.lifeExpectancy("mercury", date1, date2)).toEqual(
      "You are 62 years over the average life expectancy on this planet."
    );
  });

  test("should give special message if lifeExpectancy is 0", () => {
    let date1 = new Date("1948-04-15");
    let date2 = new Date("2022-4-15");
    expect(user.lifeExpectancy("earth", date1, date2)).toEqual(
      "You are at the average life expectancy on this planet."
    );
  });

  // date based age
  test("should calculate age in days based on full birthday", () => {
    const date1 = new Date("1996-07-07");
    const date2 = new Date("2022-4-15");
    expect(
      user.planetAge("earth", user.accuratePlanetAge(date1, date2))
    ).toEqual(25);
  });
});
