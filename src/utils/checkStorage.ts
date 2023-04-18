function checkStorage() {
  const token: { Authorization?: string } = JSON.parse(
    localStorage.getItem("token") ?? "{}"
  );
  return token;
}

export default checkStorage;
