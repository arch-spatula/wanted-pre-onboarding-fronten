interface CustomButtonProps {
  text: string;
  hierarchy: "primary" | "secondary";
  href?: string;
  onClick?: () => void;
}

/**
 * @param {CustomButtonProps} Props href가 있으면 onClick을 사용하지 않습니다. onClick이 있으면 href를 사용하지 않습니다.
 * @returns {HTMLAnchorElement | HTMLButtonElement}
 * <CustomButton text={buttonText} hierarchy="primary" onClick={() => {}} />
 * <CustomButton text={buttonText} hierarchy="primary" href="/" />
 * @see https://www.builder.io/blog/buttons
 * @todo 1. href와 onClick이 호출할 때 상호배타적이도록 타입을 지정합니다.
 */

function CustomButton({ text, href, hierarchy, onClick }: CustomButtonProps) {
  let styling = "";
  switch (hierarchy) {
    case "primary":
      styling = "w-40 rounded bg-green-500 px-4 py-2 text-white";
      break;
    case "secondary":
      styling =
        "box-border flex w-40 border-collapse justify-center self-center rounded border border-green-500 bg-white py-2 text-green-500";
      break;
    default:
      styling = "w-40 rounded bg-green-500 px-4 py-2 text-white";
      break;
  }

  if (href) {
    return (
      <a className={styling} href={href}>
        {text}
      </a>
    );
  }

  return (
    <button className={styling} type="button" onClick={onClick}>
      {text}
    </button>
  );
}

export default CustomButton;
