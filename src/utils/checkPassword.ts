/**
 * @param {string} str password인지 검증할 문자열을 대입합니다.
 * @returns {string} 실패하는 이유를 설명하는 문자열을 반환합니다.
 * switch 문으로 작성하면 검증 조건추가를 확장하기 쉽습니다.
 */
function checkPassword(str: string) {
  const regexPassword = /^.{8,}$/;
  switch (false) {
    case regexPassword.test(str):
      return "비밀번호는 8자리 이상이어야 합니다.";
    default:
      return "";
  }
}

export default checkPassword;
