import { create } from 'zustand'

type Props = {
    logged: boolean
    setLogged: () => void
}

export const usePassedStore = create<Props>()((set) => ({
    logged: false,
    setLogged: () => set({ logged: true })
}))