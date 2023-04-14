/**
 * checkEmail, checkPassword와 함께 사용합니다.
 * @param {string[]} args check함수들의 반환값들을 대입합니다.
 * @returns {boolean} 유효하지 않을 이유가 없으면 유효합니다.
 */
function isValid(...args: string[]) {
  if (args.length === 0) return false;
  return args.every((elem) => elem === "");
}

export default isValid;
