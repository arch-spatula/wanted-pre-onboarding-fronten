const setPath = (path: string, methodType: "assign" | "replace" = "assign") => {
  switch (methodType) {
    case "assign":
      window.location.assign(path);
      break;
    case "replace":
      window.location.replace(path);
      break;
    default:
      window.location.assign(path);
      break;
  }
};

export default setPath;
