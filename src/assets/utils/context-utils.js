import { useState } from "react";
import React from "react";

export const Context = React.createContext();

const Store = ({children}) => {
    const [userInfo, setUserInfo] = useState(null)

    return(
        <Context.Provider value={[userInfo, setUserInfo]}>{children}</Context.Provider>
    )
}

export default Store;