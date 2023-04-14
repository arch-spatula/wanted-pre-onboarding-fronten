interface CustomButtonProps {
  text: string;
  hierarchy: "primary" | "secondary";
  href?: string;
  onClick?: () => void;
  testId?: string;
  disabled?: boolean;
}

/**
 * @param {CustomButtonProps} Props href가 있으면 onClick을 사용하지 않습니다. onClick이 있으면 href를 사용하지 않습니다.
 * @returns {HTMLAnchorElement | HTMLButtonElement}
 * <CustomButton text={buttonText} hierarchy="primary" onClick={() => {}} />
 * <CustomButton text={buttonText} hierarchy="secondary" href="/" />
 * @see https://www.builder.io/blog/buttons
 * @todo 1. href와 onClick이 호출할 때 상호배타적이도록 타입을 지정합니다.
 */

function CustomButton({
  text,
  href,
  hierarchy,
  onClick,
  testId,
  disabled,
}: CustomButtonProps) {
  let styling = "";
  switch (hierarchy) {
    case "primary":
      styling = !disabled
        ? "w-40 rounded bg-green-500 px-4 py-2 text-white flex justify-center hover:bg-green-400 active:bg-green-600"
        : "pointer-events-none flex w-40 cursor-default justify-center rounded bg-gray-700 px-4 py-2 text-gray-400";

      break;
    case "secondary":
      styling = !disabled
        ? "box-border flex w-40 border-collapse justify-center self-center rounded border border-green-500 bg-white py-2 text-green-500 hover:bg-green-50 active:bg-green-100"
        : "pointer-events-none box-border flex w-40 border-collapse cursor-default justify-center self-center rounded border border-gray-700  bg-white py-2  text-gray-700";
      break;

    default:
      styling = "w-40 rounded bg-green-500 px-4 py-2 text-white";
      break;
  }

  if (href) {
    return (
      <a
        className={styling}
        href={href}
        {...(testId && { "data-testid": testId })}
      >
        {text}
      </a>
    );
  }

  return (
    <button
      className={styling}
      type="button"
      onClick={onClick}
      {...(testId && { "data-testid": testId })}
      {...(disabled && { disabled })}
    >
      {text}
    </button>
  );
}

export default CustomButton;
