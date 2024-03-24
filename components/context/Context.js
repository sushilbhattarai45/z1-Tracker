import React, { useContext, useState, useEffect, createContext } from "react";
const AppContext = createContext();

import axios from "axios";
export const ContextProvider = ({ children }) => {
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};
export default AppContext;
