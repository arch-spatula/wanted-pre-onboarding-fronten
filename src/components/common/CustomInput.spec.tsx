import { render, screen } from "@testing-library/react";
import CustomInput from "./CustomInput";

describe("CustomInput", () => {
  it("feedback 비활성화하면 에러메시지를 대입해도 안 보입니다.", () => {
    const errorMessage = "에러 메시지";
    render(
      <CustomInput
        value="value"
        onChange={() => {}}
        errorMessage={errorMessage}
        feedback={false}
      />
    );
    const textElement = screen.queryByText(errorMessage);
    expect(textElement).toBeNull();
  });

  it("에러메시지가 존재하면 span은 보입니다.", () => {
    const errorMessage = "에러메시지가 존재합니다.";
    render(
      <CustomInput
        value="value"
        onChange={() => {}}
        errorMessage={errorMessage}
      />
    );
    const textElement = screen.getByText(errorMessage);
    expect(textElement).toBeInTheDocument();
  });

  it("비어있는 문자열을 대입하면 에러메시지는 보이지 않습니다.", () => {
    const errorMessage = "";
    render(
      <CustomInput
        value="value"
        onChange={() => {}}
        errorMessage={errorMessage}
      />
    );
    const textElement = screen.queryByRole("caption");
    expect(textElement).toBeNull();
  });
});
