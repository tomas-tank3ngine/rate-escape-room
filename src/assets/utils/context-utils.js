import { useState } from "react";
import React from "react";

export const Context = React.createContext();

//Access like this:
// const contextValue = useContext(Context)
// const {userInfo, setUserInfo} = contextValue


const Store = ({children}) => {
    const [userInfo, setUserInfo] = useState(null)
    const [userFavorites, setUserFavorites] = useState([])

    const contextValue = {
        userInfoContext: [userInfo, setUserInfo],
        userFavoritesContext: [userFavorites, setUserFavorites]
    }

    return(
        <Context.Provider value={contextValue} >{children}</Context.Provider>
    )
}

export default Store;