import { Keyboard } from "../../../features/components/keyboard/keyboard";
import { Display } from "../../../features/components/display/display";
import { Actions } from "../../../features/components/actions/actions";
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
