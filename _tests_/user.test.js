import { User } from "./../src/js/user.js";
describe("User", () => {
  test("should correctly create a user object with their age", () => {
    const user = new User("Gabe", 25);
    expect(user.name).toEqual("Gabe");
    expect(user.age).toEqual(25);
  });
});
