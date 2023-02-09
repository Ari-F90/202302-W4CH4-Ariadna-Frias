import React from "react";
import { screen, render } from "@testing-library/react";
import { Display } from "./display";

describe("Given a Display component", () => {
  describe("When it is rendered", () => {
    test("then it should be a span in the document", () => {
      render(<Display />);
      const element = screen.getByText("Calling...");
      expect(element).toBeInTheDocument();
    });
  });
});
