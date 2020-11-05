import React,{createContext, useContext, useReducer} from 'react'


// PREPARES/ CREATES THE DATA LAYER
export const StateContext = createContext();

// APP WRAPPER TO PROVIDE THE DATA LAYER
export const StateProvider = ({reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
)

// PULL INFORMATION FROM DATA LAYER
export const useStateValue = () => useContext(StateContext)
