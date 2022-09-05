import React ,{Children, createContext} from "react";

export const myContext = createContext();
export const Appcontext = ({chlidren}) => {
    return <myContext.Provider>{Children}</myContext.Provider>
};