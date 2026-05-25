import { createContext, useContext } from 'react';

/** False while the initial full-screen loader is visible. */
export const AppReadyContext = createContext(true);

export function useAppReady() {
  return useContext(AppReadyContext);
}
