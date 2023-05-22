// @ts-ignore
import React from "react";

import Button from "./Button";
import { fireEvent, render, screen } from "@testing-library/react";
describe.skip("Button component", () => {
  test("It should have the expected displayName", () => {
    const EXPECTED_DISPLAY_NAME = "Button";

    const { displayName } = Button;

    expect(displayName).toBe(EXPECTED_DISPLAY_NAME);
  });
  test("It should render the passed message correctly", () => {
    const EXPECTED_MESSAGE = "Test message";

    render(
      <Button
        onClick={() => {}}
        message={EXPECTED_MESSAGE}
        type="primary"
        isActive
      />
    );
    const buttonText = screen.getByText(EXPECTED_MESSAGE).textContent;
    expect(buttonText).toBe(EXPECTED_MESSAGE);
  });

  test("It should render the correct color of button for primary type", () => {
    const EXPECTED_COLOR_500 = "blue-500";
    const EXPECTED_COLOR_700 = "blue-700";

    render(<Button onClick={() => {}} message={""} type="primary" isActive />);
    const button = screen.getByRole("button");

    const buttonClass = button?.classList?.value;

    expect(buttonClass?.includes(EXPECTED_COLOR_500)).toBe(true);
    expect(buttonClass?.includes(EXPECTED_COLOR_700)).toBe(true);
  });

  test("It should render the correct color of button for secondary type", () => {
    const EXPECTED_COLOR_500 = "green-500";
    const EXPECTED_COLOR_700 = "green-700";

    render(
      <Button onClick={() => {}} message={""} type="secondary" isActive />
    );
    const button = screen.getByRole("button");
    const buttonClass = button?.classList?.value;

    expect(buttonClass?.includes(EXPECTED_COLOR_500)).toBe(true);
    expect(buttonClass?.includes(EXPECTED_COLOR_700)).toBe(true);
  });

  test("If active, it should call the passed function when clicked", () => {
    const mockFunction = jest.fn();

    render(
      <Button onClick={mockFunction} message={""} type="primary" isActive />
    );

    const renderedButton = screen.getByRole("button");
    fireEvent.click(renderedButton);
    expect(mockFunction).toHaveBeenCalledTimes(1);
  });

  test("If disabled, it should NOT call the passed function when clicked", () => {
    const mockFunction = jest.fn();

    render(
      <Button
        onClick={mockFunction}
        message={""}
        type="primary"
        isActive={false}
      />
    );

    const renderedButton = screen.getByRole("button");

    fireEvent.click(renderedButton);
    expect(mockFunction).toHaveBeenCalledTimes(0);
  });
});
