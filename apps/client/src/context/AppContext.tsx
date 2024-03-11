import React, { createContext, useReducer } from "react";

// Define the initial state
const initialState = {
  pagination: 10,
  page: 1,
  videoCount: 1,
};

// Define the reducer function
const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "SET_PAGE":
      return { ...state, page: action.payload };
    case "SET_PAGINATION":
      return { ...state, pagination: action.payload };
    default:
      return state;
  }
};

// Create the context
const AppContext = createContext<any>(initialState);

// Create the context provider component
const AppProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <AppContext.Provider value={{ ...state, dispatch }}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };
