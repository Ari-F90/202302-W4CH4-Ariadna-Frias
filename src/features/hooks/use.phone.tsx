import { useState } from "react";

export type UsePhoneStructure = ReturnType<typeof usePhone>;
export function usePhone() {
  const initialState: string = "";

  let [keyboard, setKeyboard] = useState(initialState);

  const handleClick = (number: string) => {
    setKeyboard(keyboard + number);
  };
  const deleteClick = () => {
    setKeyboard((keyboard = ""));
  };
  return { keyboard, handleClick, deleteClick };
}
