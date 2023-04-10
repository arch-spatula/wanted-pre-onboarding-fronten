import checkPassword from "./checkPassword";

describe("checkPassword", () => {
  it("8자리 미만이면 '비밀번호는 8자리 이상이어야 합니다.'라는 실패 이유를 문자열로 반환합니다.", () => {
    const failPassword = "1234567";
    expect(checkPassword(failPassword)).toBe(
      "비밀번호는 8자리 이상이어야 합니다."
    );
  });

  it("8자리 이상이면 ''처럼 비어있는 문자열로 반환합니다.", () => {
    const successPassword = "12345678";
    expect(checkPassword(successPassword)).toBe("");
  });
});
