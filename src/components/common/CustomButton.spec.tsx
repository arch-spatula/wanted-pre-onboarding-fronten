import { render, screen } from "@testing-library/react";
import CustomButton from "./CustomButton";

describe("CustomButton", () => {
  it("부여한 속성의 값이 화면에 보여야 합니다.", () => {
    const buttonText = "회원가입";
    render(
      <CustomButton text={buttonText} hierarchy="primary" onClick={() => {}} />
    );
    const textElement = screen.getByText(buttonText);
    expect(textElement).toBeInTheDocument();
  });

  it("href 속성을 부여하지 않으면 button을 해야 합니다.", () => {
    render(
      <CustomButton text="회원가입" hierarchy="primary" onClick={() => {}} />
    );
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
  });

  it("href 속성을 부여하면 a태그 역할을 해야 합니다.", () => {
    render(<CustomButton text="회원가입" hierarchy="primary" href="/" />);
    const anchorElement = screen.getByRole("link");
    expect(anchorElement).toBeInTheDocument();
  });
});
