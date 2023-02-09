import { render } from "@testing-library/react";
import { App } from "./app";
import { Keyboard } from "../keyboard/keyboard";

jest.mock("../keyboard/keyboard");

describe("Given App component", () => {
  describe("When it is render", () => {
    test("Then it should call Keyboard", () => {
      render(<App />);
      expect(Keyboard).toHaveBeenCalled();
    });
  });
});