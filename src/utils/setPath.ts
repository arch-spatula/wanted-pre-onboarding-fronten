const setPath = (
  path: string,
  methodType: "assign" | "replace" | "href" = "assign"
) => {
  switch (methodType) {
    case "assign":
      window.location.assign(path);
      break;
    case "replace":
      window.location.replace(path);
      break;
    case "href":
      window.location.href = path;
      break;
    default:
      window.location.assign(path);
      break;
  }
};

export default setPath;
