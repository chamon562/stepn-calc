import { createContext, useState, useEffect } from "react";

// Can move state and anything else we want in here that we will provide through the 
// data provider
const DataContext = createContext({});
// children referes to the component that are within
// the data provider. and then the data will be available to the children
// of the data provider
// DEFINING DataProvider
export const DataProvider = ({ children }) => {
  return (
    <DataContext.Provider
      value={
        {
          // different values goes here
          // the props that were passed down through prop drilling can now be
          // passed through here DataContext.Provider and DataProvider function will
          // provide it to the different components as we request them through the
          // useContext hook
        }
      }
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
