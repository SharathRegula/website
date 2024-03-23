import {createContext, useContext} from 'react'

export const MenuContext=createContext({
  menuClass:"top-[-100%]",
  menuIcon:"menu",
  toggleMenu:()=>{}
})

export const MenuProvider=MenuContext.Provider

export default function useMenu(){
  return useContext(MenuContext)
}

