import { v4 as uuidv4 } from "uuid";
const reducer = (state, action) => {
  switch (action.type) {
    case "DEALWITHITEMS":
      if (state.isEdit) {
        const modifiedItems = state.list.map((item) => {
          if (item.id === state.id) {
            return { ...item, itemCategory: state.inputValue };
          }
          return item;
        });
        return { ...state, list: modifiedItems, isEdit: false, inputValue: "" };
      } else {
        return {
          ...state,
          list: [
            ...state.list,
            { id: uuidv4(), itemCategory: state.inputValue },
          ],
          inputValue: "",
        };
      }

    case "CHANGEINPUTVALUE":
      return { ...state, inputValue: action.payload };
    case "CLEARITEMS":
      return { ...state, list: [] };
    case "DELETEITEM":
      const newItems = state.list.filter((item) => item.id !== action.payload);
      return { ...state, list: newItems };
    case "MODIFYINPUTVALUE":
      return {
        ...state,
        inputValue: action.payload.category,
        isEdit: true,
        id: action.payload.id,
      };
  }
  return state;
};
export default reducer;
