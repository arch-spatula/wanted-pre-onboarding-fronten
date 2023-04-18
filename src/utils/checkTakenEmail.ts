const checkTakenEmail = (email: string, takenEmail: string[]) => {
  switch (true) {
    case takenEmail.includes(email):
      return "동일한 이메일이 이미 존재합니다.";
    default:
      return "";
  }
};

export default checkTakenEmail;
