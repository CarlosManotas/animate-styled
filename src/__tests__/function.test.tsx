import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import React from "react";
import { describe, expect, test } from "vitest";
import { AnimateStyled } from "../index";

describe("AnimateStyled Component", () => {
  test("renders children correctly", () => {
    const { getByText } = render(
      <AnimateStyled name="backInDown">Test Animation</AnimateStyled>
    );
    const child = getByText("Test Animation");
    expect(child).toBeInTheDocument();
  });

  test("Component should show 'red' text 'Hello World'", () => {
    const { getByText } = render(
      <AnimateStyled name="backInDown" children={undefined} />
    );
    const textElement = getByText("Hello World");
    expect(textElement).toBeInTheDocument();
  });
});
