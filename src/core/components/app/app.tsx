import { Keyboard } from "../../../features/keyboard/keyboard";
import { Display } from "../../../features/display/display";
import { Actions } from "../../../features/actions/actions";
export function App() {
  return (
    <div className="container">
      <Display></Display>
      <main className="phone">
        <Keyboard></Keyboard>
        <Actions></Actions>
      </main>
    </div>
  );
}
