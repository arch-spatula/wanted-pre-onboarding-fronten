import isValid from "./isValid";

describe("isValid", () => {
  it("하나라도 유효하지 않는 이유가 있으면 false를 반환합니다.", () => {
    expect(isValid("이메일에 @이 포함되어야 합니다.", "")).toBe(false);
    expect(isValid("", "비밀번호는 8자리 이상이어야 합니다.")).toBe(false);
  });

  it("아무리 대입해도 피드백이 없으면 true를 반환합니다.", () => {
    expect(isValid("", "", "", "", "")).toBe(true);
  });

  it("대입하는 값이 없으면 false를 반환합니다.", () => {
    expect(isValid()).toBe(false);
  });
});
