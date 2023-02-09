import React from "react";
import { screen, render } from "@testing-library/react";
import { Keyboard } from "./keyboard";

describe("Given a Keyboard component", () => {
  describe("When it is rendered", () => {
    test("then it should be one ordered list in the document", () => {
      render(<Keyboard />);
      const element = screen.getByRole("listitem");
      expect(element).toBeInTheDocument();
    });
  });
});
