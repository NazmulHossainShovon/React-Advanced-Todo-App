import { createContext, useState } from "react";

export const EditContext = createContext();

export const EditProvider = ({ children }) => {
  const [editIndex, setEditIndex] = useState("");

  const value = { editIndex, setEditIndex };

  return (
    <EditContext.Provider value={value}> {children} </EditContext.Provider>
  );
};
