import { jsx as _jsx } from "react/jsx-runtime";
import AnimateStyled from "..";
import { render } from "@testing-library/react";
import { test, expect } from "vitest";
import "@testing-library/jest-dom";
test("Component should show 'red' text 'Hello World'", () => {
    const { getByText } = render(_jsx(AnimateStyled, { name: "backInDown", children: undefined }));
    const textElement = getByText("Hello World");
    expect(textElement).toBeInTheDocument();
});
test("Component should match snapshot", () => {
    const { container } = render(_jsx(AnimateStyled, { name: "backInDown", children: undefined }));
    expect(container).toMatchSnapshot();
});
//# sourceMappingURL=function.test.js.map