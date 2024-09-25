import AnimateStyled from "..";
import { render } from "@testing-library/react";
import { test, expect } from "vitest";
import "@testing-library/jest-dom";

test("Component should show 'red' text 'Hello World'", () => {
  const { getByText } = render(
    <AnimateStyled name="backInDown" children={undefined} />
  );
  const textElement = getByText("Hello World");
  expect(textElement).toBeInTheDocument();
});
