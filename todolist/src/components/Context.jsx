import React, { useContext, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import reducer from "../reducer";
const appcontext = React.createContext();
export const useGlobalcontext = () => {
  return useContext(appcontext);
};
export default function Context({ children }) {
  const initialState = {
    list: [],
    id: uuidv4(),
    inputValue: "",
    isEdit: false,
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const dealWithItems = (id) => {
    dispatch({ type: "DEALWITHITEMS", payload: id });
  };

  const changeInputvalue = (item) => {
    dispatch({ type: "CHANGEINPUTVALUE", payload: item });
  };
  const deleteItem = (id) => {
    dispatch({ type: "DELETEITEM", payload: id });
  };
  const clearItems = () => {
    dispatch({ type: "CLEARITEMS" });
  };
  const modifyInputValue = (category, id) => {
    dispatch({ type: "MODIFYINPUTVALUE", payload: { category, id } });
  };
  return (
    <appcontext.Provider
      value={{
        ...state,
        dealWithItems,
        changeInputvalue,
        deleteItem,
        clearItems,
        modifyInputValue,
      }}
    >
      {children}
    </appcontext.Provider>
  );
}
