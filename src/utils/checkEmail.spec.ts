import checkEmail from "./checkEmail";

describe("checkEmail", () => {
  it("@가 없으면 '이메일에 @이 포함되어야 합니다.'라는 실패 이유를 문자열을 반환합니다.", () => {
    const failEmail = "useremail.com";
    expect(checkEmail(failEmail)).toBe("이메일에 @이 포함되어야 합니다.");
  });

  it("@를 포함하면 ''처럼 비어있는 문자열을 반환합니다.", () => {
    const successEmail = "user@email.com";
    expect(checkEmail(successEmail)).toBe("");
  });
});
