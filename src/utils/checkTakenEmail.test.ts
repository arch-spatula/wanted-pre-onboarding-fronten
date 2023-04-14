import checkTakenEmail from "./checkTakenEmail";

describe("checkTakenEmail", () => {
  test("이미 이메일이 존재하는 경우", () => {
    expect(
      checkTakenEmail("@", ["@", "testuser@user.com", "user@user.com"])
    ).toBe("동일한 이메일이 이미 존재합니다.");
  });

  test("이메일이 없는 경우", () => {
    expect(
      checkTakenEmail("notbob@cia.com", [
        "@",
        "testuser@user.com",
        "user@user.com",
      ])
    ).toBe("");
  });
});
