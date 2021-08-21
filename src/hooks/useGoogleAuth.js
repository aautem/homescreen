import { createContext, useContext } from 'react'

export const googleAuthContext = createContext()

export function useGoogleAuth() {
  return useContext(googleAuthContext)
}
