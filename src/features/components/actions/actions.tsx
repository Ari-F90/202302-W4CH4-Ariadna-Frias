/* eslint-disable jsx-a11y/anchor-is-valid */
import { useContext } from "react";
import { PhoneContext } from "../../../core/context/phone.context";
export function Actions() {
  const { keyboard } = useContext(PhoneContext);

  return (
    <div className="actions">
      <span className="number">{keyboard}</span>
      <a href="#" className="call">
        Call
      </a>

      <a href="#" className="hang active">
        Hang
      </a>
    </div>
  );
}
