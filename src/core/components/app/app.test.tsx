import { render } from "@testing-library/react";
import { App } from "./app";
import { Keyboard } from "../../../features/components/keyboard/keyboard";
import { Display } from "../../../features/components/display/display";
import { Actions } from "../../../features/components/actions/actions";

jest.mock("../../../features/keyboard/keyboard");
jest.mock("../../../features/display/display");
jest.mock("../../../features/actions/actions");

describe("Given App component", () => {
  describe("When it is render", () => {
    test("Then it should call Keyboard, Display & Actions", () => {
      render(<App />);
      expect(Keyboard).toHaveBeenCalled();
      expect(Display).toHaveBeenCalled();
      expect(Actions).toHaveBeenCalled();
    });
  });
});
