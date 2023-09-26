import React, { useState, createContext, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

const PlayerContext = createContext();

const PlayerContextProvider = ({ children }) => {
    const [islogin , setlogin] =useState('')
    const { user , getAccessTokenSilently,isAuthenticated } = useAuth0();

    async function callProtectedAPI (){
      try{
        const token = await getAccessTokenSilently()
        const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/protectedAPI`,user)
        console.log(response.data);
      }
      catch(err){
        console.log(err);
      }
      
    }


  return (
    <PlayerContext.Provider value={{callProtectedAPI,isAuthenticated}}>
      {children}
    </PlayerContext.Provider>
  );
};

export { PlayerContextProvider };
export default PlayerContext;
