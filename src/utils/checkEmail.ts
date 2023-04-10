/**
 * @param {string} str email인지 검증할 문자열을 대입합니다.
 * @returns {string} 실패하는 이유를 설명하는 문자열을 반환합니다.
 * switch 문으로 작성하면 검증 조건추가를 확장하기 쉽습니다.
 */
function checkEmail(str: string) {
  const regexEmail = /@/;
  switch (false) {
    case regexEmail.test(str):
      return "이메일에 @이 포함되어야 합니다.";
    default:
      return "";
  }
}

export default checkEmail;
